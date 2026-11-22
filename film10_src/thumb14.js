const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 1.0; BO = 3; LT = 1;
    const grab = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; c.getContext("2d").drawImage(cv,0,0); return c; };
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); };
    const bg = (pal, o) => { clean(); ctx.setTransform(1.5,0,0,1.5,0,0); SH = { pal, day: "", sp: "ELI", o, i: 0, dur: 5, words: [] }; BG.elev(SH, 1.0, 5); return grab(); };
    const A0 = bg("day", { door: "6B" }), B0 = bg("night", { open: 1, ding: 1, door: "6B" });
    const EX = 645, EW = 630; // elevator on raw layer (screen px)
    // ---------- DAY 1 ----------
    clean(); const O1 = -190; ctx.drawImage(A0, O1, 0);
    ctx.globalCompositeOperation = "screen"; ctx.fillStyle = "rgba(255,220,150,.28)"; ctx.fillRect(0,0,PW,PH); ctx.globalCompositeOperation = "source-over";
    // OUT OF ORDER sign on doors
    ctx.save(); ctx.translate(EX + O1 + EW/2, 560); ctx.rotate(-.04); rr(-150, -70, 300, 140, 8, "#f6f1e3", "#0b0c14", 6);
    ctx.font = "900 46px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#c0392b"; ctx.fillText("OUT OF", 0, -24); ctx.fillText("ORDER", 0, 30); ctx.restore();
    ch({ k: "ortiz", x: 110, y: 1040, s: 290, f: 1 });
    ch({ k: "eli", x: 330, y: 1050, s: 310, f: 1 });
    const A = grab();
    // ---------- DAY 30 ----------
    clean(); const O2 = 795; ctx.drawImage(B0, O2, 0); ctx.drawImage(B0, 0, 0, 260, PH, 910, 0, 260, PH);
    const ex = EX + O2 + 30, ey = 255, ew = EW - 60, eh = 660;
    ctx.save(); ctx.beginPath(); ctx.rect(ex, ey, ew, eh); ctx.clip();
    for (const [fx, s, c, yy] of [[0.15, 290, 3, 0], [0.85, 290, 5, 0], [0.33, 320, 6, 25], [0.67, 320, 4, 25], [0.5, 350, 7, 50]]) ch({ k: c % 2 ? "zpax" : "zcrew", x: ex + ew * fx, y: ey + eh + yy, s, f: fx < .5 ? 1 : -1, ci: c, arm: "up" });
    ctx.restore();
    ctx.fillStyle = "rgba(12,10,32,.28)"; ctx.fillRect(0,0,PW,PH);
    let rg = ctx.createRadialGradient(ex + ew/2, ey + 100, 20, ex + ew/2, ey + 200, 560); rg.addColorStop(0, "rgba(255,225,150,.38)"); rg.addColorStop(1, "rgba(255,225,150,0)"); ctx.fillStyle = rg; ctx.fillRect(ex - 250, ey - 120, ew + 500, eh + 240);
    const ix = 640 * 1.5 + O2; rg = ctx.createRadialGradient(ix, 163, 8, ix, 163, 170); rg.addColorStop(0, "rgba(255,200,60,.75)"); rg.addColorStop(1, "rgba(255,200,60,0)"); ctx.fillStyle = rg; ctx.fillRect(ix - 200, 0, 400, 340);
    ctx.font = "900 62px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#ffd24a"; ctx.fillText("6", ix, 165);
    ch({ k: "eli", x: 1090, y: 1050, s: 320, f: 1, scared: 1 });
    // time tag
    ctx.save(); ctx.translate(1700, 960); ctx.rotate(-.05); rr(-150, -56, 300, 112, 20, "#e02b1c", "#0b0c14", 10);
    ctx.font = "900 70px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("3:12 AM", 0, 4); ctx.restore();
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
  fs.writeFileSync("/home/user/freellmapi/thumb_elevator_30_v2.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
