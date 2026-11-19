const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const K = 1.5, PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 2.26; BO = 3; LT = 1;
    const mk = (pal, o) => ({ pal, day: "", sp: "ELI", o, i: 0, dur: 5, words: [] });
    const grab = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; c.getContext("2d").drawImage(cv,0,0); return c; };
    const bg = (pal, o) => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); ctx.setTransform(K,0,0,K,0,0); SH = mk(pal, o); BG.security(SH, 2.26, 1); return grab(); };
    const chars = (fn) => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); fn(); return grab(); };
    const A = bg("day", {}), B = bg("night", {});
    for (const C of [A, B]) { const g = C.getContext("2d"); const d = g.getImageData(600, 100, 1, 1).data; const d2 = g.getImageData(600, 20, 1, 1).data;
      const gr2 = g.createLinearGradient(0, 0, 0, 180); gr2.addColorStop(0, `rgb(${d2[0]},${d2[1]},${d2[2]})`); gr2.addColorStop(1, `rgb(${d[0]},${d[1]},${d[2]})`); g.fillStyle = gr2; g.fillRect(620, 0, 700, 180); }
    const CA = chars(() => {
      for (const [x, c] of [[160,2],[300,3],[440,5]]) ch({ k: "pax", x, y: 1000, s: 300, f: 1, ci: c });
      ch({ k: "eli", x: 760, y: 1010, s: 330, f: -1 }); });
    const CB = chars(() => {
      for (const [x, s, c] of [[1000,300,3],[1120,320,5],[1240,290,6],[1060,260,7],[1190,270,8],[1310,300,4]]) ch({ k: c%2 ? "zpax" : "zcrew", x, y: 990 + (c%3)*8, s, f: 1, ci: c, arm: "up" });
      // glass wall
      ctx.fillStyle = "rgba(170,210,255,.22)"; ctx.fillRect(1400, 230, 40, 800); ctx.strokeStyle = "#0b0c14"; ctx.lineWidth = 8; ctx.strokeRect(1400, 230, 40, 800);
      ctx.strokeStyle = "rgba(255,255,255,.85)"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(1405, 980); ctx.lineTo(1430, 760); ctx.lineTo(1412, 620); ctx.lineTo(1436, 470); ctx.stroke();
      ch({ k: "eli", x: 1700, y: 1010, s: 340, f: -1, scared: 1 }); });
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH);
    ctx.save(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1010,0); ctx.lineTo(910,PH); ctx.lineTo(0,PH); ctx.clip();
    ctx.drawImage(A, -300, 0); ctx.globalCompositeOperation = "screen"; ctx.fillStyle = "rgba(255,214,140,.42)"; ctx.fillRect(0,0,PW,PH); ctx.globalCompositeOperation = "source-over"; ctx.drawImage(CA, 0, 0); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.moveTo(1010,0); ctx.lineTo(PW,0); ctx.lineTo(PW,PH); ctx.lineTo(910,PH); ctx.clip();
    ctx.drawImage(B, 560, 0); ctx.drawImage(B, -1000, 0); ctx.fillStyle = "rgba(30,10,40,.25)"; ctx.fillRect(0,0,PW,PH); ctx.drawImage(CB, 0, 0); ctx.restore();
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(1010,-5); ctx.lineTo(910,PH+5); ctx.stroke();
    const label = (s, x, y, sz, c) => { ctx.save(); ctx.font = "900 "+sz+"px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz*.2; ctx.strokeStyle = "#141520"; ctx.strokeText(s,x,y); ctx.fillStyle = c; ctx.fillText(s,x,y); ctx.restore(); };
    label("DAY 1", 40, 95, 140, "#ffffff");
    label("DAY 30", 1300, 95, 140, "#e8352b");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_airport_30.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
