// ===== film 2 extension: animated arms, office sets, fx =====
const SK2 = {
  hero: "#e8c4a2",
  hero0: "#e8c4a2",
  ben: "#c99873",
  boss: "#cfcdb8",
  leo: "#f0d2b6",
  frank: "#b98660",
};
const CL2 = {
  hero: "#5f7b47",
  hero0: "#5f7b47",
  ben: "#55729a",
  boss: "#5a5d6a",
  zboss: "#5a5d6a",
  leo: "#d8b04c",
  zleo: "#d8b04c",
  frank: "#2f3a55",
  soldier: "#4d5a3a",
  biter: "#3b3f55",
};
person = function (o) {
  const k = o.k,
    small = k === "leo" || k === "zleo",
    s = o.s * (small ? 0.86 : 1),
    x = o.x,
    y = o.y,
    f = o.f || 1,
    lw = Math.max(1.6, s * 0.04);
  const z = k[0] === "z" || k === "biter",
    ci = o.ci || 0,
    t = TT,
    id = x * 0.013 + ci;
  if (o.sil) {
    ctx.fillStyle = "#17131a";
    ctx.beginPath();
    ctx.arc(x, y - 1.6 * s, 0.23 * s, 0, 7);
    ctx.fill();
    ctx.fillRect(x - 0.2 * s, y - 1.38 * s, 0.4 * s, 1.4 * s);
    return;
  }
  let l1 = 0,
    by = 0;
  const run = o.run && o.walk != null;
  if (o.walk != null) {
    l1 = Math.sin(o.walk) * (run ? 0.36 : 0.2);
    by = -Math.abs(Math.cos(o.walk)) * (run ? 0.07 : 0.03);
  }
  if (o.talk) by += Math.sin(t * 9) * 0.008;
  ctx.save();
  if (o.lie) {
    ctx.translate(x, y - 0.95 * s);
    ctx.rotate(1.35 * f);
    ctx.translate(-x, -(y - 0.2 * s));
  } else {
    const lean = (run ? 0.2 : z ? 0.1 : o.scared ? -0.06 : 0) * f;
    ctx.translate(x, y);
    ctx.rotate(lean);
    ctx.translate(-x, -y);
  }
  const Q = (u, v) => [x + u * s * f, y + v * s];
  const skin = z ? "#9ea896" : SK2[k] || SKN[ci % 4];
  // legs with knees
  const hip = Q(0, -0.78 + by);
  for (const a of [l1, -l1]) {
    const lift = run ? Math.max(0, -a) * 0.55 : 0;
    const kn = Q(a * 0.7 + (run ? 0.1 : 0), -0.4 + by * 0.5 - lift * 0.3),
      ft = Q(a * 1.7 - (run ? lift * 0.5 : 0), -lift);
    L([...hip, ...kn, ...ft, ft[0] + 0.12 * s * f, ft[1]], lw);
  }
  const sh = Q(0.02, -1.3 + by);
  const arm = (a1, a2, item) => {
    const e = [
        sh[0] + Math.sin(a1) * 0.3 * s * f,
        sh[1] + Math.cos(a1) * 0.3 * s,
      ],
      h = [e[0] + Math.sin(a2) * 0.3 * s * f, e[1] + Math.cos(a2) * 0.3 * s];
    L([...sh, ...e, ...h], lw);
    C(
      h[0],
      h[1],
      lw * 0.85,
      k === "boss" || k === "zboss" ? "#f1efe6" : skin,
      lw * 0.5,
    );
    if (item) drawItem(item, h, s, f, lw);
    return h;
  };
  let A, B; // front, back [a1,a2]
  if (z) {
    A = [
      1.3 + Math.cos(t * 3.3 + id) * 0.18,
      1.5 + Math.cos(t * 4.6 + id) * 0.3,
    ];
    B = [1.5 + Math.sin(t * 3 + id) * 0.18, 1.6 + Math.sin(t * 4.1 + id) * 0.3];
  } else if (run) {
    A = [l1 * 2.4, l1 * 2.4 + 1.35];
    B = [-l1 * 2.4, -l1 * 2.4 + 1.35];
  } else if (o.scared) {
    A = [2.3 + Math.sin(t * 21 + id) * 0.1, 2.9 + Math.sin(t * 17) * 0.12];
    B = [2.0 + Math.cos(t * 19 + id) * 0.1, 2.7];
  } else if (o.type) {
    A = [0.55, 1.5 + Math.sin(t * 19) * 0.12];
    B = [0.45, 1.45 + Math.cos(t * 17) * 0.12];
  } else if (o.talk) {
    A = [
      0.75 + Math.sin(t * 4.3 + id) * 0.3,
      2.0 + Math.sin(t * 6.7 + id) * 0.55,
    ];
    B = [0.2 + Math.sin(t * 3.1) * 0.12, 0.9 + Math.sin(t * 5.3 + 1) * 0.35];
  } else if (o.walk != null) {
    A = [l1 * 1.6, l1 * 1.6 + 0.3];
    B = [-l1 * 1.6, -l1 * 1.6 + 0.3];
  } else {
    A = [
      0.08 + Math.sin(t * 1.4 + id) * 0.04,
      0.16 + Math.sin(t * 1.4 + id) * 0.05,
    ];
    B = [-0.05 - Math.sin(t * 1.4 + id) * 0.04, 0.1];
  }
  if (o.arm === "up")
    A = [2.5 + Math.sin(t * 3 + id) * 0.05, 2.95 + Math.sin(t * 5 + id) * 0.08];
  if (o.arm === "fwd") A = [1.3, 1.5];
  if (o.item === "cup" && !o.talk)
    A = [0.5, 1.9 + Math.sin(t * 1.2 + id) * 0.12];
  if (o.item === "ext") {
    A = [1.2, 1.55 + Math.sin(t * 25) * 0.03];
    B = [1.0, 1.5];
  }
  if (o.item === "radio") A = [1.6, 2.9];
  arm(B[0], B[1]);
  // body
  const col =
    CL2[k] || o.col || (z ? ZC[ci % ZC.length] : CIV[ci % CIV.length]);
  if (k === "leo" || k === "zleo")
    C(...Q(-0.12, -1.42 + by), 0.11 * s, col, lw * 0.8);
  P(
    [
      ...Q(-0.17, -1.36 + by),
      ...Q(0.17, -1.36 + by),
      ...Q(0.21, -0.62 + by),
      ...(z
        ? [...Q(0.08, -0.55 + by), ...Q(0, -0.66 + by), ...Q(-0.1, -0.54 + by)]
        : []),
      ...Q(-0.19, -0.62 + by),
    ],
    col,
    lw,
  );
  if (k === "hero" || k === "hero0") {
    P(
      [
        ...Q(-0.15, -1.42 + by),
        ...Q(0.17, -1.42 + by),
        ...Q(0.17, -1.33 + by),
        ...Q(-0.15, -1.33 + by),
      ],
      "#e5772a",
      lw * 0.8,
    );
    P(
      [
        ...Q(-0.1, -1.36 + by),
        ...Q(-0.03, -1.36 + by),
        ...Q(-0.06, -1.08 + by),
        ...Q(-0.13, -1.09 + by),
      ],
      "#e5772a",
      lw * 0.8,
    );
  }
  if (
    k === "boss" ||
    k === "zboss" ||
    k === "biter" ||
    (z && ci % 2) ||
    (k === "civ" && ci % 3 === 0)
  ) {
    P(
      [...Q(0.06, -1.36 + by), ...Q(0.17, -1.36 + by), ...Q(0.12, -1.22 + by)],
      "#f1efe6",
      lw * 0.5,
    );
    P(
      [
        ...Q(0.1, -1.32 + by),
        ...Q(0.15, -1.32 + by),
        ...Q(0.14, -0.98 + by),
        ...Q(0.11, -0.98 + by),
      ],
      "#c0392b",
      lw * 0.5,
    );
  }
  if (k === "frank") {
    C(...Q(0.08, -1.18 + by), 0.035 * s, "#e0bb4a", lw * 0.5);
    L([...Q(-0.19, -0.72 + by), ...Q(0.21, -0.72 + by)], lw * 1.2, "#1b2033");
  }
  if (k === "ben")
    L([...Q(0.02, -1.34 + by), ...Q(0.03, -0.64 + by)], lw * 0.5);
  const hand = arm(A[0], A[1], o.item);
  o._hand = hand;
  // head
  const hc = Q(0.02 + (o.talk ? Math.sin(t * 7) * 0.006 : 0), -1.6 + by),
    r = 0.21 * s;
  C(hc[0], hc[1], r, skin, lw);
  const blink = !z && (t * 1.0 + id * 3.7) % 3.4 < 0.12;
  if (z) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(hc[0], hc[1], r - lw / 2, 0, 7);
    ctx.clip();
    E(
      hc[0] + 0.02 * s * f,
      hc[1] + 0.13 * s,
      0.16 * s,
      0.12 * s,
      "rgba(70,85,72,.35)",
    );
    ctx.restore();
    if (k === "zleo")
      P(
        [
          ...Q(-0.2, -1.62 + by),
          ...Q(-0.16, -1.8 + by),
          ...Q(0.06, -1.84 + by),
          ...Q(0.22, -1.72 + by),
          ...Q(0.1, -1.72 + by),
        ],
        "#b9a070",
        lw * 0.8,
      );
    else if (k !== "zboss" && ci % 2)
      P(
        [
          ...Q(-0.2, -1.62 + by),
          ...Q(-0.16, -1.78 + by),
          ...Q(0.04, -1.84 + by),
          ...Q(0.22, -1.74 + by),
          ...Q(0.18, -1.66 + by),
          ...Q(0, -1.74 + by),
        ],
        ["#5d4a3a", "#3d3a4c", "#6b4a35"][ci % 3],
        lw * 0.8,
      );
    for (const ex of [0.06, 0.17]) {
      const e = Q(ex, -1.63 + by);
      E(e[0], e[1], 0.042 * s, 0.052 * s, "#0b0b0b");
    }
    const m = Q(0.13, -1.5 + by);
    E(
      m[0],
      m[1],
      0.034 * s,
      0.045 * s * (1 + 0.35 * Math.sin(t * 6 + id)),
      "#1a1210",
    );
    if (k === "zboss")
      L([...Q(0.06, -1.545 + by), ...Q(0.2, -1.54 + by)], lw * 1.6, "#3a3236");
    ctx.restore();
    return;
  }
  const e = Q(0.13, -1.62 + by),
    m = Q(0.13, -1.5 + by),
    hk = k === "hero" || k === "hero0";
  if (hk) {
    const g1 = Q(0.1, -1.6 + by),
      g2 = Q(0.205, -1.6 + by);
    C(g1[0], g1[1], 0.058 * s, "#f6f4ee", lw * 0.7);
    C(g2[0], g2[1], 0.042 * s, "#f6f4ee", lw * 0.7);
    if (blink) {
      L([g1[0] - 0.03 * s, g1[1], g1[0] + 0.03 * s, g1[1]], lw * 0.5);
    } else {
      C(g1[0] + 0.012 * s * f, g1[1], (o.scared ? 0.013 : 0.022) * s, "#111");
      C(g2[0] + 0.01 * s * f, g2[1], (o.scared ? 0.01 : 0.016) * s, "#111");
    }
    L([...Q(-0.05, -1.62 + by), ...Q(0.045, -1.61 + by)], lw * 0.6);
  } else if (o.scared) {
    C(e[0], e[1], 0.045 * s, "#fff", lw * 0.5);
    C(e[0], e[1], 0.016 * s, "#111");
  } else if (blink)
    L([e[0] - 0.025 * s, e[1], e[0] + 0.025 * s, e[1]], lw * 0.5);
  else C(e[0], e[1], 0.026 * s, "#111");
  if (o.scared) L([...Q(0.07, -1.71 + by), ...Q(0.19, -1.74 + by)], lw * 0.6);
  if (o.talk)
    E(
      m[0],
      m[1],
      0.03 * s,
      0.012 * s + 0.034 * s * Math.abs(Math.sin(t * 12.5 + id)),
      "#3a1512",
    );
  else if (o.scared) E(m[0], m[1], 0.026 * s, 0.036 * s, "#3a1512");
  else L([...Q(0.09, -1.49 + by), ...Q(0.16, -1.5 + by)], lw * 0.6);
  const hairArc = (c) => {
    ctx.beginPath();
    ctx.arc(
      hc[0] - 0.02 * s * f,
      hc[1] - 0.02 * s,
      r * 1.03,
      Math.PI * (f > 0 ? 0.95 : 1.25),
      Math.PI * (f > 0 ? 1.75 : 2.05),
    );
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
    ctx.lineWidth = lw * 0.8;
    ctx.strokeStyle = INK;
    ctx.stroke();
  };
  if (k === "hero") {
    ctx.beginPath();
    ctx.arc(jx(hc[0]), jx(hc[1] - 0.03 * s), r * 1.06, Math.PI, 0);
    ctx.closePath();
    ctx.fillStyle = "#a9b0b9";
    ctx.fill();
    ctx.lineWidth = lw;
    ctx.strokeStyle = INK;
    ctx.stroke();
    L([...Q(-0.25, -1.66 + by), ...Q(0.27, -1.66 + by)], lw * 1.1);
    for (const [dx, dy] of [
      [-0.12, -1.72],
      [-0.02, -1.76],
      [0.08, -1.73],
      [-0.06, -1.82],
      [0.04, -1.84],
      [0.14, -1.7],
      [-0.16, -1.79],
    ]) {
      const h = Q(dx, dy + by);
      E(h[0], h[1], 0.014 * s, 0.014 * s, "#2b2f36");
    }
    const h2 = Q(-0.36, -1.7 + by);
    L([...Q(-0.24, -1.68 + by), ...h2], lw * 1.1, "#7d8590");
    C(h2[0] - 0.03 * s * f, h2[1], 0.03 * s, null, lw * 0.8);
  } else if (k === "hero0") hairArc("#6b4a35");
  else if (k === "boss") {
    L([...Q(0.06, -1.545 + by), ...Q(0.2, -1.54 + by)], lw * 1.6, "#3a3236");
    for (let i = 0; i < 3; i++) {
      const d = Q(
        -0.1 + i * 0.07,
        -1.7 + ((t * 0.5 + i * 0.3) % 1) * 0.12 + by,
      );
      E(d[0], d[1], 0.012 * s, 0.02 * s, "#9fc0dd");
    }
  } else if (k === "frank" || k === "soldier") {
    ctx.beginPath();
    ctx.arc(hc[0], hc[1] - 0.04 * s, r * 1.06, Math.PI, 0);
    ctx.closePath();
    ctx.fillStyle = "#2f3a55";
    ctx.fill();
    ctx.lineWidth = lw;
    ctx.strokeStyle = INK;
    ctx.stroke();
    P(
      [
        ...Q(0.08, -1.66 + by),
        ...Q(0.34, -1.64 + by),
        ...Q(0.32, -1.6 + by),
        ...Q(0.1, -1.61 + by),
      ],
      "#2f3a55",
      lw * 0.8,
    );
  } else if (k === "ben") {
    hairArc("#2f2a2a");
    L(
      [...Q(0.02, -1.47 + by), ...Q(0.1, -1.42 + by), ...Q(0.19, -1.46 + by)],
      lw * 0.9,
      "#2f2a2a",
    );
  } else if (k === "leo") hairArc("#b9a070");
  else hairArc(["#5d4a3a", "#2f2a2a", "#8a6a4a", "#b9b0a0"][ci % 4]);
  ctx.restore();
};
function drawItem(it, h, s, f, lw) {
  if (it === "phone")
    R(
      h[0] - s * 0.04,
      h[1] - s * 0.13,
      s * 0.08,
      s * 0.14,
      "#1b1b20",
      lw * 0.5,
    );
  if (it === "clock")
    clock(h[0], h[1] - s * 0.1, s * 0.11, Math.sin(TT * 30) * 0.2);
  if (it === "flash")
    R(
      h[0] - s * 0.03,
      h[1] - s * 0.04,
      s * 0.16 * f,
      s * 0.07,
      "#3a3236",
      lw * 0.5,
    );
  if (it === "cup") {
    R(
      h[0] - s * 0.04,
      h[1] - s * 0.11,
      s * 0.09,
      s * 0.11,
      "#f3ead2",
      lw * 0.6,
    );
    for (let i = 0; i < 2; i++) {
      ctx.globalAlpha = 0.5;
      L(
        [
          h[0] + i * s * 0.03,
          h[1] - s * 0.14,
          h[0] + i * s * 0.03 + Math.sin(TT * 3 + i) * 3,
          h[1] - s * 0.24,
        ],
        lw * 0.4,
        "#fff",
      );
      ctx.globalAlpha = 1;
    }
  }
  if (it === "radio") {
    R(
      h[0] - s * 0.04,
      h[1] - s * 0.14,
      s * 0.09,
      s * 0.17,
      "#22252e",
      lw * 0.5,
    );
    L(
      [h[0] + s * 0.03, h[1] - s * 0.14, h[0] + s * 0.04, h[1] - s * 0.3],
      lw * 0.5,
    );
  }
  if (it === "ext") {
    R(
      h[0] - s * 0.06,
      h[1] - s * 0.04,
      s * 0.13,
      s * 0.34,
      "#c0392b",
      lw * 0.7,
    );
    R(h[0] - s * 0.03, h[1] - s * 0.1, s * 0.07, s * 0.06, "#2b2f36", lw * 0.5);
    L(
      [
        h[0] + s * 0.04 * f,
        h[1] - s * 0.07,
        h[0] + s * 0.3 * f,
        h[1] - s * 0.12,
      ],
      lw * 1.2,
      "#2b2f36",
    );
    SH._noz = [h[0] + s * 0.3 * f, h[1] - s * 0.12];
  }
}
parseA = function (str, lt, dur, r) {
  const m = str.match(
    /^([a-z]+\d?)@(-?\d+)(?:(>>?)(-?\d+))?([!^<_t]*)(?::(\w+))?$/,
  );
  let x = +m[2],
    walk = null,
    f = 1,
    run = 0;
  const fl = m[5] || "";
  if (m[3]) {
    const fast = m[3] === ">>",
      u = clamp(lt / (fast ? Math.min(dur, 3.4) : dur), 0, 1),
      x2 = +m[4];
    x = lerp(+m[2], x2, u);
    if (u < 1) {
      walk = lt * (fast ? 15 : 7.5) + +m[2] * 0.01;
      run = fast;
    }
    f = x2 < +m[2] ? -1 : 1;
  }
  if (fl.includes("<")) f = -1;
  let y = r.gy;
  if (r.slope) y = r.slope[1] + (x - r.slope[0]) / r.slope[2];
  return {
    k: m[1],
    x,
    y,
    s: r.s,
    f,
    walk,
    run,
    scared: fl.includes("!"),
    arm: fl.includes("^") ? "up" : null,
    item: m[6],
    type: fl.includes("t"),
    lie: fl.includes("_"),
  };
};
// ---------- sets ----------
function ceilLights() {
  for (const x of [200, 640, 1080]) {
    R(x - 110, 28, 220, 16, "#f6f1e2", 2.5);
  }
}
function alarmLamp(x, y) {
  const on = SH.o.alarm && Math.sin(TT * 9) > 0;
  R(x - 14, y, 28, 12, "#3a3236", 2);
  ctx.beginPath();
  ctx.arc(x, y, 16, Math.PI, 0);
  ctx.fillStyle = on ? "#ff4a3a" : "#8a2a22";
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = INK;
  ctx.stroke();
  if (on) {
    const g = ctx.createRadialGradient(x, y, 5, x, y, 150);
    g.addColorStop(0, "rgba(255,70,50,.45)");
    g.addColorStop(1, "rgba(255,70,50,0)");
    ctx.fillStyle = g;
    ctx.fillRect(x - 150, y - 150, 300, 300);
  }
}
BG.office = (sh, t) => {
  const p = PAL[sh.pal],
    o = sh.o,
    pr = o.props || [];
  room(p, 1, "#c6ccd2", "#6f7c8c");
  ceilLights();
  for (const x of [70, 500, 930]) windowPane(x, 120, 280, 210, p, t);
  alarmLamp(440, 70);
  alarmLamp(870, 70);
  for (let i = 0; i < 4; i++) {
    const x = 90 + i * 300,
      mess = pr.includes("mess") && i % 2;
    ctx.save();
    if (mess) {
      ctx.translate(x + 110, 560);
      ctx.rotate(0.22);
      ctx.translate(-x - 110, -560);
    }
    R(x, 452, 230, 16, "#c9a272", 3);
    L([x + 14, 468, x + 14, 560], 5);
    L([x + 216, 468, x + 216, 560], 5);
    R(x + 150, 474, 62, 86, "#b7bcc4", 2.5);
    R(x + 62, 372, 104, 68, "#22252e", 3);
    R(x + 69, 379, 90, 54, mess ? "#3a3f4e" : "#9fc0dd", 0);
    if (!mess)
      for (let k = 0; k < 4; k++)
        L(
          [
            x + 76,
            390 + k * 11,
            x + 110 + ((i * 7 + k * 13) % 40),
            390 + k * 11,
          ],
          2,
          "#55729a",
        );
    L([x + 114, 440, x + 114, 452], 5);
    R(x + 20, 440, 28, 12, "#f3ead2", 2);
    ctx.restore();
  }
  R(1210, 430, 44, 130, "#8a6a4a", 3);
  for (let i = 0; i < 5; i++)
    L([1232, 430, 1200 + i * 16, 350 + (i % 2) * 20], 4, "#5f7b47");
  if (pr.includes("mess")) {
    srand(808);
    for (let i = 0; i < 16; i++) {
      const px = rnd() * W,
        py = 575 + rnd() * 110;
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(rnd() * 3);
      R(-13, -9, 26, 18, "#f3efe4", 1.5);
      ctx.restore();
    }
    srand(BO + 5);
    ctx.save();
    ctx.translate(820, 640);
    ctx.rotate(1.4);
    R(-30, -40, 60, 14, "#3a3f4e", 3);
    L([0, -26, 0, 20], 5);
    ctx.restore();
  }
  return { gy: 668, s: 160 };
};
BG.break = (sh, t) => {
  const o = sh.o,
    r = BG.kitchen(sh, t);
  R(150, 300, 86, 86, "#2b2f36", 3);
  R(166, 345, 54, 40, "#6b6068", 2);
  R(178, 352, 30, 30, "#f3ead2", 2);
  C(214, 318, 6, "#c0392b", 1.5);
  for (let i = 0; i < 3; i++)
    R(270 + i * 44, 354, 30, 32, ["#f3ead2", "#7b9d97", "#d8b04c"][i], 2.5);
  R(330, 150, 150, 14, "#8a6a4a", 2.5);
  const grabbed = o.nocol || (o.grab && LT > 1.7);
  if (!grabbed) {
    L([405, 164, 405, 190], 3);
    ctx.beginPath();
    ctx.arc(405, 190, 42, 0, Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#a9b0b9";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = INK;
    ctx.stroke();
    for (const [dx, dy] of [
      [-22, 10],
      [0, 14],
      [22, 10],
      [-10, 26],
      [12, 26],
    ])
      E(405 + dx, 190 + dy, 3, 3, "#2b2f36");
  }
  alarmLamp(860, 70);
  txt("BREAK ROOM", 1060, 170, 22, "#5a5d6a");
  return r;
};
BG.meeting = (sh, t) => {
  const p = PAL[sh.pal];
  room(p, 1, "#cdd0c6", "#7b7f72");
  ceilLights();
  windowPane(60, 130, 230, 210, p, t);
  alarmLamp(1180, 70);
  R(420, 110, 460, 250, "#f3efe4", 5);
  txt("Q3 RESULTS", 650, 145, 24, "#3a3f4e");
  for (let i = 0; i < 6; i++)
    R(
      470 + i * 62,
      320 - (150 - i * 22),
      40,
      150 - i * 22,
      i < 3 ? "#7b9d97" : "#c0533f",
      2,
    );
  L([460, 190, 560, 205, 660, 250, 760, 290, 850, 330], 4, "#c0392b");
  for (let i = 0; i < 5; i++) {
    const x = 250 + i * 190;
    R(x, 430, 70, 96, "#4a4f5c", 3);
  }
  P([150, 520, 1130, 520, 1190, 590, 90, 590], "#b9895a", 4);
  R(90, 590, 1100, 20, "#8a6a4a", 3);
  for (const x of [520, 700]) {
    R(x, 500, 40, 24, "#f3efe4", 2);
  }
  R(860, 492, 34, 30, "#f3ead2", 2);
  return { gy: 672, s: 160 };
};
BG.corridor = (sh, t) => {
  const o = sh.o,
    pr = o.props || [];
  ctx.fillStyle = "#c4c9c0";
  ctx.fillRect(0, 0, W, 560);
  ctx.fillStyle = "#9aa39c";
  ctx.fillRect(0, 400, W, 160);
  L([0, 400, W, 400], 2.5);
  G(560, H, "#7d848c", "#555a62");
  L([0, 560, W, 560], 3);
  ceilLights();
  const off = o.speed ? -((t * 420) % 420) : 0;
  ["ACCOUNTING", "SALES", "H.R.", "ACCOUNTING", "SALES"].forEach((n, i) => {
    const x = 60 + i * 420 + off;
    R(x, 215, 170, 345, "#8796a6", 3.5);
    R(x + 16, 235, 138, 180, "#cfe0e2", 2.5);
    C(x + 150, 430, 6, "#e0bb4a", 2);
    txt(n, x + 85, 190, 20, "#3a3f4e");
    R(x + 250, 300, 44, 70, "#c0392b", 3);
    R(x + 262, 286, 20, 16, "#2b2f36", 2);
  });
  alarmLamp(360, 70);
  alarmLamp(900, 70);
  if (!o.speed) {
    R(1150, 96, 96, 40, "#3f9f5f", 3);
    txt("EXIT", 1198, 117, 22, "#fff");
  }
  if (pr.includes("door")) {
    R(1010, 150, 30, 410, "#5a5d6a", 3);
    const sh2 = Math.sin(t * 40) * (LT < 2 ? 3 : 1);
    R(1040 + sh2, 170, 200, 390, "#7a6a5a", 4);
    R(
      1080 + sh2,
      210,
      120,
      130,
      pr.includes("hand") ? "#1b1b20" : "#cfe0e2",
      3,
    );
    if (pr.includes("hand")) {
      L([1100, 230, 1150, 290, 1120, 330], 2);
      L([1190, 220, 1150, 290, 1180, 335], 2);
      const hx = 1080 - 70 - Math.sin(t * 7) * 18;
      L(
        [
          1140,
          280,
          1040,
          300 + Math.sin(t * 9) * 10,
          hx,
          320 + Math.cos(t * 8) * 14,
        ],
        9,
        "#5a5d6a",
      );
      C(hx, 320 + Math.cos(t * 8) * 14, 13, "#f1efe6", 3);
      for (const e of [1125, 1160]) E(e, 262, 9, 11, "#e8e6d8");
    }
  }
  return { gy: 668, s: 160 };
};
BG.doorcu = (sh, t) => {
  ctx.fillStyle = "#7a6a5a";
  ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 6; i++)
    L([0, 60 + i * 130, W, 70 + i * 128], 2, "rgba(42,31,26,.25)");
  R(300, 70, 680, 500, "#16161c", 8);
  ctx.save();
  ctx.beginPath();
  ctx.rect(304, 74, 672, 492);
  ctx.clip();
  const jx2 = Math.sin(t * 13) * 10,
    jy = Math.cos(t * 11) * 8;
  person({ k: "zboss", x: 610 + jx2, y: 1320 + jy, s: 640, f: 1, ci: 1 });
  ctx.fillStyle = "rgba(190,215,225,.14)";
  ctx.fillRect(304, 74, 672, 492);
  ctx.restore();
  srand(77);
  const cx = 780,
    cy = 300;
  for (let i = 0; i < 11; i++) {
    const a = i * 0.57 + rnd() * 0.3,
      l = 120 + rnd() * 220;
    L(
      [
        cx,
        cy,
        cx + Math.cos(a) * l * 0.5 + rnd() * 20,
        cy + Math.sin(a) * l * 0.5,
        cx + Math.cos(a) * l,
        cy + Math.sin(a) * l,
      ],
      2.5,
      "rgba(235,240,245,.85)",
    );
  }
  srand(BO + 3);
  const k = clamp((LT - 0.5) / 0.25, 0, 1);
  if (k > 0) {
    const hx = lerp(780, 1010, k) + Math.sin(t * 9) * 12,
      hy = lerp(300, 430, k) + Math.cos(t * 8) * 12;
    L([cx, cy, hx, hy], 34, "#5a5d6a");
    L([cx, cy, hx, hy], 26, "#6a6d7a");
    C(hx + 14, hy + 10, 40, "#f1efe6", 5);
    for (let i = 0; i < 4; i++)
      L(
        [
          hx + 30,
          hy + 10 + i * 4,
          hx + 78 + Math.sin(t * 14 + i) * 8,
          hy - 20 + i * 22,
        ],
        11,
        "#9ea896",
      );
  }
  return { gy: 2000, s: 100 };
};
BG.elevator = (sh, t, lt) => {
  const o = sh.o;
  ctx.fillStyle = "#c4c9c0";
  ctx.fillRect(0, 0, W, 560);
  ctx.fillStyle = "#9aa39c";
  ctx.fillRect(0, 400, W, 160);
  G(560, H, "#7d848c", "#555a62");
  L([0, 560, W, 560], 3);
  ceilLights();
  alarmLamp(1100, 70);
  R(270, 130, 520, 430, "#5a5d6a", 5);
  R(460, 84, 140, 44, "#16161c", 3);
  txt(
    o.open ? "12" : String(8 + Math.min(4, Math.floor(lt * 1.6))),
    530,
    107,
    28,
    "#ff5a3a",
  );
  const op = o.open ? ease(clamp(lt / 0.7, 0, 1)) : 0;
  ctx.save();
  ctx.beginPath();
  ctx.rect(290, 150, 480, 410);
  ctx.clip();
  ctx.fillStyle = "#23252e";
  ctx.fillRect(290, 150, 480, 410);
  if (o.open) {
    const out = o.zout ? lt * 70 : 0;
    for (let i = 0; i < 6; i++)
      person({
        k: "z",
        x: 340 + i * 76 + out + Math.sin(t * 3 + i) * 6,
        y: 600 + (i % 2) * 22,
        s: 150,
        f: 1,
        ci: i,
        walk: o.zout ? lt * 5 + i : null,
      });
  }
  R(290 - op * 240, 150, 240, 410, "#aab0b8", 3);
  R(530 + op * 240, 150, 240, 410, "#aab0b8", 3);
  ctx.restore();
  R(840, 330, 50, 90, "#d8d8d8", 3);
  C(865, 360, 9, lt % 0.3 < 0.15 ? "#ffb23a" : "#e8e8e8", 2);
  C(865, 392, 9, "#e8e8e8", 2);
  if (o.zout)
    for (let i = 0; i < 4; i++)
      person({
        k: "z",
        x: 560 + i * 60 + lt * 90,
        y: 668 + (i % 2) * 14,
        s: 160,
        f: 1,
        ci: i + 2,
        walk: lt * 5 + i,
      });
  return { gy: 668, s: 160 };
};
const _roof = BG.roof;
BG.roof = (sh, t) => {
  const r = _roof(sh, t);
  if ((sh.o.props || []).includes("rdoor")) {
    const sk = (sh.o.sfx || []).includes("knock") ? Math.sin(t * 38) * 3 : 0;
    R(60, 330, 210, 262, "#8a8f98", 4);
    P([50, 330, 280, 330, 265, 300, 65, 300], "#6d7480", 3.5);
    R(110 + sk, 380, 110, 212, "#5a5d6a", 3.5);
    C(204 + sk, 490, 6, "#e0bb4a", 2);
    L([225, 480, 262, 510], 7, "#3a3236");
  }
  return r;
};
const _city = BG.city;
BG.city = (sh, t) => {
  const r = _city(sh, t);
  if (sh.o.sfx) {
    for (const [x, y] of [
      [240, 470],
      [560, 430],
      [900, 480],
      [1130, 450],
    ]) {
      const g = ctx.createRadialGradient(
        x,
        y,
        4,
        x,
        y,
        70 + Math.sin(t * 6 + x) * 10,
      );
      g.addColorStop(0, "rgba(255,170,60,.9)");
      g.addColorStop(1, "rgba(255,90,30,0)");
      ctx.fillStyle = g;
      ctx.fillRect(x - 90, y - 90, 180, 180);
    }
  }
  return r;
};
// ---------- time tag ----------
dayTag = function (sh, t) {
  if (!sh.day) return;
  const first = TL.shots.find((s) => s.day === sh.day),
    k = t - first.start,
    sc = 1 + 0.35 * Math.max(0, 1 - k / 0.3);
  ctx.save();
  ctx.translate(40, 52);
  ctx.scale(sc, sc);
  ctx.font = "900 42px Inter";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#17110f";
  ctx.strokeText(sh.day, 0, 0);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(sh.day, 0, 0);
  ctx.restore();
  C(28, 52, 0, null);
};
// ---------- post fx ----------
const _render = render;
render = window.render = function (t) {
  _render(t);
  const sh = SH,
    o = sh.o,
    lt = LT;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (o.speed) {
    srand(BO * 31 + 7);
    ctx.strokeStyle = "rgba(255,255,255,.3)";
    for (let i = 0; i < 26; i++) {
      const y = rnd() * 600,
        x = rnd() * W,
        l = 120 + rnd() * 260;
      ctx.lineWidth = 2 + rnd() * 3;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - l, y);
      ctx.stroke();
    }
  }
  if (o.alarm) {
    ctx.fillStyle = `rgba(255,40,30,${0.07 + 0.07 * Math.max(0, Math.sin(t * 9))})`;
    ctx.fillRect(0, 0, W, 600);
  }
  if (o.spray && sh._noz && lt > 0.9) {
    const k = clamp((lt - 0.9) / 1.2, 0, 1);
    srand(BO * 3 + 11);
    for (let i = 0; i < 40; i++) {
      const u = rnd() * k,
        x = sh._noz[0] + u * 430,
        y = sh._noz[1] + (rnd() - 0.5) * (40 + u * 260) - u * 60;
      E(x, y, 22 + u * 70, 18 + u * 55, `rgba(245,248,250,${0.5 - u * 0.25})`);
    }
  }
  if (o.rewind) {
    const img = ctx.getImageData(0, 0, W, 600);
    ctx.putImageData(img, 0, 0);
    srand(BO * 91 + 3);
    for (let i = 0; i < 9; i++) {
      const y = Math.floor(rnd() * 560),
        h = 10 + Math.floor(rnd() * 40),
        dx = Math.floor((rnd() - 0.5) * 160);
      ctx.drawImage(cv, 0, y, W, h, dx, y, W, h);
    }
    ctx.fillStyle = "rgba(255,255,255,.06)";
    for (let y = 0; y < 600; y += 6) ctx.fillRect(0, y, W, 2);
    if (Math.floor(t * 4) % 2 === 0) {
      ctx.font = "900 40px Inter";
      ctx.textAlign = "left";
      ctx.fillStyle = "#fff";
      ctx.fillText("◀◀ REWIND", 50, 60);
    }
  }
};
