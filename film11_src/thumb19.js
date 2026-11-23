const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 1.3; BO = 3; LT = 1;
    const K = "#0b0c14";
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH);
    const txt = (s, x, y, sz, c, lw, al) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = al || "center"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz * (lw || .16); ctx.strokeStyle = K; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    // left warm, right cold
    let g = ctx.createLinearGradient(0,0,0,PH); g.addColorStop(0,"#ffb35a"); g.addColorStop(1,"#c4581e"); ctx.fillStyle = g; ctx.fillRect(0,0,960,PH);
    g = ctx.createLinearGradient(0,0,0,PH); g.addColorStop(0,"#0a0f2a"); g.addColorStop(1,"#26346a"); ctx.fillStyle = g; ctx.fillRect(960,0,960,PH);
    srand(3); for (let i = 0; i < 140; i++) ci(960 + rnd() * 960, rnd() * PH, 2 + rnd() * 4, "rgba(255,255,255,.8)");
    ctx.save(); ctx.beginPath(); ctx.rect(960,0,960,PH); ctx.clip(); ctx.globalAlpha = .25; ctx.setTransform(1.4,0,0,1.4,0,0); for (let i = 0; i < 10; i++) pine(700 + i * 70, 800, 170 + (i * 31 % 60), 0, true); ctx.restore(); ctx.setTransform(1,0,0,1,0,0);
    const face = (cx, cy, fake) => {
      // body
      rr(cx - 270, cy + 230, 540, 600, 130, fake ? "#5a1e1a" : "#b8392c", K, 12);
      if (!fake) for (let i = -2; i <= 2; i++) ln([cx + i * 90, cy + 250, cx + i * 90, cy + 820], 8, "rgba(0,0,0,.2)");
      // head
      ctx.fillStyle = fake ? "#9aa59f" : "#f0c39a"; ctx.strokeStyle = K; ctx.lineWidth = 12;
      ctx.beginPath(); ctx.ellipse(cx, cy, 230, 270, 0, 0, 7); ctx.fill(); ctx.stroke();
      // hat
      ctx.fillStyle = fake ? "#2a2e33" : "#3e6a4a"; ctx.beginPath(); ctx.ellipse(cx, cy - 190, 220, 110, 0, Math.PI, 0); ctx.fill(); ctx.stroke();
      rr(cx - 250, cy - 210, 500, 70, 32, fake ? "#2a2e33" : "#2f5238", K, 10);
      // beard
      ctx.fillStyle = "#f2f4f4"; ctx.beginPath(); ctx.moveTo(cx - 215, cy + 40); ctx.quadraticCurveTo(cx, cy + 420, cx + 215, cy + 40); ctx.quadraticCurveTo(cx, cy + 150, cx - 215, cy + 40); ctx.fill(); ctx.lineWidth = 9; ctx.stroke();
      // nose
      ci(cx, cy + 20, 38, fake ? "#7f8a84" : "#e79a7a", K, 8);
      if (!fake) {
        for (const ex of [-85, 85]) { ci(cx + ex, cy - 60, 40, "#fff", K, 8); ci(cx + ex + 6, cy - 55, 18, K); }
        ln([cx - 130, cy - 130, cx - 40, cy - 125], 14, "#ddd"); ln([cx + 130, cy - 130, cx + 40, cy - 125], 14, "#ddd");
        ctx.lineWidth = 10; ctx.strokeStyle = K; ctx.beginPath(); ctx.arc(cx, cy + 85, 70, .2, Math.PI - .2); ctx.stroke();
      } else {
        for (const ex of [-85, 85]) { const r = ctx.createRadialGradient(cx + ex, cy - 60, 5, cx + ex, cy - 60, 160); r.addColorStop(0, "rgba(255,236,110,.95)"); r.addColorStop(1, "rgba(255,200,60,0)"); ctx.fillStyle = r; ctx.fillRect(cx + ex - 170, cy - 230, 340, 340);
          ci(cx + ex, cy - 60, 52, "#111", K, 8); ci(cx + ex, cy - 60, 32, "#ffe36a"); ci(cx + ex, cy - 60, 10, "#fffbe0"); }
        ln([cx - 140, cy - 140, cx - 30, cy - 95], 16, K); ln([cx + 140, cy - 140, cx + 30, cy - 95], 16, K);
        ctx.fillStyle = "#1a0a0e"; ctx.beginPath(); ctx.moveTo(cx - 170, cy + 70); ctx.quadraticCurveTo(cx, cy + 250, cx + 170, cy + 70); ctx.quadraticCurveTo(cx, cy + 120, cx - 170, cy + 70); ctx.fill(); ctx.lineWidth = 9; ctx.strokeStyle = K; ctx.stroke();
        ctx.fillStyle = "#fffbe8"; for (let i = 0; i < 11; i++) { const t0 = cx - 150 + i * 27; ctx.beginPath(); ctx.moveTo(t0, cy + 82 + Math.abs(i - 5) * 4); ctx.lineTo(t0 + 13, cy + 135); ctx.lineTo(t0 + 27, cy + 82 + Math.abs(i - 5) * 4); ctx.fill(); }
      }
    };
    face(480, 560, false); face(1440, 560, true);
    // divider
    ctx.fillStyle = K; ctx.fillRect(948, 0, 24, PH);
    ci(960, 560, 95, "#fff", K, 12); txt("VS", 960, 566, 90, "#ff2a1a", .1);
    // labels
    const badge = (x, y, ok) => { ci(x, y, 85, ok ? "#2ecc40" : "#e8261c", K, 12); ctx.lineWidth = 26; ctx.strokeStyle = "#fff"; ctx.lineCap = "round"; ctx.beginPath();
      if (ok) { ctx.moveTo(x - 38, y + 2); ctx.lineTo(x - 8, y + 32); ctx.lineTo(x + 42, y - 30); } else { ctx.moveTo(x - 32, y - 32); ctx.lineTo(x + 32, y + 32); ctx.moveTo(x + 32, y - 32); ctx.lineTo(x - 32, y + 32); } ctx.stroke(); };
    badge(150, 900, true); badge(1770, 900, false);
    txt("ONE OF THEM", 960, 95, 120, "#ffffff"); txt("IS NOT GRANDPA", 960, 225, 110, "#ffd92e");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_grandpa_vs.png", Buffer.from(out.split(",")[1], "base64"));
  await b.close();
})();
