const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const K = 1.5, PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 2.26; BO = 3; LT = 1;
    const mk = (pal, o) => ({ pal, day: "", sp: "ELI", o, i: 0, dur: 5, words: [] });
    const layer = fn => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); ctx.setTransform(K,0,0,K,0,0); fn();
      const c = document.createElement("canvas"); c.width = PW; c.height = PH; c.getContext("2d").drawImage(cv,0,0); return c; };
    SH = mk("night", { lit: 1 });
    const L1 = layer(() => { BG.apt(SH, 2.26, 1); });
    const H1 = layer(() => ch({ k: "eli", x: 380, y: 690, s: 380, f: 1 }));
    SH = mk("night", { dark: .5 });
    const L2 = layer(() => { BG.hall(SH, 2.26, 1); });
    const Z = layer(() => ch({ k: "zmaid", x: 1120, y: 790, s: 420, f: -1, arm: "up" }));
    const H2 = layer(() => ch({ k: "eli", x: 860, y: 700, s: 380, f: 1, scared: 1 }));
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH);
    // left half: day 1
    ctx.save(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1010,0); ctx.lineTo(910,PH); ctx.lineTo(0,PH); ctx.clip();
    ctx.drawImage(L1, -120, 0); ctx.drawImage(H1, 0, 0);
    ctx.restore();
    // right half: day 30
    ctx.save(); ctx.beginPath(); ctx.moveTo(1010,0); ctx.lineTo(PW,0); ctx.lineTo(PW,PH); ctx.lineTo(910,PH); ctx.clip();
    ctx.drawImage(L2, 760, 0);
    ctx.fillStyle = "rgba(20,0,30,.45)"; ctx.fillRect(0,0,PW,PH);
    ctx.shadowColor = "rgba(255,40,30,.9)"; ctx.shadowBlur = 50; ctx.drawImage(Z, 0, 0); ctx.shadowBlur = 0;
    ctx.shadowColor = "rgba(255,255,255,.9)"; ctx.shadowBlur = 30; ctx.drawImage(H2, 0, 0); ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
    let g = ctx.createRadialGradient(1450,540,300,1450,540,1000); g.addColorStop(0,"rgba(0,0,0,0)"); g.addColorStop(1,"rgba(5,0,10,.7)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ctx.restore();
    // divider
    ctx.strokeStyle = "#fff"; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(1010,0); ctx.lineTo(910,PH); ctx.stroke();
    const label = (s, x, y, sz, c) => { ctx.save(); ctx.font = "900 "+sz+"px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz*.22; ctx.strokeStyle = "#0b0c14"; ctx.strokeText(s,x,y); ctx.fillStyle = c; ctx.fillText(s,x,y); ctx.restore(); };
    label("DAY 1", 50, 110, 170, "#ffffff");
    label("DAY 30", 1090, 110, 170, "#ff3b2f");
    // door number tag
    ctx.save(); ctx.translate(1380, 975); ctx.rotate(-.05); ctx.fillStyle = "#e02b1c"; ctx.strokeStyle = "#0b0c14"; ctx.lineWidth = 14;
    ctx.beginPath(); ctx.roundRect(-210,-70,420,140,24); ctx.stroke(); ctx.fill();
    ctx.font = "900 92px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("ROOM 617", 0, 6); ctx.restore();
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_room_617.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
