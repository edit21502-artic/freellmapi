const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 2.26; BO = 3; LT = 1;
    const grab = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; c.getContext("2d").drawImage(cv,0,0); return c; };
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); };
    const bg = (pal, o) => { clean(); ctx.setTransform(1.5,0,0,1.5,0,0); SH = { pal, day: "", sp: "ELI", o, i: 0, dur: 5, words: [] }; BG.ward(SH, 2.26, 5); return grab(); };
    const A0 = bg("day", {});
    const B0 = bg("night", { bedx: 700, feet: 2, envelope: 1, board: ["DO NOT LEAVE YOUR ROOM.", "I WILL COME BACK.", "— NURSE J"] });
    // DAY 1
    clean(); ctx.drawImage(A0, 0, 0);
    ctx.globalCompositeOperation = "screen"; ctx.fillStyle = "rgba(255,220,150,.22)"; ctx.fillRect(0,0,PW,PH); ctx.globalCompositeOperation = "source-over";
    ch({ k: "june", x: 760, y: 1030, s: 290, f: -1 });
    ch({ k: "eli", x: 420, y: 1040, s: 300, f: 1 });
    const A = grab();
    // DAY 30
    clean(); ctx.drawImage(B0, 0, 0);
    ctx.fillStyle = "rgba(14,12,34,.55)"; ctx.fillRect(0,0,PW,PH);
    // zombie face in door window
    const wx = 1590 + 255 * 0.26, wy = 336, ww = 255 * 0.48, wh = 156;
    ctx.save(); ctx.beginPath(); ctx.rect(wx, wy, ww, wh); ctx.clip();
    ctx.fillStyle = "#2a1430"; ctx.fillRect(wx, wy, ww, wh);
    const rg = ctx.createRadialGradient(wx+ww/2, wy+wh/2, 10, wx+ww/2, wy+wh/2, 140); rg.addColorStop(0, "rgba(255,70,50,.5)"); rg.addColorStop(1, "rgba(255,70,50,0)"); ctx.fillStyle = rg; ctx.fillRect(wx, wy, ww, wh);
    ch({ k: "zjune", x: wx + ww / 2 + 6, y: wy + 362, s: 230, f: -1, noglow: 1 });
    ctx.restore(); ctx.strokeStyle = "#0b0c14"; ctx.lineWidth = 7; ctx.strokeRect(wx, wy, ww, wh);
    // red glow under door
    let g2 = ctx.createRadialGradient(1720, 900, 10, 1720, 900, 260); g2.addColorStop(0, "rgba(255,60,40,.5)"); g2.addColorStop(1, "rgba(255,60,40,0)"); ctx.fillStyle = g2; ctx.fillRect(1400, 650, 520, 430);
    ch({ k: "eli", x: 1260, y: 1040, s: 300, f: 1, scared: 1 });
    const B = grab();
    // compose
    clean();
    ctx.save(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1010,0); ctx.lineTo(910,PH); ctx.lineTo(0,PH); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.moveTo(1010,0); ctx.lineTo(PW,0); ctx.lineTo(PW,PH); ctx.lineTo(910,PH); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(1010,-5); ctx.lineTo(910,PH+5); ctx.stroke();
    const label = (s, x, y, sz, c) => { ctx.save(); ctx.font = "900 "+sz+"px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz*.2; ctx.strokeStyle = "#141520"; ctx.strokeText(s,x,y); ctx.fillStyle = c; ctx.fillText(s,x,y); ctx.restore(); };
    label("DAY 1", 40, 95, 140, "#ffffff");
    label("DAY 30", 1070, 95, 140, "#e8352b");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_hospital_30.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
