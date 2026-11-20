const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 2.26; BO = 3; LT = 1;
    const grab = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; c.getContext("2d").drawImage(cv,0,0); return c; };
    ctx.setTransform(1.5,0,0,1.5,0,0); SH = { pal: "day", day: "", sp: "ELI", o: {}, i: 0, dur: 5, words: [] }; BG.gate(SH, 2.26, 1);
    const G = grab();
    const WIN = [[60,135,420,495],[530,135,415,495],[990,135,420,495],[1455,135,420,495]];
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); };
    // ---------- DAY 1 ----------
    clean(); const OX1 = -700;
    ctx.drawImage(G, OX1, 0);
    ctx.globalCompositeOperation = "screen"; ctx.fillStyle = "rgba(255,220,150,.18)"; ctx.fillRect(0,0,PW,PH); ctx.globalCompositeOperation = "source-over";
    ch({ k: "pax", x: 120, y: 1010, s: 250, f: 1, ci: 3 });
    ch({ k: "pax", x: 760, y: 1010, s: 240, f: -1, ci: 5 });
    ch({ k: "eli", x: 430, y: 1030, s: 290, f: 1 });
    const A = grab();
    // ---------- DAY 30 ----------
    clean(); const OX2 = 210;
    ctx.drawImage(G, OX2, 0);
    ctx.fillStyle = "rgba(20,14,40,.55)"; ctx.fillRect(0, 0, PW, PH);
    for (const [x, y, w, h] of WIN) {
      const X = x + OX2;
      ctx.save(); ctx.beginPath(); ctx.rect(X, y, w, h); ctx.clip();
      let g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, "#0d1024"); g.addColorStop(1, "#2a1626"); ctx.fillStyle = g; ctx.fillRect(X, y, w, h);
      let rg = ctx.createRadialGradient(X + w/2, y + h, 20, X + w/2, y + h, h); rg.addColorStop(0, "rgba(255,60,40,.35)"); rg.addColorStop(1, "rgba(255,60,40,0)"); ctx.fillStyle = rg; ctx.fillRect(X, y, w, h);
      const cols = [[0.2, 270, 2], [0.5, 290, 5], [0.8, 265, 7]];
      for (const [fx, s, c] of cols) ch({ k: c % 2 ? "zpax" : "zcrew", x: X + w * fx, y: y + h + 90, s, f: fx < .5 ? 1 : -1, ci: c, arm: "up" });
      ctx.fillStyle = "rgba(160,200,255,.10)"; ctx.fillRect(X, y, w, h);
      ctx.restore();
      ctx.strokeStyle = "#0b0c14"; ctx.lineWidth = 10; ctx.strokeRect(X, y, w, h);
    }
    // crack on window
    ctx.strokeStyle = "rgba(255,255,255,.9)"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(1230, 620); ctx.lineTo(1290, 470); ctx.lineTo(1260, 380); ctx.lineTo(1320, 250); ctx.moveTo(1290, 470); ctx.lineTo(1360, 520); ctx.stroke();
    // board: cancelled
    const SX = 1290 + OX2; rr(SX + 10, 238, 430, 110, 12, "#14151f"); ctx.font = "900 46px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = "#f2d36a"; ctx.fillText("FLIGHT 808", SX + 225, 268); ctx.fillStyle = "#ff4a3a"; ctx.fillText("CANCELLED", SX + 225, 318);
    ch({ k: "eli", x: 1480, y: 1030, s: 290, f: -1, scared: 1 });
    const B = grab();
    // ---------- compose ----------
    clean();
    ctx.save(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(1010,0); ctx.lineTo(910,PH); ctx.lineTo(0,PH); ctx.clip(); ctx.drawImage(A, 0, 0); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.moveTo(1010,0); ctx.lineTo(PW,0); ctx.lineTo(PW,PH); ctx.lineTo(910,PH); ctx.clip(); ctx.drawImage(B, 0, 0); ctx.restore();
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(1010,-5); ctx.lineTo(910,PH+5); ctx.stroke();
    const label = (s, x, y, sz, c) => { ctx.save(); ctx.font = "900 "+sz+"px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz*.2; ctx.strokeStyle = "#141520"; ctx.strokeText(s,x,y); ctx.fillStyle = c; ctx.fillText(s,x,y); ctx.restore(); };
    label("DAY 1", 40, 95, 140, "#ffffff");
    label("DAY 30", 1060, 95, 140, "#e8352b");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_airport_30_v2.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
