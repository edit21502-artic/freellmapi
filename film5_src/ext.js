// ===== film 5: ten zombie facts =====
LOOK.dev = {
  skin: "#d9a67c",
  top: "#7b5fd0",
  bot: "#2b3040",
  hair: "#15161c",
  hs: "muffs",
};
var FT = {
  10: "THE WORD NOBODY SAID",
  9: "BRAAAINS",
  8: "ILLEGAL IN HAITI",
  7: "THE MAN WHO CAME BACK",
  6: "THE FIRST ZOMBIE",
  5: "THE GOVERNMENT GUIDE",
  4: "THE MATH",
  3: "THE LEASH",
  2: "THE PUPPET FUNGUS",
  1: "INSIDE YOUR HEAD",
};
function R01(lt, a, b) {
  return clamp((lt - a) / (b - a), 0, 1);
}
function pill(s, x, y, sz, fg, bgc, rot) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot || 0);
  ctx.font = "900 " + sz + "px Inter";
  var w = ctx.measureText(s).width + sz * 1.0,
    h = sz * 1.55;
  rr(-w / 2, -h / 2, w, h, h / 2, bgc, OUT, 5);
  tx(s, 0, 2, sz, fg);
  ctx.restore();
}
function heart(x, y, r) {
  ctx.beginPath();
  ctx.moveTo(x, y + r * 0.9);
  ctx.bezierCurveTo(
    x - r * 1.6,
    y - r * 0.2,
    x - r * 0.7,
    y - r * 1.3,
    x,
    y - r * 0.4,
  );
  ctx.bezierCurveTo(
    x + r * 0.7,
    y - r * 1.3,
    x + r * 1.6,
    y - r * 0.2,
    x,
    y + r * 0.9,
  );
  ctx.fillStyle = "#ff3b5c";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = OUT;
  ctx.stroke();
}
function arrow5(x1, y1, x2, y2, col) {
  var a = Math.atan2(y2 - y1, x2 - x1);
  for (var k = 0; k < 2; k++) {
    var w = k ? 14 : 26,
      c = k ? col : OUT;
    ctx.lineCap = "round";
    ctx.lineWidth = w;
    ctx.strokeStyle = c;
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2 - Math.cos(a) * 26, y2 - Math.sin(a) * 26);
    ctx.stroke();
    var hs = k ? 40 : 56,
      ox = k ? 0 : 6;
    ctx.beginPath();
    ctx.moveTo(x2 + Math.cos(a) * ox, y2 + Math.sin(a) * ox);
    ctx.lineTo(x2 - Math.cos(a - 0.5) * hs, y2 - Math.sin(a - 0.5) * hs);
    ctx.lineTo(x2 - Math.cos(a + 0.5) * hs, y2 - Math.sin(a + 0.5) * hs);
    ctx.closePath();
    ctx.fill();
  }
}

