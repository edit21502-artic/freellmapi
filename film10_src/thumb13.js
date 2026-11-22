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
    clean(); ctx.setTransform(1.5,0,0,1.5,0,0); SH = { pal: "night", day: "", sp: "ELI", o: { open: 1, ding: 1, door: "6B" }, i: 0, dur: 5, words: [] }; BG.elev(SH, 1.0, 5);
    const G = grab();
    clean(); const OX = 220;
    ctx.drawImage(G, 0, 0, 230, PH, 0, 0, 230, PH); ctx.drawImage(G, OX, 0);
    // zombies inside the lit elevator
    const ex = 450 * 1.5 + OX, ey = 170 * 1.5, ew = 380 * 1.5, eh = 440 * 1.5;
    ctx.save(); ctx.beginPath(); ctx.rect(ex, ey, ew, eh); ctx.clip();
    for (const [fx, s, c, yy] of [[0.18, 300, 3, 0], [0.82, 300, 5, 0], [0.35, 330, 6, 20], [0.66, 330, 4, 20], [0.5, 370, 7, 40]]) ch({ k: c % 2 ? "zpax" : "zcrew", x: ex + ew * fx, y: ey + eh + yy, s, f: fx < .5 ? 1 : -1, ci: c, arm: "up" });
    ctx.restore();
    ctx.fillStyle = "rgba(10,10,30,.35)"; ctx.fillRect(0, 0, PW, PH);
    // re-light elevator interior a bit
    let rg = ctx.createRadialGradient(ex + ew/2, ey + 120, 20, ex + ew/2, ey + 200, 600); rg.addColorStop(0, "rgba(255,230,160,.35)"); rg.addColorStop(1, "rgba(255,230,160,0)"); ctx.fillStyle = rg; ctx.fillRect(ex - 200, ey - 100, ew + 400, eh + 200);
    // floor indicator glow
    rg = ctx.createRadialGradient(640*1.5+OX, 109*1.5, 10, 640*1.5+OX, 109*1.5, 200); rg.addColorStop(0, "rgba(255,200,60,.7)"); rg.addColorStop(1, "rgba(255,200,60,0)"); ctx.fillStyle = rg; ctx.fillRect(640*1.5+OX-220, 0, 440, 360);
    ctx.font = "900 64px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#ffd24a"; ctx.fillText("6", 640*1.5+OX, 109*1.5+2);
    // hero
    ch({ k: "eli", x: 380, y: 1060, s: 360, f: 1, scared: 1 });
    // vignette
    rg = ctx.createRadialGradient(1100, 560, 380, 1100, 560, 1250); rg.addColorStop(0, "rgba(0,0,0,0)"); rg.addColorStop(1, "rgba(0,0,0,.65)"); ctx.fillStyle = rg; ctx.fillRect(0,0,PW,PH);
    const txt = (s, x, y, sz, c) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz * .2; ctx.strokeStyle = "#0b0c14"; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    txt("EVERY NIGHT", 50, 150, 128, "#ffffff");
    txt("AT 3:12.", 80, 300, 150, "#ffd92e");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_elevator_30.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
