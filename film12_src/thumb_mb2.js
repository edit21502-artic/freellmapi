const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; SNAP.width = PW; SNAP.height = PH; TT = 1.3; BO = 3; LT = 1;
    const K = "#0b0c14", res = {};
    const mk = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; return c; };
    const grab = () => { const c = mk(); c.getContext("2d").drawImage(cv, 0, 0); return c; };
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over"; ctx.filter = "none"; ctx.clearRect(0,0,PW,PH); };
    const tint = (L, col) => { const c = mk(), x = c.getContext("2d"); x.drawImage(L, 0, 0); x.globalCompositeOperation = "source-in"; x.fillStyle = col; x.fillRect(0,0,PW,PH); return c; };
    const outline = (L, r, col) => { const w = tint(L, col); for (let a = 0; a < 24; a++) ctx.drawImage(w, Math.cos(a / 24 * 6.283) * r, Math.sin(a / 24 * 6.283) * r); };
    const put = (L, r) => { ctx.save(); ctx.shadowColor = "rgba(0,0,0,.55)"; ctx.shadowBlur = 40; ctx.shadowOffsetY = 16; outline(L, r, "#fff"); ctx.restore(); outline(L, r, "#fff"); ctx.drawImage(L, 0, 0); };
    const label = (s, x, y, bg, fg, rot) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0); ctx.font = "900 92px Inter"; const w = ctx.measureText(s).width + 70; rr(-w / 2, -64, w, 128, 22, bg, "#fff", 10); ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = fg; ctx.fillText(s, 0, 6); ctx.restore(); };
    const sh = (pal, L) => { SH = { o: { door: "open" }, pal, i: 0, dur: 5, words: [], sp: "ELI", _L: L }; };
    // ===== C: before / after split =====
    clean(); sh("day"); ctx.setTransform(1.4,0,0,1.4,-100,-40); BG.kitchen(SH, 2, 1); const BGd = grab();
    clean(); sh("night"); SH.o.storm = 1; ctx.setTransform(1.4,0,0,1.4,-100,-40); BG.kidroom(SH, 2, 1); const BGn = grab();
    clean(); sh("day", { x: 200, y: 200, c: "rgba(255,250,230,.3)" }); EYEG = []; ch({ k: "mapl", x: 520, y: 1330, s: 700, f: 1, arm: "up" }); const R1 = grab(); EYEG = [];
    clean(); sh("night", { x: 1700, y: 300, c: "rgba(255,60,60,.3)" }); EYEG = []; ch({ k: "mred", x: 1420, y: 1330, s: 700, f: -1, arm: "up" }); const R2 = grab(); const e2 = EYEG.slice(); EYEG = [];
    clean();
    ctx.save(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1010,0); ctx.lineTo(910,PH); ctx.lineTo(0,PH); ctx.clip();
    ctx.filter = "blur(12px) saturate(1.5) brightness(1.15)"; ctx.drawImage(BGd, -40, -40, PW + 80, PH + 80); ctx.filter = "none";
    let g = ctx.createRadialGradient(520, 450, 40, 520, 450, 700); g.addColorStop(0, "rgba(255,255,200,.6)"); g.addColorStop(1, "rgba(255,255,200,0)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.moveTo(1010,0); ctx.lineTo(PW,0); ctx.lineTo(PW,PH); ctx.lineTo(910,PH); ctx.clip();
    ctx.filter = "blur(12px) saturate(1.4)"; ctx.drawImage(BGn, -40, -40, PW + 80, PH + 80); ctx.filter = "none";
    ctx.fillStyle = "rgba(60,0,20,.35)"; ctx.fillRect(0,0,PW,PH);
    g = ctx.createRadialGradient(1420, 450, 40, 1420, 450, 700); g.addColorStop(0, "rgba(255,40,60,.6)"); g.addColorStop(1, "rgba(255,40,60,0)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ctx.restore();
    put(R1, 14); put(R2, 14);
    ctx.save(); ctx.globalCompositeOperation = "lighter"; e2.forEach(e => { glow(e[0], e[1], 260, "rgba(255,40,60,.6)", 1); glow(e[0], e[1], 80, "rgba(255,220,220,.6)", 1); }); ctx.restore();
    ctx.lineWidth = 22; ctx.strokeStyle = "#fff"; ctx.beginPath(); ctx.moveTo(1010, -10); ctx.lineTo(910, PH + 10); ctx.stroke();
    label("8 PM", 330, 130, "#2fb0ff", "#fff", -.05); label("2 AM", 1600, 130, "#e8141c", "#fff", .05);
    res.c = cv.toDataURL("image/png");
    // ===== D: huge robot face, kid hiding =====
    clean(); sh("night"); ctx.setTransform(1.4,0,0,1.4,-80,-60); BG.gar(SH, 2, 1); const BGg = grab();
    clean(); sh("night", { x: 1500, y: 400, c: "rgba(255,60,60,.4)" }); EYEG = []; ch({ k: "mred", x: 1330, y: 2050, s: 1400, f: -1 }); const RB = grab(); const e3 = EYEG.slice(); EYEG = [];
    clean(); sh("night", { x: 1500, y: 400, c: "rgba(255,60,60,.4)" }); ch({ k: "eli", x: 380, y: 1150, s: 520, f: 1, scared: 1, noglow: 1 }); const EL = grab();
    clean();
    ctx.filter = "blur(14px) saturate(1.5) brightness(1.5)"; ctx.drawImage(BGg, -40, -40, PW + 80, PH + 80); ctx.filter = "none";
    g = ctx.createLinearGradient(0,0,PW,0); g.addColorStop(0, "rgba(40,170,255,.35)"); g.addColorStop(1, "rgba(255,20,40,.5)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ctx.save(); ctx.translate(1330, 520); for (let i = 0; i < 18; i++) { ctx.rotate(Math.PI / 9); ctx.fillStyle = "rgba(255,200,180,.10)"; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1500, -100); ctx.lineTo(1500, 100); ctx.fill(); } ctx.restore();
    put(RB, 16);
    ctx.save(); ctx.globalCompositeOperation = "lighter"; e3.forEach(e => { glow(e[0], e[1], 380, "rgba(255,40,60,.7)", 1); glow(e[0], e[1], 120, "rgba(255,230,230,.7)", 1); }); ctx.restore();
    put(EL, 14);
    // sweat drops
    for (const [x, y, r] of [[200, 600, 26], [600, 560, 22], [630, 660, 16]]) { ctx.beginPath(); ctx.moveTo(x, y - r * 1.7); ctx.quadraticCurveTo(x + r * 1.2, y, x, y + r); ctx.quadraticCurveTo(x - r * 1.2, y, x, y - r * 1.7); ctx.fillStyle = "#8fd8ff"; ctx.fill(); ctx.lineWidth = 6; ctx.strokeStyle = K; ctx.stroke(); }
    ctx.save(); ctx.translate(430, 150); ctx.rotate(-.06); ctx.font = "900 150px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.lineJoin = "round"; ctx.lineWidth = 34; ctx.strokeStyle = K; ctx.strokeText("HIDE!", 0, 0); ctx.fillStyle = "#ffe11a"; ctx.fillText("HIDE!", 0, 0); ctx.restore();
    res.d = cv.toDataURL("image/png");
    return res;
  });
  for (const [k, v] of Object.entries(out)) fs.writeFileSync(`/home/user/freellmapi/thumb_maple_mb_${k}.png`, Buffer.from(v.split(",")[1], "base64"));
  await b.close();
})();
