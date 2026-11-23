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
    const txt = (s, x, y, sz, c, lw, al) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = al || "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz * (lw || .16); ctx.strokeStyle = K; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    const sweat = (pts) => { for (const [x, y, r] of pts) { ctx.beginPath(); ctx.moveTo(x, y - r * 1.7); ctx.quadraticCurveTo(x + r * 1.2, y, x, y + r); ctx.quadraticCurveTo(x - r * 1.2, y, x, y - r * 1.7); ctx.fillStyle = "#8fd8ff"; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = K; ctx.stroke(); } };
    // warm log wall
    let g = ctx.createLinearGradient(0,0,0,PH); g.addColorStop(0,"#4a2c1a"); g.addColorStop(1,"#24150c"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    for (let y = 0; y < PH; y += 70) rr(-10, y, PW + 20, 70, 32, y % 140 ? "#6a4228" : "#5c3822", K, 3);
    // doorway (open) right
    const DX = 980, DY = 60, DW = 640, DH = 1020;
    rr(DX - 40, DY - 40, DW + 80, DH + 80, 6, "#3a2214", K, 12);
    ctx.save(); ctx.beginPath(); ctx.rect(DX, DY, DW, DH); ctx.clip();
    g = ctx.createLinearGradient(0, DY, 0, DY + DH); g.addColorStop(0, "#081028"); g.addColorStop(.6, "#1c2a55"); g.addColorStop(1, "#c9d6ea"); ctx.fillStyle = g; ctx.fillRect(DX, DY, DW, DH);
    ctx.setTransform(1.3,0,0,1.3,0,0); for (let i = 0; i < 9; i++) pine(DX/1.3 + i * 60 - 20, 560, 150 + (i * 29 % 50), 0, true); ctx.setTransform(1,0,0,1,0,0);
    ctx.fillStyle = "#dfe8f4"; ctx.fillRect(DX, 860, DW, 300);
    srand(4); for (let i = 0; i < 160; i++) ci(DX + rnd() * DW, DY + rnd() * DH, 2 + rnd() * 4, "rgba(255,255,255,.85)");
    // the thing: tall grandpa, coat, beard, glowing eyes, grin
    const cx = DX + DW / 2 + 20, cy = 400;
    rr(cx - 230, cy + 170, 460, 700, 110, "#6e2a22", K, 10); // red flannel coat
    for (let i = -2; i <= 2; i++) ln([cx + i * 80, cy + 190, cx + i * 80, cy + 860], 6, "rgba(0,0,0,.35)");
    ctx.fillStyle = "#3a3f44"; ctx.strokeStyle = K; ctx.lineWidth = 10; ctx.beginPath(); ctx.ellipse(cx, cy - 170, 200, 70, 0, Math.PI, 0); ctx.fill(); ctx.stroke(); // hat
    ctx.fillStyle = "#aeb8b4"; ctx.beginPath(); ctx.ellipse(cx, cy, 190, 230, 0, 0, 7); ctx.fill(); ctx.stroke();
    rr(cx - 230, cy - 200, 460, 70, 30, "#3a3f44", K, 9);
    ctx.fillStyle = "#eef2f2"; ctx.beginPath(); ctx.moveTo(cx - 175, cy + 50); ctx.quadraticCurveTo(cx, cy + 360, cx + 175, cy + 50); ctx.quadraticCurveTo(cx, cy + 140, cx - 175, cy + 50); ctx.fill(); ctx.lineWidth = 8; ctx.stroke();
    for (const ex of [-75, 75]) { const r = ctx.createRadialGradient(cx + ex, cy - 40, 5, cx + ex, cy - 40, 150); r.addColorStop(0, "rgba(255,236,120,.95)"); r.addColorStop(1, "rgba(255,200,60,0)"); ctx.fillStyle = r; ctx.fillRect(cx + ex - 160, cy - 200, 320, 320);
      ci(cx + ex, cy - 40, 54, "#111", K, 8); ci(cx + ex, cy - 40, 34, "#ffe36a"); ci(cx + ex, cy - 40, 12, "#fffbe0"); }
    ln([cx - 130, cy - 120, cx - 30, cy - 85], 14, K); ln([cx + 130, cy - 120, cx + 30, cy - 85], 14, K);
    ctx.fillStyle = "#1a0a0e"; ctx.beginPath(); ctx.moveTo(cx - 150, cy + 70); ctx.quadraticCurveTo(cx, cy + 230, cx + 150, cy + 70); ctx.quadraticCurveTo(cx, cy + 120, cx - 150, cy + 70); ctx.fill(); ctx.lineWidth = 8; ctx.stroke();
    ctx.fillStyle = "#fffbe8"; for (let i = 0; i < 10; i++) { const t0 = cx - 135 + i * 27; ctx.beginPath(); ctx.moveTo(t0, cy + 82 + Math.abs(i - 4.5) * 4); ctx.lineTo(t0 + 13, cy + 125); ctx.lineTo(t0 + 27, cy + 82 + Math.abs(i - 4.5) * 4); ctx.fill(); }
    ctx.restore();
    // door slab swung inward (left of doorway) with chain
    ctx.save(); ctx.beginPath(); ctx.moveTo(DX, DY - 10); ctx.lineTo(DX - 230, DY + 40); ctx.lineTo(DX - 230, DY + DH - 10); ctx.lineTo(DX, DY + DH + 30); ctx.closePath();
    ctx.fillStyle = "#5a3a22"; ctx.fill(); ctx.lineWidth = 10; ctx.strokeStyle = K; ctx.stroke(); ctx.restore();
    // long fingers gripping door frame
    ctx.save(); ctx.translate(DX + 30, 600);
    for (let i = 0; i < 4; i++) { ctx.save(); ctx.translate(0, i * 46 - 60); rr(-130, -13, 160, 26, 13, "#b8c4b0", K, 6); ctx.beginPath(); ctx.moveTo(-130,-10); ctx.lineTo(-165,4); ctx.lineTo(-128,10); ctx.fillStyle="#1a1a12"; ctx.fill(); ctx.restore(); }
    ctx.restore();
    // chain
    ctx.lineWidth = 8; ctx.strokeStyle = "#c9c9c9"; for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.ellipse(DX - 200 + i * 34, 520 + i * 6, 18, 10, .2, 0, 7); ctx.stroke(); }
    // warm light spill on Eli
    let r = ctx.createRadialGradient(380, 600, 60, 380, 600, 600); r.addColorStop(0, "rgba(255,190,90,.35)"); r.addColorStop(1, "rgba(255,190,90,0)"); ctx.fillStyle = r; ctx.fillRect(0,0,1000,PH);
    ch({ k: "eli", x: 440, y: 1440, s: 700, f: 1, scared: 1 });
    sweat([[190, 680, 22], [690, 620, 18], [720, 720, 14]]);
    g = ctx.createRadialGradient(960, 540, 450, 960, 540, 1250); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.55)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    // red time plaque
    ctx.save(); ctx.translate(1720, 150); ctx.rotate(.06); rr(-150, -54, 300, 108, 8, "#c8241c", K, 8); ctx.font = "900 70px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("3:00 AM", 0, 4); ctx.restore();
    // yellow plaque
    ctx.save(); ctx.translate(1740, 960); ctx.rotate(-.05); rr(-150, -60, 300, 120, 8, "#ffd21e", K, 8); ctx.font = "900 72px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = K; ctx.fillText("RULE 3", 0, 6); ctx.restore();
    txt("IT'S NOT", 40, 110, 150, "#ffffff"); txt("GRANDPA", 40, 270, 170, "#ff2a1a");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_grandpa_door.png", Buffer.from(out.split(",")[1], "base64"));
  await b.close();
})();
