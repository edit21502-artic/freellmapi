// ===== film 7: hotel overrides =====
LOOK.maid = { skin: "#c99a78", top: "#7d8796", bot: "#4a5262", hair: "#2a1f1a", hs: "short" };
LOOK.frank = { skin: "#b98563", top: "#1f2c4d", bot: "#1a1f2e", hair: "#3a3a3a", hs: "slick", shirt: 1 };
BG.box = function (sh, t, lt) {
  var o = sh.o;
  gr(0, 0, W, H, "#3d3a5c", "#1c1a30");
  glow(640, 360, 520, "rgba(255,230,170,.3)");
  ctx.save(); ctx.translate(640, 372); ctx.rotate(-0.04);
  rr(-420, -300, 840, 600, 10, "#f6f1e3", OUT, 8);
  rr(-420, -300, 840, 70, 8, "#2f4f86", OUT, 5);
  tx((o.head || "ROOM 409"), 0, -264, 34, "#f6f1e3");
  for (var j = 0; j < 8; j++) ln([-380, -170 + j * 62, 380, -170 + j * 62], 2, "rgba(60,90,150,.25)");
  ln([-330, -230, -330, 290], 2, "rgba(200,60,60,.35)");
  var ls = o.lines || [], n = ls.length;
  ls.forEach(function (s, i) {
    var k = clamp((lt - 0.4 - i * (Math.min(sh.dur - 1.6, 4) / n)) / 0.45, 0, 1);
    if (k <= 0) return;
    ctx.save();
    var y = (n === 1 ? 30 : -140 + i * (n > 2 ? Math.min(110, 400 / (n - 1)) : 170));
    var odd = i % 2;
    ctx.translate(odd ? 30 : -10, y); ctx.rotate(odd ? 0.025 : -0.02);
    var sz = n === 1 ? 140 : n > 3 ? 64 : 76;
    ctx.font = "900 italic " + sz + "px Inter";
    var w = ctx.measureText(s).width;
    if (w > 700) { sz = sz * 700 / w; ctx.font = "900 italic " + sz + "px Inter"; w = ctx.measureText(s).width; }
    ctx.beginPath(); ctx.rect(-w / 2 - 10, -sz, (w + 20) * k, sz * 2); ctx.clip();
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = odd ? "#9a2530" : "#1d2f5c";
    ctx.fillText(s, 0, 0);
    ctx.restore();
  });
  ctx.restore();
  return { gy: 2000, s: 100 };
};
LOOK.soldier = { skin: "#9a6a4a", top: "#4d5a3a", bot: "#3a4230", hair: "#1a1a1a", hs: "buzz" };
LOOK.june = { skin: "#e2b08c", top: "#3f7fb5", bot: "#3f7fb5", hair: "#5a3a22", hs: "short" };
LOOK.pilot = { skin: "#c08a64", top: "#4d5a3a", bot: "#3a4230", hair: "#1a1a1a", hs: "buzz" };
// ---- hero glow ----
(function () {
  var _ch = ch;
  ch = function (o) {
    if (o && o.k === "eli" && !o.noglow) {
      var s = o.s || 100;
      ctx.save();
      glow(o.x, o.y - s * 0.75, s * 0.95, "rgba(150,230,255,.55)", .55 + .12 * Math.sin(TT * 3));
      ctx.shadowColor = "rgba(190,245,255,.95)"; ctx.shadowBlur = Math.max(10, s * 0.13);
      _ch(o); ctx.restore(); return;
    }
    return _ch(o);
  };
})();
function hdoor(x, y, w, h, num, o, lt) {
  rr(x - 8, y - 8, w + 16, h + 8, 6, "#8fa9a2", OUT, 5);
  rr(x, y, w, h, 4, "#e9eef0", OUT, 5);
  rr(x + w * 0.26, y + 34, w * 0.48, 104, 4, "#1d2638", OUT, 4);
  ln([x + w * 0.5, y + 34, x + w * 0.5, y + 138], 3, "rgba(255,255,255,.25)");
  rr(x + w - 34, y + h * 0.5, 22, 46, 6, "#b9c2c8", OUT, 4);
  if (num) { rr(x + w * 0.5 - 40, y - 52, 80, 34, 6, "#2f6f8f", OUT, 4); tx(num, x + w * 0.5, y - 35, 22, "#ffffff"); }
}
BG.ward = function (sh, t, lt) {
  var o = sh.o;
  gr(0, 0, W, 600, "#d4e8de", "#b7d0c5");
  gr(0, 600, W, 120, "#9fb3b0", "#75898a");
  ln([0, 600, W, 600], 6, OUT);
  nightWin(70, 110, 280, 250, t, sh.pal);
  ln([40, 92, 420, 92], 6, "#7d8a90");
  for (var i = 0; i < 5; i++) rr(330 + i * 16, 96, 22, 300, 8, i % 2 ? "#8fc7c0" : "#a6d6cf", OUT, 3);
  // whiteboard
  rr(440, 120, 300, 190, 8, "#ffffff", OUT, 5);
  rr(440, 120, 300, 28, 6, "#2f6f8f", OUT, 4); tx("ROOM 409", 590, 134, 18, "#ffffff");
  var bl = o.board || ["NURSE: JUNE", "DIET: CLEAR", "PAIN: 4/10"];
  bl.forEach(function (s, i) {
    var k = o.board ? Math.floor(clamp((lt - 0.3 - i * 0.6) / 0.6, 0, 1) * s.length) : s.length;
    var fs = i === bl.length - 1 && o.board ? 22 : 26; ctx.font = "800 " + fs + "px Inter"; var mw = ctx.measureText(s).width; if (mw > 266) fs = fs * 266 / mw;
    tx(s.slice(0, k), 456, 182 + i * 40, fs, o.board ? "#1d3fa8" : "#556", "left", "800");
  });
  // monitor on pole
  ln([850, 250, 850, 600], 6, "#7d8a90"); rr(810, 590, 80, 12, 4, "#5d6676", OUT, 3);
  rr(770, 140, 170, 110, 8, "#161827", OUT, 5); rr(780, 150, 150, 90, 4, "#0d1f18");
  var pts = [], ph = (t * 0.9) % 1;
  for (var j = 0; j <= 30; j++) { var u = j / 30, xx = 784 + u * 142, yy = 196; var d = (u - ph + 1) % 1; if (d < 0.05) yy -= Math.sin(d / 0.05 * Math.PI) * 30; pts.push(xx, yy); }
  ln(pts, 3, "#5ff08a"); tx("72", 908, 166, 16, "#5ff08a");
  // IV pole
  ln([1000, 150, 1000, 600], 5, "#9aa5ab"); ln([975, 150, 1025, 150], 5, "#9aa5ab");
  rr(980, 158, 40, 62, 10, "rgba(220,240,255,.85)", OUT, 3); ln([1000, 220, 1000, 330], 2, "rgba(160,190,210,.9)");
  rr(980, 590, 40, 10, 4, "#5d6676", OUT, 3);
  // bed
  if (!o.nobed) {
    var bx = o.bedx != null ? o.bedx : 120;
    rr(bx, 470, 380, 70, 14, "#f4f6f7", OUT, 5);
    rr(bx + 10, 450, 90, 36, 14, "#ffffff", OUT, 4);
    rr(bx + 100, 462, 270, 46, 12, o.blanket || "#7fb7d6", OUT, 4);
    ln([bx + 10, 540, bx + 10, 590], 6, "#7d8a90"); ln([bx + 370, 540, bx + 370, 590], 6, "#7d8a90");
    ci(bx + 10, 594, 10, "#3a3f4a", OUT, 3); ci(bx + 370, 594, 10, "#3a3f4a", OUT, 3);
    rr(bx - 6, 420, 14, 120, 6, "#c7d0d6", OUT, 4);
  }
  hdoor(1060, 190, 170, 410, "409", o, lt);
  var under = o.feet ? "rgba(255,240,190,.9)" : "rgba(255,240,190,.45)";
  rr(1062, 596, 166, 6, 2, under);
  if (o.feet) for (var f = 0; f < o.feet; f++) { el(1110 + f * 44, 600, 16, 5, "#1b1d28"); }
  if (o.envelope && lt > 0.5) { var ex = 1145 - Math.min(1, (lt - 0.5) / 0.8) * 110; rr(ex - 34, 604, 68, 30, 3, "#f4ecd8", OUT, 3); ln([ex - 34, 604, ex, 620, ex + 34, 604], 2, "#8a7a5a"); }
  return { gy: 686, s: 178 };
};
BG.whall = function (sh, t, lt) {
  var o = sh.o;
  gr(0, 0, W, 590, "#cfe4da", "#b2ccc1");
  gr(0, 590, W, 130, "#a9b9b6", "#7b8d8c");
  for (var i = 0; i < 9; i++) ln([i * 170 - 40, 590, i * 170 - 220, 720], 2, "rgba(60,70,80,.18)");
  ln([0, 590, W, 590], 6, OUT);
  for (var i = 0; i < 4; i++) { rr(80 + i * 320, 18, 160, 18, 6, "#f8fbff", OUT, 3); glow(160 + i * 320, 40, 220, "rgba(255,255,240,.25)", o.dark ? 0.2 : 1); }
  var nums = o.nums || ["407", "408", "409", "410"];
  nums.forEach(function (n, i) { hdoor(90 + i * 320, 170, 150, 420, n, o, lt); });
  ln([0, 430, W, 430], 8, "#7fa3a0"); ln([0, 430, W, 430], 3, "#d8ece7");
  rr(1180, 70, 80, 34, 6, "#1b7a3a", OUT, 3); tx("EXIT", 1220, 87, 18, "#ffffff");
  if (o.cart != null) {
    var cx = o.cart + (o.cartv || 0) * lt;
    rr(cx - 70, 430, 140, 150, 8, "#3f7fb5", OUT, 5);
    for (var d = 0; d < 4; d++) rr(cx - 60, 442 + d * 34, 120, 26, 4, ["#e85a4f", "#f2c21a", "#5ad17a", "#ffffff"][d], OUT, 3);
    ci(cx - 52, 594, 12, "#2a2f3a", OUT, 3); ci(cx + 52, 594, 12, "#2a2f3a", OUT, 3);
    rr(cx - 82, 420, 164, 14, 6, "#cfd6db", OUT, 3);
  }
  return { gy: 686, s: 168 };
};
BG.nstation = function (sh, t, lt) {
  var o = sh.o;
  gr(0, 0, W, 600, "#d4e8de", "#b7d0c5");
  gr(0, 600, W, 120, "#9fb3b0", "#75898a");
  ln([0, 600, W, 600], 6, OUT);
  rr(380, 70, 520, 70, 10, "#2f6f8f", OUT, 5); tx("NURSES STATION · 4", 640, 105, 34, "#ffffff");
  ci(1120, 130, 60, "#ffffff", OUT, 6); ln([1120, 130, 1120, 92], 6, OUT); ln([1120, 130, 1148, 140], 5, OUT);
  for (var i = 0; i < 3; i++) { rr(200 + i * 240, 230, 180, 120, 8, "#161827", OUT, 5); rr(210 + i * 240, 240, 160, 100, 4, i === 1 ? "#13324a" : "#0d1f18"); }
  rr(120, 380, 1040, 220, 14, "#e8edf0", OUT, 6);
  rr(120, 380, 1040, 34, 10, "#cfd8dd", OUT, 5);
  for (var d = 0; d < 5; d++) { rr(160 + d * 200, 440, 160, 60, 6, "#d9e1e6", OUT, 4); rr(220 + d * 200, 462, 40, 10, 4, "#7d8a90"); }
  if (o.drawer) { rr(360, 500, 160, 70, 6, "#d9e1e6", OUT, 4); rr(400, 470, 34, 54, 6, "#f2a33a", OUT, 3); rr(396, 466, 42, 14, 4, "#ffffff", OUT, 3); }
  return { gy: 686, s: 178 };
};
BG.hroof = function (sh, t, lt) {
  var o = sh.o, r = BG.roof(sh, t, lt);
  el(640, 650, 260, 46, "rgba(255,255,255,.12)", "rgba(255,255,255,.7)", 5);
  tx("H", 640, 652, 56, "rgba(255,255,255,.8)");
  if (o.heli) {
    var hy = 250 + Math.max(0, 1 - lt / 2.5) * -260 + Math.sin(t * 2) * 6, hx = 820;
    el(hx, hy, 150, 62, "#e8e2d0", OUT, 6); el(hx + 70, hy - 8, 60, 34, "#9fd6ff", OUT, 4);
    ln([hx - 140, hy, hx - 330, hy - 20], 16, OUT); ln([hx - 140, hy, hx - 330, hy - 20], 9, "#e8e2d0");
    ln([hx - 340, hy - 46, hx - 320, hy + 6], 6, OUT);
    ln([hx - 40, hy + 66, hx - 40, hy + 92, hx + 70, hy + 92], 6, OUT);
    ln([hx, hy - 62, hx, hy - 84], 8, OUT);
    var a = t * 40; ln([hx - Math.cos(a) * 260, hy - 86, hx + Math.cos(a) * 260, hy - 86], 8, "rgba(20,22,32,.75)");
    tx("RESCUE", hx - 20, hy + 6, 22, "#c0392b");
  }
  return r;
};