// ---------- animals ----------
function drawRat(x, y, s, f, t, o) {
  o = o || {};
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(f, 1);
  var mv = o.run || o.walk ? 1 : 0,
    ph = t * (o.run ? 18 : 10),
    c = "#a6aebc",
    tw = Math.sin(t * 6) * 0.06 * s;
  var tail = [
    -0.42 * s,
    -0.3 * s,
    -0.7 * s,
    -0.22 * s + tw,
    -0.9 * s,
    -0.44 * s,
    -1.1 * s,
    -0.36 * s - tw,
  ];
  ln(tail, 0.05 * s + 8, OUT);
  ln(tail, 0.05 * s, "#ffb3c4");
  for (var i = -1; i <= 1; i += 2) {
    var off = Math.sin(ph + (i > 0 ? 0 : PI)) * 0.1 * s * mv;
    el(i * 0.22 * s + off, -0.05 * s, 0.1 * s, 0.06 * s, "#8b93a3", OUT, 3);
  }
  el(0, -0.32 * s, 0.46 * s, 0.27 * s, c, OUT, 5);
  el(0.02 * s, -0.22 * s, 0.3 * s, 0.14 * s, "#c6ccd8");
  el(0.5 * s, -0.36 * s, 0.25 * s, 0.19 * s, c, OUT, 5);
  ci(0.42 * s, -0.54 * s, 0.1 * s, "#ffb3c4", OUT, 4);
  ci(0.6 * s, -0.54 * s, 0.08 * s, "#ffb3c4", OUT, 4);
  ci(0.73 * s, -0.35 * s, 0.05 * s, "#ff8aa6", OUT, 3);
  if (o.inf) {
    ci(0.58 * s, -0.42 * s, 0.06 * s, "#fff", OUT, 3);
    ctx.beginPath();
    for (var a = 0; a < 12; a += 0.3) {
      var r = a * 0.0045 * s;
      ctx.lineTo(
        0.58 * s + Math.cos(a + t * 8) * r,
        -0.42 * s + Math.sin(a + t * 8) * r,
      );
    }
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#d02a1c";
    ctx.stroke();
  } else ci(0.58 * s, -0.42 * s, 0.04 * s, "#161827");
  ln([0.68 * s, -0.33 * s, 0.92 * s, -0.4 * s], 2.5, OUT);
  ln([0.68 * s, -0.31 * s, 0.92 * s, -0.28 * s], 2.5, OUT);
  ctx.restore();
}
function drawCat(x, y, s, f, t, o) {
  o = o || {};
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(f, 1);
  var c = "#f59a4a",
    d = "#d9702a",
    tw = Math.sin(t * 1.7) * 0.05 * s,
    br = Math.sin(t * 2.2) * 0.012 * s;
  var tail = [
    0.4 * s,
    -0.2 * s,
    0.72 * s,
    -0.12 * s,
    0.84 * s,
    -0.46 * s + tw,
    0.66 * s,
    -0.8 * s,
  ];
  ln(tail, 0.14 * s + 9, OUT);
  ln(tail, 0.14 * s, c);
  el(0, -0.36 * s, 0.5 * s, 0.38 * s, c, OUT, 6);
  for (var i = -1; i <= 1; i++)
    ln([i * 0.16 * s, -0.66 * s, i * 0.2 * s, -0.46 * s], 0.04 * s, d);
  el(-0.22 * s, -0.04 * s, 0.18 * s, 0.08 * s, "#f6b070", OUT, 4);
  ci(-0.12 * s, -0.86 * s + br, 0.32 * s, c, OUT, 6);
  po(
    [
      -0.4 * s,
      -1.0 * s + br,
      -0.36 * s,
      -1.3 * s + br,
      -0.16 * s,
      -1.12 * s + br,
    ],
    c,
    OUT,
    5,
  );
  po(
    [0.1 * s, -1.12 * s + br, 0.16 * s, -1.32 * s + br, 0.3 * s, -1.0 * s + br],
    c,
    OUT,
    5,
  );
  for (var sd = -1; sd <= 1; sd += 2) {
    var ex = -0.12 * s + sd * 0.12 * s,
      ey = -0.88 * s + br;
    if (o.asleep) {
      ctx.beginPath();
      ctx.arc(ex, ey, 0.06 * s, 0.1 * PI, 0.9 * PI);
      ctx.lineWidth = 4;
      ctx.strokeStyle = OUT;
      ctx.stroke();
    } else {
      el(ex, ey, 0.06 * s, 0.08 * s, "#fff", OUT, 3);
      ci(ex, ey, 0.03 * s, "#161827");
    }
  }
  ci(-0.12 * s, -0.78 * s + br, 0.03 * s, "#ff8aa6", OUT, 2);
  for (var w = -1; w <= 1; w += 2) {
    ln(
      [
        -0.12 * s + w * 0.06 * s,
        -0.76 * s + br,
        -0.12 * s + w * 0.36 * s,
        -0.8 * s + br,
      ],
      2.5,
      OUT,
    );
    ln(
      [
        -0.12 * s + w * 0.06 * s,
        -0.74 * s + br,
        -0.12 * s + w * 0.36 * s,
        -0.7 * s + br,
      ],
      2.5,
      OUT,
    );
  }
  ctx.restore();
  if (o.asleep)
    for (var k = 0; k < 3; k++) {
      var u = (t * 0.5 + k / 3) % 1;
      ctx.globalAlpha = 1 - u;
      tx(
        "Z",
        x + f * (-0.3 * s - u * 0.3 * s),
        y - 1.2 * s - u * 0.5 * s,
        0.2 * s * (0.6 + u * 0.6),
        "#ffffff",
      );
      ctx.globalAlpha = 1;
    }
}
function drawAnt(x, y, s, rot, ph, o) {
  o = o || {};
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  var col = o.col || "#7a2e1c";
  for (var i = 0; i < 3; i++)
    for (var sd = 0; sd < 2; sd++) {
      var hx = -0.1 * s + i * 0.1 * s,
        sw = Math.sin(ph + i * 2 + sd * PI) * 0.06 * s;
      var pts = [
        hx,
        0.06 * s,
        hx + (i - 1) * 0.12 * s + sw,
        0.2 * s,
        hx + (i - 1) * 0.2 * s + sw * 1.4,
        0.36 * s,
      ];
      ln(pts, 0.03 * s + 6, OUT);
      ln(pts, 0.03 * s, col);
    }
  el(-0.4 * s, 0.02 * s, 0.27 * s, 0.18 * s, col, OUT, 4);
  el(0, 0, 0.17 * s, 0.13 * s, col, OUT, 4);
  ci(0.3 * s, -0.04 * s, 0.15 * s, col, OUT, 4);
  ci(0.35 * s, -0.08 * s, 0.035 * s, "#fff");
  ln(
    [0.4 * s, -0.14 * s, 0.52 * s, -0.3 * s, 0.64 * s, -0.3 * s],
    0.025 * s + 4,
    OUT,
  );
  ln(
    [0.4 * s, -0.14 * s, 0.52 * s, -0.3 * s, 0.64 * s, -0.3 * s],
    0.025 * s,
    col,
  );
  ctx.restore();
}
function drawWasp(x, y, s, f, t, o) {
  o = o || {};
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(f, 1);
  if (o.rot) ctx.rotate(o.rot);
  var g = ctx.createLinearGradient(0, -0.25 * s, 0, 0.25 * s);
  g.addColorStop(0, "#47f0b0");
  (g.addColorStop(1, "#0b7a55"), (fl = Math.sin(t * 50) * 0.22));
  ctx.globalAlpha = 0.55;
  el(-0.1 * s, -0.35 * s, 0.4 * s, 0.12 * s, "#dff7ff", OUT, 3, -0.5 + fl);
  el(
    0.06 * s,
    -0.38 * s,
    0.34 * s,
    0.1 * s,
    "#dff7ff",
    OUT,
    3,
    -0.2 + fl * 0.6,
  );
  ctx.globalAlpha = 1;
  for (var i = 0; i < 3; i++) {
    var lx = -0.08 * s + i * 0.1 * s,
      lg = [
        lx,
        0.1 * s,
        lx + (i - 1) * 0.1 * s,
        0.3 * s,
        lx + (i - 1) * 0.16 * s,
        0.46 * s,
      ];
    ln(lg, 0.028 * s + 6, OUT);
    ln(lg, 0.028 * s, "#f08a3c");
  }
  el(-0.52 * s, 0.05 * s, 0.44 * s, 0.2 * s, g, OUT, 5, 0.12);
  el(0, 0, 0.22 * s, 0.18 * s, g, OUT, 5);
  ci(0.3 * s, 0, 0.16 * s, g, OUT, 5);
  ci(0.37 * s, -0.04 * s, 0.05 * s, "#161827");
  ln([0.42 * s, -0.12 * s, 0.56 * s, -0.3 * s], 0.02 * s + 4, OUT);
  ln([0.42 * s, -0.12 * s, 0.56 * s, -0.3 * s], 0.02 * s, "#161827");
  if (o.stingTo) {
    ln([-0.94 * s, 0.12 * s, o.stingTo[0], o.stingTo[1]], 4, "#161827");
  }
  ctx.restore();
}
function drawRoach(x, y, s, f, t, o) {
  o = o || {};
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(f, 1);
  var ph = t * (o.walk ? 12 : 0),
    col = "#8a4b24";
  for (var i = 0; i < 3; i++)
    for (var sd = 0; sd < 2; sd++) {
      var hx = -0.25 * s + i * 0.22 * s,
        sw =
          Math.sin(ph + i * 2 + sd * PI) * 0.06 * s * (o.walk ? 1 : 0) +
          (o.twitch ? Math.sin(t * 30 + i) * 0.03 * s : 0);
      var pts = [
        hx,
        -0.12 * s,
        hx + (sd ? 0.12 : -0.12) * s + sw,
        -0.02 * s,
        hx + (sd ? 0.22 : -0.22) * s + sw,
        0,
      ];
      ln(pts, 0.03 * s + 6, OUT);
      ln(pts, 0.03 * s, "#5a2f16");
    }
  el(0, -0.2 * s, 0.5 * s, 0.24 * s, col, OUT, 5);
  el(-0.05 * s, -0.28 * s, 0.3 * s, 0.07 * s, "rgba(255,255,255,.25)");
  ln([-0.4 * s, -0.2 * s, 0.4 * s, -0.2 * s], 0.02 * s, "rgba(0,0,0,.3)");
  el(0.5 * s, -0.18 * s, 0.16 * s, 0.13 * s, "#6f3a1a", OUT, 5);
  if (o.dazed) {
    ci(0.56 * s, -0.22 * s, 0.05 * s, "#fff", OUT, 2);
    ctx.beginPath();
    for (var a = 0; a < 10; a += 0.3) {
      var r = a * 0.005 * s;
      ctx.lineTo(
        0.56 * s + Math.cos(a + t * 6) * r,
        -0.22 * s + Math.sin(a + t * 6) * r,
      );
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#161827";
    ctx.stroke();
  } else {
    ci(0.56 * s, -0.22 * s, 0.04 * s, "#fff", OUT, 2);
    ci(0.57 * s, -0.22 * s, 0.018 * s, "#161827");
  }
  if (!o.noAnt) {
    var ant = [0.6 * s, -0.25 * s, 0.82 * s, -0.52 * s, 1.02 * s, -0.46 * s];
    ln(ant, 0.02 * s + 4, OUT);
    ln(ant, 0.02 * s, "#5a2f16");
  }
  ctx.restore();
}
function drawPuffer(x, y, s, k, t) {
  ctx.save();
  ctx.translate(x, y);
  var r = 0.45 * s * (1 + 0.4 * k);
  po([-r * 0.9, 0, -r * 1.5, -r * 0.5, -r * 1.5, r * 0.5], "#e2b23a", OUT, 5);
  if (k > 0.15)
    for (var i = 0; i < 18; i++) {
      var a = (i / 18) * PI * 2,
        l = 0.16 * s * k;
      po(
        [
          Math.cos(a - 0.08) * r,
          Math.sin(a - 0.08) * r,
          Math.cos(a) * (r + l),
          Math.sin(a) * (r + l),
          Math.cos(a + 0.08) * r,
          Math.sin(a + 0.08) * r,
        ],
        "#8a6a1a",
        OUT,
        3,
      );
    }
  ci(0, 0, r, "#f1c94a", OUT, 6);
  el(0, r * 0.35, r * 0.8, r * 0.55, "#fbe9a8");
  for (var j = 0; j < 7; j++)
    ci(
      Math.cos(j * 2.1) * r * 0.5,
      -r * 0.2 + Math.sin(j * 1.7) * r * 0.3,
      r * 0.06,
      "#c79a22",
    );
  ci(r * 0.45, -r * 0.2, r * 0.2, "#fff", OUT, 4);
  ci(r * 0.5, -r * 0.2, r * 0.09, "#161827");
  el(r * 0.88, r * 0.1, r * 0.1, r * 0.13, "#7a2630", OUT, 3);
  var fl = Math.sin(t * 9) * 0.3;
  el(-r * 0.1, r * 0.1, r * 0.3, r * 0.14, "#e2b23a", OUT, 3, 0.6 + fl);
  ctx.restore();
}
function zSil(x, y, s, sw) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(sw);
  var c = "#0d0d0d";
  ci(0, -1.55 * s, 0.19 * s, c);
  rr(-0.17 * s, -1.4 * s, 0.34 * s, 0.78 * s, 0.1 * s, c);
  ln([-0.1 * s, -0.64 * s, -0.14 * s, 0], 0.13 * s, c);
  ln([0.1 * s, -0.64 * s, 0.16 * s, 0], 0.13 * s, c);
  ln([0.1 * s, -1.28 * s, 0.6 * s, -1.2 * s], 0.1 * s, c);
  ln([-0.1 * s, -1.28 * s, 0.4 * s, -1.12 * s], 0.1 * s, c);
  ctx.restore();
}

