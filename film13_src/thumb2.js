const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; SNAP.width = PW; SNAP.height = PH; TT = 1.3; BO = 3; LT = 1;
    const K = "#0b0c14";
    const mk = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; return c; };
    const grab = () => { const c = mk(); c.getContext("2d").drawImage(cv, 0, 0); return c; };
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over"; ctx.filter = "none"; ctx.clearRect(0,0,PW,PH); };
    SH = { o: {}, pal: "day", i: 0, dur: 5, words: [], sp: "ELI", _L: { x: 900, y: 200, c: "rgba(255,250,230,.15)" } };
    // hallway with lockers (inside window)
    clean(); ctx.setTransform(1.25,0,0,1.25,-80,-120); BG.corr(SH, 2, 1); const HALL = grab();
    // zombie crowd: back rows small to front rows big
    clean(); window.NOLIGHT = 1; const rows = [[500, 70, 14], [545, 90, 12], [600, 115, 10], [670, 150, 8], [770, 200, 6], [900, 260, 5]];
    rows.forEach(([y, s, n], r) => { for (let i = 0; i < n; i++) { const x = 300 + (i + (r % 2) * .5) * (820 / n) + (hash(i * 7 + r) - .5) * 30; ch({ k: "zpax", x, y: y + (hash(i + r * 9) - .5) * 20, s, f: hash(i * 3 + r) > .5 ? 1 : -1, arm: "up", ci: i + r * 3 }); } });
    const CROWD = grab(); window.NOLIGHT = 0;
    // Eli huge on right
    clean(); SH._L = { x: 400, y: 300, c: "rgba(200,220,255,.2)" }; ch({ k: "eli", x: 1540, y: 1760, s: 820, f: -1, scared: 1, noglow: 1 }); const ELI = grab();
    clean();
    // dark wall background
    let g = ctx.createLinearGradient(0, 0, PW, PH); g.addColorStop(0, "#2a3448"); g.addColorStop(1, "#141a28"); ctx.fillStyle = g; ctx.fillRect(0, 0, PW, PH);
    ctx.globalAlpha = .12; for (let x = 0; x < PW; x += 90) { ctx.fillStyle = "#000"; ctx.fillRect(x, 0, 40, PH); } ctx.globalAlpha = 1;
    // round window
    const cx = 700, cy = 610, R = 430;
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.clip();
    ctx.filter = "saturate(.8) brightness(.8)"; ctx.drawImage(HALL, 0, 0); ctx.filter = "none";
    g = ctx.createRadialGradient(cx, cy - 200, 50, cx, cy, R); g.addColorStop(0, "rgba(255,220,150,.25)"); g.addColorStop(1, "rgba(0,0,0,.35)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ctx.drawImage(CROWD, 0, 0);
    ctx.fillStyle = "rgba(180,210,240,.10)"; ctx.fillRect(0,0,PW,PH);
    ctx.strokeStyle = "rgba(255,255,255,.25)"; ctx.lineWidth = 18; ctx.beginPath(); ctx.arc(cx - 120, cy - 140, 300, 3.6, 4.3); ctx.stroke();
    ctx.restore();
    ctx.lineWidth = 60; ctx.strokeStyle = "#1c2230"; ctx.beginPath(); ctx.arc(cx, cy, R + 28, 0, 7); ctx.stroke();
    ctx.lineWidth = 14; ctx.strokeStyle = K; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(cx, cy, R + 58, 0, 7); ctx.stroke();
    for (let k = 0; k < 12; k++) { const a = k / 12 * 6.283; ci(cx + Math.cos(a) * (R + 29), cy + Math.sin(a) * (R + 29), 9, "#5a6478", K, 4); }
    // Eli with white outline + shadow
    const w = mk(), x = w.getContext("2d"); x.drawImage(ELI, 0, 0); x.globalCompositeOperation = "source-in"; x.fillStyle = "#fff"; x.fillRect(0,0,PW,PH);
    ctx.save(); ctx.shadowColor = "rgba(0,0,0,.6)"; ctx.shadowBlur = 50; ctx.shadowOffsetX = -20; for (let a = 0; a < 24; a++) ctx.drawImage(w, Math.cos(a / 24 * 6.283) * 12, Math.sin(a / 24 * 6.283) * 12); ctx.restore();
    ctx.drawImage(ELI, 0, 0);
    // sweat
    for (const [sx, sy, r] of [[1250, 560, 24], [1830, 520, 20]]) { ctx.beginPath(); ctx.moveTo(sx, sy - r * 1.7); ctx.quadraticCurveTo(sx + r * 1.2, sy, sx, sy + r); ctx.quadraticCurveTo(sx - r * 1.2, sy, sx, sy - r * 1.7); ctx.fillStyle = "#8fd8ff"; ctx.fill(); ctx.lineWidth = 6; ctx.strokeStyle = K; ctx.stroke(); }
    // text
    ctx.save(); ctx.textAlign = "left"; ctx.font = "900 200px Inter"; ctx.textBaseline = "middle"; ctx.lineJoin = "round"; ctx.lineWidth = 34; ctx.strokeStyle = K; ctx.strokeText("30 DAYS", 50, 150); ctx.fillStyle = "#fff"; ctx.fillText("30 DAYS", 50, 150);
    ctx.font = "900 84px Inter"; const t2 = "THEY'RE IN SCHOOL", tw = ctx.measureText(t2).width; rr(70, 262, tw + 60, 118, 6, "#d42a1e", K, 8); ctx.fillStyle = "#fff"; ctx.fillText(t2, 100, 324); ctx.restore();
    // vignette
    g = ctx.createRadialGradient(960, 540, 500, 960, 540, 1200); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.35)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_school_30_v2.png", Buffer.from(out.split(",")[1], "base64"));
  await b.close();
})();
