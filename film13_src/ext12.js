// ===== film 12: Maple the robot babysitter =====
LOOK.mom = {
  skin: "#e8b896",
  top: "#d0507a",
  bot: "#3a3f5a",
  hair: "#7a4424",
  hs: "long",
};
LOOK.dad = {
  skin: "#d9a67c",
  top: "#3f7fb5",
  bot: "#2b3040",
  hair: "#2a1f1a",
  hs: "short",
  glasses: 0,
};
var ROBOT = { mapl: 1, mred: 1, mdead: 1 };
function fr(x) {
  return x - Math.floor(x);
}
// ---------- lightning (same formula used by audio) ----------
function flashAt(t) {
  var seg = Math.floor(t / 7),
    best = 0;
  for (var k = seg - 1; k <= seg; k++) {
    var ft = k * 7 + (((k * 7919) % 97) / 97) * 5,
      d = t - ft;
    if (d >= 0 && d < 0.5) {
      var v =
        d < 0.08
          ? 1
          : d < 0.16
            ? 0.25
            : d < 0.24
              ? 0.8
              : Math.max(0, 1 - (d - 0.24) / 0.26) * 0.6;
      best = Math.max(best, v);
    }
  }
  return best;
}
function rainIn(x0, y0, w, h, t, n, a) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x0, y0, w, h);
  ctx.clip();
  srand(9191);
  ctx.strokeStyle = "rgba(200,215,255," + (a || 0.45) + ")";
  ctx.lineWidth = 2;
  for (var i = 0; i < n; i++) {
    var sp = 900 + rnd() * 500,
      x = x0 + rnd() * (w + 80),
      ph = rnd() * 2000,
      y = y0 + ((t * sp + ph) % (h + 120)) - 60,
      L = 18 + rnd() * 16;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - L * 0.25, y + L);
    ctx.stroke();
  }
  ctx.restore();
}
function streaks(x0, y0, w, h, t) {
  srand(5151);
  for (var i = 0; i < 14; i++) {
    var x = x0 + rnd() * w,
      sp = 20 + rnd() * 40,
      y = y0 + ((t * sp + rnd() * 300) % h);
    ctx.fillStyle = "rgba(220,230,255,.35)";
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 5, 0, 0, 7);
    ctx.fill();
    ln([x, y - 4, x, Math.max(y0, y - 30)], 1.5, "rgba(220,230,255,.18)");
  }
}
function windowBox(x, y, w, h, t, o, night) {
  rr(x - 14, y - 14, w + 28, h + 28, 6, "#f3efe6", OUT, 5);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  if (night) gr(x, y, w, h, "#060a1e", "#1b2550");
  else gr(x, y, w, h, "#7fb8e6", "#cfe7f5");
  // neighbour roofs
  ctx.fillStyle = night ? "#0b1024" : "#8fa8b8";
  ctx.fillRect(x, y + h * 0.62, w, h);
  for (var i = 0; i < 3; i++) {
    var hx = x + 20 + i * w * 0.36;
    po(
      [
        hx,
        y + h * 0.62,
        hx + w * 0.15,
        y + h * 0.42,
        hx + w * 0.3,
        y + h * 0.62,
      ],
      night ? "#121a38" : "#a6b9c6",
    );
    if (night && (i + 1) % 2)
      rr(hx + w * 0.1, y + h * 0.7, 18, 16, 2, "#ffcf6a");
  }
  if (o.storm) {
    var fl = flashAt(TT);
    if (fl > 0) {
      ctx.fillStyle = "rgba(220,230,255," + fl * 0.8 + ")";
      ctx.fillRect(x, y, w, h);
    }
    rainIn(x, y, w, h, TT, 60, 0.5);
    streaks(x, y, w, h, TT);
  }
  ctx.restore();
  ln([x + w / 2, y, x + w / 2, y + h], 8, "#f3efe6");
  ln([x, y + h / 2, x + w, y + h / 2], 8, "#f3efe6");
  rr(x - 22, y + h + 8, w + 44, 14, 4, "#e6dfd0", OUT, 4);
}
// interior shell: wall + floor + baseboard, with mood
function room(wall, wall2, floorC, floorC2) {
  gr(0, -60, W, 660, wall, wall2);
  ctx.globalAlpha = 0.05;
  for (var x = 0; x < W; x += 46) {
    ctx.fillStyle = "#000";
    ctx.fillRect(x, -60, 20, 660);
  }
  ctx.globalAlpha = 1;
  gr(0, 600, W, 180, floorC, floorC2);
  ctx.globalAlpha = 0.18;
  for (var k = 0; k < 7; k++)
    ln(
      [0, 612 + k * 18 + k * k * 1.5, W, 612 + k * 18 + k * k * 1.5],
      2,
      "#000",
    );
  ctx.globalAlpha = 1;
  rr(-20, 586, W + 40, 18, 3, "#f4f0e6", OUT, 4);
}
function nightGrade(sh, lamps) {
  if (sh.pal === "day") { var B = sh._beam; if (B) { ctx.save(); ctx.globalCompositeOperation = "lighter"; var g = ctx.createLinearGradient(B[0], B[1], B[0] - 120, 720); g.addColorStop(0, "rgba(255,236,190,.16)"); g.addColorStop(1, "rgba(255,236,190,0)"); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(B[0], B[1]); ctx.lineTo(B[0] + B[2], B[1]); ctx.lineTo(B[0] + B[2] - 260, 760); ctx.lineTo(B[0] - 260, 760); ctx.closePath(); ctx.fill(); ctx.restore(); } return; }
  var a = sh.pal === "dusk" ? 0.28 : 0.6;
  if (sh.o.blackout) a = 0.9;
  ctx.fillStyle = "rgba(8,12,40," + a + ")";
  ctx.fillRect(-80, -80, W + 160, H + 160);
  if (sh.o.blackout) return;
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  (lamps || []).forEach(function (L) {
    glow(L[0], L[1], L[2], L[3] || "rgba(255,170,90,.35)", 1);
  });
  ctx.restore();
}
function stormFlash(sh) {
  if (!sh.o.storm || sh.pal === "day") return;
  var fl = flashAt(TT);
  if (fl > 0) {
    ctx.fillStyle = "rgba(190,210,255," + fl * 0.22 + ")";
    ctx.fillRect(-80, -80, W + 160, H + 160);
  }
}
function lampStand(x, y, on) {
  ln([x, y, x, y - 230], 6, "#3a3a44");
  el(x, y, 34, 8, "#3a3a44", OUT, 4);
  po(
    [x - 46, y - 230, x + 46, y - 230, x + 30, y - 300, x - 30, y - 300],
    on ? "#ffe4a8" : "#cfc4ae",
    OUT,
    4,
  );
}
// ---------- physics ----------
function body(p, t) {
  // simulate ballistic + bounce; returns state
  var x = p.x,
    y = p.y,
    vx = p.vx || 0,
    vy = p.vy || 0,
    r = p.r || 0,
    vr = p.vr || 0,
    fl = p.floor || 640,
    e = p.e == null ? 0.35 : p.e,
    g = p.g || 1800,
    hit = null,
    dt = 1 / 120;
  var n = Math.min(1400, Math.floor(Math.max(0, t) / dt));
  for (var i = 0; i < n; i++) {
    vy += g * dt;
    x += vx * dt;
    y += vy * dt;
    r += vr * dt;
    if (p.stopY != null && y >= p.stopY) {
      y = p.stopY;
      vy = 0;
      vx = 0;
      vr = 0;
      g = 0;
    }
    if (y > fl) {
      if (hit == null) hit = { t: i * dt, x: x, v: vy };
      y = fl;
      vy = -vy * e;
      vx *= p.fric == null ? 0.6 : p.fric;
      vr = p.roll ? vx / (p.size || 20) : vr * 0.5;
      if (Math.abs(vy) < 40) vy = 0;
    }
    if (p.roll && y >= fl - 0.5) {
      vx *= 0.995;
      r = (x - p.x) / (p.size || 20);
    }
  }
  return { x: x, y: y, r: r, hit: hit };
}
function drawThing(k, x, y, r, sz, c) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(r);
  if (k === "plate") {
    el(0, 0, sz, sz * 0.32, "#f7f7f2", OUT, 3);
    el(0, 0, sz * 0.62, sz * 0.18, "rgba(90,140,200,.35)");
  } else if (k === "glass") {
    po(
      [-sz * 0.4, -sz, sz * 0.4, -sz, sz * 0.3, 0, -sz * 0.3, 0],
      "rgba(190,225,255,.75)",
      OUT,
      3,
    );
    ln(
      [-sz * 0.2, -sz * 0.8, -sz * 0.15, -sz * 0.2],
      3,
      "rgba(255,255,255,.8)",
    );
  } else if (k === "shard") {
    po([-sz, 0, 0, -sz * 0.7, sz * 0.8, sz * 0.2], c || "#f2f2ee", OUT, 2);
  } else if (k === "peanut") {
    rr(
      -sz,
      -sz * 0.45,
      sz * 2,
      sz * 0.9,
      sz * 0.45,
      c || "#f4f1ea",
      "rgba(22,24,39,.6)",
      2,
    );
  } else if (k === "pancake") {
    el(0, 0, sz, sz * 0.28, "#d99a4e", OUT, 3);
    el(0, -sz * 0.06, sz * 0.7, sz * 0.14, "#e8b36a");
  } else if (k === "frame") {
    rr(-sz * 0.7, -sz * 0.55, sz * 1.4, sz * 1.1, 3, "#7a5530", OUT, 3);
    rr(-sz * 0.55, -sz * 0.4, sz * 1.1, sz * 0.8, 2, c || "#9fd0e8");
    ci(-sz * 0.1, -sz * 0.05, sz * 0.18, "#f4c9a3");
  } else if (k === "block") {
    rr(-sz, -sz, sz * 2, sz * 2, 4, c || "#e0503a", OUT, 3);
    tx("A", 0, 2, sz * 1.2, "#fff");
  } else if (k === "ball") {
    ci(0, 0, sz, c || "#ff6a3a", OUT, 3);
    ctx.beginPath();
    ctx.arc(0, 0, sz, -0.4, 0.4);
    ctx.lineWidth = sz * 0.3;
    ctx.strokeStyle = "#fff";
    ctx.stroke();
  } else if (k === "car") {
    rr(-sz, -sz * 0.5, sz * 2, sz * 0.6, sz * 0.2, c || "#3f7fb5", OUT, 3);
    ci(-sz * 0.55, sz * 0.15, sz * 0.25, "#222");
    ci(sz * 0.55, sz * 0.15, sz * 0.25, "#222");
  } else if (k === "can") {
    rr(-sz * 0.8, -sz, sz * 1.6, sz * 2, 4, c || "#c9cdd3", OUT, 3);
    rr(
      -sz * 0.8,
      -sz * 0.4,
      sz * 1.6,
      sz * 0.9,
      2,
      c === "#c9cdd3" ? "#3f7fb5" : "#f4f1ea",
    );
    ln([-sz * 0.8, -sz * 0.7, sz * 0.8, -sz * 0.7], 2, OUT);
  } else if (k === "chair") {
    rr(-sz * 0.6, -sz * 0.1, sz * 1.2, sz * 0.18, 3, "#b07a4a", OUT, 3);
    rr(-sz * 0.55, -sz * 1.1, sz * 0.18, sz, 3, "#b07a4a", OUT, 3);
    ln([-sz * 0.5, sz * 0.08, -sz * 0.5, sz * 0.9], 7, "#8a5a32");
    ln([sz * 0.5, sz * 0.08, sz * 0.5, sz * 0.9], 7, "#8a5a32");
  } else if (k === "plank") {
    rr(-sz, -sz * 0.09, sz * 2, sz * 0.18, 3, "#b07a4a", OUT, 3);
  }
  ctx.restore();
}
function shatter(p, st, t, n, col) {
  // draw shards after impact
  var tb = st.hit.t,
    u = t - tb;
  for (var j = 0; j < n; j++) {
    var h1 = hash(p.id * 31 + j * 7),
      h2 = hash(p.id * 17 + j * 13 + 5);
    var q = body(
      {
        x: st.hit.x,
        y: (p.floor || 640) - 4,
        vx: (h1 - 0.5) * 700,
        vy: -200 - h2 * 420,
        vr: (h1 - 0.5) * 30,
        floor: (p.floor || 640) + (h2 - 0.5) * 30,
        e: 0.25,
        fric: 0.5,
      },
      u,
    );
    drawThing("shard", q.x, q.y, q.r, 5 + h2 * 7, col);
  }
}
var PRESET = {
  peanuts: function () {
    var L = [];
    for (var i = 0; i < 46; i++) {
      var a = hash(i * 3 + 1),
        b = hash(i * 7 + 2);
      L.push({
        id: i,
        k: "peanut",
        x: 760 + (a - 0.5) * 120,
        y: 420 + b * 120,
        vx: (a - 0.5) * 900,
        vy: -300 - b * 500,
        vr: (b - 0.5) * 20,
        t0: 0.35 + b * 0.25,
        floor: 610 + hash(i * 11) * 70,
        e: 0.3,
        sz: 8,
      });
    }
    L.push({
      id: 99,
      k: "plank",
      x: 760,
      y: 450,
      vx: -60,
      vy: -50,
      vr: -1.8,
      t0: 0.3,
      floor: 650,
      e: 0.2,
      sz: 110,
    });
    return L;
  },
  flip: function () {
    var L = [];
    for (var i = 0; i < 3; i++)
      L.push({
        id: i,
        k: "pancake",
        x: 930,
        y: 452 - i * 7,
        vx: 0,
        vy: -760,
        vr: 12.57 / 0.84,
        t0: 0.6 + i * 1.7,
        floor: 452 - i * 7,
        e: 0,
        sz: 36,
        stay: 1,
      });
    return L;
  },
  catch: function () {
    return [
      {
        id: 1,
        k: "glass",
        x: 560,
        y: 452,
        vx: 140,
        vy: -120,
        vr: 3,
        t0: 0.5,
        floor: 650,
        stopY: 560,
        sz: 22,
      },
    ];
  },
  toys: function () {
    var L = [],
      ks = ["block", "ball", "car", "block", "ball", "block"],
      cs = ["#e0503a", "#3fb27f", "#3f7fb5", "#f2c21a", "#ff6a3a", "#7b6fd0"];
    for (var i = 0; i < 6; i++)
      L.push({
        id: i,
        k: ks[i],
        c: cs[i],
        x: 1010 + i * 34,
        y: 300,
        vx: -120 - hash(i) * 380,
        vy: -60 - hash(i + 4) * 200,
        vr: (hash(i + 9) - 0.5) * 14,
        t0: 0.4 + i * 0.12,
        floor: 640 + hash(i * 5) * 30,
        e: ks[i] === "ball" ? 0.65 : 0.3,
        sz: 16,
      });
    return L;
  },
  frames: function () {
    var L = [];
    for (var i = 0; i < 4; i++)
      L.push({
        id: i,
        k: "frame",
        c: ["#9fd0e8", "#f2c9a0", "#b8e0a8", "#e8b0c8"][i],
        x: 250 + i * 260,
        y: 260 + (i % 2) * 30,
        vx: (hash(i) - 0.5) * 120,
        vy: 0,
        vr: (hash(i + 3) - 0.5) * 5,
        t0: 0.5 + i * 0.55,
        floor: 640,
        e: 0.1,
        sz: 44,
        shatter: 9,
        scol: "rgba(200,230,255,.9)",
      });
    return L;
  },
  chair: function () {
    return [
      {
        id: 1,
        k: "chair",
        x: 560,
        y: 560,
        vx: 520,
        vy: -620,
        vr: 7,
        t0: 1.0,
        floor: 610,
        e: 0.3,
        sz: 70,
        shatter: 6,
        scol: "#b07a4a",
      },
    ];
  },
  plates: function () {
    var L = [];
    for (var i = 0; i < 8; i++)
      L.push({
        id: i,
        k: i % 3 === 2 ? "glass" : "plate",
        x: 380 + i * 70,
        y: 455,
        vx: (hash(i) - 0.3) * 420,
        vy: -150 - hash(i + 2) * 300,
        vr: (hash(i + 5) - 0.5) * 16,
        t0: 0.3 + i * 0.22,
        floor: 630 + hash(i * 3) * 40,
        e: 0.2,
        sz: i % 3 === 2 ? 18 : 30,
        shatter: 8,
        scol: i % 3 === 2 ? "rgba(200,230,255,.9)" : "#f7f7f2",
      });
    return L;
  },
  cans: function () {
    var L = [];
    for (var i = 0; i < 5; i++)
      L.push({
        id: i,
        k: "can",
        c: i % 2 ? "#c9cdd3" : "#d8d2c2",
        x: 860 + i * 52,
        y: 288,
        vx: -160 - hash(i) * 260,
        vy: -40,
        vr: -3,
        t0: 0.4 + i * 0.6,
        floor: 640 + (i % 2) * 18,
        e: 0.35,
        roll: 1,
        fric: 1,
        sz: 20,
      });
    return L;
  },
};
function physDraw(sh, lt) {
  var nm = sh.o.phys;
  if (!nm || !PRESET[nm]) return;
  var L = sh._pl || (sh._pl = PRESET[nm]());
  L.forEach(function (p) {
    var u = lt - p.t0;
    if (u < 0) {
      if (!p.hidden0) drawThing(p.k, p.x, p.y, 0, p.sz, p.c);
      return;
    }
    var st = body(p, u);
    if (p.shatter && st.hit && Math.abs(st.hit.v) > 220) {
      if (u >= st.hit.t) {
        shatter(p, st, u, p.shatter, p.scol);
        return;
      }
    }
    if (p.k === "pancake" && st.hit) {
      drawThing("pancake", p.x, p.floor, 0, p.sz);
      return;
    }
    drawThing(p.k, st.x, st.y, st.r, p.sz, p.c);
  });
}
// ---------- robot ----------
var EYEG = [];
function devPt(x, y) {
  var m = ctx.getTransform();
  return [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f];
}
function drawRobot(o) {
  var s = o.s,
    f = o.f || 1,
    red = o.k === "mred",
    dead = o.k === "mdead",
    t = TT,
    so = (SH && SH.o) || {};
  var moving = o.walk != null,
    lean = moving ? 0.13 * f : 0,
    wr = 0.13 * s;
  var eyeC = red || dead ? "#ff2a3a" : "#5ff3ff";
  if (so.flick && Math.floor(t * 7) % 3 === 0)
    eyeC = red ? "#5ff3ff" : "#ff2a3a";
  var dim = so.lowbat ? 0.45 + 0.25 * Math.sin(t * 3) : 1;
  if (so.boot) dim = clamp((LT - 1.2) / 1.2, 0, 1);
  ctx.save();
  ctx.translate(o.x, o.y);
  el(0, 4, 0.34 * s, 0.06 * s, "rgba(0,0,0,.3)");
  if (dead) {
    var fu = clamp((LT - (so.fallAt || 0)) / 0.55, 0, 1),
      ang = so.fallAt != null ? -1.45 * fu * fu : -1.45;
    if (so.fallAt != null && fu >= 1)
      ang +=
        Math.sin(clamp(LT - so.fallAt - 0.55, 0, 1) * 18) *
        0.05 *
        (1 - clamp(LT - so.fallAt - 0.55, 0, 1));
    ctx.translate(0, -wr);
    ctx.rotate(ang * f);
    ctx.translate(0, wr);
    if (so.fallAt == null || fu >= 1) dim = 0;
  }
  // wheel ball
  var wg = ctx.createRadialGradient(-wr * 0.3, -wr * 1.3, 2, 0, -wr, wr * 1.1);
  wg.addColorStop(0, "#6a7080");
  wg.addColorStop(1, "#1c1f28");
  ci(0, -wr, wr, wg, OUT, Math.max(3, s * 0.03));
  ctx.save();
  ctx.translate(0, -wr);
  ctx.rotate((o.x || 0) / wr);
  ln([-wr * 0.8, 0, wr * 0.8, 0], s * 0.02, "rgba(255,255,255,.25)");
  ctx.restore();
  ctx.rotate(
    lean + (moving ? Math.sin(t * 10) * 0.015 : Math.sin(t * 1.5) * 0.01),
  );
  var lw = Math.max(3, s * 0.03);
  // arms (back)
  var arm = function (sd, front) {
    var sx = sd * 0.24 * s,
      sy = -0.64 * s,
      ex,
      ey,
      hx,
      hy;
    if (o.arm === "up" && sd === f) {
      ex = sx + sd * 0.12 * s;
      ey = sy - 0.22 * s;
      hx = ex + sd * 0.06 * s + Math.sin(t * 9) * 0.04 * s;
      hy = ey - 0.22 * s;
    } else if (o.talk && sd === f) {
      ex = sx + sd * 0.16 * s;
      ey = sy + 0.1 * s;
      hx = ex + sd * 0.16 * s;
      hy = ey - 0.08 * s + Math.sin(t * 5) * 0.05 * s;
    } else if (moving) {
      ex = sx + sd * 0.1 * s;
      ey = sy + 0.2 * s;
      hx = ex + sd * 0.02 * s - f * 0.1 * s;
      hy = ey + 0.16 * s;
    } else {
      ex = sx + sd * 0.07 * s;
      ey = sy + 0.22 * s;
      hx = ex + sd * 0.02 * s;
      hy = ey + 0.2 * s + Math.sin(t * 1.5 + sd) * 0.01 * s;
    }
    if (red && !dead) {
      hy -= 0.05 * s;
      hx += sd * 0.06 * s;
    }
    limb(
      [sx, sy, ex, ey, hx, hy],
      0.06 * s,
      front ? "#dfe4ea" : "#b9c0c9",
      lw * 0.8,
    );
    ci(ex, ey, 0.045 * s, "#9aa3ad", OUT, lw * 0.7);
    ctx.save();
    ctx.translate(hx, hy);
    ctx.rotate(Math.atan2(hy - ey, hx - ex) - PI / 2);
    ctx.beginPath();
    ctx.arc(0, 0.04 * s, 0.06 * s, -0.3, PI + 0.3, true);
    ctx.lineWidth = 0.035 * s + lw;
    ctx.strokeStyle = OUT;
    ctx.stroke();
    ctx.lineWidth = 0.035 * s;
    ctx.strokeStyle = red ? "#8a8f98" : "#c9d0d8";
    ctx.stroke();
    ctx.restore();
  };
  arm(-f, false);
  // body
  var bg = ctx.createLinearGradient(-0.26 * s, 0, 0.26 * s, 0);
  bg.addColorStop(0, red ? "#c4c8ce" : "#ffffff");
  bg.addColorStop(0.6, red ? "#9ea4ac" : "#e6eaef");
  bg.addColorStop(1, red ? "#6e747c" : "#b8c0ca");
  el(0, -0.5 * s, 0.26 * s, 0.31 * s, bg, OUT, lw);
  el(
    -0.08 * s,
    -0.6 * s,
    0.07 * s,
    0.14 * s,
    "rgba(255,255,255,.55)",
    null,
    0,
    -0.3,
  );
  rr(
    -0.12 * s,
    -0.5 * s,
    0.24 * s,
    0.14 * s,
    0.05 * s,
    "#2a2f3a",
    OUT,
    lw * 0.6,
  );
  var bat = so.bat != null ? so.bat / 100 : so.lowbat ? 0.08 : 0.85;
  rr(
    -0.1 * s,
    -0.48 * s,
    0.2 * s * bat,
    0.1 * s,
    0.03 * s,
    bat < 0.2 ? "#ff4a3a" : "#4be37a",
  );
  // neck
  rr(
    -0.05 * s,
    -0.9 * s,
    0.1 * s,
    0.12 * s,
    0.03 * s,
    "#9aa3ad",
    OUT,
    lw * 0.6,
  );
  // head
  var hg = ctx.createLinearGradient(0, -1.3 * s, 0, -0.86 * s);
  hg.addColorStop(0, red ? "#c9cdd3" : "#ffffff");
  hg.addColorStop(1, red ? "#7a8088" : "#c7ced8");
  var tilt = so.tilt
    ? Math.sin(t * 2) * 0.06
    : red
      ? 0.08 * Math.sin(t * 13) * (Math.sin(t * 2.1) > 0.7 ? 1 : 0)
      : 0;
  ctx.save();
  ctx.translate(0, -0.9 * s);
  ctx.rotate(tilt);
  ctx.translate(0, 0.9 * s);
  rr(-0.31 * s, -1.31 * s, 0.62 * s, 0.44 * s, 0.17 * s, hg, OUT, lw);
  // antenna with spring
  var aa = -lean * 1.8 + Math.sin(t * 7) * (moving ? 0.12 : 0.03);
  ctx.save();
  ctx.translate(0, -1.31 * s);
  ctx.rotate(aa);
  ln([0, 0, 0, -0.14 * s], lw, OUT);
  ln([0, 0, 0, -0.14 * s], lw * 0.45, "#9aa3ad");
  ci(0, -0.16 * s, 0.035 * s, red ? "#ff2a3a" : "#ffd84a", OUT, lw * 0.6);
  ctx.restore();
  rr(
    -0.25 * s,
    -1.25 * s,
    0.5 * s,
    0.32 * s,
    0.12 * s,
    "#0d1220",
    OUT,
    lw * 0.5,
  );
  el(-0.12 * s, -1.2 * s, 0.1 * s, 0.03 * s, "rgba(255,255,255,.12)");
  var blink = fr(t * 0.31 + (o.x || 0) * 0.001) < 0.04 ? 0.15 : 1;
  ctx.globalAlpha = dim;
  if (dim > 0.02) {
    for (var sd = -1; sd <= 1; sd += 2) {
      var ex = sd * 0.1 * s + f * 0.025 * s,
        ey = -1.09 * s;
      ctx.save();
      ctx.shadowColor = eyeC;
      ctx.shadowBlur = 0.12 * s;
      if (red) {
        po(
          [
            ex - 0.06 * s,
            ey - 0.03 * s * (sd === -1 ? 1.6 : 0.4),
            ex + 0.06 * s,
            ey - 0.03 * s * (sd === -1 ? 0.4 : 1.6),
            ex + 0.06 * s,
            ey + 0.035 * s,
            ex - 0.06 * s,
            ey + 0.035 * s,
          ],
          eyeC,
        );
      } else
        rr(
          ex - 0.045 * s,
          ey - 0.065 * s * blink,
          0.09 * s,
          0.13 * s * blink,
          0.045 * s,
          eyeC,
        );
      ctx.restore();
      var dp = devPt(ex, ey);
      EYEG.push([dp[0], dp[1], s * 0.6 * ctx.getTransform().a, eyeC, dim]);
    }
    // mouth
    if (o.talk) {
      var mo = 0.01 * s + Math.abs(Math.sin(t * 16)) * 0.035 * s;
      rr(-0.06 * s, -1.0 * s, 0.12 * s, mo, mo / 2, eyeC);
    } else if (!red) {
      ctx.beginPath();
      ctx.arc(0, -1.04 * s, 0.05 * s, 0.4, PI - 0.4);
      ctx.lineWidth = 0.015 * s;
      ctx.strokeStyle = eyeC;
      ctx.stroke();
    } else ln([-0.07 * s, -1.0 * s, 0.07 * s, -1.0 * s], 0.014 * s, eyeC);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
  arm(f, true);
  ctx.restore();
  if (SH && !SH._lite)
    SH._lite = function () {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "lighter";
      EYEG.forEach(function (e) {
        glow(
          e[0],
          e[1],
          e[2],
          e[3] === "#ff2a3a" ? "rgba(255,40,60,.35)" : "rgba(90,240,255,.25)",
          e[4],
        );
      });
      ctx.restore();
      EYEG = [];
    };
}
// ---------- lighting pass for every character ----------
var SNAP = document.createElement("canvas");
SNAP.width = W;
SNAP.height = H;
var SX = SNAP.getContext("2d");
(function () {
  var _ch = ch;
  ch = function (o) {
    if (!o) return _ch(o);
    if (o.k === "mom" || o.k === "dad")
      o = Object.assign({}, o, { s: o.s * 1.1 });
    if (ROBOT[o.k] && o.k !== "mapl") {
    }
    var isR = !!ROBOT[o.k];
    if (window.NOLIGHT) return isR ? drawRobot(o) : _ch(o);
    SX.setTransform(1, 0, 0, 1, 0, 0);
    SX.clearRect(0, 0, W, H);
    SX.drawImage(cv, 0, 0);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.restore();
    var r = isR ? drawRobot(o) : _ch(o);
    var s = o.s || 100,
      L = (SH && SH._L) || {
        x: o.x - 300,
        y: o.y - 500,
        c: "rgba(255,240,220,.25)",
      };
    ctx.save();
    ctx.globalCompositeOperation = "source-atop";
    var g = ctx.createLinearGradient(0, o.y - s * 1.45, 0, o.y);
    g.addColorStop(0, "rgba(255,255,255,.05)");
    g.addColorStop(0.55, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(10,10,30,.32)");
    ctx.fillStyle = g;
    ctx.fillRect(o.x - s * 2, o.y - s * 2.2, s * 4, s * 2.4);
    var dx = L.x < o.x ? -1 : 1,
      g2 = ctx.createLinearGradient(
        o.x - dx * s * 0.45,
        0,
        o.x + dx * s * 0.45,
        0,
      );
    g2.addColorStop(0, L.c);
    g2.addColorStop(0.5, "rgba(0,0,0,0)");
    g2.addColorStop(
      1,
      SH && SH.pal !== "day" ? "rgba(10,14,50,.38)" : "rgba(20,20,40,.16)",
    );
    ctx.fillStyle = g2;
    ctx.fillRect(o.x - s * 2, o.y - s * 2.2, s * 4, s * 2.4);
    ctx.restore();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "destination-over";
    ctx.drawImage(SNAP, 0, 0);
    ctx.restore();
    return r;
  };
})();
// ---------- Eli in bed ----------
function bedEli(x, y, scared) {
  rr(x - 40, y - 210, 30, 230, 8, "#7a5530", OUT, 5);
  rr(x - 20, y - 60, 400, 80, 10, "#7a5530", OUT, 5);
  rr(x - 10, y - 110, 380, 60, 14, "#f4f0e6", OUT, 4);
  rr(x, y - 140, 110, 44, 18, "#ffffff", OUT, 4);
  ch({
    k: "eli",
    x: x + 150,
    y: y - 50,
    s: 150,
    f: 1,
    sit: 1,
    scared: !!scared,
    noglow: 0,
  });
  var bl = ctx.createLinearGradient(0, y - 120, 0, y);
  bl.addColorStop(0, "#3f7fb5");
  bl.addColorStop(1, "#2a5a88");
  ctx.beginPath();
  ctx.moveTo(x - 10, y - 20);
  ctx.quadraticCurveTo(x + 40, y - 120, x + 150, y - 105);
  ctx.quadraticCurveTo(x + 300, y - 115, x + 375, y - 100);
  ctx.lineTo(x + 380, y - 5);
  ctx.lineTo(x - 10, y - 5);
  ctx.closePath();
  ctx.fillStyle = bl;
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = OUT;
  ctx.stroke();
  for (var i = 0; i < 5; i++)
    ln(
      [x + 30 + i * 70, y - 100, x + 20 + i * 70, y - 10],
      3,
      "rgba(255,255,255,.15)",
    );
}
function doorAt(x, y, w, h, o, lt, col) {
  rr(x - 12, y - 12, w + 24, h + 12, 4, "#f4f0e6", OUT, 5);
  if (o.door === "open") {
    gr(x, y, w, h, "#05060c", "#141826");
    var dop = clamp(lt / 0.5, 0, 1);
    po(
      [
        x + w,
        y,
        x + w + 50 * dop,
        y - 10,
        x + w + 50 * dop,
        y + h + 10,
        x + w,
        y + h,
      ],
      col || "#e8e1d2",
      OUT,
      4,
    );
    return;
  }
  rr(x, y, w, h, 4, col || "#e8e1d2", OUT, 5);
  rr(x + 16, y + 20, w - 32, h * 0.38, 4, null, "rgba(22,24,39,.25)", 3);
  rr(x + 16, y + h * 0.5, w - 32, h * 0.42, 4, null, "rgba(22,24,39,.25)", 3);
  var kj = o.knob
    ? Math.sin(lt * 22) * 0.6 * (Math.sin(lt * 3) > -0.2 ? 1 : 0)
    : 0;
  ctx.save();
  ctx.translate(x + 26, y + h * 0.52);
  ctx.rotate(kj);
  ci(0, 0, 15, "#d8b45a", OUT, 4);
  ln([-9, 0, 9, 0], 3, "rgba(0,0,0,.35)");
  ctx.restore();
  if (o.shadow) {
    ctx.fillStyle = "rgba(255,210,140,.9)";
    ctx.fillRect(x, y + h - 6, w, 6);
    ctx.fillStyle = "#05060c";
    ctx.fillRect(x + w * 0.35, y + h - 6, w * 0.3, 6);
  }
}
// ---------- backgrounds ----------
BG.yard = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  gr(
    0,
    -60,
    W,
    560,
    night ? (sh.pal === "dusk" ? "#2a2550" : "#050818") : "#6fb2e8",
    night ? (sh.pal === "dusk" ? "#e08a5a" : "#1a2350") : "#d4ecf8",
  );
  if (o.storm) {
    var fl = flashAt(t);
    if (fl > 0) {
      ctx.fillStyle = "rgba(200,215,255," + fl * 0.6 + ")";
      ctx.fillRect(-60, -60, W + 120, 560);
      if (fl > 0.7) {
        srand(Math.floor(t / 7));
        var bx = 200 + rnd() * 900,
          by = -40;
        ctx.strokeStyle = "#f4f6ff";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        for (var k = 0; k < 8; k++) {
          bx += (rnd() - 0.5) * 70;
          by += 50;
          ctx.lineTo(bx, by);
        }
        ctx.stroke();
      }
    }
  }
  var hx = o.street ? 0 : 1;
  if (o.street) {
    for (var i = 0; i < 6; i++) {
      var x = -40 + i * 230,
        yb = 470;
      rr(
        x,
        yb - 170,
        200,
        170,
        4,
        ["#6a7088", "#7a6a70", "#5a7080", "#70707a", "#6a6070", "#5a6a78"][i],
        OUT,
        4,
      );
      po(
        [x - 14, yb - 168, x + 100, yb - 240, x + 214, yb - 168],
        "#3a3e52",
        OUT,
        4,
      );
      rr(x + 30, yb - 130, 50, 44, 3, "#0a0e22", OUT, 3);
      rr(x + 120, yb - 130, 50, 44, 3, "#0a0e22", OUT, 3);
      rr(x + 80, yb - 80, 40, 80, 3, "#4a3a30", OUT, 3);
      var ex = x + 55 + (i % 2) * 90,
        ey = yb - 108,
        on = clamp((lt - 0.6 - i * 0.35) / 0.3, 0, 1);
      if (on > 0) {
        ctx.globalAlpha = on;
        ci(ex - 9, ey, 4, "#ff2a3a");
        ci(ex + 9, ey, 4, "#ff2a3a");
        glow(ex, ey, 60, "rgba(255,40,60,.5)", 1);
        ctx.globalAlpha = 1;
      }
    }
  } else {
    // our house
    rr(280, 150, 720, 450, 4, night ? "#c9b8a0" : "#e9d8bd", OUT, 6);
    po([240, 155, 640, -10, 1040, 155], "#5a4a5a", OUT, 6);
    for (var y = 175; y < 600; y += 30)
      ln([280, y, 1000, y], 2, "rgba(22,24,39,.12)");
    var lit = o.lit !== 0 && night;
    [
      [340, 230],
      [840, 230],
      [340, 400],
    ].forEach(function (p) {
      rr(
        p[0],
        p[1],
        120,
        100,
        4,
        lit ? "#ffd78a" : night ? "#141a34" : "#a8d4ee",
        OUT,
        5,
      );
      ln([p[0] + 60, p[1], p[0] + 60, p[1] + 100], 4, "#f4f0e6");
      if (lit) glow(p[0] + 60, p[1] + 50, 160, "rgba(255,200,110,.35)", 1);
    });
    rr(580, 380, 120, 220, 4, "#7a3a2a", OUT, 5);
    ci(600, 495, 6, "#d8b45a");
    rr(560, 360, 160, 18, 3, "#f4f0e6", OUT, 3);
    if (night) {
      ci(730, 400, 8, "#ffe9a8");
      glow(730, 410, 160, "rgba(255,220,140,.5)", 1);
    }
  }
  gr(
    0,
    500,
    W,
    280,
    night ? "#1e2a26" : "#6aa860",
    night ? "#101814" : "#4a8a48",
  );
  gr(
    380,
    600,
    460,
    180,
    night ? "#3a3d44" : "#9a9ca2",
    night ? "#2a2d34" : "#86888e",
  );
  if (o.car) {
    var cx =
        160 + (o.car === "go" ? Math.pow(clamp(lt / 3, 0, 1), 2) * -900 : 0),
      cy = 600;
    rr(cx - 120, cy - 70, 280, 70, 22, "#c0392b", OUT, 5);
    po(
      [
        cx - 60,
        cy - 70,
        cx - 30,
        cy - 120,
        cx + 90,
        cy - 120,
        cx + 120,
        cy - 70,
      ],
      "#c0392b",
      OUT,
      5,
    );
    rr(cx - 20, cy - 112, 60, 38, 6, "#9fd6ff", OUT, 3);
    rr(cx + 48, cy - 112, 52, 38, 6, "#9fd6ff", OUT, 3);
    ci(cx - 60, cy, 30, "#22252c", OUT, 5);
    ci(cx + 110, cy, 30, "#22252c", OUT, 5);
    if (night) {
      glow(cx - 126, cy - 40, 120, "rgba(255,40,40,.5)", 1);
    }
  }
  if (o.storm) {
    rainIn(-60, -60, W + 120, H + 120, t, 220, 0.4);
  }
  if (night) {
    ctx.fillStyle = "rgba(6,10,30," + (sh.pal === "dusk" ? 0.12 : 0.3) + ")";
    ctx.fillRect(-80, -80, W + 160, H + 160);
  }
  sh._L = {
    x: 730,
    y: 400,
    c: night ? "rgba(255,200,120,.3)" : "rgba(255,250,230,.25)",
  };
  return { gy: 686, s: 170 };
};
BG.living = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  room("#e9dcc6", "#d8c8ae", "#9a6a42", "#6e4a2c");
  windowBox(90, 140, 300, 260, t, o, night); sh._beam = [90, 140, 300];
  // curtains
  rr(50, 110, 50, 330, 10, "#8a4a6a", OUT, 4);
  rr(380, 110, 50, 330, 10, "#8a4a6a", OUT, 4);
  // TV
  rr(560, 250, 330, 200, 8, "#16181f", OUT, 6);
  rr(575, 262, 300, 176, 4, o.tv ? "#202430" : "#0a0c12");
  if (o.tv === "static") {
    srand(BO * 13);
    for (var i = 0; i < 260; i++) {
      ctx.fillStyle = "rgba(255,255,255," + rnd() + ")";
      ctx.fillRect(575 + rnd() * 296, 262 + rnd() * 172, 4, 3);
    }
  }
  if (o.tv === "bar") {
    rr(600, 330, 250, 36, 8, "#2a3040", "#5ff3ff", 3);
    rr(604, 334, 242 * clamp(0.42 + lt * 0.01, 0, 1), 28, 6, "#5ff3ff");
    tx("MAPLE OS 2.0  ·  DOWNLOADING", 725, 300, 18, "#bfefff");
    tx(Math.round((0.42 + lt * 0.01) * 100) + "%", 725, 395, 22, "#ffffff");
  }
  if (o.tv)
    glow(
      725,
      350,
      300,
      o.tv === "bar" ? "rgba(90,240,255,.3)" : "rgba(220,230,255,.3)",
      1,
    );
  rr(540, 450, 370, 60, 6, "#5a3a24", OUT, 5);
  ln([560, 510, 560, 590], 8, "#3a2416");
  ln([890, 510, 890, 590], 8, "#3a2416");
  // bookshelf
  rr(1040, 140, 200, 450, 4, "#7a5530", OUT, 5);
  for (var sy = 0; sy < 4; sy++) {
    ln([1040, 250 + sy * 110, 1240, 250 + sy * 110], 6, "#5a3a24");
    for (var b = 0; b < 6; b++)
      rr(
        1055 + b * 29,
        250 + sy * 110 - 70 - (b % 3) * 8,
        24,
        70 + (b % 3) * 8,
        2,
        ["#c0392b", "#2f6f8f", "#e8b84a", "#3fa060", "#7b5fd0", "#e07b39"][
          (b + sy) % 6
        ],
        OUT,
        2,
      );
  }
  // sofa
  rr(140, 470, 330, 120, 30, "#3f6f8f", OUT, 6);
  rr(130, 430, 60, 160, 24, "#355f7a", OUT, 5);
  rr(420, 430, 60, 160, 24, "#355f7a", OUT, 5);
  if (o.fort) {
    po([120, 600, 300, 330, 520, 600], "#e8c87a", OUT, 5);
    po([170, 600, 300, 400, 430, 600], "#c99a4e");
    ln([300, 330, 300, 600], 4, "rgba(0,0,0,.25)");
    glow(300, 540, 120, "rgba(255,220,140,.6)", 1);
  }
  lampStand(990, 590, night);
  nightGrade(
    sh,
    [[990, 300, 380, "rgba(255,180,100,.42)"]].concat(
      o.tv
        ? [
            [
              725,
              350,
              420,
              o.tv === "bar" ? "rgba(80,220,255,.25)" : "rgba(200,210,255,.22)",
            ],
          ]
        : [],
    ),
  );
  stormFlash(sh);
  sh._L = {
    x: 990,
    y: 300,
    c: night ? "rgba(255,180,100,.32)" : "rgba(255,250,230,.22)",
  };
  physDraw(sh, lt);
  return { gy: 686, s: 170 };
};
BG.kitchen = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  room("#f1e6d2", "#dccdb4", "#c9c2b4", "#a09a8e");
  for (var x = 0; x < W; x += 60)
    for (var y = 600; y < 780; y += 60)
      if (((x + y) / 60) % 2) {
        ctx.fillStyle = "rgba(0,0,0,.07)";
        ctx.fillRect(x, y, 60, 60);
      }
  windowBox(470, 120, 260, 190, t, o, night); sh._beam = [470, 120, 260];
  // upper cabinets
  for (var i = 0; i < 3; i++)
    rr(70 + i * 130, 90, 120, 170, 6, "#6fa08a", OUT, 5);
  for (var i = 0; i < 3; i++)
    rr(800 + i * 130, 90, 120, 170, 6, "#6fa08a", OUT, 5);
  // counter
  rr(40, 460, 1200, 22, 4, "#e8e4da", OUT, 5);
  rr(50, 482, 1180, 118, 4, "#5f907a", OUT, 5);
  for (var i = 0; i < 8; i++) {
    ln([50 + i * 148, 482, 50 + i * 148, 600], 3, OUT);
    ci(50 + i * 148 + 74, 500, 5, "#d8b45a");
  }
  // fridge
  rr(-10, 150, 0, 0, 0, null);
  // stove + pan
  rr(870, 452, 140, 10, 3, "#2a2d34", OUT, 3);
  ln([920, 452, 860, 440], 8, OUT);
  el(930, 452, 60, 10, "#2f3038", OUT, 4);
  if (o.phys !== "flip" && o.pancake !== "dino" && !o.broken) {
  }
  if (o.pancake === "dino") {
    ctx.save();
    ctx.translate(380, 450);
    el(0, 2, 70, 14, "#f4f0e6", OUT, 3);
    ctx.fillStyle = "#d99a4e";
    ctx.strokeStyle = OUT;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, -6, 40, 10, 0, 0, 7);
    ctx.fill();
    ctx.stroke();
    ci(38, -14, 12, "#d99a4e", OUT, 3);
    rr(-30, -6, 12, 12, 3, "#ffffff", OUT, 2);
    rr(14, -6, 10, 10, 3, "#d99a4e", OUT, 2);
    ctx.restore();
  }
  if (o.box) {
    var op = clamp((lt - 0.3) / 0.6, 0, 1);
    rr(680, 250, 170, 350, 6, "#c9a06a", OUT, 6);
    tx("MAPLE", 765, 300, 26, "#6a4a2a");
    if (op < 1 && o.phys !== "peanuts") {
    }
    if (!o.phys) rr(680, 250, 170, 350, 6, "#d8b07a", OUT, 6);
  }
  if (o.broken) {
    srand(55);
    for (var i = 0; i < 30; i++)
      drawThing(
        "shard",
        100 + rnd() * 1080,
        620 + rnd() * 80,
        rnd() * 6,
        5 + rnd() * 7,
        rnd() > 0.5 ? "#f7f7f2" : "rgba(200,230,255,.9)",
      );
    drawThing("plank", 900, 650, 0.3, 60);
    drawThing("plank", 300, 670, -0.5, 50);
  }
  ci(640, 60, 0, null);
  nightGrade(sh, [[640, 20, 520, "rgba(255,230,170,.36)"]]);
  stormFlash(sh);
  sh._L = {
    x: 640,
    y: 0,
    c: night ? "rgba(255,220,160,.3)" : "rgba(255,250,235,.25)",
  };
  physDraw(sh, lt);
  return { gy: 686, s: 170 };
};
BG.hall = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  room("#dfe3e8", "#c6ccd4", "#8a6a4a", "#5e462e");
  rr(100, 620, 1080, 60, 6, "#8a3a3a", OUT, 4);
  doorAt(80, 230, 150, 360, {}, lt, "#e8e1d2");
  doorAt(1060, 230, 150, 360, o, lt, "#e8e1d2");
  rr(1085, 190, 100, 26, 4, "#3f7fb5", OUT, 3);
  tx("ELI", 1135, 204, 16, "#fff");
  if (o.phys !== "frames") {
    [250, 510, 770].forEach(function (x, i) {
      drawThing(
        "frame",
        x + 40,
        290 + (i % 2) * 30,
        0,
        44,
        ["#9fd0e8", "#f2c9a0", "#b8e0a8"][i],
      );
    });
  }
  // ceiling lamp
  ln([640, -60, 640, 60], 4, "#3a3a44");
  po([590, 60, 690, 60, 670, 90, 610, 90], "#f4e4b0", OUT, 3);
  ci(330, 560, 7, "#ffd78a");
  ci(930, 560, 7, "#ffd78a");
  nightGrade(sh, [
    [640, 80, 420, "rgba(255,210,140,.3)"],
    [330, 560, 90, "rgba(255,200,110,.5)"],
    [930, 560, 90, "rgba(255,200,110,.5)"],
  ]);
  sh._L = {
    x: 640,
    y: 80,
    c: night ? "rgba(255,200,130,.28)" : "rgba(255,250,235,.22)",
  };
  physDraw(sh, lt);
  return { gy: 686, s: 170 };
};
BG.kidroom = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  room("#bcd6ea", "#9fbcd4", "#a77a52", "#7a5434");
  ctx.globalAlpha = 0.25;
  srand(12);
  for (var i = 0; i < 26; i++) {
    var sx = rnd() * W,
      sy = rnd() * 560;
    po(
      [
        sx,
        sy - 8,
        sx + 3,
        sy - 2,
        sx + 9,
        sy,
        sx + 3,
        sy + 3,
        sx,
        sy + 9,
        sx - 3,
        sy + 3,
        sx - 9,
        sy,
        sx - 3,
        sy - 2,
      ],
      "#ffffff",
    );
  }
  ctx.globalAlpha = 1;
  windowBox(520, 120, 240, 200, t, o, night); sh._beam = [520, 120, 240];
  // poster
  rr(820, 140, 120, 160, 3, "#2a2f4a", OUT, 4);
  ci(880, 200, 30, "#ffd84a");
  po([845, 280, 880, 240, 915, 280], "#e0503a");
  // shelf with toys
  rr(980, 300, 230, 14, 3, "#7a5530", OUT, 4);
  if (o.phys !== "toys") {
    var ks = ["block", "ball", "car", "block", "ball", "block"],
      cs = ["#e0503a", "#3fb27f", "#3f7fb5", "#f2c21a", "#ff6a3a", "#7b6fd0"];
    for (var i = 0; i < 6; i++)
      drawThing(ks[i], 1010 + i * 34, 300 - 16, 0, 16, cs[i]);
  }
  // door (right)
  doorAt(1040, 230, 160, 360, o, lt, "#e8e1d2");
  if (o.chair) {
    var cx = 1010,
      cr = 0;
    if (o.chair === "slide") {
      var u = clamp((lt - 0.3) / 0.5, 0, 1);
      cx -= 420 * (1 - Math.pow(1 - u, 3));
      cr = -u * 1.4;
    }
    drawThing(
      "chair",
      cx,
      560 + (o.chair === "slide" ? clamp((lt - 0.3) / 0.5, 0, 1) * 50 : 0),
      cr,
      70,
    );
  }
  // nightlight + desk
  rr(420, 470, 200, 16, 3, "#c99a4e", OUT, 4);
  ln([440, 486, 440, 600], 8, "#8a5a32");
  ln([600, 486, 600, 600], 8, "#8a5a32");
  rr(470, 420, 70, 50, 4, "#2a2f3a", OUT, 3);
  ci(380, 560, 9, "#9fe8ff");
  if (o.inbed) bedEli(130, 610, o.inbed === "!");
  nightGrade(
    sh,
    [[380, 560, 220, "rgba(120,220,255,.35)"]]
      .concat(o.shadow ? [[1120, 600, 120, "rgba(255,200,120,.4)"]] : [])
      .concat(o.door === "open" ? [] : []),
  );
  stormFlash(sh);
  sh._L = {
    x: 380,
    y: 520,
    c: night ? "rgba(120,220,255,.28)" : "rgba(255,250,235,.22)",
  };
  physDraw(sh, lt);
  return { gy: 686, s: 170 };
};
BG.gar = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day",
    off = o.lever === "down" || o.blackout;
  gr(0, -60, W, 660, "#8a8f98", "#6a6f78");
  for (var y = 0; y < 600; y += 40) ln([0, y, W, y], 2, "rgba(0,0,0,.08)");
  gr(0, 600, W, 180, "#7a7e86", "#5a5e66");
  ctx.globalAlpha = 0.2;
  el(500, 680, 200, 20, "#222");
  ctx.globalAlpha = 1;
  // garage door left
  rr(-40, 120, 360, 480, 4, "#cfd3d8", OUT, 5);
  for (var i = 0; i < 6; i++)
    ln([-40, 200 + i * 70, 320, 200 + i * 70], 4, "rgba(22,24,39,.3)");
  // car
  rr(60, 450, 380, 120, 30, "#3f6f8f", OUT, 6);
  po([140, 450, 190, 370, 360, 370, 410, 450], "#3f6f8f", OUT, 6);
  rr(205, 382, 70, 58, 6, "#9fd6ff", OUT, 3);
  rr(285, 382, 70, 58, 6, "#9fd6ff", OUT, 3);
  ci(140, 575, 36, "#22252c", OUT, 5);
  ci(360, 575, 36, "#22252c", OUT, 5);
  // shelf + cans
  rr(820, 300, 360, 14, 3, "#6a5038", OUT, 4);
  ln([840, 314, 840, 600], 6, "#6a5038");
  ln([1160, 314, 1160, 600], 6, "#6a5038");
  rr(820, 450, 360, 14, 3, "#6a5038", OUT, 4);
  if (o.phys !== "cans")
    for (var i = 0; i < 5; i++)
      drawThing(
        "can",
        860 + i * 52,
        288 - 2,
        0,
        20,
        i % 2 ? "#c9cdd3" : "#d8d2c2",
      );
  for (var i = 0; i < 4; i++)
    rr(
      860 + i * 80,
      400,
      60,
      50,
      4,
      ["#c0392b", "#e8b84a", "#3fa060", "#7b5fd0"][i],
      OUT,
      3,
    );
  // workbench + tools
  rr(470, 470, 300, 20, 3, "#8a6a48", OUT, 4);
  ln([490, 490, 490, 600], 8, "#6a5038");
  ln([750, 490, 750, 600], 8, "#6a5038");
  rr(480, 250, 280, 180, 3, "#b8a888", OUT, 4);
  for (var i = 0; i < 5; i++)
    ln(
      [510 + i * 55, 290, 510 + i * 55, 360 + (i % 2) * 30],
      7,
      ["#c0392b", "#555", "#e8b84a", "#555", "#3f7fb5"][i],
    );
  // charger dock
  if (o.charger) {
    rr(600, 560, 120, 40, 8, "#2a2f3a", OUT, 4);
    var on = o.charger === "on" || (o.charger === 1 && (o.cam || 1));
    ci(660, 575, 7, Math.floor(t * 2) % 2 ? "#4be37a" : "#1a5a2a");
    glow(660, 575, 60, "rgba(80,255,120,.4)", Math.floor(t * 2) % 2);
  }
  // breaker panel
  if (o.lever) {
    rr(330, 200, 120, 170, 6, "#9aa0a8", OUT, 5);
    rr(345, 215, 90, 140, 4, "#c9ced4", OUT, 3);
    for (var i = 0; i < 6; i++)
      rr(
        355 + (i % 2) * 40,
        225 + Math.floor(i / 2) * 32,
        30,
        20,
        3,
        "#2a2f3a",
      );
    var lu =
      o.lever === "down"
        ? 1
        : o.lever === "pull"
          ? clamp((lt - 2.2) / 0.4, 0, 1)
          : o.lever === "up"
            ? 1 - clamp((lt - 0.8) / 0.4, 0, 1)
            : 0;
    ctx.save();
    ctx.translate(460, 300);
    ctx.rotate(-0.9 + lu * 1.8);
    rr(-6, -60, 12, 60, 4, "#c0392b", OUT, 3);
    ci(0, -60, 10, "#e0503a", OUT, 3);
    ctx.restore();
  }
  // ceiling light
  rr(560, 20, 160, 14, 4, "#f4f0e6", OUT, 3);
  if (off) {
    ctx.fillStyle = "rgba(2,3,10,.88)";
    ctx.fillRect(-80, -80, W + 160, H + 160);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    glow(660, 575, 50, "rgba(80,255,120,.25)", 1);
    ctx.restore();
  } else nightGrade(sh, [[640, 40, 560, "rgba(240,240,255,.32)"]]);
  sh._L = { x: 640, y: 30, c: off ? "rgba(0,0,0,0)" : "rgba(240,245,255,.25)" };
  physDraw(sh, lt);
  return { gy: 686, s: 170 };
};
BG.stairs = function (sh, t, lt) {
  var o = sh.o;
  room("#dfe3e8", "#c6ccd4", "#8a6a4a", "#5e462e");
  // staircase from top-left to bottom-right
  for (var i = 0; i < 9; i++) {
    var x = 120 + i * 110,
      y = 140 + i * 52;
    rr(x, y, 140, 52, 3, "#a87a52", OUT, 4);
    rr(x, y, 140, 10, 3, "#c99a6a");
  }
  po([120, 192, 1110, 660, 1110, 720, 120, 720], "#6e4a2c");
  ln([140, 60, 1130, 530], 10, "#7a5530");
  for (var i = 0; i < 10; i++)
    ln([150 + i * 105, 65 + i * 50, 150 + i * 105, 140 + i * 52], 6, "#7a5530");
  var u = clamp(lt / (sh.dur * 0.9), 0, 1);
  // robot bouncing down (physics: hop per step)
  var ru = clamp(u * 1.15 - 0.15, 0, 1),
    step = ru * 8,
    k = Math.floor(step),
    fu = step - k;
  var rx = 180 + step * 110,
    ry = 140 + (k + 1) * 52 - Math.sin(fu * PI) * 40;
  if (u > 0.12) ch({ k: "mred", x: rx, y: ry, s: 150, f: 1, walk: lt });
  // eli running ahead
  var eu = clamp(u * 1.25, 0, 1),
    es = eu * 8.5,
    ex = 260 + es * 110,
    ey = 140 + (Math.floor(es) + 1) * 52 - Math.abs(Math.sin(es * PI)) * 14;
  ch({
    k: "eli",
    x: Math.min(ex, 1210),
    y: Math.min(ey, 660),
    s: 150,
    f: 1,
    walk: lt * 15,
    run: 1,
    scared: 1,
  });
  nightGrade(sh, [[640, 80, 520, "rgba(255,210,140,.22)"]]);
  stormFlash(sh);
  sh._L = { x: 640, y: 80, c: "rgba(255,200,130,.22)" };
  return { gy: 2000, s: 170 };
};
BG.screen = function (sh, t, lt) {
  var o = sh.o,
    e = o.eyes || "blue",
    red = e === "red";
  if (e === "flick") red = Math.floor(t * 7) % 3 === 0;
  var night = sh.pal !== "day";
  gr(
    -60,
    -60,
    W + 120,
    H + 120,
    night ? "#0a0c18" : "#d8dde4",
    night ? "#1a1e2e" : "#b8c0ca",
  );
  // giant head
  var hg = ctx.createLinearGradient(0, 60, 0, 700);
  hg.addColorStop(0, "#ffffff");
  hg.addColorStop(1, "#a8b0bc");
  rr(170, 40, 940, 680, 230, red ? "#b8bcc4" : hg, OUT, 10);
  rr(250, 120, 780, 500, 180, "#070a14", OUT, 7);
  el(470, 200, 180, 40, "rgba(255,255,255,.07)", null, 0, -0.2);
  var col = red ? "#ff2a3a" : "#5ff3ff",
    dim = e === "dim" ? 0.35 + 0.25 * Math.sin(t * 2.5) : 1;
  if (e === "count") {
    ctx.save();
    ctx.shadowColor = "#e8faff";
    ctx.shadowBlur = 20;
    ctx.font = "800 38px Inter";
    ctx.textAlign = "center";
    ctx.fillStyle = "#cfefff";
    ctx.fillText((o.cnt || "").split(" ").slice(0, 2).join(" "), 640, 300);
    ctx.font = "900 120px Inter";
    ctx.fillText((o.cnt || "").split(" ").slice(2).join(" "), 640, 430);
    ctx.restore();
    return { gy: 2000, s: 100 };
  }
  ctx.globalAlpha = dim;
  var bl = fr(t * 0.29) < 0.05 ? 0.12 : 1,
    look = Math.sin(t * 0.7) * 20;
  for (var sd = -1; sd <= 1; sd += 2) {
    var ex = 640 + sd * 170 + look,
      ey = 330;
    ctx.save();
    ctx.shadowColor = col;
    ctx.shadowBlur = 60;
    if (red)
      po(
        [
          ex - 95,
          ey - (sd < 0 ? 70 : 15),
          ex + 95,
          ey - (sd < 0 ? 15 : 70),
          ex + 95,
          ey + 60,
          ex - 95,
          ey + 60,
        ],
        col,
      );
    else rr(ex - 70, ey - 110 * bl, 140, 220 * bl, 70, col);
    ctx.restore();
  }
  var talking =
    /MAPLE/.test(sh.sp) &&
    sh.words.length &&
    lt > sh.words[0][1] &&
    lt < sh.words[sh.words.length - 1][2];
  if (talking) {
    var mo = 8 + Math.abs(Math.sin(t * 15)) * 34;
    rr(560, 520 - mo / 2, 160, mo, mo / 2, col);
  } else if (!red) {
    ctx.beginPath();
    ctx.arc(640, 470, 70, 0.5, PI - 0.5);
    ctx.lineWidth = 14;
    ctx.strokeStyle = col;
    ctx.lineCap = "round";
    ctx.stroke();
  } else ln([540, 520, 740, 520], 14, col);
  ctx.globalAlpha = 1;
  if (o.bat != null) {
    rr(980, 60, 160, 60, 10, "#1a1e2a", "#ff4a3a", 4);
    rr(990, 70, (140 * o.bat) / 100, 40, 6, "#ff4a3a");
    tx(o.bat + "%", 1060, 140, 28, "#ff8a7a");
  }
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  glow(640, 360, 600, red ? "rgba(255,30,50,.12)" : "rgba(80,230,255,.1)", dim);
  ctx.restore();
  // scanlines
  ctx.fillStyle = "rgba(0,0,0,.12)";
  for (var y = 120; y < 620; y += 6) ctx.fillRect(250, y, 780, 2);
  return { gy: 2000, s: 100 };
};
BG.cam = function (sh, t, lt) {
  var o = sh.o;
  gr(-60, -60, W + 120, H + 120, "#05060c", "#11131c");
  rr(140, 40, 1000, 640, 40, "#22252e", OUT, 8);
  rr(180, 80, 920, 560, 10, "#000", OUT, 4);
  ctx.save();
  ctx.beginPath();
  ctx.rect(180, 80, 920, 560);
  ctx.clip();
  if (o.feed === "email") {
    gr(180, 80, 920, 560, "#f4f6fa", "#e6eaf0");
    rr(180, 80, 920, 70, 0, "#3f7fb5");
    tx("MAPLE RENTALS", 640, 115, 28, "#fff");
    tx("MANDATORY UPDATE", 640, 220, 44, "#1a1e2a");
    tx(
      "Maple OS 2.0 will install tonight at 2:00 AM.",
      640,
      300,
      28,
      "#3a3e4a",
      "center",
      "600",
    );
    tx(
      "Please keep your Maple connected to Wi-Fi.",
      640,
      345,
      28,
      "#3a3e4a",
      "center",
      "600",
    );
    var hv = lt > sh.dur * 0.55;
    rr(480, 420, 320, 80, 14, hv ? "#2a5f95" : "#3f7fb5", OUT, 4);
    tx("INSTALL", 640, 461, 32, "#fff");
    if (hv) {
      ci(700 + 10, 470 + 14, 12, "#fff", OUT, 3);
    }
  } else {
    ctx.save();
    ctx.translate(180, 80);
    ctx.scale(0.72, 0.78);
    ctx.translate(0, 40);
    var sh2 = {
      o: { charger: "on", lever: 1 },
      pal: "night",
      i: sh.i,
      dur: sh.dur,
      words: [],
    };
    BG.gar(sh2, t, lt);
    ctx.restore();
    ctx.fillStyle = "rgba(30,80,40,.35)";
    ctx.fillRect(180, 80, 920, 560);
    srand(BO * 17);
    for (var i = 0; i < 200; i++) {
      ctx.fillStyle = "rgba(255,255,255," + rnd() * 0.2 + ")";
      ctx.fillRect(180 + rnd() * 920, 80 + rnd() * 560, 2, 2);
    }
    ctx.fillStyle = "rgba(0,0,0,.18)";
    for (var y = 80; y < 640; y += 4) ctx.fillRect(180, y, 920, 1);
    ci(230, 125, 10, Math.floor(t * 2) % 2 ? "#ff3030" : "#5a1010");
    tx("REC", 250, 126, 26, "#fff", "left");
    tx(
      "GARAGE CAM  01:03:" + String(Math.floor(lt) + 12).padStart(2, "0"),
      1070,
      126,
      24,
      "#fff",
      "right",
    );
  }
  ctx.restore();
  return { gy: 2000, s: 100 };
};
BG.card = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  gr(
    -60,
    -60,
    W + 120,
    H + 120,
    night ? "#1a1a28" : "#7a5a40",
    night ? "#0c0c16" : "#5a3e2a",
  );
  ctx.globalAlpha = 0.12;
  for (var i = 0; i < 18; i++)
    ln([-60, i * 50 - 60, W + 60, i * 50 - 40], 10, "#000");
  ctx.globalAlpha = 1;
  glow(
    640,
    360,
    600,
    night ? "rgba(140,170,255,.18)" : "rgba(255,230,170,.25)",
    1,
  );
  ctx.save();
  ctx.translate(640 + Math.sin(t * 0.8) * 4, 368);
  ctx.rotate(-0.03 + Math.sin(t * 0.6) * 0.006);
  ctx.shadowColor = "rgba(0,0,0,.5)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 18;
  rr(-430, -290, 860, 580, 6, "#fbf6e8");
  ctx.shadowColor = "transparent";
  rr(-430, -290, 860, 580, 6, null, "rgba(60,50,30,.4)", 2);
  for (var j = 0; j < 9; j++)
    ln([-400, -190 + j * 58, 400, -190 + j * 58], 2, "rgba(80,120,190,.28)");
  ln([-340, -280, -340, 280], 2, "rgba(210,60,60,.4)");
  rr(-470, -320, 120, 40, 4, "rgba(240,235,200,.7)");
  rr(350, -320, 120, 40, 4, "rgba(240,235,200,.7)");
  var ls = o.lines || [],
    n = ls.length;
  ls.forEach(function (s, i) {
    var k = clamp(
      (lt - 0.3 - i * (Math.min(sh.dur - 1.4, 3.6) / n)) / 0.5,
      0,
      1,
    );
    if (k <= 0) return;
    var y = n === 1 ? 10 : -150 + i * Math.min(115, 340 / Math.max(1, n - 1)),
      sz = i === 0 && /RULE/.test(s) ? 92 : n > 3 ? 62 : 74;
    ctx.save();
    ctx.translate((i % 2 ? 12 : -8) + Math.sin(i * 3.1) * 6, y);
    ctx.rotate(Math.sin(i * 2.3) * 0.02);
    ctx.font = "italic 700 " + sz + "px Georgia";
    var w = ctx.measureText(s).width;
    if (w > 760) {
      sz *= 760 / w;
      ctx.font = "italic 700 " + sz + "px Georgia";
      w = 760;
    }
    ctx.beginPath();
    ctx.rect(-w / 2 - 10, -sz, (w + 20) * k, sz * 2);
    ctx.clip();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = i === 0 && /RULE/.test(s) ? "#b3202a" : "#1a2a5a";
    ctx.fillText(s, 0, 0);
    ctx.restore();
  });
  ctx.restore();
  return { gy: 2000, s: 100 };
};
// ---------- film grain + close-up wrapper ----------
var GRAIN = document.createElement("canvas");
GRAIN.width = 256;
GRAIN.height = 256;
(function () {
  var g = GRAIN.getContext("2d"),
    id = g.createImageData(256, 256);
  for (var i = 0; i < id.data.length; i += 4) {
    var v = Math.random() * 255;
    id.data[i] = id.data[i + 1] = id.data[i + 2] = v;
    id.data[i + 3] = 22;
  }
  g.putImageData(id, 0, 0);
})();
(function () {
  ["yard", "living", "kitchen", "hall", "kidroom", "gar"].forEach(function (k) {
    var f = BG[k];
    BG[k] = function (sh, t, lt) {
      EYEG = [];
      var zx = sh.o.zoomx;
      if (zx != null) {
        var zs = sh.o.zooms || 1.5,
          zy = sh.o.zoomy || 470;
        ctx.translate(zx, zy);
        ctx.scale(zs, zs);
        ctx.translate(-zx, -zy);
      }
      return f(sh, t, lt);
    };
  });
  var _r = render;
  render = function (t) {
    EYEG = [];
    _r(t);
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 0.6;
    var ox = Math.floor(hash(BO) * 256),
      oy = Math.floor(hash(BO + 7) * 256);
    ctx.fillStyle = ctx.createPattern(GRAIN, "repeat");
    ctx.translate(-ox, -oy);
    ctx.fillRect(0, 0, W + 256, H + 256);
    ctx.restore();
  };
  window.render = render;
})();
