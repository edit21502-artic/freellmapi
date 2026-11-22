const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 1.0; BO = 3; LT = 1;
    const K = "#0b0c14";
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH);
    // dark hallway
    let g = ctx.createLinearGradient(0,0,0,PH); g.addColorStop(0,"#2a2d4a"); g.addColorStop(1,"#14152a"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    // elevator frame right
    const X = 1000, Y = 110, Wd = 820, Ht = 1000;
    rr(X - 30, Y - 30, Wd + 60, Ht + 60, 10, "#6f7684", K, 10);
    // interior glow + monster (doors half open)
    ctx.save(); ctx.beginPath(); ctx.rect(X, Y, Wd, Ht); ctx.clip();
    g = ctx.createRadialGradient(X + Wd/2, Y + 200, 30, X + Wd/2, Y + 300, 700); g.addColorStop(0, "#7a2a2a"); g.addColorStop(1, "#1a0c14"); ctx.fillStyle = g; ctx.fillRect(X, Y, Wd, Ht);
    const cx = X + Wd/2, cy = Y + 440;
    // body
    rr(cx - 230, cy + 170, 460, 600, 120, "#3d4a55", K, 10);
    // head
    ctx.fillStyle = "#9aa89a"; ctx.strokeStyle = K; ctx.lineWidth = 12; ctx.beginPath(); ctx.ellipse(cx, cy, 230, 250, 0, 0, 7); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "rgba(60,80,60,.25)"; ctx.beginPath(); ctx.ellipse(cx + 60, cy + 40, 150, 190, 0, 0, 7); ctx.fill();
    // eyes glowing
    for (const ex of [-90, 90]) {
      const r = ctx.createRadialGradient(cx + ex, cy - 40, 5, cx + ex, cy - 40, 120); r.addColorStop(0, "rgba(255,230,120,.9)"); r.addColorStop(1, "rgba(255,200,60,0)"); ctx.fillStyle = r; ctx.fillRect(cx + ex - 130, cy - 170, 260, 260);
      ci(cx + ex, cy - 40, 62, "#111", K, 8); ci(cx + ex, cy - 40, 38, "#f2d36a"); ci(cx + ex, cy - 40, 16, "#fff8d0");
    }
    // teeth mouth
    ctx.fillStyle = "#1a0a0e"; ctx.beginPath(); ctx.ellipse(cx, cy + 120, 150, 55, 0, 0, Math.PI); ctx.fill(); ctx.lineWidth = 8; ctx.stroke();
    ctx.fillStyle = "#fffbe8"; for (let i = 0; i < 9; i++) { const tx0 = cx - 135 + i * 30; ctx.beginPath(); ctx.moveTo(tx0, cy + 120); ctx.lineTo(tx0 + 15, cy + 160 - Math.abs(i - 4) * 6); ctx.lineTo(tx0 + 30, cy + 120); ctx.fill(); }
    ctx.restore();
    // doors half open
    rr(X, Y, 130, Ht, 2, "#b9c1c8", K, 8); rr(X + Wd - 130, Y, 130, Ht, 2, "#b9c1c8", K, 8);
    // hands gripping the doors
    const hand = (hx, hy, f) => { ctx.save(); ctx.translate(hx, hy); ctx.scale(f, 1);
      for (let i = 0; i < 4; i++) { rr(-10 + i * 0, -120 + i * 58, 120, 40, 20, "#c9d2c4", K, 7); }
      rr(-70, -130, 80, 250, 30, "#c9d2c4", K, 7); ctx.restore(); };
    hand(X + 130, Y + 840, 1); hand(X + Wd - 130, Y + 800, -1);
    // floor indicator
    rr(X + Wd/2 - 130, 20, 260, 80, 10, "#14151f", K, 6); ctx.font = "900 60px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#ff6a3a"; ctx.fillText("6 ▲", X + Wd/2, 62);
    // hero big
    ch({ k: "eli", x: 470, y: 1320, s: 620, f: 1, scared: 1 });
    // sweat drops
    for (const [x, y, r] of [[250, 600, 22], [700, 540, 18], [730, 630, 14]]) { ctx.beginPath(); ctx.moveTo(x, y - r * 1.7); ctx.quadraticCurveTo(x + r * 1.2, y, x, y + r); ctx.quadraticCurveTo(x - r * 1.2, y, x, y - r * 1.7); ctx.fillStyle = "#8fd8ff"; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = K; ctx.stroke(); }
    // time tag
    ctx.save(); ctx.translate(780, 720); ctx.rotate(-.05); rr(-120, -46, 240, 92, 8, "#c8241c", K, 7);
    ctx.font = "900 64px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("03:12", 0, 4); ctx.restore();
    // paper note
    ctx.save(); ctx.translate(430, 960); ctx.rotate(-.08); rr(-200, -80, 400, 160, 4, "#efe3c4", "#6a5a3a", 4);
    ctx.font = "italic 900 60px Georgia"; ctx.textAlign = "center"; ctx.fillStyle = "#b8261c"; ctx.fillText("3 RULES", 0, -10);
    ctx.font = "italic 26px Georgia"; ctx.fillStyle = "#4a3a2a"; ctx.fillText("never get in the elevator...", 0, 40); ctx.restore();
    // vignette
    g = ctx.createRadialGradient(960, 540, 450, 960, 540, 1250); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.55)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    // headline
    const txt = (s, x, y, sz, c) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz * .14; ctx.strokeStyle = K; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    txt("DON'T GET IN", 40, 90, 120, "#ffffff");
    txt("THE ELEVATOR", 40, 215, 120, "#e8261c");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_elevator_den.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
