---
name: gemini-voice
description: Voice a video script with a natural, human-like Gemini TTS voice (different voices per character, styles like whisper or scared) and get one WAV per line, aligned to the words. Use whenever a video, story or narration needs a voice-over and the user wants a "real human" voice instead of Kokoro.
---

# gemini-voice

Turns a list of script lines into one WAV file per line, using Gemini TTS.

## Setup (once per container)

1. A Gemini API key must exist: `GEMINI_API_KEY` env var, or a `GEMINI_API_KEY=` line in
   `~/.config/watch/.env` (create the file with mode 600). If neither exists, ask the user for a
   free key from https://aistudio.google.com/apikey. Never print the key or put it in a shell command;
   write it to the file with a file-editing tool. Never commit it.
2. `pip install -q faster-whisper soundfile numpy` (whisper model downloads from Hugging Face;
   the script sets `HF_HUB_DISABLE_XET=1` so the normal CDN is used).

## Use

```bash
python3 .claude/skills/gemini-voice/scripts/voice.py lines.json OUT_DIR
```

`lines.json`: `[{"speaker": "Eli", "text": "...", "style": "scared whisper"}, ...]`
Voices per speaker are in `VOICES` at the top of `voice.py` (Eli = Puck, Lena = Leda,
Okafor = Charon, Park = Kore...). Add new characters there.

Output: `OUT_DIR/000.wav`, `001.wav`, … one per line, trimmed. Chunks are cached in
`OUT_DIR/chunks`, so rerunning does not spend requests again.

## Limits (free tier)

- About **10 requests per day** and 3 per minute. Lines are grouped ~160 words per request,
  so one 10-minute video takes ~9 requests: **one video per day**.
- On `DAILY LIMIT` stop and tell the user; fall back to Kokoro only if they agree.
- If Google answers 503 (overloaded), wait and retry later.

## Tips

- Keep each line ≤ 20 words so a scene stays 5–7 s.
- Put the emotion in `style`, not in the text: "scared whisper", "loud, urgent", "tired joke".
- For intercom/radio voices, apply a band-pass filter after generation.
