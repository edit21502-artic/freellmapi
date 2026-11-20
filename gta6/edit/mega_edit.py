import math, random, subprocess, sys
import numpy as np, soundfile as sf
from PIL import Image, ImageDraw, ImageFont, ImageFilter

SRC = "src.mp4"; END = 27.45
W, H, FPS = 1080, 1920, 30
SW = SH = 576
DROP = 16.38
FB = "/usr/share/fonts/opentype/inter/Inter-ExtraBold.otf"
F = lambda s: ImageFont.truetype(FB, s)

# ---- onsets with strength
a, sr = sf.read("a.wav"); hop = 512
fr = np.lib.stride_tricks.sliding_window_view(a, 1024)[::hop]
S = np.abs(np.fft.rfft(fr * np.hanning(1024), axis=1))
flux = np.maximum(0, np.diff(np.log1p(S), axis=0)).sum(1)
flux = (flux - flux.mean()) / flux.std()
ft = np.arange(len(flux)) * hop / sr
ONS = [(ft[i], flux[i]) for i in range(3, len(flux) - 3) if flux[i] > 1.5 and flux[i] == flux[i - 3:i + 4].max() and ft[i] < END]
STRONG = [t for t, v in ONS if v > 3.0]

def pulse(t, decay=7.0):
    p = 0.0
    for ot, v in ONS:
        if 0 <= t - ot < 0.6:
            p = max(p, min(v / 6, 1) * math.exp(-(t - ot) * decay))
    return p

def ease(x):
    x = min(max(x, 0), 1); return 1 - (1 - x) ** 3

R = random.Random(1)
PARTS = [(R.random() * W, R.random(), R.uniform(0.5, 1.5), R.uniform(2, 6)) for _ in range(90)]

def text_glow(img, xy, s, f, col, glow, anchor="mm", stroke=8):
    lay = Image.new("RGBA", img.size, (0, 0, 0, 0)); d = ImageDraw.Draw(lay)
    d.text(xy, s, font=f, fill=glow, anchor=anchor, stroke_width=stroke + 10, stroke_fill=glow)
    img.alpha_composite(lay.filter(ImageFilter.GaussianBlur(18)))
    d2 = ImageDraw.Draw(img)
    d2.text(xy, s, font=f, fill=col, anchor=anchor, stroke_width=stroke, stroke_fill=(10, 10, 20))

YY, XX = np.mgrid[0:H, 0:W]
VIG = (1 - 0.55 * (((XX - W / 2) / (W / 1.05)) ** 2 + ((YY - H / 2) / (H / 1.05)) ** 2))[..., None].astype(np.float32)

