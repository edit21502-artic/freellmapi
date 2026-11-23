const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 1.3; BO = 3; LT = 1;
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH);
    const RG = (x, y, r0, r1, stops) => { const g = ctx.createRadialGradient(x, y, r0, x, y, r1); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; };
    const E = (x, y, rx, ry, f, rot) => { ctx.fillStyle = f; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, rot || 0, 0, 7); ctx.fill(); };
    srand(11);
    // ---- room: dark logs, warm lamp left
    ctx.fillStyle = "#140b07"; ctx.fillRect(0,0,PW,PH);
    for (let y = 0; y < PH; y += 64) { const g = ctx.createLinearGradient(0, y, 0, y + 64); g.addColorStop(0, "#3a2416"); g.addColorStop(.5, "#2a180e"); g.addColorStop(1, "#120a06"); ctx.fillStyle = g; ctx.fillRect(0, y, PW, 62); }
    ctx.fillStyle = RG(250, 420, 20, 900, [[0, "rgba(255,170,70,.55)"], [.4, "rgba(200,100,30,.2)"], [1, "rgba(0,0,0,0)"]]); ctx.fillRect(0,0,PW,PH);
    // ---- doorway
    const DX = 1000, DY = 40, DW = 620, DH = 1040;
    ctx.save(); ctx.beginPath(); ctx.rect(DX, DY, DW, DH); ctx.clip();
    let g = ctx.createLinearGradient(0, DY, 0, DY + DH); g.addColorStop(0, "#050a1c"); g.addColorStop(.55, "#1a2a55"); g.addColorStop(1, "#8fa6cc"); ctx.fillStyle = g; ctx.fillRect(DX, DY, DW, DH);
    ctx.fillStyle = RG(DX + 470, DY + 120, 5, 260, [[0, "rgba(220,235,255,.9)"], [.15, "rgba(200,220,255,.35)"], [1, "rgba(0,0,0,0)"]]); ctx.fillRect(DX, DY, DW, DH);
    ctx.globalAlpha = .9; for (let i = 0; i < 10; i++) { ctx.save(); ctx.translate(0, 0); ctx.scale(1.3, 1.3); pine(DX / 1.3 + i * 55 - 30, 600, 140 + (i * 37 % 60), 0, true); ctx.restore(); } ctx.globalAlpha = 1;
    g = ctx.createLinearGradient(0, 760, 0, DY + DH); g.addColorStop(0, "#5a6e96"); g.addColorStop(1, "#b8c8e2"); ctx.fillStyle = g; ctx.fillRect(DX, 760, DW, 400);
    // fog
    for (let i = 0; i < 6; i++) { ctx.fillStyle = RG(DX + rnd() * DW, 760 + rnd() * 120, 10, 260, [[0, "rgba(190,210,240,.25)"], [1, "rgba(0,0,0,0)"]]); ctx.fillRect(DX, 500, DW, 600); }
    // ---- creature
    const cx = DX + 330, cy = 360;
    // coat (hunched shoulders)
    ctx.beginPath(); ctx.moveTo(cx - 330, DY + DH); ctx.bezierCurveTo(cx - 330, cy + 300, cx - 260, cy + 170, cx - 90, cy + 190); ctx.lineTo(cx + 90, cy + 190);
    ctx.bezierCurveTo(cx + 260, cy + 170, cx + 330, cy + 300, cx + 330, DY + DH); ctx.closePath();
    g = ctx.createLinearGradient(cx - 330, 0, cx + 330, 0); g.addColorStop(0, "#2a0c0a"); g.addColorStop(.45, "#6a1e18"); g.addColorStop(1, "#1a0606"); ctx.fillStyle = g; ctx.fill();
    ctx.save(); ctx.clip(); ctx.globalAlpha = .22; ctx.strokeStyle = "#000"; ctx.lineWidth = 14;
    for (let x = cx - 330; x < cx + 330; x += 60) { ctx.beginPath(); ctx.moveTo(x, cy + 150); ctx.lineTo(x, DY + DH); ctx.stroke(); }
    for (let y = cy + 200; y < DY + DH; y += 60) { ctx.beginPath(); ctx.moveTo(cx - 330, y); ctx.lineTo(cx + 330, y); ctx.stroke(); }
    ctx.globalAlpha = .12; ctx.strokeStyle = "#ff8a6a"; ctx.lineWidth = 4; for (let x = cx - 300; x < cx + 330; x += 60) { ctx.beginPath(); ctx.moveTo(x, cy + 150); ctx.lineTo(x, DY + DH); ctx.stroke(); }
    ctx.restore();
    // rim light on shoulders (moon behind)
    ctx.strokeStyle = "rgba(190,215,255,.55)"; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(cx + 95, cy + 192); ctx.bezierCurveTo(cx + 255, cy + 172, cx + 325, cy + 300, cx + 326, cy + 520); ctx.stroke();
    // neck
    E(cx, cy + 170, 70, 60, "#3a403c");
    // head: long, gaunt
    ctx.save(); ctx.beginPath(); ctx.ellipse(cx, cy, 150, 225, 0, 0, 7); ctx.clip();
    ctx.fillStyle = RG(cx - 50, cy - 40, 10, 260, [[0, "#f1cfb2"], [.5, "#c99a7e"], [.85, "#7a5646"], [1, "#3a2820"]]); ctx.fillRect(cx - 160, cy - 240, 320, 480);
    // warm light from cabin on left cheek
    ctx.fillStyle = RG(cx - 170, cy + 40, 10, 200, [[0, "rgba(255,150,60,.35)"], [1, "rgba(255,150,60,0)"]]); ctx.fillRect(cx - 160, cy - 240, 320, 480);
    // cheek hollows
    for (const s of [-1, 1]) { ctx.fillStyle = RG(cx + s * 92, cy + 40, 5, 80, [[0, "rgba(60,30,20,.25)"], [1, "rgba(60,30,20,0)"]]); ctx.fillRect(cx - 160, cy - 240, 320, 480); }
    // wrinkles
    ctx.strokeStyle = "rgba(90,50,35,.4)"; ctx.lineWidth = 3;
    for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(cx - 90, cy - 125 + i * 14); ctx.quadraticCurveTo(cx, cy - 138 + i * 14, cx + 90, cy - 125 + i * 14); ctx.stroke(); }
    // eye sockets
    for (const s of [-1, 1]) { ctx.fillStyle = RG(cx + s * 58, cy - 40, 5, 70, [[0, "rgba(40,20,15,.55)"], [1, "rgba(40,20,15,0)"]]); ctx.fillRect(cx - 160, cy - 240, 320, 480); }
    // nose
    ctx.fillStyle = RG(cx - 8, cy + 18, 4, 40, [[0, "#f0b096"], [1, "#b86e58"]]); ctx.beginPath(); ctx.ellipse(cx, cy + 22, 32, 30, 0, 0, 7); ctx.fill();
    ctx.restore();
    // eyes glow
    for (const s of [-1, 1]) { ctx.fillStyle = RG(cx + s * 58, cy - 40, 2, 120, [[0, "rgba(255,240,150,.55)"], [.25, "rgba(255,200,60,.15)"], [1, "rgba(255,180,40,0)"]]); ctx.fillRect(cx + s * 58 - 130, cy - 170, 260, 260);
      ctx.save(); ctx.shadowColor = "#ffd84a"; ctx.shadowBlur = 18; E(cx + s * 58, cy - 40, 20, 15, "#fffbe8"); E(cx + s * 58, cy - 40, 9, 9, "#e8b830"); E(cx + s * 58, cy - 40, 4, 4, "#2a1a00"); ctx.restore(); }
    ctx.strokeStyle = "#eef0ee"; ctx.lineWidth = 16; ctx.lineCap = "round"; for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.moveTo(cx + sgn * 95, cy - 82); ctx.quadraticCurveTo(cx + sgn * 60, cy - 98, cx + sgn * 25, cy - 84); ctx.stroke(); }
    // gentle smile, a bit too wide
    ctx.save(); ctx.beginPath(); ctx.moveTo(cx - 100, cy + 72); ctx.quadraticCurveTo(cx, cy + 92, cx + 100, cy + 72); ctx.quadraticCurveTo(cx, cy + 150, cx - 100, cy + 72); ctx.closePath();
    ctx.fillStyle = "#3a1416"; ctx.fill(); ctx.clip();
    ctx.fillStyle = "#f4ecd6"; ctx.beginPath(); ctx.moveTo(cx - 100, cy + 70); ctx.quadraticCurveTo(cx, cy + 92, cx + 100, cy + 70); ctx.lineTo(cx + 100, cy + 98); ctx.quadraticCurveTo(cx, cy + 118, cx - 100, cy + 98); ctx.fill();
    ctx.strokeStyle = "rgba(120,100,80,.5)"; ctx.lineWidth = 2; for (let i = -3; i <= 3; i++) { ctx.beginPath(); ctx.moveTo(cx + i * 24, cy + 80); ctx.lineTo(cx + i * 24, cy + 110); ctx.stroke(); }
    ctx.restore();
    // beard base
    ctx.beginPath(); ctx.moveTo(cx - 140, cy + 90); ctx.quadraticCurveTo(cx - 120, cy + 300, cx, cy + 330); ctx.quadraticCurveTo(cx + 120, cy + 300, cx + 140, cy + 90); ctx.quadraticCurveTo(cx, cy + 200, cx - 140, cy + 90);
    g = ctx.createLinearGradient(0, cy + 90, 0, cy + 330); g.addColorStop(0, "#e8ece9"); g.addColorStop(1, "#8a948e"); ctx.fillStyle = g; ctx.fill();
    // beard wisps
    ctx.strokeStyle = "rgba(235,240,238,.75)"; ctx.lineCap = "round";
    for (let i = 0; i < 40; i++) { const a = -1 + 2 * (i / 39), x0 = cx + a * 130, y0 = cy + 130 + (1 - a * a) * 60; ctx.lineWidth = 2 + rnd() * 3;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo(x0 + (rnd() - .5) * 30, y0 + 60, x0 + (rnd() - .5) * 40, y0 + 90 + rnd() * 90); ctx.stroke(); }
    // knit hat
    ctx.beginPath(); ctx.ellipse(cx, cy - 175, 168, 120, 0, Math.PI, 0); g = ctx.createLinearGradient(cx - 170, 0, cx + 170, 0); g.addColorStop(0, "#1a1c1e"); g.addColorStop(.4, "#3a3e42"); g.addColorStop(1, "#0e0f10"); ctx.fillStyle = g; ctx.fill();
    ctx.fillStyle = "#26292c"; ctx.beginPath(); ctx.roundRect(cx - 175, cy - 205, 350, 62, 28); ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,.4)"; ctx.lineWidth = 4; for (let x = cx - 160; x < cx + 170; x += 20) { ctx.beginPath(); ctx.moveTo(x, cy - 200); ctx.lineTo(x, cy - 148); ctx.stroke(); }
    ctx.strokeStyle = "rgba(190,215,255,.6)"; ctx.lineWidth = 5; ctx.beginPath(); ctx.ellipse(cx, cy - 175, 168, 120, 0, -1.2, -.1); ctx.stroke();
    // blowing snow inside door
    for (let i = 0; i < 260; i++) { const x = DX + rnd() * DW, y = DY + rnd() * DH, r = 1 + rnd() * 3; if (Math.abs(x - cx) < 170 && y > cy - 230 && y < cy + 330) continue; ctx.fillStyle = "rgba(240,246,255," + (.4 + rnd() * .5) + ")"; ctx.beginPath(); ctx.ellipse(x, y, r * 2.2, r, -.4, 0, 7); ctx.fill(); }
    ctx.restore();
    // ---- door frame + opened slab
    g = ctx.createLinearGradient(DX - 40, 0, DX, 0); g.addColorStop(0, "#1a0f08"); g.addColorStop(1, "#3a2414"); ctx.fillStyle = g; ctx.fillRect(DX - 40, 0, 40, PH); ctx.fillRect(DX + DW, 0, 40, PH); ctx.fillRect(DX - 40, 0, DW + 80, DY);
    ctx.beginPath(); ctx.moveTo(DX - 40, DY - 10); ctx.lineTo(DX - 250, DY + 50); ctx.lineTo(DX - 250, PH); ctx.lineTo(DX - 40, PH); ctx.closePath();
    g = ctx.createLinearGradient(DX - 250, 0, DX - 40, 0); g.addColorStop(0, "#2a1a0e"); g.addColorStop(1, "#5a3a20"); ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,.35)"; ctx.lineWidth = 6; for (let i = 1; i < 4; i++) { ctx.beginPath(); ctx.moveTo(DX - 40 - i * 52, DY + 5 + i * 14); ctx.lineTo(DX - 40 - i * 52, PH); ctx.stroke(); }
    // cold light spill on floor/wall
    ctx.save(); ctx.globalCompositeOperation = "lighter"; ctx.beginPath(); ctx.moveTo(DX, DY + DH); ctx.lineTo(DX + DW, DY + DH); ctx.lineTo(DX - 200, PH + 200); ctx.lineTo(DX - 700, PH + 200); ctx.closePath(); ctx.fillStyle = "rgba(80,110,170,.18)"; ctx.fill(); ctx.restore();
    // door chain
    ctx.strokeStyle = "#a8a8a8"; ctx.lineWidth = 6; for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.ellipse(DX - 230 + i * 30, 520 + Math.sin(i / 7 * Math.PI) * 26, 16, 9, .3 * (i % 2 ? 1 : -1), 0, 7); ctx.stroke(); }
    // ---- Eli foreground (warm-lit, shaded)
    ch({ k: "eli", x: 420, y: 1560, s: 720, f: 1, scared: 1 });
    ctx.save(); ctx.globalCompositeOperation = "multiply"; g = ctx.createLinearGradient(80, 0, 820, 0); g.addColorStop(0, "rgba(255,225,190,1)"); g.addColorStop(1, "rgba(120,130,170,1)"); ctx.fillStyle = g; ctx.fillRect(0, 420, 860, PH); ctx.restore();
    // ---- grade: vignette + grain
    ctx.fillStyle = RG(1100, 520, 380, 1250, [[0, "rgba(0,0,0,.12)"], [1, "rgba(0,0,0,.85)"]]); ctx.fillRect(0,0,PW,PH);
    const id = ctx.getImageData(0,0,PW,PH), d = id.data; for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - .5) * 26; d[i] += n; d[i+1] += n; d[i+2] += n; } ctx.putImageData(id, 0, 0);
    // ---- text: cinematic
    ctx.save(); ctx.textBaseline = "middle"; ctx.textAlign = "left";
    ctx.font = "900 108px Inter"; ctx.shadowColor = "rgba(0,0,0,.9)"; ctx.shadowBlur = 30; ctx.fillStyle = "#f4f1ea"; ctx.fillText("IT'S NOT", 52, 112);
    ctx.font = "900 172px Inter"; ctx.shadowColor = "rgba(255,30,20,.85)"; ctx.shadowBlur = 45; ctx.fillStyle = "#ff2a1a"; ctx.fillText("GRANDPA", 44, 250);
    ctx.shadowBlur = 0; ctx.lineWidth = 4; ctx.strokeStyle = "rgba(40,0,0,.8)"; ctx.strokeText("GRANDPA", 44, 250);
    ctx.font = "italic 700 46px Georgia"; ctx.shadowColor = "#000"; ctx.shadowBlur = 16; ctx.fillStyle = "#ffd96a"; ctx.fillText("Rule 3: don't open the door. Not even for me.", 56, 372);
    ctx.restore();
    // small red time tag
    ctx.save(); ctx.translate(1760, 120); ctx.fillStyle = "#c8160e"; ctx.shadowColor = "rgba(0,0,0,.7)"; ctx.shadowBlur = 20; ctx.beginPath(); ctx.roundRect(-120, -42, 240, 84, 10); ctx.fill();
    ctx.shadowBlur = 0; ctx.font = "900 54px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("3:00 AM", 0, 3); ctx.restore();
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_grandpa_cine2.png", Buffer.from(out.split(",")[1], "base64"));
  await b.close();
})();
