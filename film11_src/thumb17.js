const { chromium } = require("playwright"); const fs = require("fs");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", e => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html"); await p.waitForFunction("window.ready");
  await p.evaluate(() => document.fonts.ready);
  const outs = await p.evaluate(() => {
    const PW = 1920, PH = 1080; cv.width = PW; cv.height = PH; TT = 1.3; BO = 3; LT = 1;
    const K = "#0b0c14", res = {};
    const clean = () => { ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,PW,PH); };
    const grab = () => { const c = document.createElement("canvas"); c.width = PW; c.height = PH; c.getContext("2d").drawImage(cv,0,0); return c; };
    const txt = (s, x, y, sz, c, lw) => { ctx.save(); ctx.font = "900 " + sz + "px Inter"; ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round";
      ctx.lineWidth = sz * (lw || .14); ctx.strokeStyle = K; ctx.strokeText(s, x, y); ctx.fillStyle = c; ctx.fillText(s, x, y); ctx.restore(); };
    const sweat = (pts) => { for (const [x, y, r] of pts) { ctx.beginPath(); ctx.moveTo(x, y - r * 1.7); ctx.quadraticCurveTo(x + r * 1.2, y, x, y + r); ctx.quadraticCurveTo(x - r * 1.2, y, x, y - r * 1.7); ctx.fillStyle = "#8fd8ff"; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = K; ctx.stroke(); } };
    // ===== A: Den style =====
    clean();
    let g = ctx.createLinearGradient(0,0,0,PH); g.addColorStop(0,"#3a2418"); g.addColorStop(1,"#1e130c"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    for (let y = 0; y < PH; y += 66) { rr(-10, y, PW + 20, 66, 30, y % 132 ? "#5a3a26" : "#50331f", K, 3); }
    // window right
    const X = 1020, Y = 120, Wd = 820, Ht = 760;
    rr(X - 30, Y - 30, Wd + 60, Ht + 60, 10, "#3a2416", K, 10);
    ctx.save(); ctx.beginPath(); ctx.rect(X, Y, Wd, Ht); ctx.clip();
    g = ctx.createLinearGradient(0, Y, 0, Y + Ht); g.addColorStop(0, "#0a1030"); g.addColorStop(1, "#24305a"); ctx.fillStyle = g; ctx.fillRect(X, Y, Wd, Ht);
    srand(9); for (let i = 0; i < 120; i++) { ctx.globalAlpha = .4 + rnd() * .6; ci(X + rnd() * Wd, Y + rnd() * Ht, 2 + rnd() * 4, "#fff"); } ctx.globalAlpha = 1;
    const cx = X + Wd / 2, cy = Y + 420;
    // monster: grandpa-like, beard, glowing eyes, teeth
    rr(cx - 260, cy + 180, 520, 500, 120, "#7a2a24", K, 10);
    ctx.fillStyle = "#b9c4c4"; ctx.strokeStyle = K; ctx.lineWidth = 12; ctx.beginPath(); ctx.ellipse(cx, cy, 230, 260, 0, 0, 7); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#eef2f2"; ctx.beginPath(); ctx.moveTo(cx - 200, cy + 60); ctx.quadraticCurveTo(cx, cy + 380, cx + 200, cy + 60); ctx.quadraticCurveTo(cx, cy + 160, cx - 200, cy + 60); ctx.fill(); ctx.lineWidth = 8; ctx.stroke();
    for (const ex of [-90, 90]) { const r = ctx.createRadialGradient(cx + ex, cy - 50, 5, cx + ex, cy - 50, 130); r.addColorStop(0, "rgba(255,230,120,.95)"); r.addColorStop(1, "rgba(255,200,60,0)"); ctx.fillStyle = r; ctx.fillRect(cx + ex - 140, cy - 190, 280, 280);
      ci(cx + ex, cy - 50, 64, "#111", K, 8); ci(cx + ex, cy - 50, 40, "#f2d36a"); ci(cx + ex, cy - 50, 16, "#fff8d0"); }
    ctx.fillStyle = "#1a0a0e"; ctx.beginPath(); ctx.ellipse(cx, cy + 90, 140, 50, 0, 0, Math.PI); ctx.fill(); ctx.lineWidth = 8; ctx.stroke();
    ctx.fillStyle = "#fffbe8"; for (let i = 0; i < 9; i++) { const tx0 = cx - 126 + i * 28; ctx.beginPath(); ctx.moveTo(tx0, cy + 90); ctx.lineTo(tx0 + 14, cy + 128 - Math.abs(i - 4) * 5); ctx.lineTo(tx0 + 28, cy + 90); ctx.fill(); }
    // hands on glass
    for (const [hx, f] of [[X + 140, 1], [X + Wd - 140, -1]]) { ctx.save(); ctx.translate(hx, Y + 380); ctx.scale(f, 1);
      rr(-60, -40, 120, 150, 40, "#c9d2cc", K, 7); for (let i = 0; i < 4; i++) rr(-56 + i * 30, -170, 26, 140, 13, "#c9d2cc", K, 6); rr(50, 0, 80, 26, 13, "#c9d2cc", K, 6); ctx.restore(); }
    ctx.fillStyle = "rgba(200,220,255,.12)"; ctx.fillRect(X, Y, Wd, Ht);
    ctx.restore();
    ln([X + Wd/2, Y, X + Wd/2, Y + Ht], 14, "#3a2416"); ln([X, Y + Ht/2, X + Wd, Y + Ht/2], 14, "#3a2416");
    ch({ k: "eli", x: 470, y: 1330, s: 640, f: 1, scared: 1 });
    sweat([[230, 620, 22], [700, 560, 18], [730, 650, 14]]);
    ctx.save(); ctx.translate(800, 720); ctx.rotate(-.05); rr(-120, -46, 240, 92, 8, "#c8241c", K, 7); ctx.font = "900 64px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("03:00", 0, 4); ctx.restore();
    ctx.save(); ctx.translate(420, 960); ctx.rotate(-.08); rr(-210, -84, 420, 168, 4, "#efe3c4", "#6a5a3a", 4);
    ctx.font = "italic 900 64px Georgia"; ctx.textAlign = "center"; ctx.fillStyle = "#b8261c"; ctx.fillText("7 RULES", 0, -12);
    ctx.font = "italic 26px Georgia"; ctx.fillStyle = "#4a3a2a"; ctx.fillText("don't open the door...", 0, 40); ctx.restore();
    g = ctx.createRadialGradient(960, 540, 450, 960, 540, 1250); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.5)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    txt("DON'T OPEN", 40, 95, 128, "#ffffff"); txt("EVEN FOR GRANDPA", 40, 225, 96, "#e8261c");
    res.den = cv.toDataURL("image/png");
    // ===== B: NGI style: big object + question =====
    clean();
    g = ctx.createLinearGradient(0,0,0,PH); g.addColorStop(0,"#0a1030"); g.addColorStop(1,"#2a3a66"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    srand(5); for (let i = 0; i < 90; i++) ci(rnd() * PW, rnd() * 500, 1 + rnd() * 2, "rgba(255,255,255,.7)");
    ctx.setTransform(1.5,0,0,1.5,0,0); for (let i = 0; i < 18; i++) pine(i * 76 - 20, 360, 110 + (i * 37 % 40), 0, true); ctx.setTransform(1,0,0,1,0,0);
    g = ctx.createLinearGradient(0, 540, 0, PH); g.addColorStop(0, "#3a4a72"); g.addColorStop(1, "#1c2648"); ctx.fillStyle = g; ctx.fillRect(0, 540, PW, PH);
    // far cabin with lamp
    rr(1240, 400, 210, 140, 6, "#3a2a20", K, 6); ctx.beginPath(); ctx.moveTo(1220, 404); ctx.lineTo(1345, 320); ctx.lineTo(1470, 404); ctx.fillStyle = "#e8eef5"; ctx.fill(); ctx.lineWidth = 6; ctx.strokeStyle = K; ctx.stroke();
    let r = ctx.createRadialGradient(1345, 470, 10, 1345, 470, 380); r.addColorStop(0, "rgba(255,200,80,.85)"); r.addColorStop(1, "rgba(255,200,80,0)"); ctx.fillStyle = r; ctx.fillRect(900, 100, 900, 800);
    rr(1310, 440, 70, 60, 4, "#ffd76a", K, 5);
    // red circle + arrow
    ctx.lineWidth = 26; ctx.strokeStyle = K; ctx.beginPath(); ctx.ellipse(1345, 470, 210, 170, -.1, 0, 7); ctx.stroke(); ctx.lineWidth = 14; ctx.strokeStyle = "#ff2a1a"; ctx.stroke();
    // walkers on ice
    for (let k = 0; k < 6; k++) ch({ k: k % 2 ? "zpax" : "zgrandpa", x: 700 + k * 120, y: 760 + (k % 2) * 30, s: 160, f: 1, ci: k + 2, arm: "up" });
    ch({ k: "eli", x: 300, y: 1080, s: 380, f: 1, scared: 1 });
    g = ctx.createRadialGradient(1100, 500, 400, 1100, 500, 1300); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "rgba(0,0,0,.55)"); ctx.fillStyle = g; ctx.fillRect(0,0,PW,PH);
    txt("WHO LIT", 50, 150, 170, "#ffffff", .2); txt("THE LAMP?", 50, 330, 170, "#ffd92e", .2);
    res.ngi = cv.toDataURL("image/png");
    return res;
  });
  for (const [k, v] of Object.entries(outs)) fs.writeFileSync(`/home/user/freellmapi/thumb_grandpa_${k}.png`, Buffer.from(v.split(",")[1], "base64"));
  await b.close();
})();