// ---------- studio ----------
function board(c, x0, y0, w, h) {
  rr(x0 - 14, y0 - 14, w + 28, h + 28, 14, "#8a5a3c", OUT, 6);
  rr(x0, y0, w, h, 6, "#27403a");
  ctx.fillStyle = "rgba(255,255,255,.035)";
  for (var i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.ellipse(
      x0 + 90 + i * 70,
      y0 + 140 + (i % 3) * 120,
      90,
      24,
      0.2 * i,
      0,
      7,
    );
    ctx.fill();
  }
  tx("COUNTDOWN", x0 + w / 2, y0 + 34, 34, "#f4f1e6");
  ln([x0 + 30, y0 + 58, x0 + w - 30, y0 + 58], 3, "rgba(244,241,230,.5)");
  for (var n = 10; n >= 1; n--) {
    var y = y0 + 92 + (10 - n) * 38.4,
      shown = n >= c,
      cur = n === c;
    if (cur) {
      rr(x0 + 14, y - 18, w - 28, 36, 8, "rgba(255,217,46,.24)");
      glow(
        x0 + w / 2,
        y,
        240,
        "rgba(255,217,46,.35)",
        0.5 + 0.3 * Math.sin(TT * 5),
      );
    }
    tx(
      String(n),
      x0 + 44,
      y,
      28,
      cur ? "#ffd92e" : shown ? "#f4f1e6" : "#7f9a90",
    );
    tx(
      shown ? FT[n] : "?????",
      x0 + 80,
      y,
      22,
      cur ? "#ffd92e" : shown ? "#f4f1e6" : "#6f8a80",
      "left",
    );
    if (shown && !cur)
      ln(
        [x0 + w - 56, y + 1, x0 + w - 47, y + 9, x0 + w - 30, y - 9],
        5,
        "#5ad17a",
      );
  }
}
BG.studio = function (sh, t, lt) {
  var o = sh.o,
    c = o.fact == null ? 11 : o.fact;
  gr(0, 0, W, 590, "#3b3560", "#272244");
  for (var y = 0; y < 590; y += 42)
    for (var x = ((y / 42) % 2) * 55 - 55; x < W; x += 110)
      rr(x + 3, y + 3, 104, 36, 4, "rgba(255,255,255,.045)");
  gr(0, 590, W, 130, "#8a5a3c", "#5e3b24");
  ln([0, 590, W, 590], 5, OUT);
  for (var i = 0; i < 9; i++)
    ln([i * 160, 590, i * 160 - 50, 720], 2, "rgba(0,0,0,.18)");
  el(390, 672, 400, 34, "#7b5fd0", OUT, 5);
  el(390, 672, 340, 22, "#8d74e0");
  rr(60, 250, 380, 18, 6, "#8a5a3c", OUT, 5);
  rr(120, 168, 92, 84, 14, "rgba(190,230,255,.35)", OUT, 5);
  el(166, 214, 34, 24, "#ff9ab8", OUT, 3);
  ln([150, 214, 160, 204, 172, 218, 184, 206], 3, "#d46a8c");
  tx("BRAIN", 166, 186, 14, "#fff");
  rr(318, 214, 56, 38, 6, "#c0533f", OUT, 4);
  el(346, 204, 30, 14, "#3f9f5f", OUT, 4);
  el(332, 194, 12, 26, "#4cb050", OUT, 4, -0.4);
  el(362, 194, 12, 26, "#4cb050", OUT, 4, 0.4);
  if (o.end) {
    for (var k = 0; k < 2; k++) {
      var by = 118 + k * 236;
      ctx.setLineDash([18, 12]);
      rr(770, by, 420, 214, 16, "rgba(255,255,255,.07)", "#ffffff", 5);
      ctx.setLineDash([]);
      tx("WATCH NEXT", 980, by + 107, 40, "rgba(255,255,255,.85)");
    }
  } else {
    glow(980, 80, 200, "rgba(255,60,160,.55)");
    ctx.save();
    ctx.shadowColor = "#ff3fa0";
    ctx.shadowBlur = 30;
    tx(
      "ZOMBIE FACTS",
      980,
      80,
      46,
      Math.sin(t * 17) > 0.93 ? "#ffd0ea" : "#ff7cc4",
    );
    ctx.restore();
    board(c, 735, 124, 490, 466);
  }
  SH._post = function () {
    el(520, 646, 125, 52, "#e04b3a", OUT, 6);
    el(520, 630, 96, 30, "#f0685a");
    ln([440, 640, 470, 626], 4, "rgba(255,255,255,.25)");
  };
  return { gy: 672, s: 178 };
};

// ---------- hook ----------
BG.grid = function (sh, t, lt) {
  gr(0, 0, W, H, "#0d1330", "#05070f");
  glow(640, 330, 640, "rgba(255,60,50,.10)");
  for (var i = 0; i < 30; i++) {
    var c = i % 10,
      r = Math.floor(i / 10),
      x = 190 + c * 100,
      y = 240 + r * 135,
      inf = i % 3 === 1,
      j = Math.floor(i / 3),
      k = inf ? R01(lt, 0.8 + j * 0.22, 1.1 + j * 0.22) : 0;
    rr(x - 27, y + 24, 54, 62, 20, k > 0 ? "#7a3a5a" : "#34428a", OUT, 4);
    ci(x, y, 29, "#f0c9a8", OUT, 4);
    if (k > 0)
      glow(
        x,
        y,
        80,
        "rgba(255,40,40,.95)",
        k * (0.55 + 0.25 * Math.sin(t * 6 + i)),
      );
    var ec = k > 0 ? "#ff2a1a" : "#161827";
    ci(x - 10, y - 3, k > 0 ? 5 : 3.5, ec);
    ci(x + 10, y - 3, k > 0 ? 5 : 3.5, ec);
    ln([x - 7, y + 12, x + 7, y + 12], 3, OUT);
    if (k > 0)
      for (var q = 0; q < 5; q++)
        ci(
          x - 14 + q * 7 + Math.sin(t * 5 + q + i) * 2,
          y - 19 + Math.cos(t * 4 + q * 2) * 2,
          3.4 * k,
          "#ff3b30",
        );
  }
  var big = backOut(R01(lt, 3.1, 3.6));
  if (big > 0) {
    ctx.save();
    ctx.translate(640, 108);
    ctx.scale(big, big);
    ctx.shadowColor = "rgba(255,60,50,.9)";
    ctx.shadowBlur = 40;
    ctx.lineJoin = "round";
    ctx.lineWidth = 22;
    ctx.strokeStyle = "#0b0c14";
    ctx.font = "900 130px Inter";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeText("1 IN 3", 0, 0);
    ctx.shadowBlur = 0;
    tx("1 IN 3", 0, 0, 130, "#fff4ea");
    ctx.restore();
  }
  return { gy: 2000, s: 100 };
};
BG.toxo = function (sh, t, lt) {
  var o = sh.o,
    st = o.stage || "rat",
    u = clamp(lt / (sh.dur * 0.9), 0, 1);
  if (st === "third") return BG.grid(sh, t, lt + 1.6);
  if (st === "brain") {
    gr(0, 0, W, H, "#14193a", "#090b1e");
    glow(520, 340, 520, "rgba(120,160,255,.22)");
    ctx.save();
    ctx.translate(500, 360);
    rr(-60, 230, 170, 160, 20, "#e8b896", OUT, 7);
    el(0, 0, 250, 300, "#f0c9a8", OUT, 8);
    po([-236, -10, -312, 66, -234, 74], "#f0c9a8", OUT, 8);
    ci(60, 40, 38, "#e8b896", OUT, 6);
    el(20, -100, 190, 128, "#ff9ab8", OUT, 6);
    for (var i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(-110 + i * 62, -100 + (i % 2) * 36, 40, PI * 1.1, PI * 1.9);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#d46a8c";
      ctx.stroke();
    }
    var n = Math.floor(u * 16 + 1);
    for (var j = 0; j < Math.min(16, n); j++) {
      var cx = -120 + hash(j * 7 + 1) * 280,
        cy = -170 + hash(j * 13 + 3) * 140;
      ci(cx, cy, 15, "#eafff8", OUT, 4);
      ci(cx + 2, cy, 5, "#17a89b");
    }
    ctx.restore();
    if (u > 0.35) {
      var k = backOut(R01(lt, sh.dur * 0.3, sh.dur * 0.45));
      ctx.save();
      ctx.translate(960, 150);
      ctx.scale(k, k);
      pill("TINY CYSTS", 0, 0, 40, "#161827", "#eafff8");
      ctx.restore();
      ln([840, 170, 640, 215], 6, "#eafff8");
    }
    if (o.calm || u > 0.6) {
      var k2 = backOut(R01(lt, sh.dur * 0.55, sh.dur * 0.7));
      ctx.save();
      ctx.translate(940, 470);
      ctx.scale(k2, k2);
      rr(-250, -90, 500, 180, 22, "rgba(255,255,255,.1)", "#fff", 5);
      tx("MOST PEOPLE:", 0, -34, 40, "#ffd92e");
      tx("NO SYMPTOMS", 0, 28, 58, "#ffffff");
      ctx.restore();
    }
    return { gy: 2000, s: 100 };
  }
  var panel = function (x0, w, inf) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x0, 0, w, H);
    ctx.clip();
    gr(x0, 0, w, 560, "#e9d8bb", "#cfb894");
    rr(x0 + 70, 90, 200, 220, 8, "#9fd6ff", OUT, 6);
    ln([x0 + 170, 90, x0 + 170, 310], 6, OUT);
    ln([x0 + 70, 200, x0 + 270, 200], 6, OUT);
    gr(x0, 560, w, 160, "#a87648", "#734d2d");
    ln([x0, 560, x0 + w, 560], 5, OUT);
    var cx = x0 + w - 170;
    drawCat(cx, 650, 225, 1, t, { asleep: 1 });
    for (var i = 0; i < 4; i++) {
      var p = (t * 0.8 + i * 0.25) % 1;
      ctx.globalAlpha = (1 - p) * 0.85;
      ctx.beginPath();
      ctx.arc(
        cx - 120 - p * 190,
        540 - 20 * Math.sin(p * 6 + i),
        12 + p * 16,
        -PI * 0.6,
        PI * 0.6,
      );
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#7fcf5a";
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    var e = ease(u),
      endx = x0 + w - 470,
      rx = inf ? lerp(x0 + 40, endx, e) : lerp(endx, x0 + 190, e);
    drawRat(rx, 660, 300, inf ? 1 : -1, t, {
      run: !inf && u < 1,
      walk: inf && u < 1,
      inf: inf,
    });
    if (!inf) tx("!", rx - 60, 470, 90, "#e02b1c");
    else if (u > 0.9) heart(endx + 150, 470, 34);
    ctx.restore();
  };
  if (st === "cat") {
    gr(0, 0, W, 560, "#e9d8bb", "#cfb894");
    gr(0, 560, W, 160, "#a87648", "#734d2d");
    ln([0, 560, W, 560], 5, OUT);
    drawCat(760, 660, 400, 1, t, { asleep: 1 });
    var hh = R01(lt, 0.8, 1.3);
    if (hh > 0) {
      ctx.save();
      ctx.translate(330, 360);
      ctx.scale(hh, hh);
      rr(-230, -150, 460, 300, 36, "#2a1e3a", OUT, 7);
      tx("TOXOPLASMA", 0, -70, 54, "#ff6a5a");
      tx("NEEDS A CAT", 0, 0, 54, "#ffffff");
      tx("TO FINISH ITS LIFE", 0, 70, 38, "#ffd92e");
      ctx.restore();
    }
    return { gy: 2000, s: 100 };
  }
  panel(0, 640, false);
  panel(640, 640, true);
  ln([640, 0, 640, H], 10, OUT);
  pill("NORMAL RAT", 320, 70, 34, "#161827", "#ffffff");
  pill("INFECTED RAT", 960, 70, 34, "#ffffff", "#d02a1c");
  return { gy: 2000, s: 100 };
};
BG.teaser = function (sh, t, lt) {
  var L = ["film68", "brains", "law", "puffer", "memo", "graph", "wasp", "ant"],
    seg = Math.max(0.5, (sh.dur - 1.2) / L.length),
    i = clamp(Math.floor(lt / seg), 0, L.length - 1),
    k = L[i];
  var MD = { puffer: "fish", wasp: "sting", ant: "bite", film68: "frame" },
    f = {
      o: { mode: MD[k], stage: "rat" },
      day: sh.day,
      i: sh.i,
      words: sh.words,
      dur: 6,
      pal: sh.pal,
      sp: sh.sp,
      bg: k,
    };
  var r = BG[k](f, t, 1.8 + clamp((lt - i * seg) / seg, 0, 1) * 1.4);
  var fl = 1 - clamp((lt - i * seg) / 0.14, 0, 1);
  ctx.fillStyle = "rgba(255,255,255," + fl * 0.75 + ")";
  ctx.fillRect(0, 0, W, H);
  ctx.save();
  ctx.translate(1120, 130);
  ctx.rotate(0.18);
  tx("?", 0, 0, 150, "rgba(255,255,255,.9)");
  ctx.restore();
  return r;
};

