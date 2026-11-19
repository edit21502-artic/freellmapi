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
  tx("HARBOR VIEW HOTEL", 0, -264, 34, "#f6f1e3");
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
