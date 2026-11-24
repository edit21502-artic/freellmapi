const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  const out = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; SNAP.width = PW; SNAP.height = PH; TT = 1.3; BO = 3; LT = 1;
    const K = "#0b0c14"; const res = {};
    const txt = (s, x, y, sz, c, lw) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round"; ctx.lineWidth = sz * (lw || .16); ctx.strokeStyle = K; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    const sweat = (pts) => { for (const [x, y, r] of pts) { ctx.beginPath(); ctx.moveTo(x, y - r * 1.7); ctx.quadraticCurveTo(x + r * 1.2, y, x, y + r); ctx.quadraticCurveTo(x - r * 1.2, y, x, y - r * 1.7); ctx.fillStyle = "#8fd8ff"; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = K; ctx.stroke(); } };
    const scene = () => {
      ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH);
      ctx.setTransform(1.5,0,0,1.5,0,0);
      SH = { o: { storm: 1, door: "open" }, pal: "night", i: 0, dur: 5, words: [], sp: "ELI" };
      BG.kidroom(SH, 2.0, 1);
      ctx.setTransform(1,0,0,1,0,0);
      ctx.fillStyle = "rgba(5,6,20,.45)"; ctx.fillRect(0,0,PW,PH);
    };
    // A: Den style
    scene();
    SH._L = { x: 1400, y: 500, c: "rgba(255,40,60,.35)" };
    let g = ctx.createRadialGradient(1420, 520, 50, 1420, 520, 700); g.addColorStop(0, "rgba(255,30,50,.35)"); g.addColorStop(1, "rgba(255,30,50,0)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    ch({ k: "mred", x: 1420, y: 1260, s: 560, f: -1, arm: "up" });
    EYEG.forEach(e => { ctx.save(); ctx.globalCompositeOperation = "lighter"; glow(e[0], e[1], 260, "rgba(255,40,60,.5)", 1); ctx.restore(); }); EYEG = [];
    ch({ k: "eli", x: 470, y: 1380, s: 640, f: 1, scared: 1 });
    sweat([[200, 650, 22], [720, 600, 18], [740, 700, 14]]);
    ctx.save(); ctx.translate(1700, 120); ctx.rotate(.05); rr(-150, -54, 300, 108, 8, "#c8241c", K, 8); ctx.font = "900 66px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("2:00 AM", 0, 4); ctx.restore();
    ctx.save(); ctx.translate(980, 930); ctx.rotate(-.06); rr(-200, -80, 400, 160, 4, "#fbf6e8", "#6a5a3a", 4); ctx.font = "italic 900 64px Georgia"; ctx.textAlign = "center"; ctx.fillStyle = "#b8261c"; ctx.fillText("7 RULES", 0, -10); ctx.font = "italic 26px Georgia"; ctx.fillStyle = "#1a2a5a"; ctx.fillText("don't show this to Maple", 0, 40); ctx.restore();
    g = ctx.createRadialGradient(960, 540, 450, 960, 540, 1250); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.5)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    txt("SHE SAID", 40, 100, 130, "#ffffff"); txt("MY NAME TWICE", 40, 235, 112, "#ff2a1a");
    res.a = cv.toDataURL("image/png");
    return res;
  });
  for (const [k, v] of Object.entries(out)) fs.writeFileSync(`/home/user/freellmapi/thumb_maple_${k}.png`, Buffer.from(v.split(",")[1], "base64"));
  await b.close();
})();