// ---------- facts ----------
BG.film68 = function (sh, t, lt) {
  var o = sh.o,
    m = o.mode || "frame",
    u = clamp(lt / sh.dur, 0, 1);
  if (m === "counter") {
    gr(0, 0, W, H, "#0b0b0b", "#1b1b1b");
    rr(70, 50, 1140, 620, 8, null, "#cfcfcf", 6);
    tx("NIGHT OF THE LIVING DEAD  ·  1968", 640, 118, 34, "#cfcfcf");
    tx("THE WORD 'ZOMBIE' IS SAID:", 640, 250, 64, "#f2f2f2");
    var k = backOut(R01(lt, 0.9, 1.3));
    ctx.save();
    ctx.translate(640, 440);
    ctx.scale(k, k);
    tx("0 TIMES", 0, 0, 200, "#ffffff");
    ctx.restore();
  } else {
    gr(0, 0, W, H, "#b4b4b4", "#2c2c2c");
    glow(1090, 250, 300, "rgba(255,255,255,.5)");
    ci(1090, 250, 64, "#f4f4f4");
    po([90, 480, 90, 320, 250, 220, 410, 320, 410, 480], "#141414");
    rr(190, 380, 70, 100, 2, "#cfcfcf");
    rr(120, 340, 40, 40, 2, "#cfcfcf");
    gr(0, 470, W, 250, "#202020", "#080808");
    for (var i = 0; i < 12; i++) {
      rr(i * 110 + 20, 440, 10, 70, 2, "#0d0d0d");
    }
    ln([0, 462, W, 462], 6, "#0d0d0d");
    for (var j = 0; j < 7; j++) {
      var s = 74 + (j % 3) * 22,
        x = 520 + j * 105 - u * 70,
        y = 560 + (j % 3) * 45;
      zSil(x, y, s, Math.sin(t * 1.8 + j) * 0.05);
    }
    if (o.num ? lt > 1.7 : sh.i < 14)
      tx("NIGHT OF THE LIVING DEAD", 640, 110, 58, "rgba(244,244,244,.92)");
  }
  rr(0, 0, W, 46, 0, "#000");
  rr(0, H - 46, W, 46, 0, "#000");
  srand(BO * 17 + 3);
  ctx.globalAlpha = 0.1;
  for (var q = 0; q < 700; q++) {
    ctx.fillStyle = rnd() > 0.5 ? "#fff" : "#000";
    ctx.fillRect(rnd() * W, rnd() * H, 2, 2);
  }
  ctx.globalAlpha = 1;
  for (var z = 0; z < 3; z++) {
    ctx.fillStyle = "rgba(255,255,255," + (0.06 + rnd() * 0.1) + ")";
    ctx.fillRect(rnd() * W, 0, 2, H);
  }
  ctx.fillStyle = "rgba(255,255,255," + 0.05 * Math.abs(Math.sin(t * 31)) + ")";
  ctx.fillRect(0, 0, W, H);
  return { gy: 2000, s: 100 };
};
BG.brains = function (sh, t, lt) {
  var o = sh.o;
  gr(0, 0, W, H, "#2a0f4a", "#12052a");
  var sun = ctx.createLinearGradient(0, 130, 0, 460);
  sun.addColorStop(0, "#ffd23f");
  sun.addColorStop(1, "#ff3f8f");
  ctx.fillStyle = sun;
  ctx.beginPath();
  ctx.arc(640, 330, 200, 0, 7);
  ctx.fill();
  ctx.fillStyle = "#2a0f4a";
  for (var i = 0; i < 6; i++) ctx.fillRect(430, 330 + i * 28, 420, 3 + i * 2.6);
  ctx.strokeStyle = "rgba(255,90,200,.7)";
  ctx.lineWidth = 3;
  for (var k = -8; k <= 8; k++) {
    ctx.beginPath();
    ctx.moveTo(640 + k * 30, 470);
    ctx.lineTo(640 + k * 190, 720);
    ctx.stroke();
  }
  for (var j = 0; j < 6; j++) {
    var yy = 470 + Math.pow(j / 5, 2) * 250;
    ctx.beginPath();
    ctx.moveTo(0, yy);
    ctx.lineTo(W, yy);
    ctx.stroke();
  }
  ctx.save();
  ctx.shadowColor = "#ff3fa0";
  ctx.shadowBlur = 30;
  tx("1985", 210, 140, 110, "#ffe6f6");
  ctx.restore();
  pill("THE RETURN OF THE LIVING DEAD", 380, 235, 28, "#fff", "#7b2fbf");
  SH._post = function () {
    if (!o.bub) return;
    var bx = 930,
      by = 150,
      wob = Math.sin(t * 7) * 4;
    ctx.save();
    ctx.translate(bx, by + wob);
    ctx.rotate(-0.04);
    po(
      [-220, -70, 220, -70, 220, 60, 90, 60, 50, 130, 30, 60, -220, 60],
      "#ffffff",
      OUT,
      7,
    );
    tx("BRAAAINS", 0, -5, 72, "#d02a1c");
    ctx.restore();
  };
  return { gy: 680, s: 190 };
};
BG.law = function (sh, t, lt) {
  gr(0, 0, W, H, "#4a2f1c", "#2a180c");
  for (var i = 0; i < 9; i++)
    ln([i * 160, 0, i * 160, H], 3, "rgba(0,0,0,.25)");
  rr(250, 100, 780, 500, 24, "#f3e6c4", OUT, 7);
  rr(226, 78, 828, 44, 22, "#e4cf9b", OUT, 6);
  rr(226, 580, 828, 44, 22, "#e4cf9b", OUT, 6);
  tx("ARTICLE 246", 640, 190, 92, "#7a2630");
  ln([360, 245, 920, 245], 5, "#7a2630");
  tx("HAITIAN PENAL CODE", 640, 280, 30, "#6b5a3a");
  var a = backOut(R01(lt, 0.6, 1.0)),
    b = backOut(R01(lt, 1.6, 2.0)),
    c = backOut(R01(lt, 2.6, 3.0));
  ctx.save();
  ctx.translate(390, 420);
  ctx.scale(a, a);
  rr(-26, -20, 52, 74, 14, "#9fd6ff", OUT, 5);
  rr(-12, -52, 24, 36, 6, "#f3e6c4", OUT, 5);
  rr(-14, -62, 28, 12, 4, "#8a5a3c", OUT, 4);
  tx("MAKE THEM LOOK DEAD", 0, 100, 22, "#3a2e2a");
  ctx.restore();
  ctx.save();
  ctx.translate(640, 420);
  ctx.scale(b, b);
  ci(-40, -10, 24, "#f0c9a8", OUT, 5);
  rr(-14, -34, 100, 44, 18, "#34428a", OUT, 5);
  ln([-48, -18, -32, -2], 4, OUT);
  ln([-48, -2, -32, -18], 4, OUT);
  tx("THEN BURY THEM", 20, 100, 22, "#3a2e2a");
  ctx.restore();
  ctx.save();
  ctx.translate(890, 420);
  ctx.scale(c, c);
  ctx.beginPath();
  ctx.moveTo(-40, 40);
  ctx.lineTo(-40, -30);
  ctx.arc(0, -30, 40, PI, 0);
  ctx.lineTo(40, 40);
  ctx.closePath();
  ctx.fillStyle = "#9aa3b2";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = OUT;
  ctx.stroke();
  ln([0, -40, 0, 0], 6, OUT);
  ln([-14, -24, 14, -24], 6, OUT);
  tx("= MURDER", 0, 100, 26, "#d02a1c");
  ctx.restore();
  ln([470, 420, 540, 420], 6, "#7a2630");
  ln([740, 420, 800, 420], 6, "#7a2630");
  var g = clamp(lt, 0, 5),
    ang =
      g < 0.5
        ? lerp(-0.9, 0.05, ease(g / 0.5))
        : g < 3.6
          ? 0.05
          : 0.05 + Math.sin((g - 3.6) * 10) * 0.0;
  ctx.save();
  ctx.translate(1110, 190);
  ctx.rotate(ang);
  rr(-12, 0, 24, 170, 8, "#8a5a3c", OUT, 5);
  rr(-70, -34, 140, 60, 12, "#a8723f", OUT, 5);
  ctx.restore();
  rr(1020, 380, 200, 30, 8, "#8a5a3c", OUT, 5);
  return { gy: 2000, s: 100 };
};
BG.puffer = function (sh, t, lt) {
  var m = sh.o.mode || "dead",
    u = clamp(lt / sh.dur, 0, 1);
  if (m === "fish") {
    gr(0, 0, W, H, "#1f8fa8", "#0b3a52");
    for (var i = 0; i < 14; i++) {
      var p = (t * 0.2 + i * 0.071) % 1;
      ci(
        120 + i * 85 + Math.sin(t + i) * 12,
        700 - p * 720,
        6 + (i % 4) * 4,
        "rgba(255,255,255,.25)",
        "rgba(255,255,255,.5)",
        2,
      );
    }
    var k = ease(R01(lt, 0.4, 1.6));
    drawPuffer(640, 360, 360, k, t);
    pill("PUFFERFISH POISON", 640, 120, 44, "#161827", "#ffd92e");
    var dd = backOut(R01(lt, 2.2, 2.6));
    if (sh.o.stamp && dd > 0) {
      ctx.save();
      ctx.translate(980, 540);
      ctx.rotate(-0.18);
      ctx.scale(dd, dd);
      rr(-190, -64, 380, 128, 14, null, "#ff4a3a", 12);
      tx("DISPUTED", 0, 4, 78, "#ff4a3a");
      ctx.restore();
    }
    return { gy: 2000, s: 100 };
  }
  gr(0, 0, W, H, "#1b2440", "#0b1022");
  glow(640, 360, 560, "rgba(120,150,255,.14)");
  if (m === "awake") {
    var o2 = ease(R01(lt, 0.3, 1.2));
    el(640, 340, 330, 150 * o2 + 6, "#f4f4f4", OUT, 9);
    ci(640, 340, 110 * Math.min(1, o2 + 0.2), "#5a8a4a", OUT, 7);
    ci(640, 340, 54, "#161827");
    ci(670, 310, 18, "#fff");
    pill("AWAKE", 400, 560, 54, "#161827", "#ffd92e", -0.06);
    pill("CANNOT MOVE", 880, 560, 54, "#fff", "#d02a1c", 0.05);
    return { gy: 2000, s: 100 };
  }
  var a = ease(R01(lt, 0.15, 0.8)),
    big = m === "dead";
  ctx.save();
  ctx.translate(big ? 640 : 330, 330);
  ctx.scale((big ? 1.25 : 1) * a, (big ? 1.25 : 1) * a);
  ctx.beginPath();
  ctx.moveTo(-110, 150);
  ctx.lineTo(-110, -60);
  ctx.arc(0, -60, 110, PI, 0);
  ctx.lineTo(110, 150);
  ctx.closePath();
  ctx.fillStyle = "#9aa3b2";
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = OUT;
  ctx.stroke();
  ln([0, -110, 0, -20], 10, OUT);
  ln([-30, -86, 30, -86], 10, OUT);
  tx("1962", 0, 60, 70, "#161827");
  ctx.restore();
  if (big) pill("DECLARED DEAD", 640, 590, 46, "#fff", "#d02a1c");
  if (!big) {
    var b = ease(R01(lt, 1.0, 1.7));
    ctx.save();
    ctx.translate(950, 330);
    ctx.scale(b, b);
    po([-130, -10, 0, -130, 130, -10], "#d9604a", OUT, 7);
    rr(-100, -10, 200, 160, 6, "#f3e6c4", OUT, 7);
    rr(-26, 50, 52, 100, 4, "#8a5a3c", OUT, 5);
    rr(50, 30, 40, 40, 3, "#9fd6ff", OUT, 5);
    tx("1980", 0, -40, 54, "#fff");
    ctx.restore();
    var aa = R01(lt, 0.7, 1.2);
    if (aa > 0) {
      arrow5(480, 330, lerp(480, 780, aa), 330, "#ffd92e");
      pill("18 YEARS", 630, 250, 40, "#161827", "#ffd92e", -0.03);
    }
    pill("WALKS HOME", 950, 560, 44, "#fff", "#2f9e55");
  }
  return { gy: 2000, s: 100 };
};
BG.cane = function (sh, t, lt) {
  var o = sh.o,
    u = clamp(lt / sh.dur, 0, 1),
    d = o.dusk ? 1 : 0;
  gr(0, 0, W, 560, d ? "#3a1f4a" : "#f08a3c", d ? "#c0502e" : "#ffd0a0");
  var sy = lerp(d ? 450 : 400, d ? 540 : 470, u);
  glow(640, sy, 420, d ? "rgba(255,120,60,.55)" : "rgba(255,230,160,.7)");
  ci(640, sy, 100, d ? "#ffb070" : "#fff0c0");
  for (var i = 0; i < 4; i++)
    el(160 + i * 340, 520, 260, 60, d ? "#2a1636" : "#7a4a60");
  gr(0, 560, W, 160, d ? "#1d1226" : "#3a2a1e", "#0e0814");
  for (var L = 0; L < 3; L++) {
    var col = ["#6a7a3a", "#4a5a28", "#2a3818"][L];
    for (var x = -20 + L * 14; x < W + 40; x += 30 - L * 4) {
      var sw = Math.sin(t * 1.2 + x * 0.02 + L) * 8,
        top = 300 + L * 70 + ((x * 7) % 40);
      ln([x, 640 + L * 20, x + sw * 0.5, 500, x + sw, top], 7 + L * 2, col);
      ln([x + sw, top, x + sw + 36, top + 40], 5, col);
      ln([x + sw, top + 14, x + sw - 34, top + 56], 5, col);
    }
  }
  for (var p = 0; p < 7; p++) {
    var px = ((p * 190 + t * 22) % 1500) - 100,
      bob = Math.sin(t * 2 + p) * 3;
    ci(px, 560 + bob, 17, "#0d0612");
    ctx.save();
    ctx.translate(px, 600 + bob);
    ctx.rotate(0.2);
    rr(-14, -30, 28, 70, 12, "#0d0612");
    ctx.restore();
    ln([px, 640, px - 8, 690], 12, "#0d0612");
    ln([px + 6, 640, px + 16, 690], 12, "#0d0612");
  }
  if (o.word) {
    var wa = ease(R01(lt, 0.4, 1.4));
    ctx.save();
    ctx.globalAlpha = wa;
    ctx.shadowColor = "rgba(255,220,160,.9)";
    ctx.shadowBlur = 40;
    tx("ZONBI", 640, 150, 120, "#fff4e0");
    ctx.restore();
  }
  return { gy: 2000, s: 100 };
};
BG.memo = function (sh, t, lt) {
  var o = sh.o;
  gr(0, 0, W, H, "#6a4a30", "#4a301c");
  for (var i = 0; i < 8; i++)
    ln([0, i * 95, W, i * 95 + 14], 3, "rgba(0,0,0,.14)");
  if (o.mode === "twist") {
    var items = [
      ["HURRICANE", 300],
      ["EARTHQUAKE", 640],
      ["FLOOD", 980],
    ];
    items.forEach(function (it, i) {
      var k = backOut(R01(lt, 0.3 + i * 0.35, 0.7 + i * 0.35));
      ctx.save();
      ctx.translate(it[1], 300);
      ctx.scale(k, k);
      ci(0, 0, 130, "#1b2440", OUT, 8);
      if (i === 0) {
        ctx.beginPath();
        for (var a = 0; a < 14; a += 0.2) {
          var r = a * 7;
          ctx.lineTo(Math.cos(a + t * 3) * r, Math.sin(a + t * 3) * r);
        }
        ctx.lineWidth = 9;
        ctx.strokeStyle = "#9fd6ff";
        ctx.stroke();
      }
      if (i === 1) {
        ln(
          [-90, -10, -40, 10, -10, -20, 30, 20, 60, -10, 90, 10],
          10,
          "#ffd92e",
        );
        ln([-90, 50, 90, 50], 10, "#8a5a3c");
      }
      if (i === 2) {
        for (var w = 0; w < 3; w++) {
          ctx.beginPath();
          for (var x = -90; x <= 90; x += 10)
            ctx.lineTo(x, -30 + w * 34 + Math.sin(x * 0.1 + t * 4 + w) * 9);
          ctx.lineWidth = 9;
          ctx.strokeStyle = "#4ab8ff";
          ctx.stroke();
        }
      }
      pill(it[0], 0, 175, 32, "#161827", "#fff");
      ctx.restore();
    });
    var kk = backOut(R01(lt, 1.6, 2.1));
    ctx.save();
    ctx.translate(640, 560);
    ctx.scale(kk, kk);
    pill("ONE KIT FOR ALL OF THEM", 0, 0, 52, "#fff", "#2f9e55");
    ctx.restore();
    return { gy: 2000, s: 100 };
  }
  ctx.save();
  ctx.translate(640, 398);
  ctx.rotate(-0.03);
  rr(-310, -340, 620, 680, 10, "#f7f4ea", OUT, 7);
  ln([-280, -130, 280, -130], 4, "#c9c2ae");
  tx("HEALTH AGENCY BLOG · 2011", 0, -300, 22, "#7a7a6a");
  tx("PREPAREDNESS 101", 0, -232, 54, "#161827");
  tx("ZOMBIE APOCALYPSE", 0, -168, 46, "#d02a1c");
  var rows = ["WATER", "FOOD", "MEDICINE", "DOCUMENTS"];
  rows.forEach(function (r, i) {
    var y = -95 + i * 80,
      on = R01(lt, 0.8 + i * 0.75, 1.1 + i * 0.75);
    rr(-230, y - 28, 56, 56, 6, "#fff", OUT, 5);
    tx(r, -140, y, 46, "#161827", "left");
    if (on > 0) ln([-222, y, -206, y + 18, -180, y - 22], 10, "#2f9e55");
  });
  ctx.restore();
  return { gy: 2000, s: 100 };
};
BG.graph = function (sh, t, lt) {
  var fast = sh.o.mode === "fast",
    p = clamp(lt / (sh.dur * 0.75), 0, 1);
  gr(0, 0, W, H, "#0e2a4a", "#071526");
  for (var i = 0; i <= 10; i++) {
    ln([170 + i * 96, 170, 170 + i * 96, 590], 1.5, "rgba(255,255,255,.08)");
  }
  for (var j = 0; j <= 4; j++)
    ln([170, 170 + j * 105, 1130, 170 + j * 105], 1.5, "rgba(255,255,255,.08)");
  ln([170, 170, 170, 590, 1130, 590], 6, "#e8f0ff");
  tx("TIME →", 1050, 625, 26, "#9fb6d8");
  pill(
    fast ? "FAST RESPONSE" : "2009 ZOMBIE MODEL",
    640,
    135,
    38,
    "#161827",
    "#ffd92e",
  );
  var Z = function (x) {
      return fast
        ? 0.42 * Math.exp(-Math.pow((x - 0.2) / 0.14, 2))
        : 1 / (1 + Math.exp(-13 * (x - 0.42)));
    },
    Hh = function (x) {
      return fast ? 1 - 0.9 * Z(x) : 1 - Z(x);
    };
  [
    [Hh, "#4cd37a"],
    [Z, "#ff4a3a"],
  ].forEach(function (c) {
    ctx.beginPath();
    for (var x = 0; x <= p + 0.0001; x += 0.01) {
      var X = 170 + x * 960,
        Y = 590 - c[0](x) * 400;
      x === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y);
    }
    ctx.lineWidth = 12;
    ctx.strokeStyle = OUT;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.lineWidth = 7;
    ctx.strokeStyle = c[1];
    ctx.stroke();
  });
  pill("HUMANS", 330, 215, 30, "#161827", "#4cd37a");
  pill("ZOMBIES", 520, 215, 30, "#fff", "#d02a1c");
  var e = backOut(R01(lt, sh.dur * 0.72, sh.dur * 0.9));
  if (e > 0) {
    ctx.save();
    ctx.translate(fast ? 760 : 560, fast ? 300 : 430);
    ctx.scale(e, e);
    ctx.rotate(-0.05);
    pill(
      fast ? "HUMANS WIN" : "CIVILIZATION COLLAPSES",
      0,
      0,
      46,
      "#fff",
      fast ? "#2f9e55" : "#d02a1c",
    );
    ctx.restore();
  }
  return { gy: 2000, s: 100 };
};
BG.wasp = function (sh, t, lt) {
  var m = sh.o.mode || "intro",
    u = clamp(lt / (sh.dur * 0.92), 0, 1);
  if (m === "egg" || m === "egg2") {
    gr(0, 0, W, H, "#5a3a22", "#2a180c");
    srand(5);
    for (var i = 0; i < 40; i++)
      ci(rnd() * W, rnd() * H, 4 + rnd() * 14, "rgba(0,0,0,.14)");
    srand(BO);
    el(640, 400, 520, 250, "#1b0f07", OUT, 8);
    drawRoach(500, 470, 380, 1, t, { dazed: 1, twitch: 1 });
    var ek = backOut(R01(lt, 0.5, 1.0));
    if (m === "egg") {
      ctx.save();
      ctx.translate(560, 340);
      ctx.scale(ek, ek);
      el(0, 0, 36, 50, "#f8f3e0", OUT, 6, 0.2);
      ctx.restore();
      pill("ONE EGG", 560, 220, 44, "#161827", "#ffd92e");
    } else {
      var lk = ease(R01(lt, 0.5, 2.6));
      ctx.save();
      ctx.translate(590, 360);
      ctx.rotate(-0.2);
      for (var s = 0; s < 4; s++)
        el(
          -30 + s * 30 + Math.sin(t * 5 + s) * 3,
          Math.sin(t * 6 + s) * 4,
          34 * (0.6 + lk * 0.5),
          28 * (0.6 + lk * 0.5),
          s ? "#f2e6bc" : "#f8f3e0",
          OUT,
          5,
        );
      ctx.restore();
      pill("STILL ALIVE", 880, 250, 48, "#fff", "#d02a1c", 0.06);
    }
    return { gy: 2000, s: 100 };
  }
  gr(0, 0, W, 470, "#8fd3ff", "#d8f1ff");
  glow(1080, 100, 220, "rgba(255,255,220,.9)");
  for (var h = 0; h < 4; h++) el(120 + h * 380, 480, 300, 80, "#5fbf5a");
  gr(470, 470, W, 130, "#5fbf5a", "#3f9a46");
  gr(0, 600, W, 120, "#7a5233", "#4a2f1c");
  ln([0, 600, W, 600], 5, OUT);
  srand(8);
  for (var b = 0; b < 40; b++) {
    var bx = rnd() * W;
    ln([bx, 600, bx + (rnd() - 0.5) * 14, 560 - rnd() * 24], 4, "#2f7a3a");
  }
  srand(BO);
  el(1100, 610, 150, 46, "#2a1a10", OUT, 6);
  if (m === "intro") {
    drawWasp(640, 330 + Math.sin(t * 3) * 14, 520, 1, t);
    pill("EMERALD COCKROACH WASP", 640, 130, 46, "#161827", "#4cf0b0", 0);
  }
  if (m === "sting" || m === "sting2") {
    var wy = 300 + Math.sin(t * 3) * 10, wxs = m === "sting2" ? 420 - R01(lt, 0, 4) * 60 : 420;
    drawRoach(560, 640, 330, 1, t, {
      dazed: m === "sting2",
      walk: m === "sting2",
      twitch: m === "sting" && lt > 0.9,
    });
    drawWasp(wxs, wy, 330, -1, t);
    if (m === "sting") {
      ln([wxs + 310, wy + 40, 735, 568], 7, "#161827");
      if (lt > 0.5 && lt < 1.6) {
        var zz = (lt - 0.5) * 12;
        for (var q = 0; q < 10; q++) {
          var a = (q / 10) * PI * 2 + zz, r1 = 26, r2 = 70 + ((zz * 8) % 36);
          ln([735 + Math.cos(a) * r1, 575 + Math.sin(a) * r1, 735 + Math.cos(a) * r2, 575 + Math.sin(a) * r2], 7, "#ffe21f");
        }
        tx("ZAP", 800, 470, 84, "#ffe21f");
      }
    } else pill("STILL WALKS. NO ESCAPE.", 640, 130, 42, "#fff", "#7b2fbf");
  }
  if (m === "lead") {
    var wx = lerp(840, 1040, u),
      rx = wx - 640 + Math.sin(t * 2) * 4;
    drawRoach(rx, 640, 330, 1, t, { dazed: 1, walk: 1, noAnt: 1 });
    var hx = rx + 330 * 1.02,
      hy = 640 - 330 * 0.46;
    ln([hx, hy, hx + (wx - 112 - hx) * 0.5, hy + 30, wx - 112, 560 - 36], 8, "#2a1a10");
    drawWasp(wx, 560 - 20 + Math.sin(t * 12) * 3, 280, -1, t);
    pill("LIKE A DOG ON A LEASH", 520, 130, 44, "#161827", "#ffd92e");
  }
  return { gy: 2000, s: 100 };
};
BG.ant = function (sh, t, lt) {
  var m = sh.o.mode || "climb",
    u = clamp(lt / (sh.dur * 0.95), 0, 1);
  if (m === "muscle0" || m === "muscle") {
    gr(0, 0, W, H, "#0b1c2a", "#06101a");
    var g = m === "muscle" ? ease(R01(lt, 0.6, 3.2)) : 0;
    el(860, 400, 190, 130, "#7a2e1c", OUT, 7);
    el(640, 380, 150, 100, "#8a3a24", OUT, 7);
    ci(470, 360, 105, "#7a2e1c", OUT, 7);
    ci(430, 330, 24, "#fff", OUT, 4);
    ci(436, 332, 10, "#161827");
    for (var i = 0; i < 6; i++) {
      var lx = 560 + i * 50,
        pts = [
          lx,
          460,
          lx + ((i % 3) - 1) * 60,
          560,
          lx + ((i % 3) - 1) * 110,
          650,
        ];
      ln(pts, 24, OUT);
      ln(pts, 16, "#8a3a24");
    }
    glow(480, 350, 120, "rgba(120,200,255,.55)");
    el(485, 350, 54, 40, "#ff9ab8", OUT, 5);
    for (var k = 0; k < 9; k++) {
      var p0 = 560 + k * 26;
      ln([p0, 330, p0 + 12, 380, p0, 430], 10, "#e0607a");
    }
    for (var f = 0; f < 14; f++) {
      if (f / 14 > g) break;
      var fx = 540 + f * 22;
      ctx.beginPath();
      ctx.moveTo(fx, 300);
      for (var y = 300; y <= 470; y += 10)
        ctx.lineTo(fx + Math.sin(y * 0.12 + f) * 12, y);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#7dff7a";
      ctx.stroke();
    }
    if (m === "muscle") {
      pill("BRAIN: NOT INVADED", 400, 150, 40, "#161827", "#9fe3ff");
      arrow5(430, 200, 470, 300, "#9fe3ff");
      pill("MUSCLES: TAKEN OVER", 860, 190, 40, "#161827", "#7dff7a", 0.03);
    } else pill("THE BRAIN?", 440, 160, 44, "#fff", "#7b2fbf");
    return { gy: 2000, s: 100 };
  }
  gr(0, 0, W, H, "#12351f", "#0a1f12");
  glow(300, 120, 420, "rgba(160,255,160,.25)");
  srand(21);
  for (var l = 0; l < 14; l++) {
    ctx.save();
    ctx.translate(rnd() * W, rnd() * 500);
    ctx.rotate(rnd() * 6);
    el(
      0,
      0,
      90 + rnd() * 80,
      26 + rnd() * 20,
      "rgba(" +
        ((30 + rnd() * 30) | 0) +
        "," +
        ((90 + rnd() * 60) | 0) +
        ",50,.55)",
    );
    ctx.restore();
  }
  srand(BO);
  gr(0, 610, W, 110, "#3a2a1a", "#241810");
  ln([0, 610, W, 610], 5, OUT);
  var stem = [];
  for (var i = 0; i <= 12; i++) {
    var p = i / 12;
    stem.push(lerp(330, 780, p) + Math.sin(p * 3) * 20, lerp(620, 250, p));
  }
  ln(stem, 34, OUT);
  ln(stem, 24, "#2f7a3a");
  ctx.save();
  ctx.translate(900, 245);
  ctx.rotate(-0.08);
  el(0, 0, 150, 48, "#4cb050", OUT, 6);
  ln([-150, 0, 150, 0], 5, "#2f7a3a");
  ctx.restore();
  var p1 = ease(clamp(u / (m === "climb" ? 0.9 : 0.02), 0, 1));
  if (m !== "climb") p1 = 1;
  var idx = Math.min(11, Math.floor(p1 * 12)),
    ax = stem[idx * 2],
    ay = stem[idx * 2 + 1] - 24,
    ax2 = stem[idx * 2 + 2],
    ay2 = stem[idx * 2 + 3] - 24,
    rot = Math.atan2(ay2 - ay, ax2 - ax);
  if (m !== "climb") {
    ax = 860;
    ay = 214;
    rot = 0.35;
  }
  drawAnt(ax, ay, 110, rot, t * 9 * (m === "climb" ? 1 : 0), {
    col: m === "grow" || m === "bite" ? "#6a2a1a" : "#7a2e1c",
  });
  if (m === "bite" || m === "grow") {
    pill("NOON", 700, 130, 50, "#161827", "#ffd92e");
    ci(520, 130, 36, "#fff", OUT, 6);
    ln([520, 130, 520, 106], 5, OUT);
    ln([520, 130, 536, 130], 5, OUT);
  }
  if (m === "grow") {
    var gk = ease(R01(lt, 0.3, 1.8));
    var hx = ax + 36,
      hy = ay - 30;
    ln([hx, hy, hx + 20, hy - 90 * gk, hx + 60, hy - 180 * gk], 12, OUT);
    ln([hx, hy, hx + 20, hy - 90 * gk, hx + 60, hy - 180 * gk], 7, "#e8d27a");
    ci(hx + 60, hy - 180 * gk, 22 * gk + 2, "#f2e8a0", OUT, 5);
    for (var s = 0; s < 26; s++) {
      var sp = (t * 0.5 + s * 0.0385) % 1,
        sx = hx + 60 + Math.sin(s * 3.1 + t) * (30 + sp * 200),
        sy = hy - 160 + sp * 760;
      if (sy < 640 && gk > 0.8) ci(sx, sy, 4, "#f6eeb0");
    }
    for (var a = 0; a < 3; a++)
      drawAnt(((t * 40 + a * 380) % 1500) - 100, 660, 70, 0, t * 9, {
        col: "#6a2a1a",
      });
  }
  return { gy: 2000, s: 100 };
};

