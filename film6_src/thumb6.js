const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const out = await p.evaluate(() => {
    const K = 1.5, PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 2.26; BO = 3; LT = 1;
    SH = { pal: "night", day: "", sp: "ELI", o: {}, i: 0, dur: 5, words: [] };
    const layer = fn => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); ctx.setTransform(K,0,0,K,0,0); fn();
      const c = document.createElement("canvas"); c.width = PW; c.height = PH; c.getContext("2d").drawImage(cv,0,0); return c; };
    const Lbg = layer(() => BG.hall(SH, 2.26, 1));
    const Lfar = layer(() => { for (let i = 0; i < 6; i++) ch({ k: i%2 ? "zpax" : "zcrew", x: 560 + i*120, y: 560 + (i%2)*25, s: 190, f: -1, ci: i+3, arm: "up" }); });
    const Lz = layer(() => ch({ k: "zpax", x: 960, y: 1060, s: 540, f: -1, ci: 2, arm: "up" }));
    const Lhero = layer(() => ch({ k: "eli", x: 330, y: 1060, s: 560, f: 1, scared: 1, item: "phone" }));
    ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH);
    ctx.filter = "blur(8px)"; ctx.drawImage(Lbg,0,0); ctx.filter = "none";
    let g = ctx.createLinearGradient(0,0,PW,PH); g.addColorStop(0,"rgba(20,10,60,.55)"); g.addColorStop(1,"rgba(200,20,30,.55)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ctx.filter = "blur(4px)"; ctx.drawImage(Lfar,0,0); ctx.filter = "none";
    ctx.fillStyle = "rgba(40,0,20,.35)"; ctx.fillRect(0,0,PW,PH);
    ctx.shadowColor = "rgba(255,50,30,.95)"; ctx.shadowBlur = 60; ctx.drawImage(Lz,0,0);
    ctx.shadowBlur = 0;
    g = ctx.createRadialGradient(500,640,40,500,640,620); g.addColorStop(0,"rgba(180,230,255,.45)"); g.addColorStop(1,"rgba(180,230,255,0)"); ctx.fillStyle = g; ctx.fillRect(0,0,1200,PH);
    ctx.shadowColor = "rgba(255,255,255,.95)"; ctx.shadowBlur = 40; ctx.drawImage(Lhero,0,0); ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
    // vignette
    g = ctx.createRadialGradient(PW/2,PH*.5,PH*.45,PW/2,PH*.5,PH*1.1); g.addColorStop(0,"rgba(0,0,0,0)"); g.addColorStop(1,"rgba(8,0,10,.8)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    // big phone alert card
    ctx.save(); ctx.translate(1730, 740); ctx.rotate(.08); ctx.scale(.7,.7);
    ctx.shadowColor = "rgba(0,0,0,.8)"; ctx.shadowBlur = 50;
    ctx.fillStyle = "#11131c"; ctx.beginPath(); ctx.roundRect(-250,-330,500,660,60); ctx.fill(); ctx.shadowBlur = 0;
    ctx.fillStyle = "#f4f4f6"; ctx.beginPath(); ctx.roundRect(-220,-290,440,590,36); ctx.fill();
    ctx.fillStyle = "#e0241b"; ctx.beginPath(); ctx.roundRect(-220,-290,440,120,[36,36,0,0]); ctx.fill();
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.font = "900 46px Inter"; ctx.fillText("⚠ ALERT", 0, -230);
    ctx.fillStyle = "#e0241b"; ctx.font = "900 120px Inter"; ctx.fillText("RULE", 0, -80); ctx.fillText("#1", 0, 50);
    ctx.fillStyle = "#11131c"; ctx.font = "900 62px Inter"; ctx.fillText("ISN'T RUN", 0, 190);
    ctx.restore();
    // title
    const title = (s,x,y,sz,c0,c1,ex,al,rot) => { ctx.save(); ctx.translate(x,y); ctx.rotate(rot||-.03); ctx.font = "900 "+sz+"px Inter"; ctx.textAlign = al||"left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.shadowColor = "rgba(0,0,0,.9)"; ctx.shadowBlur = 50; ctx.shadowOffsetY = 18; ctx.lineWidth = sz*.26; ctx.strokeStyle = "#090a14"; ctx.strokeText(s,0,0); ctx.shadowColor = "transparent";
      for (let d = 14; d > 0; d -= 2) { ctx.fillStyle = ex; ctx.fillText(s, d*.5, d); }
      const gd = ctx.createLinearGradient(0,-sz*.5,0,sz*.5); gd.addColorStop(0,c0); gd.addColorStop(1,c1); ctx.fillStyle = gd; ctx.fillText(s,0,0); ctx.restore(); };
    title("10 RULES", 60, 150, 220, "#fff36a", "#ff9a1a", "#8a3a08");
    title("TO SURVIVE", 70, 330, 120, "#ffffff", "#d9e2ff", "#3a4160");
    // arrow from title to phone
    for (const [w,c] of [[46,"#0b0c14"],[26,"#ffe21f"]]) { ctx.lineCap = "round"; ctx.lineWidth = w; ctx.strokeStyle = c; ctx.fillStyle = c;
      ctx.beginPath(); ctx.moveTo(1100,170); ctx.quadraticCurveTo(1520,130,1590,440); ctx.stroke();
      const a = Math.atan2(440-130,1590-1520), hs = w===46?92:70, ox = w===46?14:0;
      ctx.beginPath(); ctx.moveTo(1590+Math.cos(a)*(36+ox),440+Math.sin(a)*(36+ox)); ctx.lineTo(1590-Math.cos(a-.6)*hs,440-Math.sin(a-.6)*hs); ctx.lineTo(1590-Math.cos(a+.6)*hs,440-Math.sin(a+.6)*hs); ctx.closePath(); ctx.fill(); }
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync("/home/user/freellmapi/thumb_10_rules.png", Buffer.from(out.split(",")[1], "base64")); await b.close();
})();
