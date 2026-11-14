import json, sys, os, re
import numpy as np, soundfile as sf
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from shots import S
from kokoro_onnx import Kokoro

SR = 24000
GAP = float(os.environ.get('GAP', '0.45'))
SPEED = float(os.environ.get('SPEED', '0.9'))
KD = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'kokoro')
VOICE = dict(ELI=('am_michael', .97), HERO=('am_michael', 1.06), BEN=('am_liam', 1.05), BOSS=('am_onyx', .8), LEO=('am_puck', 1.05), FRANK=('am_fenrir', 1.05), PA=('am_eric', .95))
rng = np.random.default_rng(7)
RADIO_ON = False

def bandpass(x, lo, hi):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X[(f < lo) | (f > hi)] = 0
    return np.fft.irfft(X, len(x)).astype(np.float32)
def T(d): return np.arange(int(SR * d)) / SR
def noise(d): return rng.standard_normal(int(SR * d)).astype(np.float32)
def env(d, a=.01, r=.2):
    t = T(d); e = np.minimum(1, t / a) * np.minimum(1, (d - t) / r); return np.clip(e, 0, 1)
def place(buf, x, at, g=1.0):
    i = int(at * SR); j = min(len(buf), i + len(x))
    if j > i: buf[i:j] += x[:j - i] * g

