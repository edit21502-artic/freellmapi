const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; SNAP.width = PW; SNAP.height = PH; TT = 1.3; BO = 3; LT = 1;
    const K = "#0b0c14";
    const mk = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; return c; };
    const grab = () => { const c = mk(); c.getContext("2d").drawImage(cv, 0, 0); return c; };
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over"; ctx.filter = "none"; ctx.clearRect(0,0,PW,PH); };
    const tint = (L, col) => { const c = mk(), x = c.getContext("2d"); x.drawImage(L, 0, 0); x.globalCompositeOperation = "source-in"; x.fillStyle = col; x.fillRect(0,0,PW,PH); return c; };
    const outline = (L, r, col) => { const w = tint(L, col); for (let a = 0; a < 24; a++) ctx.drawImage(w, Math.cos(a / 24 * 6.283) * r, Math.sin(a / 24 * 6.283) * r); };
    const put = (L, r) => { ctx.save(); ctx.shadowColor = "rgba(0,0,0,.55)"; ctx.shadowBlur = 40; ctx.shadowOffsetY = 16; outline(L, r, "#fff"); ctx.restore(); outline(L, r, "#fff"); ctx.drawImage(L, 0, 0); };
    const label = (s, x, y, bg, rot) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0); ctx.font = "900 104px Inter"; const w = ctx.measureText(s).width + 70; rr(-w / 2, -70, w, 140, 22, bg, "#fff", 10); ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText(s, 0, 6); ctx.restore(); };
    const sh = (pal, o) => { SH = { o: o || {}, pal, i: 0, dur: 5, words: [], sp: "ELI", _L: { x: 300, y: 200, c: "rgba(255,250,230,.3)" } }; };
    clean(); sh("day", { desks: 1 }); ctx.setTransform(1.5,0,0,1.5,-150,-80); BG.class(SH, 2, 1); const B1 = grab();
    clean(); sh("night"); ctx.setTransform(1.5,0,0,1.5,-450,-80); BG.corr(SH, 2, 1); const B2 = grab();
    clean(); sh("day"); ch({ k: "eli", x: 470, y: 1500, s: 760, f: 1, noglow: 1 }); const E1 = grab();
    clean(); sh("day"); SH._L = { x: 1900, y: 300, c: "rgba(255,60,60,.25)" };
    const ZS = []; for (let i = 2; i >= 0; i--) { clean(); SH._L = null; ch({ k: "zpax", x: 1440 + i * 200, y: 1080 + (i % 2) * 60, s: 520, f: -1, arm: "up", ci: i + 3 }); ZS.push(grab()); }
    clean(); sh("night"); SH._L = { x: 1900, y: 300, c: "rgba(255,60,60,.3)" }; ch({ k: "eli", x: 1150, y: 1620, s: 640, f: 1, scared: 1, noglow: 1 }); const E2 = grab();
    clean();
    ctx.save(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1010,0); ctx.lineTo(910,PH); ctx.lineTo(0,PH); ctx.clip();
    ctx.filter = "blur(10px) saturate(1.5) brightness(1.15)"; ctx.drawImage(B1, -40, -40, PW + 80, PH + 80); ctx.filter = "none";
    let g = ctx.createRadialGradient(470, 450, 40, 470, 450, 700); g.addColorStop(0, "rgba(255,255,200,.55)"); g.addColorStop(1, "rgba(255,255,200,0)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    put(E1, 14); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.moveTo(1010,0); ctx.lineTo(PW,0); ctx.lineTo(PW,PH); ctx.lineTo(910,PH); ctx.clip();
    ctx.filter = "blur(10px) saturate(1.4)"; ctx.drawImage(B2, -40, -40, PW + 80, PH + 80); ctx.filter = "none";
    ctx.fillStyle = "rgba(70,0,20,.35)"; ctx.fillRect(0,0,PW,PH);
    g = ctx.createRadialGradient(1500, 450, 40, 1500, 450, 760); g.addColorStop(0, "rgba(255,40,60,.5)"); g.addColorStop(1, "rgba(255,40,60,0)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ZS.forEach(z => put(z, 10)); put(E2, 14); ctx.restore();
    ctx.lineWidth = 22; ctx.strokeStyle = "#fff"; ctx.beginPath(); ctx.moveTo(1010, -10); ctx.lineTo(910, PH + 10); ctx.stroke();
    label("DAY 1", 300, 120, "#2fb0ff", -.05); label("DAY 30", 1630, 120, "#e8141c", .05);
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_school_30.png", Buffer.from(out.split(",")[1], "base64"));
  await b.close();
})();
