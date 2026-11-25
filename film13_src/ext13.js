// ===== film 13: 30 days locked inside a school =====
LOOK.park = {
  skin: "#e9c09a",
  top: "#5a7fb0",
  bot: "#3a3f5a",
  hair: "#1a1410",
  hs: "long",
  glasses: 1,
};
LOOK.leni = {
  skin: "#7a4e34",
  top: "#f2c21a",
  bot: "#7b5fd0",
  hair: "#1a1210",
  hs: "long",
};
LOOK.stu = {
  skin: "#8fb08a",
  top: "#c0392b",
  bot: "#34406a",
  hair: "#3a2a20",
  hs: "short",
};
function kidsRow(n, y, s, seed) {
  for (var i = 0; i < n; i++) {
    var x = 90 + i * (1100 / n) + (hash(i * 7 + seed) - 0.5) * 40;
    ch({
      k: ["pax", "pax", "pax"][i % 3],
      x: x,
      y: y,
      s: s,
      f: hash(i + seed) > 0.5 ? 1 : -1,
      sit: 1,
      ci: i + seed,
      noglow: 1,
    });
  }
}
function heli(x, y, t, s) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.rotate(Math.sin(t * 1.3) * 0.04);
  rr(-120, -40, 200, 90, 40, "#e8e4da", OUT, 6);
  rr(60, -18, 170, 26, 12, "#e8e4da", OUT, 5);
  rr(220, -50, 20, 60, 6, "#c0392b", OUT, 4);
  rr(-100, -30, 80, 46, 20, "#9fd6ff", OUT, 4);
  ln([-110, 64, 70, 64], 7, OUT);
  ln([-80, 50, -80, 64], 6, OUT);
  ln([40, 50, 40, 64], 6, OUT);
  rr(-40, 0, 40, 30, 4, "#c0392b");
  tx("+", -20, 15, 30, "#fff");
  ln([-20, -40, -20, -64], 8, OUT);
  var b = (t * 30) % PI;
  ctx.save();
  ctx.translate(-20, -66);
  ctx.scale(1, 0.12);
  ctx.rotate(b);
  ln([-230, 0, 230, 0], 50, "rgba(30,30,40,.55)");
  ctx.restore();
  ctx.restore();
}
function sprinkler(t, n) {
  srand(333);
  ctx.strokeStyle = "rgba(190,220,255,.55)";
  ctx.lineWidth = 2;
  for (var i = 0; i < n; i++) {
    var x = rnd() * W,
      sp = 500 + rnd() * 300,
      y = ((t * sp + rnd() * 900) % 760) - 40;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 3, y + 16);
    ctx.stroke();
  }
}
PRESET.books = function () {
  var L = [];
  for (var i = 0; i < 12; i++)
    L.push({
      id: i,
      k: "block",
      c: ["#c0392b", "#3f7fb5", "#e8b84a", "#3fa060", "#7b5fd0"][i % 5],
      x: 200 + i * 80,
      y: 330 + (i % 3) * 30,
      vx: (hash(i) - 0.5) * 300,
      vy: -100 - hash(i + 3) * 300,
      vr: (hash(i + 5) - 0.5) * 14,
      t0: 0.3 + hash(i * 9) * 1.5,
      floor: 630 + hash(i * 2) * 50,
      e: 0.25,
      sz: 14,
    });
  return L;
};
PRESET.balls = function () {
  var L = [];
  for (var i = 0; i < 5; i++)
    L.push({
      id: i,
      k: "ball",
      c: "#e07b39",
      x: 300 + i * 170,
      y: 560,
      vx: (hash(i) - 0.5) * 260,
      vy: -380 - hash(i + 1) * 300,
      t0: 0.4 + i * 0.4,
      floor: 650 + (i % 2) * 20,
      e: 0.72,
      sz: 20,
      roll: 1,
      fric: 0.98,
    });
  return L;
};
PRESET.glass = function () {
  var L = [];
  for (var i = 0; i < 26; i++)
    L.push({
      id: i,
      k: "shard",
      c: "rgba(200,230,255,.9)",
      x: 380 + hash(i) * 520,
      y: 60,
      vx: (hash(i + 2) - 0.5) * 200,
      vy: 50 + hash(i + 4) * 200,
      vr: (hash(i + 6) - 0.5) * 20,
      t0: 0.2 + hash(i * 3) * 0.8,
      floor: 620 + hash(i * 5) * 80,
      e: 0.15,
      sz: 8 + hash(i * 7) * 10,
    });
  return L;
};
function schoolWall(c0, c1) {
  gr(0, -60, W, 660, c0, c1);
  rr(-20, 380, W + 40, 220, 0, "rgba(0,0,0,.06)");
  ln([-20, 380, W + 20, 380], 4, "rgba(0,0,0,.12)");
}
function floorTiles(c0, c1) {
  gr(0, 600, W, 180, c0, c1);
  ctx.globalAlpha = 0.12;
  for (var x = -40; x < W + 40; x += 80)
    ln([x, 600, x + (x - 640) * 0.4, 780], 2, "#000");
  for (var k = 0; k < 6; k++) ln([0, 620 + k * 26, W, 620 + k * 26], 2, "#000");
  ctx.globalAlpha = 1;
}
BG.class = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  schoolWall("#e8e0c8", "#d4c9ac");
  floorTiles("#cfc6b0", "#a8a08c");
  windowBox(70, 130, 250, 220, t, o, night);
  sh._beam = [70, 130, 250];
  rr(420, 110, 520, 250, 8, "#2f5a44", "#8a6a48", 14);
  ctx.save();
  ctx.font = "700 46px Georgia";
  ctx.fillStyle = "rgba(240,240,230,.85)";
  ctx.fillText("1/2 + 1/4 = ?", 470, 200);
  ctx.font = "600 30px Georgia";
  ctx.fillText("Homework: p. 112", 470, 270);
  ctx.restore();
  rr(420, 362, 520, 12, 3, "#8a6a48", OUT, 3);
  ci(1080, 150, 46, "#f4f0e6", OUT, 6);
  ln([1080, 150, 1080, 118], 5, OUT);
  ln([1080, 150, 1104, 160], 5, OUT);
  rr(1010, 230, 170, 120, 3, "#3f7fb5", OUT, 4);
  tx("READ!", 1095, 290, 34, "#fff");
  if (o.desks)
    for (var r = 0; r < 2; r++)
      for (var i = 0; i < 4; i++) {
        var x = 160 + i * 270 + r * 60,
          y = 560 + r * 70;
        rr(x, y - 30, 150, 18, 4, "#c99a4e", OUT, 4);
        ln([x + 14, y - 12, x + 14, y + 40], 6, "#6a6f78");
        ln([x + 136, y - 12, x + 136, y + 40], 6, "#6a6f78");
      }
  nightGrade(sh, [[640, 20, 560, "rgba(255,240,200,.3)"]]);
  sh._L = {
    x: 200,
    y: 200,
    c: night ? "rgba(255,200,130,.25)" : "rgba(255,250,230,.25)",
  };
  return { gy: 686, s: 170 };
};
BG.corr = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  schoolWall("#dfe6ea", "#c4ccd2");
  floorTiles("#bfc4c0", "#8f9490");
  for (var i = 0; i < 16; i++) {
    var x = 40 + i * 74;
    var op =
      o.lockers === "open" && (i === 8 || i === 9)
        ? clamp(lt / 0.4, 0, 1) *
          (lt < 1.5 ? 1 : Math.max(0, 1 - (lt - 1.5) / 0.3))
        : 0;
    rr(x, 250, 70, 340, 3, ["#2f6f9f", "#3a7aaa"][i % 2], OUT, 4);
    for (var k = 0; k < 4; k++)
      ln([x + 16, 280 + k * 10, x + 54, 280 + k * 10], 3, "rgba(0,0,0,.35)");
    rr(x + 50, 420, 8, 30, 3, "#c9ced4", OUT, 2);
    if (op > 0)
      po(
        [x, 250, x - 50 * op, 240, x - 50 * op, 600, x, 590],
        "#5a8ab8",
        OUT,
        4,
      );
  }
  rr(560, 60, 160, 50, 6, "#1a3a1a", OUT, 4);
  tx("EXIT", 640, 86, 30, "#4be37a");
  if (o.office) {
    rr(1080, 210, 170, 380, 4, "#c9b48a", OUT, 5);
    rr(1110, 250, 110, 110, 3, "#e8e4da", OUT, 3);
    for (var k = 0; k < 9; k++)
      ln([1112, 256 + k * 11, 1218, 256 + k * 11], 3, "#b8b0a0");
    rr(1100, 180, 130, 26, 4, "#3f7fb5", OUT, 3);
    tx("OFFICE", 1165, 194, 16, "#fff");
  }
  for (var i = 0; i < 5; i++) {
    rr(180 + i * 230, 20, 140, 14, 4, "#f4f0e6", OUT, 3);
  }
  physDraw(sh, lt);
  if (o.rain) sprinkler(t, 140);
  nightGrade(sh, [
    [250, 30, 300, "rgba(255,240,210,.3)"],
    [710, 30, 300, "rgba(255,240,210,.3)"],
    [640, 86, 120, "rgba(80,255,120,.4)"],
  ]);
  stormFlash(sh);
  sh._L = {
    x: 640,
    y: 20,
    c: night ? "rgba(200,220,255,.2)" : "rgba(255,250,235,.22)",
  };
  if (o.slots) {
    sh._post = function () {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "#06070c";
      ctx.beginPath();
      ctx.rect(0, 0, W, H);
      for (var k = 0; k < 4; k++) ctx.rect(150, 150 + k * 110, 980, 46);
      ctx.fill("evenodd");
      for (var k = 0; k < 4; k++)
        rr(150, 150 + k * 110, 980, 46, 6, null, "#2a4a6a", 6);
      ctx.restore();
    };
  }
  return { gy: 686, s: 170 };
};
BG.gym = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  gr(0, -60, W, 480, "#c9b8a0", "#b0a088");
  for (var x = 0; x < W; x += 60) ln([x, -60, x, 420], 3, "rgba(0,0,0,.06)");
  // skylight
  var sk = o.skylight;
  ctx.save();
  po(
    [380, -60, 900, -60, 860, 60, 420, 60],
    night ? "#0a1030" : "#9fd0ee",
    OUT,
    6,
  );
  if (night && o.storm) {
  }
  if (sk === "crack") {
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    var u = clamp(lt / 1.2, 0, 1);
    ctx.beginPath();
    ctx.moveTo(640, 0);
    for (var k = 0; k < 6; k++) {
      ctx.lineTo(
        640 + Math.cos(k * 1.3) * 200 * u,
        Math.sin(k * 1.9) * 50 * u + 10,
      );
      ctx.moveTo(640, 0);
    }
    ctx.stroke();
  }
  if (sk === "fall") {
    ctx.fillStyle = "#05060c";
    ctx.fill();
  }
  ctx.restore();
  // bleachers
  for (var r = 0; r < 4; r++)
    rr(-20, 260 + r * 40, W + 40, 40, 0, ["#8a5a32", "#7a4e2a"][r % 2], OUT, 3);
  // banner + hoop
  rr(520, 110, 240, 60, 4, "#c0392b", OUT, 4);
  tx("GO TIGERS!", 640, 141, 30, "#fff");
  rr(1060, 150, 140, 90, 4, "#f4f0e6", OUT, 4);
  rr(1105, 185, 50, 36, 2, null, "#c0392b", 4);
  el(1130, 248, 34, 8, null, "#e07b39", 5);
  // emergency doors
  for (var d = 0; d < 2; d++) {
    var dx = 120 + d * 160,
      sh2 =
        o.doors === "shake"
          ? Math.sin(t * 40 + d) * 4 * (Math.sin(t * 3 + d) > 0 ? 1 : 0)
          : 0,
      op = o.doors === "open" && d === 0;
    if (op) {
      gr(dx, 420, 120, 180, "#05060c", "#11131c");
      ch({ k: "zstu", x: dx + 60, y: 600, s: 120, f: 1, arm: "up", ci: 3 });
    } else {
      rr(dx + sh2, 420, 120, 180, 3, "#8f9aa4", OUT, 4);
      ln([dx + 14 + sh2, 510, dx + 106 + sh2, 510], 8, "#c9ced4");
    }
    rr(dx + 10, 395, 100, 20, 3, "#1a3a1a", OUT, 2);
    tx("EXIT", dx + 60, 406, 13, "#4be37a");
  }
  // floor
  gr(0, 600, W, 180, "#d8a86a", "#b08048");
  for (var x = -40; x < W + 40; x += 40)
    ln([x, 600, x + (x - 640) * 0.35, 780], 1.5, "rgba(90,50,20,.25)");
  ctx.beginPath();
  ctx.ellipse(640, 690, 260, 50, 0, 0, 7);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgba(160,30,30,.6)";
  ctx.stroke();
  ln([640, 600, 640, 780], 5, "rgba(160,30,30,.6)");
  if (o.kids) {
    for (var m = 0; m < 6; m++)
      rr(80 + m * 200, 640, 170, 26, 6, "#3f6f9f", OUT, 3);
    kidsRow(9, 628, 82, 11);
  }
  physDraw(sh, lt);
  nightGrade(sh, [
    [
      640,
      0,
      520,
      o.skylight === "fall" ? "rgba(140,170,255,.25)" : "rgba(255,230,180,.22)",
    ],
    [180, 405, 120, "rgba(80,255,120,.35)"],
    [340, 405, 120, "rgba(80,255,120,.35)"],
  ]);
  sh._L = {
    x: 640,
    y: 0,
    c: night ? "rgba(160,190,255,.22)" : "rgba(255,250,230,.22)",
  };
  return { gy: 686, s: 170 };
};
BG.cafe = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  schoolWall("#f0e2c0", "#dcc8a0");
  floorTiles("#d8d2c2", "#b0aa9a");
  rr(60, 220, 560, 200, 6, "#c9ced4", OUT, 5);
  rr(60, 200, 560, 30, 4, "#e0503a", OUT, 4);
  tx("LUNCH", 340, 215, 22, "#fff");
  for (var i = 0; i < 4; i++)
    rr(90 + i * 130, 300, 110, 70, 4, "#a8b0b8", OUT, 3);
  // milk crates
  for (var r = 0; r < 4; r++)
    for (var c = 0; c < 3; c++) {
      rr(760 + c * 110, 500 - r * 70, 100, 66, 4, "#2f6f9f", OUT, 4);
      for (var k = 0; k < 4; k++)
        rr(770 + c * 110 + k * 22, 512 - r * 70, 16, 26, 3, "#f4f0e6", OUT, 2);
    }
  tx("400 MILKS", 925, 200, 30, "#2f6f9f");
  if (o.tap) {
    rr(1150, 300, 20, 60, 4, "#c9ced4", OUT, 3);
    var dy = ((t * 1.2) % 1) * 200;
    el(1160, 370 + dy, 5, 8, "rgba(160,210,255,.9)");
  }
  // tables
  for (var i = 0; i < 2; i++) {
    rr(100 + i * 600, 560, 480, 22, 6, "#e8e4da", OUT, 4);
    ln([140 + i * 600, 582, 140 + i * 600, 640], 8, "#6a6f78");
    ln([540 + i * 600, 582, 540 + i * 600, 640], 8, "#6a6f78");
    if (o.trays)
      for (var k = 0; k < 3; k++)
        rr(140 + i * 600 + k * 140, 546, 100, 14, 4, "#e0503a", OUT, 2);
  }
  physDraw(sh, lt);
  nightGrade(sh, [[640, 30, 560, "rgba(255,240,200,.3)"]]);
  sh._L = { x: 640, y: 20, c: "rgba(255,245,220,.22)" };
  return { gy: 686, s: 170 };
};
BG.lib = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  schoolWall("#e6dcc6", "#cfc2a6");
  floorTiles("#9a6a42", "#6e4a2c");
  var cols = ["#c0392b", "#2f6f8f", "#e8b84a", "#3fa060", "#7b5fd0", "#e07b39"];
  for (var b = 0; b < 4; b++) {
    var bx = 40 + b * 290;
    rr(bx, 150, 250, 440, 4, "#7a5530", OUT, 5);
    for (var s2 = 0; s2 < 4; s2++) {
      ln([bx, 250 + s2 * 100, bx + 250, 250 + s2 * 100], 6, "#5a3a24");
      for (var k = 0; k < 9; k++)
        rr(
          bx + 10 + k * 26,
          250 + s2 * 100 - 76 + (k % 3) * 6,
          22,
          76 - (k % 3) * 6,
          2,
          cols[(k + s2 + b) % 6],
          OUT,
          2,
        );
    }
  }
  rr(1190, 120, 80, 470, 4, "#c9ced4", OUT, 4);
  ln([1200, 140, 1260, 140], 6, OUT);
  for (var k = 0; k < 9; k++)
    ln([1200, 170 + k * 46, 1260, 170 + k * 46], 5, OUT);
  rr(1180, 90, 100, 24, 4, "#c0392b", OUT, 3);
  tx("ROOF", 1230, 102, 15, "#fff");
  if (o.shelves) {
    var jx = o.shelves === "shake" ? Math.sin(t * 34) * 4 : 0;
    ctx.save();
    ctx.translate(jx, 0);
    rr(880, 300, 280, 300, 4, "#6a4a28", OUT, 6);
    for (var s2 = 0; s2 < 3; s2++)
      ln([880, 380 + s2 * 80, 1160, 380 + s2 * 80], 6, "#4a3018");
    ctx.restore();
  }
  if (o.kids) kidsRow(8, 632, 82, 21);
  nightGrade(sh, [
    [300, 520, 260, "rgba(255,190,110,.4)"],
    [640, 30, 400, "rgba(255,230,180,.18)"],
  ]);
  stormFlash(sh);
  sh._L = {
    x: 300,
    y: 500,
    c: night ? "rgba(255,190,110,.3)" : "rgba(255,250,230,.22)",
  };
  return { gy: 686, s: 170 };
};
BG.boiler = function (sh, t, lt) {
  var o = sh.o;
  gr(0, -60, W, 660, "#4a4e56", "#33363c");
  gr(0, 600, W, 180, "#3a3c42", "#2a2c30");
  for (var i = 0; i < 6; i++) {
    ln(
      [-20, 80 + i * 26, W + 20, 80 + i * 26],
      14,
      ["#8a6a4a", "#7a8088"][i % 2],
    );
    ln([-20, 80 + i * 26, W + 20, 80 + i * 26], 3, "rgba(255,255,255,.15)");
  }
  for (var i = 0; i < 5; i++)
    ln([160 + i * 240, 60, 160 + i * 240, 600], 16, "#6a6f78");
  // heater tank
  var hg = ctx.createLinearGradient(820, 0, 1080, 0);
  hg.addColorStop(0, "#c9ced4");
  hg.addColorStop(0.5, "#eef0f2");
  hg.addColorStop(1, "#8f949a");
  rr(830, 220, 240, 370, 60, hg, OUT, 6);
  rr(890, 300, 120, 60, 6, "#f4f0e6", OUT, 3);
  tx("40 GAL", 950, 330, 26, "#2a2f3a");
  ci(950, 570, 14, "#c0392b", OUT, 3);
  if (o.heater === "drain") {
    var u = clamp((lt - 0.8) / 0.4, 0, 1);
    ln([950, 584, 950, 584 + 70 * u], 6, "rgba(160,210,255,.9)");
    rr(920, 650, 60, 80, 8, "rgba(180,220,255,.5)", OUT, 3);
    rr(
      924,
      730 - 70 * clamp((lt - 1.2) / 3, 0, 1),
      52,
      70 * clamp((lt - 1.2) / 3, 0, 1),
      6,
      "rgba(90,170,255,.7)",
    );
  }
  ctx.fillStyle = "rgba(5,8,20,.45)";
  ctx.fillRect(-80, -80, W + 160, H + 160);
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  glow(640, 40, 520, "rgba(255,200,120,.35)", 0.9 + 0.1 * Math.sin(t * 13));
  ctx.restore();
  rr(600, 20, 80, 30, 6, "#ffe9a8", OUT, 3);
  sh._L = { x: 640, y: 30, c: "rgba(255,200,120,.3)" };
  return { gy: 686, s: 170 };
};
BG.lab = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  schoolWall("#e0ece6", "#c4d4cc");
  floorTiles("#c9ced0", "#9aa0a2");
  windowBox(80, 130, 260, 200, t, o, night);
  sh._beam = [80, 130, 260];
  rr(420, 120, 380, 220, 4, "#f4f0e6", OUT, 4);
  tx("PERIODIC TABLE", 610, 150, 22, "#2a2f3a");
  for (var r = 0; r < 4; r++)
    for (var c = 0; c < 9; c++)
      rr(
        440 + c * 38,
        175 + r * 38,
        32,
        32,
        3,
        ["#9fd0e8", "#f2c9a0", "#b8e0a8", "#e8b0c8"][(r + c) % 4],
        OUT,
        2,
      );
  // fire alarm
  rr(900, 220, 70, 100, 6, "#d0302a", OUT, 4);
  tx("FIRE", 935, 250, 16, "#fff");
  rr(915, 270, 40, 30, 4, "#f4f0e6", OUT, 3);
  if (o.alarm)
    glow(935, 270, 160, "rgba(255,40,40,.5)", 0.6 + 0.4 * Math.sin(t * 8));
  // benches
  rr(60, 470, 1160, 24, 4, "#2a2f3a", OUT, 4);
  rr(70, 494, 1140, 106, 4, "#e8e4da", OUT, 4);
  for (var i = 0; i < 6; i++) {
    var bx = 180 + i * 180;
    po(
      [bx - 16, 470, bx + 16, 470, bx + 10, 420, bx - 10, 420],
      ["rgba(120,220,160,.7)", "rgba(120,180,255,.7)", "rgba(255,160,200,.7)"][
        i % 3
      ],
      OUT,
      3,
    );
  }
  if (o.sanitizer)
    for (var i = 0; i < 3; i++) {
      rr(560 + i * 60, 400, 40, 70, 8, "#bfe8ff", OUT, 3);
      rr(570 + i * 60, 385, 20, 18, 3, "#3f7fb5", OUT, 2);
    }
  nightGrade(sh, [[640, 20, 520, "rgba(240,250,255,.3)"]]);
  sh._L = { x: 200, y: 200, c: "rgba(255,250,235,.22)" };
  return { gy: 686, s: 170 };
};
BG.office = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal !== "day";
  schoolWall("#e4dccc", "#ccc2ae");
  floorTiles("#7a6a5a", "#5a4a3a");
  // monitors
  for (var i = 0; i < 4; i++) {
    var mx = 560 + (i % 2) * 190,
      my = 140 + Math.floor(i / 2) * 130;
    rr(mx, my, 170, 110, 6, "#16181f", OUT, 4);
    gr(mx + 8, my + 8, 154, 94, "#1a3a2a", "#0e2018");
    srand(i * 7 + BO);
    for (var k = 0; k < 30; k++) {
      ctx.fillStyle = "rgba(255,255,255," + rnd() * 0.25 + ")";
      ctx.fillRect(mx + 8 + rnd() * 150, my + 8 + rnd() * 90, 2, 2);
    }
    tx("CAM " + (i + 1), mx + 40, my + 20, 12, "#bfe");
  }
  // window + blinds
  rr(80, 130, 300, 260, 4, night ? "#0a1030" : "#9fd0ee", OUT, 6);
  for (var k = 0; k < 14; k++)
    ln([84, 140 + k * 18, 376, 140 + k * 18], 7, "#e8e4da");
  if (o.flash) {
    var on = Math.floor(lt * 3) % 2 === 0 && lt < 2.2;
    if (on) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      glow(230, 260, 260, "rgba(255,255,220,.9)", 1);
      ctx.restore();
    }
  }
  if (o.sched) {
    rr(1010, 150, 180, 230, 3, "#fbf6e8", OUT, 3);
    ctx.save();
    ctx.font = "italic 700 22px Georgia";
    ctx.fillStyle = "#b3202a";
    ctx.fillText("3:12 AM", 1040, 200);
    ctx.fillStyle = "#1a2a5a";
    ctx.font = "italic 18px Georgia";
    ctx.fillText("ring the bell", 1035, 240);
    ctx.fillText("flash x3", 1035, 270);
    ctx.fillText("water → library", 1035, 300);
    ctx.restore();
  }
  // desk + mic
  rr(420, 470, 560, 24, 4, "#8a5a32", OUT, 5);
  rr(440, 494, 520, 106, 4, "#7a4e2a", OUT, 4);
  if (o.mic) {
    ln([700, 470, 700, 410], 6, OUT);
    el(700, 404, 14, 20, "#2a2f3a", OUT, 3);
    el(700, 472, 40, 8, "#2a2f3a", OUT, 3);
  }
  rr(470, 420, 120, 50, 4, "#c9ced4", OUT, 3);
  ci(500, 445, 10, "#c0392b", OUT, 2);
  tx("BELL", 545, 446, 15, "#2a2f3a");
  nightGrade(sh, [
    [640, 200, 420, "rgba(120,255,170,.22)"],
    [700, 420, 200, "rgba(255,200,120,.2)"],
  ]);
  sh._L = { x: 640, y: 200, c: "rgba(160,255,200,.2)" };
  return { gy: 686, s: 170 };
};
BG.roof = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal === "night",
    dusk = sh.pal === "dusk";
  gr(
    -60,
    -60,
    W + 120,
    520,
    night ? "#050818" : dusk ? "#3b2f6b" : "#5aa8e8",
    night ? "#1a2350" : dusk ? "#f08a4b" : "#cfe7f5",
  );
  // city + hospital
  for (var i = 0; i < 12; i++) {
    var bh = 80 + hash(i * 5) * 140;
    rr(
      -20 + i * 115,
      420 - bh,
      100,
      bh + 20,
      2,
      dusk ? "#4a3a5a" : "#8a98a8",
      OUT,
      3,
    );
  }
  rr(900, 200, 260, 240, 3, "#e8e4da", OUT, 5);
  rr(990, 150, 80, 50, 3, "#c0392b", OUT, 4);
  tx("+", 1030, 176, 40, "#fff");
  tx("HOSPITAL", 1030, 230, 22, "#2a2f3a");
  if (o.lights) {
    var on = Math.floor(lt * 2.5) % 2 === 0 && lt < 3;
    for (var k = 0; k < 3; k++)
      rr(940 + k * 70, 300, 40, 30, 3, on ? "#fff7c8" : "#2a2f3a", OUT, 2);
    if (on) glow(1030, 315, 260, "rgba(255,250,200,.6)", 1);
  }
  gr(-60, 430, W + 120, 360, "#8a8a86", "#5e5e5a");
  srand(91);
  for (var i = 0; i < 300; i++) {
    ctx.fillStyle = "rgba(0,0,0," + rnd() * 0.2 + ")";
    ctx.fillRect(rnd() * W, 440 + rnd() * 300, 4, 3);
  }
  rr(-40, 420, W + 80, 24, 3, "#6a6a66", OUT, 4);
  if (o.sos) {
    ctx.save();
    ctx.font = "900 120px Inter";
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(240,240,230,.85)";
    ctx.setTransform(
      ctx.getTransform().multiply(new DOMMatrix([1, 0, -0.6, 0.35, 380, 380])),
    );
    ctx.fillText("S O S", 640, 560);
    ctx.restore();
  }
  if (o.flash) {
    var f = (lt * 2) % 1 < 0.25 && Math.floor(lt * 2) % 4 < 3;
    if (f) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      glow(720, 440, 220, "rgba(255,255,230,.95)", 1);
      ctx.restore();
    }
  }
  if (o.heli) {
    var hy = o.heli === "up" ? 240 - lt * 60 : 230 + Math.sin(t) * 8,
      hx = o.heli === "up" ? 640 + lt * 30 : 300 + clamp(lt / 3, 0, 1) * 340;
    heli(hx, hy, t, 1.1);
  }
  if (o.kids) kidsRow(7, 640, 82, 41);
  if (night) {
    ctx.fillStyle = "rgba(6,10,30,.35)";
    ctx.fillRect(-80, -80, W + 160, H + 160);
  }
  sh._L = {
    x: 1100,
    y: 100,
    c: dusk ? "rgba(255,170,110,.35)" : "rgba(255,250,230,.25)",
  };
  return { gy: 686, s: 170 };
};
BG.schoolext = function (sh, t, lt) {
  var o = sh.o,
    night = sh.pal === "night",
    dusk = sh.pal === "dusk";
  gr(
    -60,
    -60,
    W + 120,
    520,
    night ? "#050818" : dusk ? "#3b2f6b" : "#6fb2e8",
    night ? "#1a2350" : dusk ? "#f08a4b" : "#d4ecf8",
  );
  if (night) {
    srand(7);
    for (var i = 0; i < 60; i++)
      ci(rnd() * W, rnd() * 250, 1 + rnd(), "rgba(255,255,255,.6)");
  }
  // building
  rr(160, 140, 960, 300, 4, "#a8503a", OUT, 6);
  for (var y = 160; y < 440; y += 18)
    ln([160, y, 1120, y], 2, "rgba(0,0,0,.12)");
  rr(520, 70, 240, 90, 4, "#a8503a", OUT, 6);
  ci(640, 110, 28, "#f4f0e6", OUT, 4);
  ln([640, 110, 640, 92], 4, OUT);
  ln([640, 110, 654, 116], 4, OUT);
  rr(420, 160, 440, 40, 4, "#f4f0e6", OUT, 4);
  tx("NORTHFIELD MIDDLE SCHOOL", 640, 181, 24, "#2a2f3a");
  for (var r = 0; r < 2; r++)
    for (var c = 0; c < 8; c++) {
      var wx = 200 + c * 118,
        wy = 230 + r * 100;
      var lit =
        (o.office && r === 1 && c === 2) || (night && (c * 3 + r) % 7 === 0);
      rr(
        wx,
        wy,
        80,
        60,
        3,
        lit ? "#ffe9a8" : night ? "#121a38" : "#9fd0ee",
        OUT,
        3,
      );
      if (lit && night) glow(wx + 40, wy + 30, 120, "rgba(255,220,140,.5)", 1);
    }
  rr(580, 340, 120, 100, 3, "#5a3a24", OUT, 4);
  // football field
  gr(
    -60,
    440,
    W + 120,
    360,
    night ? "#16301e" : "#4a9a48",
    night ? "#0c1a10" : "#3a7a38",
  );
  for (var k = 0; k < 6; k++)
    ln([-60, 480 + k * 50, W + 60, 480 + k * 50], 3, "rgba(255,255,255,.25)");
  ln([1180, 300, 1180, 480], 8, "#e8e4da");
  ln([1140, 330, 1220, 330], 8, "#e8e4da");
  if (o.heli)
    heli(
      o.heli === "up" ? 700 + lt * 40 : 700,
      o.heli === "up" ? 120 - lt * 30 : 120,
      t,
      0.7,
    );
  if (night) {
    ctx.fillStyle = "rgba(6,10,30,.3)";
    ctx.fillRect(-80, -80, W + 160, H + 160);
  }
  sh._L = { x: 640, y: 100, c: "rgba(255,240,210,.2)" };
  return { gy: 686, s: 170 };
};
(function () {
  [
    "class",
    "corr",
    "gym",
    "cafe",
    "lib",
    "boiler",
    "lab",
    "office",
    "roof",
    "schoolext",
  ].forEach(function (k) {
    var f = BG[k];
    BG[k] = function (sh, t, lt) {
      EYEG = [];
      var zx = sh.o.zoomx, zs = sh.o.zooms || 1.5, zy = sh.o.zoomy || 470;
      if (sh.dur > 7.2 && lt > sh.dur * 0.5) {
        if (zx != null) zx = null;
        else { var xs = (sh.o.a || []).map(function (a) { var m = a.match(/@(-?\d+)(?:>>?(-?\d+))?/); return m ? +(m[2] || m[1]) : null; }).filter(function (v) { return v != null; });
          zx = xs.length ? xs.reduce(function (p, c) { return p + c; }, 0) / xs.length : 640; zy = xs.length ? 470 : 400; zs = 1.45; }
      }
      if (zx != null) { ctx.translate(zx, zy); ctx.scale(zs, zs); ctx.translate(-zx, -zy); }
      return f(sh, t, lt);
    };
  });
})();