// ---------- overlays ----------
tag = function (sh, t) {
  if (!sh.day) return;
  var first = TL.shots.find(function (s) {
      return s.day === sh.day;
    }),
    k = clamp((t - first.start) / 0.3, 0, 1),
    m = sh.day.match(/FACT (\d+)/);
  ctx.font = "900 24px Inter";
  var w = ctx.measureText(sh.day).width + 56 + (m ? 236 : 0);
  ctx.save();
  ctx.translate(lerp(-w, 34, backOut(k)), 30);
  rr(0, 0, w, 48, 24, "rgba(11,12,20,.85)");
  ci(24, 24, 7, Math.sin(t * 5) > 0 ? "#ff5a4a" : "#7a2222");
  tx(sh.day, 40, 25, 24, "#fff", "left");
  if (m)
    for (var i = 0; i < 10; i++) {
      var n = 10 - i;
      ci(
        w - 226 + i * 21 + 10,
        24,
        6.5,
        n === +m[1] ? "#ffd92e" : n > +m[1] ? "#5ad17a" : "#3a4160",
      );
    }
  ctx.restore();
};
function numSlam(o, lt) {
  if (lt > 1.7) return;
  var sc = lt < 0.3 ? lerp(3, 1, backOut(lt / 0.3)) : 1,
    a = lt > 1.3 ? 1 - (lt - 1.3) / 0.4 : 1;
  ctx.save();
  ctx.globalAlpha = Math.max(0, a);
  var ring = lt / 0.5;
  if (ring < 1) {
    ctx.globalAlpha = (1 - ring) * 0.8;
    ctx.lineWidth = 24;
    ctx.strokeStyle = "#ffd92e";
    ctx.beginPath();
    ctx.arc(640, 250, 80 + ring * 520, 0, 7);
    ctx.stroke();
    ctx.globalAlpha = Math.max(0, a);
  }
  ctx.translate(640, 240);
  ctx.scale(sc, sc);
  ctx.font = "900 330px Inter";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.shadowColor = "rgba(0,0,0,.85)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 14;
  ctx.lineWidth = 70;
  ctx.strokeStyle = "#0b0c14";
  ctx.strokeText(String(o.num), 0, 0);
  ctx.shadowColor = "transparent";
  var g = ctx.createLinearGradient(0, -150, 0, 150);
  g.addColorStop(0, "#fff36a");
  g.addColorStop(1, "#ff9a1a");
  ctx.fillStyle = g;
  ctx.fillText(String(o.num), 0, 0);
  ctx.restore();
  if (o.numtitle) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, a) * clamp((lt - 0.25) / 0.2, 0, 1);
    ctx.translate(640, 440);
    ctx.font = "900 64px Inter";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    ctx.lineWidth = 18;
    ctx.strokeStyle = "#0b0c14";
    ctx.strokeText(o.numtitle, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(o.numtitle, 0, 0);
    ctx.restore();
  }
}
var _render5 = render;
render = window.render = function (t) {
  _render5(t);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (SH && SH.o && SH.o.num) numSlam(SH.o, LT);
};

