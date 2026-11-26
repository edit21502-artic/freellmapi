#!/usr/bin/env python3
"""Human-like narration with Gemini TTS, cut into one WAV per line.

    python3 voice.py lines.json OUT_DIR [--model gemini-3.8-flash-lite-tts]

lines.json: [{"speaker": "Eli", "text": "...", "style": "quiet, tense storyteller"}, ...]
Voices are set in VOICES below (speaker -> Gemini voice). The key is read from the
GEMINI_API_KEY environment variable or ~/.config/watch/.env and sent only as a header.

Free tier: about 10 requests per day, 3 per minute. Lines are grouped into chunks of
~160 words (one request each), then each chunk is split per line with faster-whisper
word timestamps. Output: OUT_DIR/000.wav, 001.wav, ... and OUT_DIR/chunks/*.wav (cache).
"""
import argparse, base64, difflib, json, os, re, sys, time, urllib.error, urllib.request
import numpy as np, soundfile as sf

VOICES = {"Eli": "Puck", "Lena": "Leda", "Okafor": "Charon", "Park": "Kore", "Principal": "Orus",
          "Grandpa": "Charon", "Mom": "Kore", "Dad": "Orus", "Maple": "Aoede"}
DEFAULT_STYLE = "quiet, tense young storyteller narrating a scary story, natural pauses"
API = "https://generativelanguage.googleapis.com/v1beta/interactions"


def key():
    k = os.environ.get("GEMINI_API_KEY", "").strip()
    if k: return k
    p = os.path.expanduser("~/.config/watch/.env")
    if os.path.exists(p):
        for line in open(p):
            if line.startswith("GEMINI_API_KEY="): return line.split("=", 1)[1].strip().strip('"')
    sys.exit("No GEMINI_API_KEY. Ask the user for a key from https://aistudio.google.com/apikey")


def call(payload):
    req = urllib.request.Request(API, data=json.dumps(payload).encode(), method="POST",
                                 headers={"x-goog-api-key": key(), "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=600) as r: return 200, json.loads(r.read())
    except urllib.error.HTTPError as e: return e.code, e.read().decode()[:400]


def tts_chunk(lines, model, path):
    spk = sorted({l["speaker"] for l in lines})
    if len(spk) < 2: spk.append("Extra")  # the API needs 2-10 speakers when styles are used
    cfg = [{"speaker": s, "voice": VOICES.get(s, "Zephyr")} for s in spk]
    inp = [{"type": "text", "text": l["text"], "annotations": [{"type": "speech_metadata", "speaker": l["speaker"],
            "style": l.get("style") or DEFAULT_STYLE}]} for l in lines]
    p = {"model": model, "input": inp, "generation_config": {"speech_config": cfg}}
    for _ in range(6):
        code, d = call(p)
        if code == 200:
            for st in d.get("steps", []):
                for part in st.get("content", []) or []:
                    if part.get("type") == "audio":
                        open(path, "wb").write(base64.b64decode(part["data"])); return
            sys.exit("Gemini returned no audio")
        if code == 429 and "per day" in str(d): sys.exit("DAILY LIMIT reached: " + str(d)[:200])
        print("retry", code, str(d)[:160], flush=True)
        m = re.search(r"retry in (\d+)s", str(d)); time.sleep(int(m.group(1)) + 3 if m else 30)
    sys.exit("Gemini kept failing")


def norm(w): return re.sub(r"[^a-z0-9]", "", w.lower())
def toks(t): return [x for x in (norm(w) for w in re.split(r"[\s\-—]+", t)) if x]


def split_chunk(path, lines, first, out, model_w):
    a, sr = sf.read(path, dtype="float32")
    a16 = np.interp(np.arange(0, len(a), sr / 16000), np.arange(len(a)), a).astype(np.float32)
    segs, _ = model_w.transcribe(a16, word_timestamps=True, language="en")
    hw = [(t, w.start, w.end) for s in segs for w in s.words for t in toks(w.word)]
    exp, own = [], []
    for k, l in enumerate(lines):
        for t in toks(l["text"]): exp.append(t); own.append(k)
    sm = difflib.SequenceMatcher(None, exp, [h[0] for h in hw], autojunk=False)
    mp = {b.a + j: b.b + j for b in sm.get_matching_blocks() for j in range(b.size)}
    span = []
    for k in range(len(lines)):
        idx = [mp[e] for e in range(len(exp)) if own[e] == k and e in mp]
        span.append((hw[min(idx)][1], hw[max(idx)][2]) if idx else None)
    for k in range(len(span)):
        if span[k] is None:
            p = span[k - 1][1] if k and span[k - 1] else 0
            n = next((x[0] for x in span[k + 1:] if x), len(a) / sr); span[k] = (p + .05, n - .05)
    cuts = [0] + [(span[k][1] + span[k + 1][0]) / 2 for k in range(len(lines) - 1)] + [len(a) / sr]
    for k in range(len(lines)):
        s0 = max(cuts[k], span[k][0] - .12); s1 = min(cuts[k + 1], span[k][1] + .25)
        sf.write(os.path.join(out, f"{first + k:03d}.wav"), a[int(s0 * sr):int(s1 * sr)], sr)
    return round(len(mp) / max(1, len(exp)), 2)


def main():
    ap = argparse.ArgumentParser(); ap.add_argument("lines"); ap.add_argument("out")
    ap.add_argument("--model", default="gemini-3.8-flash-lite-tts"); ap.add_argument("--words", type=int, default=160)
    a = ap.parse_args()
    L = json.load(open(a.lines)); cdir = os.path.join(a.out, "chunks"); os.makedirs(cdir, exist_ok=True)
    chunks, cur, w = [], [], 0
    for i, l in enumerate(L):
        n = len(l["text"].split())
        if cur and (w + n > a.words or len(cur) >= 13): chunks.append(cur); cur, w = [], 0
        cur.append(i); w += n
    chunks.append(cur)
    print(f"{len(L)} lines -> {len(chunks)} requests", flush=True)
    for ci, ids in enumerate(chunks):
        p = os.path.join(cdir, f"c{ci:02d}.wav")
        if not os.path.exists(p):
            t0 = time.time(); tts_chunk([L[i] for i in ids], a.model, p); print("chunk", ci, "ok", flush=True)
            time.sleep(max(0, 21 - (time.time() - t0)))
    os.environ.setdefault("HF_HUB_DISABLE_XET", "1")
    from faster_whisper import WhisperModel
    m = WhisperModel("base.en", device="cpu", compute_type="int8")
    for ci, ids in enumerate(chunks):
        print("align", ci, split_chunk(os.path.join(cdir, f"c{ci:02d}.wav"), [L[i] for i in ids], ids[0], a.out, m), flush=True)
    print("DONE", flush=True)


if __name__ == "__main__":
    main()
