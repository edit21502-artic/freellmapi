"""Leonida map tour — fully code-drawn 9:16 short."""
import json, math, random, subprocess, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H, FPS = 1080, 1920, 30
MW, MH = 3000, 4200
PAD = 900
FB = "/usr/share/fonts/opentype/inter/Inter-ExtraBold.otf"
FM = "/usr/share/fonts/opentype/inter/Inter-SemiBold.otf"
F = lambda s, f=FB: ImageFont.truetype(f, s)
rng = np.random.default_rng(3)
R = random.Random(5)

MARKS = json.load(open("marks.json"))
DUR = MARKS[-1][2] + 1.4

# ---------------------------------------------------------------- map build
def noise(h, w, scale, octaves=5):
    out = np.zeros((h, w), np.float32); amp = 1.0; tot = 0
    for o in range(octaves):
        s = max(2, int(scale / (2 ** o)))
        g = rng.random((h // s + 2, w // s + 2)).astype(np.float32)
        im = Image.fromarray((g * 255).astype(np.uint8)).resize((w + s, h + s), Image.BICUBIC)
        out += np.asarray(im, np.float32)[:h, :w] / 255 * amp; tot += amp; amp *= 0.5
    return out / tot

LAND = [(0, 0), (3000, 0), (3000, 700), (2780, 900), (2640, 1250), (2560, 1700), (2540, 2200),
        (2480, 2600), (2420, 3000), (2300, 3250), (2120, 3420), (1900, 3460), (1720, 3330),
        (1560, 3050), (1420, 2700), (1260, 2350), (1120, 1950), (1000, 1600), (820, 1360),
        (560, 1260), (300, 1240), (0, 1300)]
KEYS = [(1700, 3560, 70), (1560, 3640, 60), (1420, 3700, 55), (1280, 3740, 50), (1140, 3770, 45), (1000, 3790, 40)]
LAKE = (1980, 2080, 230, 160)

def build_map():
    mask = Image.new("L", (MW, MH), 0); md = ImageDraw.Draw(mask)
    md.polygon(LAND, fill=255)
    for x, y, r in KEYS:
        md.ellipse([x - r * 1.6, y - r * 0.7, x + r * 1.6, y + r * 0.7], fill=255)
    lx, ly, lw, lh = LAKE; md.ellipse([lx - lw, ly - lh, lx + lw, ly + lh], fill=0)
    # rough coastline
    m = np.asarray(mask.filter(ImageFilter.GaussianBlur(28)), np.float32) / 255
    n = noise(MH, MW, 220, 4)
    land = (m + (n - 0.5) * 0.55) > 0.5
    landf = land.astype(np.float32)
    dist_in = np.asarray(Image.fromarray((landf * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(40)), np.float32) / 255
    # water
    yy = np.linspace(0, 1, MH)[:, None]
    deep = np.array([12, 40, 95]); shallow = np.array([40, 190, 210])
    wmix = np.clip(dist_in * 2.2, 0, 1)[..., None]
    wave = noise(MH, MW, 60, 3)[..., None]
    water = deep * (1 - wmix) + shallow * wmix + (wave - 0.5) * 18
    # land
    tn = noise(MH, MW, 300, 5)[..., None]
    grass = np.array([84, 150, 70]); dry = np.array([150, 160, 85]); forest = np.array([40, 95, 50])
    swamp = np.array([70, 100, 60])
    north = np.clip((1300 - np.arange(MH)) / 900, 0, 1)[:, None, None]
    lc = grass * (1 - tn) + dry * tn
    lc = lc * (1 - north) + forest * north
    # swamp zone (Grassrivers)
    gy, gx = np.ogrid[:MH, :MW]
    sw = np.exp(-(((gx - 1820) / 420) ** 2 + ((gy - 2780) / 380) ** 2))[..., None]
    swn = noise(MH, MW, 40, 3)[..., None]
    lc = lc * (1 - sw) + (swamp * (0.8 + 0.4 * swn)) * sw
    # beaches
    beach = np.clip((0.62 - dist_in) * 6, 0, 1)[..., None] * landf[..., None]
    lc = lc * (1 - beach) + np.array([235, 215, 160]) * beach
    # hill shading
    hs = noise(MH, MW, 120, 4)
    shade = (np.roll(hs, 3, 0) - hs)[..., None] * 160
    lc = lc + shade
    img = np.where(land[..., None], lc, water)
    # swamp water specks
    spk = (noise(MH, MW, 18, 2) > 0.62) & land & (sw[..., 0] > 0.35)
    img[spk] = img[spk] * 0.4 + np.array([60, 140, 150]) * 0.6
    im = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    d = ImageDraw.Draw(im)
    # forest trees north
    for _ in range(2600):
        x, y = R.randrange(200, 2900), R.randrange(60, 1150)
        if land[y, x]:
            r = R.randrange(9, 17); c = (R.randrange(25, 45), R.randrange(70, 105), R.randrange(35, 55))
            d.ellipse([x - r, y - r, x + r, y + r], fill=c)
    # Mount Kalaga
    for i, (x, y, s) in enumerate([(1500, 520, 230), (1680, 600, 170), (1340, 640, 150)]):
        d.polygon([(x - s, y + s * 0.6), (x, y - s * 0.7), (x + s, y + s * 0.6)], fill=(95, 110, 95))
        d.polygon([(x, y - s * 0.7), (x + s, y + s * 0.6), (x + s * 0.2, y + s * 0.6)], fill=(70, 85, 72))
        d.polygon([(x - s * 0.28, y - s * 0.3), (x, y - s * 0.7), (x + s * 0.28, y - s * 0.3)], fill=(240, 245, 250))
    # lake
    # roads
    roads = [[(2380, 2900), (2440, 2400), (2470, 1900), (2550, 1300), (2700, 800), (2900, 300)],
             [(2380, 2900), (2050, 2900), (1800, 2650), (1700, 2100), (1700, 1700)],
             [(1700, 1700), (1250, 1500), (900, 1350), (500, 1150)],
             [(1700, 1700), (1600, 1100), (1500, 820)],
             [(2120, 3400), (1900, 3500), (1700, 3560), (1420, 3700), (1000, 3790)],
             [(2380, 2900), (2250, 3200), (2120, 3400)]]
    for r in roads:
        d.line(r, fill=(40, 40, 45), width=26, joint="curve")
    for r in roads:
        d.line(r, fill=(225, 220, 205), width=14, joint="curve")
    # Vice City grid
    for _ in range(900):
        x, y = R.gauss(2300, 110), R.gauss(2880, 150)
        if land[int(min(max(y, 0), MH - 1)), int(min(max(x, 0), MW - 1))]:
            w, h = R.randrange(14, 40), R.randrange(14, 40)
            c = R.choice([(255, 170, 200), (120, 220, 215), (250, 235, 205), (255, 200, 150), (190, 170, 240)])
            d.rectangle([x + 6, y + 6, x + w + 6, y + h + 6], fill=(40, 50, 60))
            d.rectangle([x, y, x + w, y + h], fill=c, outline=(70, 60, 80))
    # Port Gellhorn docks + Ambrosia factories
    for i in range(14):
        d.rectangle([420 + i * 22, 1150, 432 + i * 22, 1215], fill=(120, 110, 100))
    for _ in range(26):
        x, y = R.gauss(500, 70), R.gauss(1100, 50)
        d.rectangle([x, y, x + 30, y + 22], fill=(R.choice([(200, 60, 50), (60, 110, 190), (230, 170, 40)])))
    for _ in range(70):
        x, y = R.gauss(1700, 90), R.gauss(1700, 80)
        d.rectangle([x, y, x + 50, y + 34], fill=(150, 150, 155), outline=(80, 80, 85))
    for x, y in [(1650, 1640), (1760, 1720), (1700, 1790)]:
        d.rectangle([x, y - 90, x + 18, y], fill=(110, 105, 100))
    # bridges for keys
    d.line([(c[0], c[1]) for c in KEYS], fill=(225, 220, 205), width=10)
    return im, land

# ---------------------------------------------------------------- regions
REG = {
    "vice": ("VICE CITY", "Beaches, nightlife & big money", (2330, 2900), (255, 60, 170)),
    "keys": ("LEONIDA KEYS", "Islands linked by long bridges", (1400, 3690), (40, 220, 230)),
    "grass": ("GRASSRIVERS", "Swamps & alligators", (1820, 2760), (120, 230, 90)),
    "port": ("PORT GELLHORN", "Rough port town, west coast", (520, 1150), (255, 150, 50)),
    "ambrosia": ("AMBROSIA", "Industrial heart of the state", (1720, 1720), (255, 210, 60)),
    "kalaga": ("MT. KALAGA N.P.", "Forests, trails & the wild north", (1500, 560), (150, 200, 255)),
}
ORDER = ["vice", "keys", "grass", "port", "ambrosia", "kalaga"]
START = {}
for k, a, b, _ in MARKS:
    START.setdefault(k, a)
SEG = [("intro", 0.0)] + [(k, START[k] - 0.35) for k in ORDER] + [("outro", START["outro"] - 0.2)]
CAPS = [(a, b, txt) for _, a, b, txt in MARKS]

FULL = (1500, 2100, 4200)  # cx, cy, view height
def view_for(k):
    if k == "outro":
        return (1500, 2050, 5600)
    if k == "intro":
        return FULL
    x, y = REG[k][2]
    return (x, y + 120, 1550)

def ease(t):
    t = min(max(t, 0), 1); return t * t * (3 - 2 * t)
def eob(t):
    t = min(max(t, 0), 1); c = 1.7; return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2

def seg_at(t):
    cur = 0
    for i, (k, s) in enumerate(SEG):
        if t >= s: cur = i
    return cur

def camera(t):
    i = seg_at(t); k, s = SEG[i]
    v1 = view_for(k)
    v0 = view_for(SEG[i - 1][0]) if i > 0 else (1500, 2000, 3600)
    fly = 1.1
    if i == 0:
        p = ease(t / 6.5); v0 = (1500, 2000, 4200); v1 = (2000, 2600, 3000)
        return tuple(a + (b - a) * p for a, b in zip(v0, v1))
    if i > 1 or k == "vice":
        if k == "vice": v0 = (2000, 2600, 3000)
    p = ease((t - s) / fly)
    # zoom out mid-flight for long hops
    cx = v0[0] + (v1[0] - v0[0]) * p; cy = v0[1] + (v1[1] - v0[1]) * p
    hop = math.hypot(v1[0] - v0[0], v1[1] - v0[1])
    vh = v0[2] + (v1[2] - v0[2]) * p + math.sin(math.pi * min(p, 1)) * min(hop * 0.5, 1200)
    drift = (t - s - fly) if t - s > fly else 0
    vh *= 1 - 0.03 * drift if k != "outro" else 1
    return cx, cy, vh

def to_screen(pt, cam):
    cx, cy, vh = cam; sc = H / vh
    return (pt[0] - cx) * sc + W / 2, (pt[1] - cy) * sc + H / 2, sc

# ---------------------------------------------------------------- draw helpers
def text_c(d, cx, cy, s, f, fill, stroke=0, sf=(0, 0, 0)):
    b = d.textbbox((0, 0), s, font=f, stroke_width=stroke)
    d.text((cx - (b[2] - b[0]) / 2 - b[0], cy - (b[3] - b[1]) / 2 - b[1]), s, font=f, fill=fill, stroke_width=stroke, stroke_fill=sf)

def pin(d, x, y, col, age, s=1.0):
    drop = eob(age / 0.55)
    yy = y - (1 - drop) * 300
    r = 34 * s
    d.ellipse([x - 22 * s, y - 7 * s, x + 22 * s, y + 7 * s], fill=(0, 0, 0, 90))
    d.polygon([(x - r * 0.75, yy - r * 1.3), (x + r * 0.75, yy - r * 1.3), (x, yy)], fill=col)
    d.ellipse([x - r, yy - r * 2.3, x + r, yy - r * 0.3], fill=col, outline=(255, 255, 255), width=int(5 * s))
    d.ellipse([x - r * 0.38, yy - r * 1.68, x + r * 0.38, yy - r * 0.92], fill=(255, 255, 255))
    if age > 0.5:
        for k in range(2):
            ph = ((age - 0.5) * 0.9 + k * 0.5) % 1
            rr = 30 + ph * 120
            d.ellipse([x - rr, y - rr * 0.45, x + rr, y + rr * 0.45], outline=col + (int(255 * (1 - ph)),), width=5)

# ---------------------------------------------------------------- frame
MAP, LANDMASK = None, None
VIG = None

def frame(i):
    t = i / FPS
    cam = camera(t); cx, cy, vh = cam
    vw = vh * W / H
    box = (int(cx - vw / 2) + PAD, int(cy - vh / 2) + PAD, int(cx + vw / 2) + PAD, int(cy + vh / 2) + PAD)
    base = MAP.crop(box).resize((W, H), Image.BILINEAR).convert("RGBA")
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    si = seg_at(t); sk, ss = SEG[si]
    visited = ORDER[:max(0, si)] if sk != "outro" else ORDER
    # clouds parallax
    for k in range(5):
        x = (k * 410 + t * 25 - cx * 0.08) % (W + 600) - 300
        y = 300 + k * 330 + 40 * math.sin(k)
        d.ellipse([x, y, x + 360, y + 110], fill=(255, 255, 255, 38))
    # route
    pts = [REG[k][2] for k in visited]
    if sk in REG and len(pts) >= 2:
        p = ease((t - ss) / 1.1)
        a, b = pts[-2], pts[-1]
        pts = pts[:-1] + [(a[0] + (b[0] - a[0]) * p, a[1] + (b[1] - a[1]) * p)]
    sp = [to_screen(p, cam)[:2] for p in pts]
    if len(sp) >= 2:
        for k in range(len(sp) - 1):
            x0, y0 = sp[k]; x1, y1 = sp[k + 1]
            n = max(2, int(math.hypot(x1 - x0, y1 - y0) / 26))
            for j in range(n):
                if (j + int(t * 8)) % 2 == 0:
                    u0, u1 = j / n, (j + 0.6) / n
                    d.line([(x0 + (x1 - x0) * u0, y0 + (y1 - y0) * u0), (x0 + (x1 - x0) * u1, y0 + (y1 - y0) * u1)], fill=(255, 220, 60, 255), width=10)
    # pins
    for k in visited:
        x, y, sc = to_screen(REG[k][2], cam)
        age = t - (START[k] - 0.35 + 0.8) if k == sk else 5
        if age > 0:
            pin(d, x, y, REG[k][3], age, s=1.0 if k == sk else 0.75)
    # outro labels on all pins
    if sk == "outro":
        for j, k in enumerate(ORDER):
            x, y, _ = to_screen(REG[k][2], cam)
            a = ease((t - ss - 0.8 - j * 0.12) / 0.3)
            if a > 0:
                text_c(d, x, y - 95, REG[k][0], F(30), (255, 255, 255, int(255 * a)), 5, (0, 0, 0))
    # top title bar
    d.rounded_rectangle([40, 70, W - 40, 230], 36, fill=(10, 8, 25, 190))
    text_c(d, W / 2, 125, "WELCOME TO LEONIDA", F(64), (255, 255, 255))
    text_c(d, W / 2, 190, "GTA 6  •  MAP TOUR", F(34, FM), (255, 110, 200))
    # progress dots
    for j, k in enumerate(ORDER):
        x = W / 2 + (j - 2.5) * 70; y = 290
        on = k in visited
        col = REG[k][3] if on else (255, 255, 255)
        d.ellipse([x - 14, y - 14, x + 14, y + 14], fill=col + ((255,) if on else (70,)), outline=(255, 255, 255, 200), width=3)
    # region card
    if sk in REG:
        name, desc, _, col = REG[sk]
        a = ease((t - ss - 0.9) / 0.35)
        if a > 0:
            y0 = 1300 + int((1 - a) * 160)
            d.rounded_rectangle([60, y0, W - 60, y0 + 230], 34, fill=(10, 8, 25, int(220 * a)), outline=col + (int(255 * a),), width=6)
            n = ORDER.index(sk) + 1
            d.rounded_rectangle([100, y0 + 40, 230, y0 + 190], 26, fill=col + (int(255 * a),))
            text_c(d, 165, y0 + 115, f"0{n}", F(66), (15, 10, 30, int(255 * a)))
            d.text((265, y0 + 42), name, font=F(66), fill=(255, 255, 255, int(255 * a)))
            d.text((268, y0 + 130), desc, font=F(36, FM), fill=(220, 220, 235, int(255 * a)))
    # captions
    for a0, a1, txt in CAPS:
        if a0 <= t < a1 + 0.15:
            words = txt.split(); prog = (t - a0) / max(a1 - a0, 0.1)
            nshow = max(1, int(len(words) * prog + 0.999))
            shown = words[:nshow]
            lines, cur = [], ""
            for w_ in shown:
                if len(cur) + len(w_) > 22: lines.append(cur); cur = w_
                else: cur = (cur + " " + w_).strip()
            lines.append(cur)
            lines = lines[-2:]
            for j, ln in enumerate(lines):
                text_c(d, W / 2, 1640 + j * 85, ln.upper(), F(62), (255, 235, 70) if j == len(lines) - 1 else (255, 255, 255), 9, (0, 0, 0))
    # compass
    d.ellipse([W - 150, 360, W - 50, 460], fill=(10, 8, 25, 170), outline=(255, 255, 255, 200), width=3)
    d.polygon([(W - 100, 372), (W - 88, 410), (W - 112, 410)], fill=(255, 60, 90))
    d.polygon([(W - 100, 448), (W - 88, 410), (W - 112, 410)], fill=(240, 240, 240))
    text_c(d, W - 100, 342, "N", F(26), (255, 255, 255))
    base.alpha_composite(ov)
    arr = np.asarray(base.convert("RGB")).astype(np.float32)
    # grade: warm sunset tint + vignette
    arr = arr * np.array([1.05, 0.98, 1.02]) + np.array([8, 0, 10])
    arr *= VIG
    # white flash on region arrive
    if sk in REG:
        fl = max(0, 1 - abs(t - ss - 1.1) / 0.12) * 0.25
        arr = arr * (1 - fl) + 255 * fl
    return np.clip(arr, 0, 255).astype(np.uint8)

def main(preview=None):
    global MAP, LANDMASK, VIG
    m, LANDMASK = build_map()
    MAP = Image.new("RGB", (MW + 2 * PAD, MH + 2 * PAD), (12, 40, 95))
    wv = (noise(MH + 2 * PAD, MW + 2 * PAD, 60, 3) - 0.5) * 18
    MAP = Image.fromarray(np.clip(np.asarray(MAP, np.float32) + wv[..., None], 0, 255).astype(np.uint8))
    MAP.paste(m, (PAD, PAD))
    T = Image.Transpose
    MAP.paste(m.crop((0, 0, MW, PAD)).transpose(T.FLIP_TOP_BOTTOM), (PAD, 0))
    MAP.paste(m.crop((0, 0, PAD, MH)).transpose(T.FLIP_LEFT_RIGHT), (0, PAD))
    MAP.paste(m.crop((MW - PAD, 0, MW, MH)).transpose(T.FLIP_LEFT_RIGHT), (MW + PAD, PAD))
    MAP.paste(m.crop((0, 0, PAD, PAD)).transpose(T.ROTATE_180), (0, 0))
    MAP.paste(m.crop((MW - PAD, 0, MW, PAD)).transpose(T.ROTATE_180), (MW + PAD, 0))
    m.save("map_full.jpg", quality=88)
    yy, xx = np.mgrid[0:H, 0:W]
    VIG = (1 - 0.5 * (((xx - W / 2) / (W / 1.1)) ** 2 + ((yy - H / 2) / (H / 1.1)) ** 2))[..., None].astype(np.float32)
    if preview:
        for t in preview:
            Image.fromarray(frame(int(t * FPS))).resize((540, 960)).save(f"prev_{t}.png")
        return
    p = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                          "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "19",
                          "-pix_fmt", "yuv420p", "map_video.mp4"], stdin=subprocess.PIPE)
    for i in range(int(DUR * FPS)):
        p.stdin.write(frame(i).tobytes())
    p.stdin.close(); p.wait()

if __name__ == "__main__":
    main([float(x) for x in sys.argv[1:]] or None)