def sfx(name):
    if name == 'thunder':
        d = 3.2; n = bandpass(noise(d), 20, 400) * 6
        t = T(d); e = np.exp(-t * 1.3) * (1 + .6 * np.sin(2 * np.pi * 3 * t) * np.exp(-t))
        crack = bandpass(noise(d), 800, 5000) * np.exp(-t * 14) * 1.5
        return (n * e + crack) * .5
    if name == 'ring':
        d = 1.5; t = T(d); tone = np.sin(2 * np.pi * np.where((t * 20).astype(int) % 2 == 0, 1050, 1320) * t)
        gate = ((t % .75) < .5); return tone * gate * .22
    if name == 'knock':
        out = np.zeros(int(SR * 1.3), np.float32)
        for k in range(3):
            t = T(.2); place(out, (np.sin(2 * np.pi * 130 * t) + .5 * bandpass(noise(.2), 200, 1500)) * np.exp(-t * 30), .1 + k * .32, .9)
        return out
    if name == 'scream':
        d = 1.0; t = T(d); f = 750 + 350 * t / d + 40 * np.sin(2 * np.pi * 9 * t)
        ph = np.cumsum(2 * np.pi * f / SR); x = np.sign(np.sin(ph)) * .4 + np.sin(ph) * .6
        return bandpass(x * env(d, .03, .4), 500, 4000) * .16
    if name == 'horn':
        d = .9; t = T(d); x = np.sign(np.sin(2 * np.pi * 350 * t)) + np.sign(np.sin(2 * np.pi * 440 * t))
        return bandpass(x * env(d, .01, .1), 200, 3000) * .14
    if name in ('engine', 'enginestart'):
        d = 3.0; t = T(d); f = 55 + (25 * np.minimum(1, t / 1.2))
        x = np.sign(np.sin(np.cumsum(2 * np.pi * f / SR))) * .5 + bandpass(noise(d), 40, 300) * 2
        x = bandpass(x, 30, 500) * (1 + .3 * np.sin(2 * np.pi * 13 * t))
        if name == 'enginestart':
            g = np.where(t < 1.2, ((t * 7).astype(int) % 2) * .7, 1.0); x = x * g
        return x * env(d, .05, .8) * .35
    if name == 'static':
        d = 1.6; return bandpass(noise(d), 1500, 7000) * env(d, .02, .3) * .12
    if name == 'glass':
        d = .8; t = T(d); x = bandpass(noise(d), 3000, 9000) * np.exp(-t * 9)
        for f in (4200, 5300, 6900): x = x + np.sin(2 * np.pi * f * t) * np.exp(-t * 12) * .3
        return x * .3
    if name == 'moans':
        d = 3.0; t = T(d); x = np.zeros_like(t)
        for f, ph in ((95, 0), (118, 1.3), (140, 2.1), (82, .7)):
            ff = f * (1 + .06 * np.sin(2 * np.pi * .7 * t + ph)); p = np.cumsum(2 * np.pi * ff / SR)
            x += (np.sin(p) + .5 * np.sin(2 * p) + .3 * np.sin(3 * p)) * (.6 + .4 * np.sin(2 * np.pi * .4 * t + ph))
        return bandpass(x, 60, 900) * env(d, .5, 1.0) * .07
    if name == 'alarm':
        d = 2.6; t = T(d); x = np.sin(2 * np.pi * 2100 * t) * ((t * 24).astype(int) % 2) * ((t % .5) < .38)
        return x * np.linspace(1, .25, len(t)) * .16
    if name == 'bell':
        d = 2.6; t = T(d); x = (np.sin(2 * np.pi * 1500 * t) + .6 * np.sin(2 * np.pi * 2130 * t)) * (.6 + .4 * np.sign(np.sin(2 * np.pi * 26 * t)))
        return x * env(d, .01, .5) * .13
    if name == 'boathorn':
        d = 2.2; t = T(d); x = np.sign(np.sin(2 * np.pi * 110 * t)) + np.sin(2 * np.pi * 165 * t)
        return bandpass(x, 60, 900) * env(d, .15, .5) * .28
    if name == 'buzz':
        d = 1.2; t = T(d); f = 120 * (1 - .6 * t / d); x = np.sign(np.sin(np.cumsum(2 * np.pi * f / SR)))
        return bandpass(x, 60, 2500) * env(d, .01, .6) * .18
    if name == 'beep':
        d = 1.4; t = T(d); return np.sin(2 * np.pi * 480 * t) * ((t % .45) < .25) * .18
    if name == 'slam':
        d = .4; t = T(d); return (np.sin(2 * np.pi * 70 * t) * 1.5 + bandpass(noise(d), 100, 1200)) * np.exp(-t * 16) * .6
    if name == 'steps':
        out = np.zeros(int(SR * 2.0), np.float32)
        for k in range(9):
            t = T(.12); place(out, (np.sin(2 * np.pi * 90 * t) + bandpass(noise(.12), 300, 2000) * .6) * np.exp(-t * 40), k * .2, .5)
        return out
    if name == 'rattle':
        out = np.zeros(int(SR * 1.4), np.float32)
        for k in range(9):
            t = T(.06); place(out, (np.sin(2 * np.pi * 1800 * t) + bandpass(noise(.06), 1000, 6000)) * np.exp(-t * 60), .05 + k * .13 + rng.random() * .03, .3)
        return out
    if name in ('crash', 'pots'):
        d = 1.4; out = np.zeros(int(SR * d), np.float32)
        for k in range(5 if name == 'pots' else 3):
            t = T(.6); f = rng.uniform(500, 1700)
            x = (np.sin(2 * np.pi * f * t) + .6 * np.sin(2 * np.pi * f * 2.76 * t) + bandpass(noise(.6), 800, 6000) * .5) * np.exp(-t * 9)
            place(out, x, k * .16 + rng.random() * .08, .3)
        return out
    if name == 'cry':
        out = np.zeros(int(SR * 2.2), np.float32)
        for k in range(4):
            d = .28; t = T(d); f = 520 - 140 * t / d + 15 * np.sin(2 * np.pi * 8 * t)
            place(out, np.sin(np.cumsum(2 * np.pi * f / SR)) * env(d, .03, .15), .1 + k * .5, .1)
        return out
    if name == 'drip':
        out = np.zeros(int(SR * 2.0), np.float32)
        for k in range(3):
            d = .12; t = T(d); f = 1400 - 600 * t / d
            x = np.sin(np.cumsum(2 * np.pi * f / SR)) * np.exp(-t * 30)
            place(out, x, .2 + k * .65, .25); place(out, x, .2 + k * .65 + .18, .08)
        return out
    if name == 'gate':
        d = 1.8; t = T(d); f = 600 + 300 * np.sin(2 * np.pi * 1.2 * t)
        x = np.sin(np.cumsum(2 * np.pi * f / SR)) * .3 + bandpass(noise(d), 60, 500) * 2
        return x * env(d, .1, .5) * .14
    if name == 'growl':
        d = 1.1; t = T(d); f = 75 + 45 * np.sin(2 * np.pi * 1.3 * t) + 12 * np.sin(2 * np.pi * 31 * t)
        p = np.cumsum(2 * np.pi * f / SR); x = np.sign(np.sin(p)) * .5 + np.sin(2 * p) * .4 + bandpass(noise(d), 200, 1800) * 1.2
        return bandpass(x, 60, 2200) * env(d, .05, .35) * (1 + .5 * np.sin(2 * np.pi * 23 * t)) * .22
    if name == 'ding':
        d = 1.0; t = T(d); return (np.sin(2 * np.pi * 1320 * t) * np.exp(-t * 5) + np.sin(2 * np.pi * 990 * np.maximum(0, t - .28)) * np.exp(-np.maximum(0, t - .28) * 5) * (t > .28)) * .2
    if name == 'whoosh':
        d = 1.3; t = T(d); n = noise(d); out = np.zeros_like(n)
        for k in range(8):
            a0 = int(len(n) * k / 8); b0 = int(len(n) * (k + 1) / 8); lo = 300 + 500 * (7 - k); out[a0:b0] = bandpass(n, lo, lo * 3)[a0:b0]
        return out * env(d, .5, .15) * (1 + .6 * np.sin(2 * np.pi * 17 * t)) * .22
    if name == 'spray':
        d = 1.5; return bandpass(noise(d), 2500, 9000) * env(d, .03, .5) * .2
    if name == 'cough':
        out = np.zeros(int(SR * .9), np.float32)
        for k in range(2):
            t = T(.22); place(out, bandpass(noise(.22), 250, 2500) * np.exp(-t * 14), .05 + k * .33, .5)
        return out
    raise KeyError(name)

