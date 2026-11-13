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
  const data = await p.evaluate(() => {
    TT = 3.3;
    BO = 5;
    LT = 1;
    srand(4242);
    const sh = {
      pal: "dusk",
      day: 10,
      o: { nolight: 1 },
      i: 0,
      dur: 5,
      words: [],
    };
    SH = sh;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // background: burning dusk city
    ctx.save();
    ctx.translate(-120, -150);
    ctx.scale(1.25, 1.25);
    BG.street(sh, 3.3, 1);
    ctx.restore();
    let g = ctx.createLinearGradient(0, 0, 0, 720);
    g.addColorStop(0, "rgba(190,40,20,.55)");
    g.addColorStop(0.6, "rgba(240,120,40,.25)");
    g.addColorStop(1, "rgba(20,10,30,.55)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1280, 720);
    // horde (back rows small -> front big)
    const rows = [
      [330, 95, 14, 0.55],
      [400, 135, 11, 0.75],
      [500, 190, 8, 1],
    ];
    rows.forEach(([y, s, n, a], r) => {
      for (let i = 0; i < n; i++) {
        const x = 520 + i * (780 / n) + hash(i * 7 + r) * 40;
        ctx.globalAlpha = 1;
        person({
          k: "z",
          x,
          y: y + 250 + hash(i + r * 9) * 20,
          s,
          f: -1,
          walk: i * 1.3 + r,
          ci: i + r * 3,
        });
      }
      ctx.fillStyle = `rgba(60,20,30,${0.28 - r * 0.12})`;
      ctx.fillRect(0, 0, 1280, 720);
    });
    // hero big, scared, running left
    const hg = ctx.createRadialGradient(300, 420, 40, 300, 420, 420);
    hg.addColorStop(0, "rgba(255,235,190,.55)");
    hg.addColorStop(1, "rgba(255,235,190,0)");
    ctx.fillStyle = hg;
    ctx.fillRect(0, 0, 800, 720);
    person({ k: "hero", x: 300, y: 1010, s: 400, f: -1, scared: 1, walk: 1.1 });
    // big front zombie hand reaching from right
    person({ k: "z", x: 1050, y: 1060, s: 440, f: -1, walk: 0.6, ci: 1 });
    // vignette
    const vg = ctx.createRadialGradient(640, 360, 300, 640, 360, 760);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(10,0,10,.75)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, 1280, 720);
    // text
    const big = (s, x, y, sz, col, rot = 0) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.font = `900 ${sz}px Inter`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.lineJoin = "round";
      ctx.shadowColor = "rgba(0,0,0,.8)";
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;
      ctx.lineWidth = sz * 0.2;
      ctx.strokeStyle = "#120a0a";
      ctx.strokeText(s, 0, 0);
      ctx.shadowColor = "transparent";
      ctx.fillStyle = col;
      ctx.fillText(s, 0, 0);
      ctx.restore();
    };
    big("I SURVIVED", 478, 76, 84, "#ffffff", -0.03);
    big("30 DAYS", 470, 200, 158, "#ffdd1f", -0.03);
    // day badge
    ctx.save();
    ctx.translate(1105, 610);
    ctx.rotate(0.06);
    ctx.fillStyle = "#e7321f";
    ctx.strokeStyle = "#120a0a";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.roundRect(-150, -52, 300, 104, 18);
    ctx.fill();
    ctx.stroke();
    ctx.font = "900 68px Inter";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText("DAY 29", 0, 4);
    ctx.restore();
    return document.getElementById("c").toDataURL("image/png");
  });
  fs.writeFileSync(process.argv[2], Buffer.from(data.split(",")[1], "base64"));
  await b.close();
})();