def frame(src, t, i):
    p = pulse(t) if t < DROP else pulse(t, 9.0)
    dropk = max(0.0, 1 - (t - DROP) / 0.5) if t >= DROP else 0.0
    # --- background: blurred, saturated, darker
    sm = Image.fromarray(src).resize((40, 40), Image.BILINEAR).resize((H, H), Image.BICUBIC)
    off = (H - W) // 2
    bg = np.asarray(sm, np.float32)[:, off:off + W] * 0.45
    # --- foreground zoom
    z = 1.0 + 0.10 * p + 0.25 * dropk + (0.04 * math.sin(t * 0.8) if t > DROP else 0.02 * t / DROP)
    fs = int(W * 1.0 * z)
    fg = Image.fromarray(src).resize((fs, fs), Image.BICUBIC)
    sx = int(R.uniform(-1, 1) * (18 * p + 45 * dropk)); sy = int(R.uniform(-1, 1) * (18 * p + 45 * dropk))
    canvas = Image.fromarray(np.clip(bg, 0, 255).astype(np.uint8)).convert("RGBA")
    # neon frame behind fg
    fx, fy = (W - W) // 2, (H - W) // 2
    col = (0, 220, 255) if t < DROP else ((255, 200, 40) if int(t / 0.395) % 2 else (255, 60, 200))
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).rectangle([fx - 10, fy - 10, fx + W + 10, fy + W + 10], fill=int(160 + 95 * p))
    canvas.paste(col + (255,), (0, 0), glow.filter(ImageFilter.GaussianBlur(30)))
    crop = fg.crop(((fs - W) // 2 - sx, (fs - W) // 2 - sy, (fs - W) // 2 - sx + W, (fs - W) // 2 - sy + W))
    canvas.paste(crop, (fx, fy))
    # letterbox open at start
    d = ImageDraw.Draw(canvas)
    # particles (aura) — stronger after drop
    if t > 6:
        k = 0.4 if t < DROP else 1.0
        for x, ph, sp, r in PARTS:
            y = H - ((ph + t * 0.25 * sp) % 1) * H
            a_ = int(200 * k * (0.5 + 0.5 * math.sin(t * 5 + x)))
            d.ellipse([x - r, y - r, x + r, y + r], fill=col + (a_,))
    # --- titles
    if t < 3.0:
        a_ = ease(t / 0.5) * (1 - ease((t - 2.5) / 0.5))
        text_glow(canvas, (W / 2, 250), "FUSION", F(150), (255, 255, 255, int(255 * a_)), (0, 200, 255, int(255 * a_)))
        text_glow(canvas, (W / 2, 1700), "THE ULTIMATE WARRIOR", F(56), (255, 255, 255, int(255 * a_)), (0, 150, 255, int(200 * a_)), stroke=5)
    if t >= DROP:
        k = t - DROP
        sc = 1 + 1.2 * (1 - ease(k / 0.25))
        text_glow(canvas, (W / 2, 250), "VEGITO", F(int(170 * sc)), (255, 255, 255), col + (255,))
        if k > 0.3:
            text_glow(canvas, (W / 2, 1690), "THE STRONGEST FUSION", F(60), (255, 230, 90), (255, 120, 0, 220), stroke=5)
    elif 3.0 <= t < DROP:
        words = [(6.3, "EARRINGS"), (8.1, "ON"), (9.8, "POWER"), (12.45, "RISING..."), (15.25, "...")]
        cur = [w for s, w in words if t >= s]
        if cur:
            s0 = [s for s, w in words if w == cur[-1]][0]
            a_ = ease((t - s0) / 0.2)
            text_glow(canvas, (W / 2, 260), cur[-1], F(int(120 * (1 + 0.3 * (1 - a_)))), (255, 255, 255, int(255 * a_)), (0, 200, 255, int(255 * a_)))
    # credit
    d = ImageDraw.Draw(canvas)
    d.text((W / 2, 1840), "original edit: @emanu.kkj", font=F(30), fill=(255, 255, 255, 170), anchor="mm")
    arr = np.asarray(canvas.convert("RGB")).astype(np.float32)
    # grade: contrast + saturation
    m = arr.mean(2, keepdims=True)
    arr = m + (arr - m) * 1.25
    arr = (arr - 128) * 1.08 + 128
    arr *= VIG
    # chromatic aberration on hits
    ca = int(14 * p + 30 * dropk)
    if ca:
        arr[:, :, 0] = np.roll(arr[:, :, 0], ca, 1); arr[:, :, 2] = np.roll(arr[:, :, 2], -ca, 1)
    # flash
    fl = 0.35 * p ** 2 + 0.9 * dropk ** 2
    if t >= DROP and fl > 0:
        tint = np.array(col, np.float32)
        arr = arr * (1 - fl) + (255 * 0.6 + tint * 0.4) * fl
    else:
        arr = arr * (1 - fl) + 255 * fl
    # fade in/out
    fade = min(1, t / 0.4, (END - t) / 0.5)
    arr *= max(fade, 0)
    return np.clip(arr, 0, 255).astype(np.uint8)

def main(prev=None):
    dec = subprocess.Popen(["ffmpeg", "-v", "error", "-i", SRC, "-t", str(END), "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
    enc = None
    if not prev:
        enc = subprocess.Popen(["ffmpeg", "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                                "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", "v.mp4"], stdin=subprocess.PIPE)
    i = 0
    while True:
        buf = dec.stdout.read(SW * SH * 3)
        if len(buf) < SW * SH * 3: break
        t = i / FPS
        if prev is None or any(abs(t - x) < 0.017 for x in prev):
            out = frame(np.frombuffer(buf, np.uint8).reshape(SH, SW, 3), t, i)
            if prev: Image.fromarray(out).resize((360, 640)).save(f"prev_{t:.2f}.png")
            else: enc.stdin.write(out.tobytes())
        i += 1
    if enc: enc.stdin.close(); enc.wait()

if __name__ == "__main__":
    main([float(x) for x in sys.argv[1:]] or None)
