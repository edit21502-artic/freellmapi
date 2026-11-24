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
    // --- layers ---
    // background: kid room, day-bright, blurred
    clean(); SH = { o: { door: "open" }, pal: "day", i: 0, dur: 5, words: [], sp: "ELI" };
    ctx.setTransform(1.5,0,0,1.5,0,-60); BG.kidroom(SH, 2, 1); const BGL = grab();
    // Eli huge
    clean(); SH = { o: {}, pal: "day", i: 0, dur: 5, words: [], sp: "ELI", _L: { x: 1400, y: 400, c: "rgba(255,80,80,.25)" } };
    ch({ k: "eli", x: 520, y: 1900, s: 1000, f: 1, scared: 1, noglow: 1 }); const ELI = grab();
    // robot
    clean(); SH._L = { x: 400, y: 300, c: "rgba(120,230,255,.25)" }; EYEG = [];
    ch({ k: "mred", x: 1470, y: 1420, s: 820, f: -1, arm: "up" }); const ROB = grab(); const eyes = EYEG.slice(); EYEG = [];
    const make = (variant) => {
      clean();
      ctx.filter = "blur(14px) saturate(1.6) brightness(1.15)"; ctx.drawImage(BGL, -40, -40, PW + 80, PH + 80); ctx.filter = "none";
      // split light: cyan left, red right
      let g = ctx.createLinearGradient(0, 0, PW, 0); g.addColorStop(0, "rgba(40,180,255,.35)"); g.addColorStop(.5, "rgba(255,255,255,0)"); g.addColorStop(1, "rgba(255,20,40,.45)");
      ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
      // light burst behind robot
      g = ctx.createRadialGradient(1470, 420, 40, 1460, 520, 760); g.addColorStop(0, "rgba(255,90,60,.75)"); g.addColorStop(1, "rgba(255,90,60,0)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
      ctx.save(); ctx.translate(1470, 420); for (let i = 0; i < 18; i++) { ctx.rotate(Math.PI / 9); ctx.fillStyle = "rgba(255,220,180,.10)"; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1400, -90); ctx.lineTo(1400, 90); ctx.fill(); } ctx.restore();
      // robot with white outline + drop shadow
      ctx.save(); ctx.shadowColor = "rgba(0,0,0,.55)"; ctx.shadowBlur = 40; ctx.shadowOffsetY = 16; outline(ROB, 14, "#ffffff"); ctx.restore(); outline(ROB, 14, "#ffffff"); ctx.drawImage(ROB, 0, 0);
      ctx.save(); ctx.globalCompositeOperation = "lighter"; eyes.forEach(e => { glow(e[0], e[1], 300, "rgba(255,40,60,.65)", 1); glow(e[0], e[1], 90, "rgba(255,220,220,.6)", 1); }); ctx.restore();
      // Eli
      ctx.save(); ctx.shadowColor = "rgba(0,0,0,.55)"; ctx.shadowBlur = 40; ctx.shadowOffsetY = 16; outline(ELI, 16, "#ffffff"); ctx.restore(); outline(ELI, 16, "#ffffff"); ctx.drawImage(ELI, 0, 0);
      // contrast pop
      ctx.globalCompositeOperation = "soft-light"; ctx.fillStyle = "rgba(255,255,255,.12)"; ctx.fillRect(0,0,PW,PH); ctx.globalCompositeOperation = "source-over";
      if (variant === "a") {
        // red circle + arrow on eyes
        const ex = (eyes[0][0] + eyes[1][0]) / 2, ey = (eyes[0][1] + eyes[1][1]) / 2;
        ctx.lineWidth = 30; ctx.strokeStyle = "#fff"; ctx.beginPath(); ctx.ellipse(ex, ey, 230, 140, -.05, 0, 7); ctx.stroke(); ctx.lineWidth = 16; ctx.strokeStyle = "#ff1a1a"; ctx.stroke();
        const ang = Math.atan2(ey - 150, ex - 900); ctx.save(); ctx.translate(ex - Math.cos(ang) * 440, ey - Math.sin(ang) * 440); ctx.rotate(ang);
        const arrow = () => { ctx.beginPath(); ctx.moveTo(-170, -26); ctx.lineTo(60, -26); ctx.lineTo(60, -70); ctx.lineTo(170, 0); ctx.lineTo(60, 70); ctx.lineTo(60, 26); ctx.lineTo(-170, 26); ctx.closePath(); };
        arrow(); ctx.lineWidth = 22; ctx.strokeStyle = "#fff"; ctx.lineJoin = "round"; ctx.stroke(); ctx.fillStyle = "#ff1a1a"; ctx.fill(); ctx.restore();
      } else {
        ctx.save(); ctx.translate(980, 170); ctx.rotate(-.05); ctx.font = "900 190px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
        ctx.lineWidth = 40; ctx.strokeStyle = K; ctx.strokeText("RUN!", 0, 0); ctx.fillStyle = "#ffe11a"; ctx.fillText("RUN!", 0, 0); ctx.restore();
      }
      return cv.toDataURL("image/png");
    };
    res.a = make("a"); res.b = make("b");
    return res;
  });
  for (const [k, v] of Object.entries(out)) fs.writeFileSync(`/home/user/freellmapi/thumb_maple_mb_${k}.png`, Buffer.from(v.split(",")[1], "base64"));
  await b.close();
})();