def voice_fx(sp, a):
    if sp == 'DAD': return bandpass(a, 350, 3200) * 1.6
    if sp in ('RADIO', 'PA') or (sp == 'FRANK' and RADIO_ON):
        x = bandpass(a, 400, 2800) * 2.0; x = np.tanh(x * 3) / 2.2
        return x + bandpass(noise(len(x) / SR + .001)[:len(x)], 1000, 5000) * .012
    if sp == 'ANCHOR': return bandpass(a, 200, 4500) * 1.3
    return a

def trim(a, th=0.01):
    idx = np.where(np.abs(a) > th)[0]
    if len(idx) == 0: return a
    return a[max(0, idx[0] - 600): min(len(a), idx[-1] + 2400)]

def main():
    out = sys.argv[1]
    k = Kokoro(os.path.join(KD, 'kokoro-v1.0.onnx'), os.path.join(KD, 'voices-v1.0.bin'))
    cache = os.path.join(out, 'vo'); os.makedirs(cache, exist_ok=True)
    tl = []; t = 0.1; clips = []
    for i, sh in enumerate(S):
        v, spd = VOICE[sh['sp']]
        fn = os.path.join(cache, f"{i:03d}_{v}_{spd}_{abs(hash(sh['text'])) % 99999}.wav")
        fn = os.path.join(cache, f"{i:03d}_{v}_{spd}_{len(sh['text'])}.wav")
        if os.path.exists(fn): a, _ = sf.read(fn, dtype='float32')
        else:
            a, sr = k.create(sh['text'], voice=v, speed=spd, lang='en-us'); a = trim(a.astype(np.float32)); sf.write(fn, a, SR)
        global RADIO_ON; RADIO_ON = 'radio' in ' '.join(sh['o'].get('a', [])) and sh['bg'] == 'stairs' and sh['sp'] == 'FRANK'
        a = voice_fx(sh['sp'], a)
        pre = sh['o'].get('pre', 0.2); vd = len(a) / SR; dur = pre + vd + sh['o'].get('gap', GAP)
        words = sh['text'].split(); tot = sum(len(w) + 2 for w in words); c = pre; W = []
        for w in words:
            d = vd * (len(w) + 2) / tot; W.append([w, round(c, 3), round(c + d, 3)]); c += d
        tl.append(dict(i=i, start=round(t, 3), dur=round(dur, 3), day=sh['day'], sp=sh['sp'], bg=sh['bg'], pal=sh['pal'], o=sh['o'], words=W))
        clips.append((a, t + pre, 1.0))
        for j, name in enumerate(sh['o'].get('sfx', [])):
            clips.append((sfx(name).astype(np.float32), t + .05 + j * .5, 1.0))
        if sh['o'].get('rain'):
            d = dur; clips.append((bandpass(noise(d), 400, 6000) * env(d, .3, .3) * .035, t, 1.0))
        if sh['bg'] == 'road' and not sh['o'].get('still') and 'engine' not in sh['o'].get('sfx', []):
            d = dur; tt = T(d); x = bandpass(np.sign(np.sin(2 * np.pi * 78 * tt)) * .5 + noise(d) * 2, 30, 400) * env(d, .3, .3) * .1
            clips.append((x.astype(np.float32), t, 1.0))
        t += dur
    total = t + 1.2
    buf = np.zeros(int(total * SR), np.float32)
    for a, at, g in clips: place(buf, a, at, g)
    buf = np.tanh(buf * 1.5) / 1.1
    sf.write(os.path.join(out, 'audio.wav'), buf, SR)
    json.dump(dict(total=round(total, 3), shots=tl), open(os.path.join(out, 'timeline.json'), 'w'))
    print('shots', len(tl), 'total', round(total, 1), 's =', round(total / 60, 2), 'min', 'words', sum(len(s['text'].split()) for s in S))

main()