// ---------- patched scenes (override earlier versions) ----------
BG.grid = function (sh, t, lt) {
  gr(0, 0, W, H, '#0d1330', '#05070f'); glow(640, 330, 700, 'rgba(255,60,50,.10)');
  for (var i = 0; i < 30; i++) {
    var c = i % 10, r = Math.floor(i / 10), x = 130 + c * 113, y = 250 + r * 140, inf = (i % 3 === 1), j = Math.floor(i / 3), k = inf ? R01(lt, .5 + j * .2, .8 + j * .2) : 0;
    rr(x - 31, y + 28, 62, 70, 22, k > 0 ? '#7a3a5a' : '#34428a', OUT, 5); ci(x, y, 34, '#f0c9a8', OUT, 5);
    if (k > 0) glow(x, y, 92, 'rgba(255,40,40,.95)', k * (.55 + .25 * Math.sin(t * 6 + i)));
    var ec = k > 0 ? '#ff2a1a' : '#161827'; ci(x - 12, y - 3, k > 0 ? 6 : 4.2, ec); ci(x + 12, y - 3, k > 0 ? 6 : 4.2, ec); ln([x - 8, y + 14, x + 8, y + 14], 3.5, OUT);
    if (k > 0) for (var q = 0; q < 5; q++) ci(x - 16 + q * 8 + Math.sin(t * 5 + q + i) * 2, y - 22 + Math.cos(t * 4 + q * 2) * 2, 4 * k, '#ff3b30');
  }
  var big = backOut(R01(lt, 2.6, 3.1)); if (big > 0) { ctx.save(); ctx.translate(640, 112); ctx.scale(big, big); ctx.shadowColor = 'rgba(255,60,50,.9)'; ctx.shadowBlur = 40; ctx.lineJoin = 'round'; ctx.lineWidth = 24; ctx.strokeStyle = '#0b0c14'; ctx.font = '900 140px Inter'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.strokeText('1 IN 3', 0, 0); ctx.shadowBlur = 0; tx('1 IN 3', 0, 0, 140, '#fff4ea'); ctx.restore() }
  return { gy: 2000, s: 100 };
};
BG.law = function (sh, t, lt) {
  gr(0, 0, W, H, '#4a2f1c', '#2a180c'); for (var i = 0; i < 9; i++) ln([i * 160, 0, i * 160, H], 3, 'rgba(0,0,0,.25)');
  rr(250, 90, 780, 520, 24, '#f3e6c4', OUT, 7); rr(226, 68, 828, 44, 22, '#e4cf9b', OUT, 6); rr(226, 590, 828, 44, 22, '#e4cf9b', OUT, 6);
  tx('ARTICLE 246', 640, 175, 96, '#7a2630'); ln([360, 232, 920, 232], 5, '#7a2630'); tx('HAITIAN PENAL CODE', 640, 268, 32, '#6b5a3a');
  var a = backOut(R01(lt, .6, 1.0)), b = backOut(R01(lt, 1.6, 2.0)), c = backOut(R01(lt, 2.8, 3.2));
  ctx.save(); ctx.translate(380, 410); ctx.scale(a * 1.6, a * 1.6); rr(-26, -20, 52, 74, 14, '#9fd6ff', OUT, 5); rr(-12, -52, 24, 36, 6, '#f3e6c4', OUT, 5); rr(-14, -62, 28, 12, 4, '#8a5a3c', OUT, 4); ctx.restore();
  ctx.save(); ctx.globalAlpha = clamp(a, 0, 1); tx('MAKE THEM', 380, 520, 30, '#3a2e2a'); tx('LOOK DEAD', 380, 552, 30, '#3a2e2a'); ctx.restore();
  ctx.save(); ctx.translate(640, 410); ctx.scale(b * 1.6, b * 1.6); ci(-40, -10, 24, '#f0c9a8', OUT, 5); rr(-14, -34, 100, 44, 18, '#34428a', OUT, 5); ln([-48, -18, -32, -2], 4, OUT); ln([-48, -2, -32, -18], 4, OUT); ctx.restore();
  ctx.save(); ctx.globalAlpha = clamp(b, 0, 1); tx('THEN BURY', 650, 520, 30, '#3a2e2a'); tx('THEM', 650, 552, 30, '#3a2e2a'); ctx.restore();
  ctx.save(); ctx.translate(900, 410); ctx.scale(c * 1.6, c * 1.6); ctx.beginPath(); ctx.moveTo(-40, 40); ctx.lineTo(-40, -30); ctx.arc(0, -30, 40, PI, 0); ctx.lineTo(40, 40); ctx.closePath(); ctx.fillStyle = '#9aa3b2'; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = OUT; ctx.stroke(); ln([0, -40, 0, 0], 6, OUT); ln([-14, -24, 14, -24], 6, OUT); ctx.restore();
  ctx.save(); ctx.globalAlpha = clamp(c, 0, 1); tx('= MURDER', 900, 536, 46, '#d02a1c'); ctx.restore();
  ln([470, 410, 540, 410], 7, '#7a2630'); ln([760, 410, 800, 410], 7, '#7a2630');
  var g = clamp(lt, 0, 5), ang = g < .5 ? lerp(-.9, .05, ease(g / .5)) : .05; ctx.save(); ctx.translate(1110, 180); ctx.rotate(ang); rr(-12, 0, 24, 170, 8, '#8a5a3c', OUT, 5); rr(-70, -34, 140, 60, 12, '#a8723f', OUT, 5); ctx.restore(); rr(1020, 370, 200, 30, 8, '#8a5a3c', OUT, 5);
  return { gy: 2000, s: 100 };
};
