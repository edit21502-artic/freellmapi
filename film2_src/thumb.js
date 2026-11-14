const { chromium } = require("playwright");
const fs = require("fs"),
  path = require("path");
const TL = JSON.parse(
  fs.readFileSync(path.join(__dirname, "out/timeline.json")),
);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  p.on("pageerror", (e) => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html");
  await p.waitForFunction("window.ready");
  await p.evaluate((tl) => setTL(tl), TL);
  const helpers = `
    var big = (s, x, y, sz, col, rot = 0, al = 'left') => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.font = '900 ' + sz + 'px Inter'; ctx.textAlign = al; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round'; ctx.shadowColor = 'rgba(0,0,0,.85)'; ctx.shadowBlur = 26; ctx.shadowOffsetY = 8; ctx.lineWidth = sz * .22; ctx.strokeStyle = '#120a0a'; ctx.strokeText(s, 0, 0); ctx.shadowColor = 'transparent'; ctx.fillStyle = col; ctx.fillText(s, 0, 0); ctx.restore() };
    var badge = (s, x, y, col, rot) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.font = '900 92px Inter'; const w = ctx.measureText(s).width + 56; ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 8; ctx.fillStyle = col; ctx.strokeStyle = '#120a0a'; ctx.lineWidth = 12; ctx.beginPath(); ctx.roundRect(-w / 2, -66, w, 132, 22); ctx.stroke(); ctx.fill(); ctx.shadowColor = 'transparent'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff'; ctx.fillText(s, 0, 6); ctx.restore() };
    var arrow = (x1, y1, x2, y2, col) => { const a = Math.atan2(y2 - y1, x2 - x1); for (const [w, c] of [[34, '#120a0a'], [20, col]]) { ctx.strokeStyle = c; ctx.fillStyle = c; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - Math.cos(a) * 30, y2 - Math.sin(a) * 30); ctx.stroke(); const hs = w === 34 ? 62 : 48; ctx.beginPath(); ctx.moveTo(x2 + Math.cos(a) * (w === 34 ? 8 : 0), y2 + Math.sin(a) * (w === 34 ? 8 : 0)); ctx.lineTo(x2 - Math.cos(a - .5) * hs, y2 - Math.sin(a - .5) * hs); ctx.lineTo(x2 - Math.cos(a + .5) * hs, y2 - Math.sin(a + .5) * hs); ctx.closePath(); ctx.fill() } };
  `;
  const A = await p.evaluate((h) => {
    eval(h);
    TT = 2.2;
    BO = 3;
    LT = 1;
    srand(99);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const mk = (o) => ({
      pal: "day",
      day: "",
      sp: "ELI",
      o,
      i: 0,
      dur: 5,
      words: [],
    });
    // LEFT: calm
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(700, 0);
    ctx.lineTo(580, 720);
    ctx.lineTo(0, 720);
    ctx.clip();
    SH = mk({});
    ctx.save();
    ctx.translate(-160, -260);
    ctx.scale(1.5, 1.5);
    BG.office(SH, 2.2);
    ctx.restore();
    ctx.fillStyle = "rgba(255,240,200,.18)";
    ctx.fillRect(0, 0, 720, 720);
    person({ k: "hero0", x: 300, y: 1160, s: 520, f: 1, item: "cup" });
    ctx.restore();
    // RIGHT: chaos
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(700, 0);
    ctx.lineTo(1280, 0);
    ctx.lineTo(1280, 720);
    ctx.lineTo(580, 720);
    ctx.clip();
    SH = mk({ alarm: 1, props: ["mess"] });
    ctx.save();
    ctx.translate(-560, -260);
    ctx.scale(1.5, 1.5);
    BG.office(SH, 2.2);
    ctx.restore();
    let g = ctx.createLinearGradient(0, 0, 0, 720);
    g.addColorStop(0, "rgba(220,30,20,.6)");
    g.addColorStop(1, "rgba(60,0,20,.55)");
    ctx.fillStyle = g;
    ctx.fillRect(560, 0, 720, 720);
    for (let i = 0; i < 5; i++)
      person({
        k: "z",
        x: 800 + i * 120,
        y: 820 + (i % 2) * 30,
        s: 230,
        f: -1,
        ci: i,
        walk: i,
      });
    ctx.fillStyle = "rgba(70,0,10,.35)";
    ctx.fillRect(560, 0, 720, 720);
    person({ k: "zboss", x: 1150, y: 1230, s: 600, f: -1, ci: 1 });
    const hg = ctx.createRadialGradient(850, 420, 30, 850, 420, 330);
    hg.addColorStop(0, "rgba(255,240,210,.5)");
    hg.addColorStop(1, "rgba(255,240,210,0)");
    ctx.fillStyle = hg;
    ctx.fillRect(520, 60, 700, 700);
    person({ k: "hero", x: 850, y: 1180, s: 520, f: -1, scared: 1 });
    ctx.restore();
    // divider
    ctx.lineCap = "butt";
    ctx.strokeStyle = "#120a0a";
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.moveTo(704, -10);
    ctx.lineTo(578, 730);
    ctx.stroke();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(704, -10);
    ctx.lineTo(578, 730);
    ctx.stroke();
    const vg = ctx.createRadialGradient(640, 360, 380, 640, 360, 800);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(0,0,0,.6)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, 1280, 720);
    badge("9:00 AM", 250, 96, "#2f9e55", -0.04);
    badge("9:47 AM", 1010, 96, "#e02b1c", 0.04);
    arrow(520, 110, 780, 110, "#ffdd1f");
    return document.getElementById("c").toDataURL("image/png");
  }, helpers);
  fs.writeFileSync(
    "/home/user/freellmapi/thumb_office_A.png",
    Buffer.from(A.split(",")[1], "base64"),
  );
  const B = await p.evaluate((h) => {
    eval(h);
    TT = 1.9;
    BO = 4;
    LT = 2;
    srand(5);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    SH = { pal: "day", day: "", sp: "ELI", o: {}, i: 0, dur: 5, words: [] };
    let g = ctx.createRadialGradient(560, 330, 60, 560, 330, 760);
    g.addColorStop(0, "#c8372a"); g.addColorStop(1, "#2a060c"); ctx.fillStyle = g; ctx.fillRect(0, 0, 1280, 720);
    for (let i = 0; i < 18; i++) { const a = i / 18 * Math.PI * 2; ctx.fillStyle = "rgba(255,90,60,.16)"; ctx.beginPath(); ctx.moveTo(560, 330); ctx.lineTo(560 + Math.cos(a) * 1500, 330 + Math.sin(a) * 1500); ctx.lineTo(560 + Math.cos(a + .09) * 1500, 330 + Math.sin(a + .09) * 1500); ctx.fill(); }
    person({ k: "zboss", x: 520, y: 1560, s: 760, f: 1, ci: 1 });
    const hg = ctx.createRadialGradient(1090, 600, 30, 1090, 600, 300);
    hg.addColorStop(0, "rgba(255,240,210,.55)");
    hg.addColorStop(1, "rgba(255,240,210,0)");
    ctx.fillStyle = hg;
    ctx.fillRect(760, 280, 600, 500);
    person({ k: "hero", x: 1110, y: 1150, s: 430, f: -1, scared: 1 });
    const vg = ctx.createRadialGradient(640, 360, 380, 640, 360, 800);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(0,0,0,.65)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, 1280, 720);
    big("MY BOSS", 30, 100, 130, "#ffdd1f", -0.04);
    big("BIT THE INTERN", 44, 640, 84, "#ffffff", -0.02);
    
    return document.getElementById("c").toDataURL("image/png");
  }, helpers);
  fs.writeFileSync(
    "/home/user/freellmapi/thumb_office_B.png",
    Buffer.from(B.split(",")[1], "base64"),
  );
  await b.close();
})();
