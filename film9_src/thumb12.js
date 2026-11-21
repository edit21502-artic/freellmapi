const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 2.26; BO = 3; LT = 1;
    ctx.setTransform(1,0,0,1,0,0);
    // wall + floor
    let g = ctx.createLinearGradient(0,0,0,PH); g.addColorStop(0,"#2c3b42"); g.addColorStop(1,"#1a2328"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ctx.fillStyle = "#3a4a50"; ctx.fillRect(0, 930, PW, 150); ctx.strokeStyle = "#0b0c14"; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(0,930); ctx.lineTo(PW,930); ctx.stroke();
    ctx.strokeStyle = "#5f7f7b"; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(0,640); ctx.lineTo(PW,640); ctx.stroke();
    // door
    rr(250, 40, 620, 900, 10, "#8fa9a2", "#0b0c14", 10);
    rr(285, 75, 550, 860, 6, "#d9e0e3", "#0b0c14", 8);
    rr(780, 500, 34, 90, 10, "#aab3ba", "#0b0c14", 6);
    rr(470, 120, 180, 70, 10, "#2f6f8f", "#0b0c14", 6); ctx.font = "900 50px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("409", 560, 157);
    // window with zombie nurse
    const wx = 400, wy = 230, ww = 320, wh = 330;
    ctx.save(); ctx.beginPath(); ctx.rect(wx, wy, ww, wh); ctx.clip();
    g = ctx.createLinearGradient(0, wy, 0, wy + wh); g.addColorStop(0, "#3a2030"); g.addColorStop(1, "#120a18"); ctx.fillStyle = g; ctx.fillRect(wx, wy, ww, wh);
    let rg = ctx.createRadialGradient(wx + ww/2, wy + wh*0.45, 10, wx + ww/2, wy + wh*0.45, 260); rg.addColorStop(0, "rgba(255,70,50,.55)"); rg.addColorStop(1, "rgba(255,70,50,0)"); ctx.fillStyle = rg; ctx.fillRect(wx, wy, ww, wh);
    ch({ k: "zjune", x: wx + ww * 0.5 + 80, y: wy + 760, s: 500, f: -1, noglow: 1 });
    ctx.fillStyle = "rgba(255,255,255,.10)"; ctx.beginPath(); ctx.moveTo(wx, wy); ctx.lineTo(wx + 120, wy); ctx.lineTo(wx, wy + 160); ctx.fill();
    ctx.restore(); ctx.strokeStyle = "#0b0c14"; ctx.lineWidth = 10; ctx.strokeRect(wx, wy, ww, wh);
    // light under door + feet
    g = ctx.createLinearGradient(0, 920, 0, 1000); g.addColorStop(0, "rgba(255,90,60,.8)"); g.addColorStop(1, "rgba(255,90,60,0)"); ctx.fillStyle = g; ctx.fillRect(285, 925, 550, 90);
    // envelope sliding out
    ctx.save(); ctx.translate(700, 1000); ctx.rotate(-.08); rr(-110, -48, 220, 96, 6, "#f4ecd8", "#0b0c14", 6);
    ctx.strokeStyle = "#8a7a5a"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-110,-48); ctx.lineTo(0, 8); ctx.lineTo(110,-48); ctx.stroke();
    ctx.font = "900 30px Inter"; ctx.fillStyle = "#9a2530"; ctx.fillText("DAY 17", 0, 26); ctx.restore();
    // medicine cart edge
    rr(-40, 560, 230, 370, 12, "#3f7fb5", "#0b0c14", 8);
    for (let d = 0; d < 4; d++) rr(-20, 590 + d * 80, 190, 60, 6, ["#e85a4f","#f2c21a","#5ad17a","#ffffff"][d], "#0b0c14", 5);
    // hero
    ch({ k: "eli", x: 1480, y: 1075, s: 370, f: -1, scared: 1 });
    // vignette
    rg = ctx.createRadialGradient(900, 500, 400, 900, 500, 1250); rg.addColorStop(0, "rgba(0,0,0,0)"); rg.addColorStop(1, "rgba(0,0,0,.6)"); ctx.fillStyle = rg; ctx.fillRect(0,0,PW,PH);
    // text
    const txt = (s, x, y, sz, c) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz * .2; ctx.strokeStyle = "#0b0c14"; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    txt("SHE NEVER", 1000, 190, 150, "#ffd92e");
    txt("KNOCKS.", 1080, 350, 150, "#ffffff");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_hospital_30_v2.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
