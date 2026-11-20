import math, subprocess, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H, FPS, DUR = 1080, 1920, 30, 59.0
FB = "/usr/share/fonts/opentype/inter/Inter-ExtraBold.otf"
font = lambda s: ImageFont.truetype(FB, s)

SECTIONS = [  # start, number, keyword, color
    (0.0, None, "GTA VI", (255, 80, 200)),
    (3.27, 5, "LEONIDA", (255, 150, 60)),
    (15.39, 4, "LUCIA", (255, 70, 150)),
    (27.48, 3, "90M VIEWS", (80, 220, 255)),
    (35.35, 2, "PS5", (120, 160, 255)),
    (44.43, 1, "BILLIONS", (255, 210, 60)),
    (56.38, None, "FOLLOW", (255, 80, 200)),
]
CAPS = [
    (0.0, 2.99, "5 GTA 6 FACTS|YOU DIDN'T KNOW"),
    (4.8, 7.32, "NOT JUST|VICE CITY"),
    (7.6, 11.53, "A WHOLE STATE|INSPIRED BY FLORIDA"),
    (11.81, 15.11, "SWAMPS, BEACHES|& SMALL TOWNS"),
    (16.91, 21.6, "FIRST FEMALE LEAD|IN MODERN GTA"),
    (21.88, 27.2, "LUCIA & JASON|BONNIE AND CLYDE VIBES"),
    (28.97, 35.07, "~90 MILLION VIEWS|IN 24 HOURS"),
    (36.83, 41.48, "TRAILER 2 CAPTURED|ON PS5"),
    (41.76, 44.15, "IN-GAME|NOT PRE-RENDERED"),
    (46.05, 51.32, "GTA 5 MADE|BILLIONS"),
    (51.6, 56.1, "BIGGEST SHOES|IN GAMING HISTORY"),
    (56.38, 59.0, "FOLLOW FOR MORE|GTA 6 FACTS"),
]

# static sunset gradient
y = np.linspace(0, 1, H)[:, None]
top, mid, bot = np.array([20, 5, 45]), np.array([190, 30, 120]), np.array([255, 140, 50])
grad = np.zeros((H, 1, 3))
for i in range(H):
    t = i / H
    if t < 0.55:
        c = top + (mid - top) * (t / 0.55)
    else:
        c = mid + (bot - mid) * ((t - 0.55) / 0.45)
    grad[i, 0] = c
grad = np.repeat(grad, W, 1).astype(np.uint8)
HORIZON = 1180

def palm(d, x, base, s, flip=1):
    pts = [(x + flip * int(40 * s * math.sin(k / 10)), base - int(k * 42 * s)) for k in range(12)]
    d.line(pts, fill=(15, 0, 25), width=int(26 * s))
    tx, ty = pts[-1]
    for a in range(-165, 10, 22):
        r = math.radians(a)
        pts = [(tx + flip * math.cos(r) * L * 28 * s, ty + math.sin(r) * L * 28 * s + L * L * 2.2 * s) for L in range(0, 10)]
        for k in range(len(pts) - 1):
            d.line([pts[k], pts[k + 1]], fill=(15, 0, 25), width=max(4, int((24 - k * 2.2) * s)))

def ease(t):
    return 1 - (1 - min(max(t, 0), 1)) ** 3

def section_at(t):
    cur = SECTIONS[0]
    for s in SECTIONS:
        if t >= s[0]:
            cur = s
    return cur

def text_c(d, cx, cy, txt, f, fill, stroke=8, sfill=(10, 0, 20)):
    bb = d.textbbox((0, 0), txt, font=f, stroke_width=stroke)
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    d.text((cx - w / 2 - bb[0], cy - h / 2 - bb[1]), txt, font=f, fill=fill, stroke_width=stroke, stroke_fill=sfill)

