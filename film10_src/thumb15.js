const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const outs = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 1.0; BO = 3; LT = 1;
    const K = "#0b0c14";
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); };
    const txt = (s, x, y, sz, c, al) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = al || "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz * .2; ctx.strokeStyle = K; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    const vign = (x, y, a) => { const g = ctx.createRadialGradient(x, y, 350, x, y, 1300); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, `rgba(0,0,0,${a})`); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH); };
    const res = {};
    // ===== B1: elevator panel close-up =====
    clean();
    let g = ctx.createLinearGradient(0,0,PW,PH); g.addColorStop(0,"#5d636b"); g.addColorStop(1,"#30343a"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    for (let i = 0; i < 40; i++) { ctx.strokeStyle = "rgba(255,255,255,.04)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, i * 30); ctx.lineTo(PW, i * 30 + 40); ctx.stroke(); }
    rr(1080, 60, 560, 980, 30, "#8d949c", K, 10);
    const nums = ["8","7","6","5","4","3","2","1"];
    nums.forEach((n, i) => { const col = i % 2, row = Math.floor(i / 2), x = 1230 + col * 260, y = 210 + row * 230, lit = n === "6";
      if (lit) { const r = ctx.createRadialGradient(x, y, 20, x, y, 260); r.addColorStop(0, "rgba(255,200,60,.9)"); r.addColorStop(1, "rgba(255,200,60,0)"); ctx.fillStyle = r; ctx.fillRect(x - 260, y - 260, 520, 520); }
      ci(x, y, 86, lit ? "#ffcf3a" : "#c9ced3", K, 9); ci(x, y, 66, lit ? "#ffe9a0" : "#dde1e4", null);
      ctx.font = "900 78px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = lit ? "#7a4a00" : "#3a3f46"; ctx.fillText(n, x, y + 4); });
    // gray finger pressing 6
    ctx.save(); ctx.translate(1262, 470); ctx.rotate(-0.62);
    rr(-150, 380, 300, 420, 90, "#76967a", K, 10);
    rr(-50, -10, 100, 470, 50, "#8fb08a", K, 10); el(0, 30, 32, 22, "#c9d6c4", K, 5);
    ln([-38, 150, 38, 150], 6, "rgba(20,30,20,.5)"); ln([-38, 280, 38, 280], 6, "rgba(20,30,20,.5)");
    rr(70, 330, 80, 200, 40, "#8fb08a", K, 9); ctx.restore();
    vign(1300, 500, .55);
    txt("WHO", 70, 300, 210, "#ffffff"); txt("PRESSED", 70, 520, 170, "#ffffff"); txt("6?", 80, 760, 260, "#ffd92e");
    res.b1 = cv.toDataURL("image/png");
    // ===== B2: vent close-up =====
    clean();
    for (let y = 0; y < PH; y += 120) for (let x = (y / 120) % 2 ? -60 : 0; x < PW; x += 120) rr(x, y, 120, 120, 4, "#bcd0da", "rgba(70,100,120,.45)", 3);
    ctx.fillStyle = "rgba(10,14,30,.35)"; ctx.fillRect(0,0,PW,PH);
    rr(1050, 40, 640, 330, 16, "#cfd6db", K, 10); for (let i = 0; i < 7; i++) rr(1090, 75 + i * 40, 560, 22, 8, "#59636c", K, 4);
    ln([1370, 340, 1370, 560], 6, "#efe6cc");
    // bag with drawing
    ctx.save(); ctx.translate(1370, 760); ctx.rotate(.06);
    rr(-230, -210, 460, 420, 30, "rgba(235,240,248,.85)", K, 8);
    rr(-180, -160, 360, 300, 6, "#ffffff", K, 6);
    ctx.strokeStyle = "#e84a8a"; ctx.lineWidth = 9; ctx.lineCap = "round";
    ctx.beginPath(); ctx.arc(-70, -70, 34, 0, 7); ctx.moveTo(-70, -36); ctx.lineTo(-70, 40); ctx.moveTo(-110, -10); ctx.lineTo(-30, -10); ctx.moveTo(-70, 40); ctx.lineTo(-100, 100); ctx.moveTo(-70, 40); ctx.lineTo(-40, 100); ctx.stroke();
    ctx.strokeStyle = "#f2a33a"; ctx.beginPath(); ctx.ellipse(70, 60, 50, 34, 0, 0, 7); ctx.moveTo(110, 40); ctx.arc(120, 20, 26, 0, 7); ctx.moveTo(108, 0); ctx.lineTo(112, -24); ctx.lineTo(124, -4); ctx.moveTo(20, 60); ctx.quadraticCurveTo(-10, 30, 0, 0); ctx.stroke();
    ctx.font = "900 italic 38px Inter"; ctx.textAlign = "center"; ctx.fillStyle = "#2a6fd6"; ctx.fillText("I AM LENA", 0, -118);
    ctx.restore();
    const r2 = ctx.createRadialGradient(1370, 600, 50, 1370, 600, 700); r2.addColorStop(0, "rgba(255,230,160,.25)"); r2.addColorStop(1, "rgba(255,230,160,0)"); ctx.fillStyle = r2; ctx.fillRect(600, 0, 1320, PH);
    vign(1300, 560, .6);
    txt("SHE'S", 70, 330, 220, "#ffffff"); txt("ONLY 8.", 70, 590, 220, "#ffd92e");
    res.b2 = cv.toDataURL("image/png");
    // ===== C: crowd + label =====
    clean(); ctx.setTransform(1.5,0,0,1.5,0,0); SH = { pal: "night", day: "", sp: "ELI", o: { door: "6B" }, i: 0, dur: 5, words: [] }; BG.elev(SH, 1.0, 5); ctx.setTransform(1,0,0,1,0,0);
    ctx.fillStyle = "rgba(14,12,34,.3)"; ctx.fillRect(0,0,PW,PH);
    const crowd = [];
    for (let row = 0; row < 3; row++) for (let i = 0; i < 9; i++) crowd.push({ x: 60 + i * 225 + (row % 2) * 110, y: 760 + row * 120, s: 250 + row * 50, c: i + row * 3 });
    crowd.forEach(z => { if (Math.abs(z.x - 980) < 240 && z.y > 850) return; ch({ k: z.c % 2 ? "zpax" : "zcrew", x: z.x, y: z.y, s: z.s, f: z.x < 960 ? 1 : -1, ci: z.c, arm: "up" }); });
    ch({ k: "lena", x: 1110, y: 1060, s: 390, f: -1, scared: 1 });
    ch({ k: "eli", x: 860, y: 1070, s: 390, f: 1, scared: 1 });
    vign(960, 600, .5);
    ctx.save(); ctx.translate(600, 200); ctx.rotate(-.07); rr(-500, -95, 1000, 190, 16, "#ffffff", K, 12); rr(-480, -76, 960, 152, 10, null, "#d8261c", 8);
    ctx.font = "900 112px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#d8261c"; ctx.fillText("OUT OF ORDER", 0, 8); ctx.restore();
    res.c = cv.toDataURL("image/png");
    return res;
  });
  for (const [k, v] of Object.entries(outs)) fs.writeFileSync(`/home/user/freellmapi/thumb_elevator_${k}.png`, Buffer.from(v.split(",")[1], "base64"));
  await b.close();
})();