def frame(i):
    t = i / FPS
    sec = section_at(t)
    st = t - sec[0]
    col = sec[3]
    img = Image.fromarray(grad.copy())
    d = ImageDraw.Draw(img)
    # sun
    sy = 900 + int(10 * math.sin(t))
    sun = Image.new("L", (W, H), 0)
    ImageDraw.Draw(sun).ellipse([W / 2 - 330, sy - 330, W / 2 + 330, sy + 330], fill=255)
    sd = ImageDraw.Draw(sun)
    for k in range(8):
        yy = sy + 40 + k * 38 - int((t * 30) % 38)
        sd.rectangle([0, yy, W, yy + 6 + k * 2], fill=0)
    sun.paste(0, (0, HORIZON, W, H))
    glow = sun.filter(ImageFilter.GaussianBlur(40))
    img.paste((255, 220, 120), (0, 0), glow.point(lambda v: v // 2))
    img.paste((255, 200, 90), (0, 0), sun)
    # grid floor
    d.rectangle([0, HORIZON, W, H], fill=(25, 0, 40))
    gc = (255, 60, 200)
    for k in range(-14, 15):
        d.line([(W / 2 + k * 30, HORIZON), (W / 2 + k * 260, H)], fill=gc, width=3)
    off = (t * 0.9) % 1
    for k in range(14):
        z = (k + off) / 14
        yy = HORIZON + (H - HORIZON) * z ** 2.2
        d.line([(0, yy), (W, yy)], fill=gc, width=2 + int(4 * z))
    d.line([(0, HORIZON), (W, HORIZON)], fill=(255, 150, 230), width=5)
    # palms
    palm(d, 120, HORIZON + 40, 1.25, 1)
    palm(d, 960, HORIZON + 60, 1.05, -1)
    # image card with ken burns + slide-in
    pic = PICS.get(sec[0])
    gen = CODE_CARDS.get(sec[1])
    if pic is not None or gen is not None:
        nxt = [s[0] for s in SECTIONS if s[0] > sec[0]]
        slen = (nxt[0] if nxt else DUR) - sec[0]
        cw, ch = 1000, 562
        if gen is not None:
            card = gen(st, slen)
        else:
            z = 1.0 + 0.15 * (st / slen)
            pw, ph = pic.size
            vw, vh = pw / z, ph / z
            ox = (pw - vw) * (0.5 + 0.3 * math.sin(st * 0.4)); oy = (ph - vh) / 2
            card = pic.crop((int(ox), int(oy), int(ox + vw), int(oy + vh))).resize((cw, ch), Image.BILINEAR)
        slide = int(1200 * (1 - ease(st / 0.45)))
        x0, y0 = (W - cw) // 2 + slide, 1000 - ch // 2
        glowl = Image.new("L", (W, H), 0)
        ImageDraw.Draw(glowl).rounded_rectangle([x0 - 18, y0 - 18, x0 + cw + 18, y0 + ch + 18], 30, fill=255)
        img.paste(col, (0, 0), glowl.filter(ImageFilter.GaussianBlur(25)))
        m = Image.new("L", (cw, ch), 0); ImageDraw.Draw(m).rounded_rectangle([0, 0, cw, ch], 24, fill=255)
        d.rounded_rectangle([x0 - 8, y0 - 8, x0 + cw + 8, y0 + ch + 8], 30, fill=(255, 255, 255))
        img.paste(card, (x0, y0), m)
    # camera punch / shake on section change
    punch = max(0, 1 - st / 0.35)
    # big number / keyword
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    if sec[1] is not None:
        sc = 1 + 0.6 * (1 - ease(st / 0.4))
        text_c(od, W / 2, 330, f"#{sec[1]}", font(int(300 * sc)), (255, 255, 255), stroke=14, sfill=col)
        if st > 0.3:
            a = ease((st - 0.3) / 0.3)
            text_c(od, W / 2, 560 + int(40 * (1 - a)), sec[2], font(110), col + (int(255 * a),), stroke=10)
    else:
        sc = 1 + 0.4 * (1 - ease(st / 0.5))
        text_c(od, W / 2, 380, sec[2], font(int(200 * sc)), (255, 255, 255), stroke=14, sfill=col)
    # captions
    for a0, a1, txt in CAPS:
        if a0 <= t < a1:
            k = t - a0
            pop = 1 + 0.25 * (1 - ease(k / 0.2))
            lines = txt.split("|")
            for j, ln in enumerate(lines):
                fs = int((92 if len(ln) < 16 else 72) * pop)
                fill = (255, 235, 80) if j == 0 else (255, 255, 255)
                text_c(od, W / 2, 1450 + j * 120, ln, font(fs), fill, stroke=10)
    img = img.convert("RGBA")
    img.alpha_composite(ov)
    img = img.convert("RGB")
    if punch > 0:
        dx = int(math.sin(i * 2.7) * 18 * punch); dy = int(math.cos(i * 3.1) * 18 * punch)
        img = img.transform(img.size, Image.AFFINE, (1, 0, dx, 0, 1, dy))
        flash = Image.new("RGB", img.size, (255, 255, 255))
        img = Image.blend(img, flash, 0.55 * max(0, 1 - st / 0.15))
    # vignette + scanlines
    a = np.asarray(img).astype(np.float32)
    a *= VIG
    a[::4] *= 0.88
    # chromatic shift on punch
    if punch > 0.2:
        s = int(12 * punch)
        a[:, :, 0] = np.roll(a[:, :, 0], s, 1); a[:, :, 2] = np.roll(a[:, :, 2], -s, 1)
    return np.clip(a, 0, 255).astype(np.uint8)

import os
_MAP = {0.0: "swamp", 3.27: "swamp", 15.39: "couple", 27.48: "views", 35.35: "ps5", 44.43: "money", 56.38: "ps5"}
PICS = {k: Image.open(f"img/{v}.png").convert("RGB") for k, v in _MAP.items() if os.path.exists(f"img/{v}.png")}

import random
CW, CH = 1000, 562

def _bg(top, bot):
    g = np.linspace(0, 1, CH)[:, None, None]
    a = (np.array(top) * (1 - g) + np.array(bot) * g).repeat(CW, 1).astype(np.uint8)
    return Image.fromarray(a)

_rng = random.Random(7)
STARS = [(_rng.randrange(CW), _rng.randrange(260), _rng.random()) for _ in range(70)]

def card_couple(st, slen):
    im = _bg((8, 4, 30), (60, 10, 70)); d = ImageDraw.Draw(im)
    for x, y, p in STARS:
        b = int(150 + 100 * math.sin(st * 3 + p * 9)); d.point((x, y), fill=(b, b, b))
    d.rectangle([0, 430, CW, CH], fill=(20, 10, 30))
    # motel sign
    on = (int(st * 4) % 7) != 0
    sc = (255, 60, 160) if on else (90, 30, 60)
    d.rectangle([640, 60, 660, 430], fill=(30, 20, 40))
    d.rounded_rectangle([540, 70, 900, 190], 18, outline=sc, width=8)
    f = font(78)
    glow = Image.new("RGBA", im.size, (0, 0, 0, 0)); gd = ImageDraw.Draw(glow)
    gd.text((575, 85), "MOTEL", font=f, fill=sc + (255,))
    if on:
        im.paste(sc, (0, 0), glow.split()[3].filter(ImageFilter.GaussianBlur(14)))
    d.text((575, 85), "MOTEL", font=f, fill=(255, 220, 240) if on else sc)
    d.text((610, 205), "VACANCY", font=font(40), fill=(80, 230, 255) if (int(st * 2) % 2) else (30, 80, 100))
    # car silhouette
    cx = 80 - int(60 * (1 - ease(st / 1.2)))
    d.polygon([(cx, 470), (cx + 40, 420), (cx + 140, 400), (cx + 260, 400), (cx + 330, 430), (cx + 420, 440), (cx + 430, 480), (cx, 485)], fill=(5, 0, 12))
    for wx in (cx + 85, cx + 340):
        d.ellipse([wx - 35, 450, wx + 35, 520], fill=(5, 0, 12)); d.ellipse([wx - 15, 470, wx + 15, 500], fill=(80, 60, 100))
    d.line([(cx + 420, 455), (cx + 432, 455)], fill=(255, 240, 180), width=8)
    # two figures back to back
    sway = int(4 * math.sin(st * 2))
    def person(x, hair):
        d.ellipse([x - 26, 230 + sway, x + 26, 285 + sway], fill=(5, 0, 12))
        if hair:
            d.polygon([(x - 28, 250 + sway), (x + 28, 250 + sway), (x + 34, 320), (x - 34, 320)], fill=(5, 0, 12))
        d.polygon([(x - 45, 290), (x + 45, 290), (x + 38, 400), (x - 38, 400)], fill=(5, 0, 12))
        d.rectangle([x - 32, 400, x - 8, 500], fill=(5, 0, 12)); d.rectangle([x + 8, 400, x + 32, 500], fill=(5, 0, 12))
    person(560, True); person(660, False)
    # rim light
    d.text((40, 30), "LUCIA + JASON", font=font(44), fill=(255, 120, 200))
    return im

def card_views(st, slen):
    im = _bg((25, 5, 40), (90, 10, 60)); d = ImageDraw.Draw(im)
    # chart
    pts = []
    prog = ease(st / (slen * 0.8))
    for i in range(41):
        x = 60 + i * 22
        v = (i / 40) ** 2.4
        if i / 40 <= prog:
            pts.append((x, 500 - v * 380))
    for gy in range(120, 501, 95):
        d.line([(60, gy), (940, gy)], fill=(80, 40, 100), width=2)
    if len(pts) > 1:
        poly = pts + [(pts[-1][0], 500), (60, 500)]
        layer = Image.new("RGBA", im.size, (0, 0, 0, 0)); ImageDraw.Draw(layer).polygon(poly, fill=(255, 40, 80, 90))
        im.paste(layer, (0, 0), layer); d = ImageDraw.Draw(im)
        d.line(pts, fill=(255, 60, 110), width=9, joint="curve")
        ex, ey = pts[-1]; r = 14 + 4 * math.sin(st * 10)
        d.ellipse([ex - r, ey - r, ex + r, ey + r], fill=(255, 255, 255))
    n = int(90_000_000 * ease(st / (slen * 0.75)))
    d.text((60, 30), f"{n:,}", font=font(96), fill=(255, 255, 255), stroke_width=6, stroke_fill=(150, 0, 60))
    d.text((66, 140), "VIEWS IN 24 HOURS", font=font(40), fill=(255, 200, 80))
    # play button
    px, py = 860, 90 + int(8 * math.sin(st * 4))
    d.rounded_rectangle([px - 70, py - 48, px + 70, py + 48], 26, fill=(255, 30, 60))
    d.polygon([(px - 20, py - 26), (px - 20, py + 26), (px + 28, py)], fill=(255, 255, 255))
    return im

BILLS = [(_rng.randrange(-40, CW), _rng.uniform(0, 1), _rng.uniform(0.6, 1.4), _rng.uniform(-30, 30)) for _ in range(26)]

def card_money(st, slen):
    im = _bg((10, 30, 15), (40, 70, 20)); d = ImageDraw.Draw(im)
    # bars
    vals = [0.25, 0.4, 0.55, 0.75, 1.0]
    for i, v in enumerate(vals):
        h = 330 * v * ease((st - i * 0.25) / 0.8)
        x = 520 + i * 90
        d.rectangle([x, 520 - h, x + 60, 520], fill=(255, 210, 60), outline=(255, 250, 200), width=3)
    d.line([(500, 520), (980, 520)], fill=(255, 255, 255), width=4)
    # falling bills
    for x, ph, sp, ang in BILLS:
        y = ((ph + st * 0.22 * sp) % 1.2) * (CH + 120) - 120
        bill = Image.new("RGBA", (110, 52), (0, 0, 0, 0)); bd = ImageDraw.Draw(bill)
        bd.rounded_rectangle([0, 0, 109, 51], 6, fill=(110, 190, 90), outline=(30, 90, 30), width=3)
        bd.ellipse([38, 9, 72, 43], outline=(30, 90, 30), width=3); bd.text((47, 9), "$", font=font(30), fill=(30, 90, 30))
        bill = bill.rotate(ang + st * 40 * sp, expand=True)
        im.paste(bill, (int(x + 20 * math.sin(st * sp * 2)), int(y)), bill)
    d = ImageDraw.Draw(im)
    d.text((40, 40), "GTA V", font=font(70), fill=(255, 255, 255), stroke_width=5, stroke_fill=(0, 60, 0))
    d.text((40, 130), "$ BILLIONS", font=font(96), fill=(255, 215, 60), stroke_width=6, stroke_fill=(80, 50, 0))
    d.text((44, 250), "ONE OF THE BEST-SELLING\nGAMES OF ALL TIME", font=font(34), fill=(220, 255, 220))
    return im

CODE_CARDS = {4: card_couple, 3: card_views, 1: card_money}

yy, xx = np.mgrid[0:H, 0:W]
VIG = (1 - 0.55 * (((xx - W / 2) / (W / 1.2)) ** 2 + ((yy - H / 2) / (H / 1.2)) ** 2))[..., None].astype(np.float32)

p = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                      "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
                      "-pix_fmt", "yuv420p", "video_only.mp4"], stdin=subprocess.PIPE)
for i in range(int(DUR * FPS)):
    p.stdin.write(frame(i).tobytes())
p.stdin.close(); p.wait()
print("done")
