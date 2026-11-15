const { chromium } = require("playwright");
const fs = require("fs");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on("pageerror", (e) => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html");
  await p.waitForFunction("window.ready");
  const out = await p.evaluate(() => {
    const K = 1.5,
      PW = 1920,
      PH = 1080;
    cv.width = PW;
    cv.height = PH;
    TT = 1.4;
    BO = 2;
    LT = 1;
    SH = { pal: "night", day: "", sp: "ELI", o: {}, i: 0, dur: 5, words: [] };
    const layer = (fn, shade) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, PW, PH);
      ctx.setTransform(K, 0, 0, K, 0, 0);
      fn();
      const c = document.createElement("canvas");
      c.width = PW;
      c.height = PH;
      const g = c.getContext("2d");
      g.drawImage(cv, 0, 0);
      if (shade) {
        g.globalCompositeOperation = "source-atop";
        let gd = g.createLinearGradient(0, PH * 0.25, 0, PH);
        gd.addColorStop(0, "rgba(10,10,40,0)");
        gd.addColorStop(1, "rgba(10,8,40,.22)");
        g.fillStyle = gd;
        g.fillRect(0, 0, PW, PH);
        gd = g.createRadialGradient(
          PW / 2,
          PH * 0.42,
          60,
          PW / 2,
          PH * 0.42,
          PW * 0.55,
        );
        gd.addColorStop(0, "rgba(255,240,190,.42)");
        gd.addColorStop(1, "rgba(255,240,190,0)");
        g.fillStyle = gd;
        g.fillRect(0, 0, PW, PH);
      }
      return c;
    };
    // --- layers ---
    const Lbg = layer(() => {
      sky("night", 1.4);
      ctx.save();
      ctx.translate(0, -30);
      cityDark(1.4, 470, 1);
      ctx.restore();
      gr(0, 430, 1280, 290, "#303758", "#0b0d1c");
      po([380, 720, 606, 432, 674, 432, 900, 720], "#3d4568");
      for (let i = 0; i < 7; i++) {
        const u = i / 6,
          y = 440 + u * u * 280,
          w = 6 + u * 26;
        rr(640 - w / 2, y, w, 10 + u * 34, 3, "#f2c21a");
      }
      for (let i = 0; i < 9; i++) {
        const u = i / 8,
          y = 436 + u * u * 290;
        for (const sd of [-1, 1]) {
          const x = 640 + sd * (36 + u * u * 250);
          glow(x, y, 10 + u * 34, "rgba(120,200,255,1)");
          ci(x, y, 2 + u * 6, "#eaf6ff");
        }
      }
    });
    const Lplane = layer(() => {
      plane(650, 300, 0.66, { gear: 1, rot: -0.05 });
    });
    const mk = (arr) => () =>
      arr.forEach((z, i) =>
        ch({
          k: z[4],
          x: z[0],
          y: z[1],
          s: z[2],
          f: z[3],
          ci: z[5],
          item: z[6] ? "wands" : null,
          arm: "up",
        }),
      );
    const Lfar = layer(
      mk([
        [260, 760, 150, 1, "zpax", 4],
        [420, 770, 160, 1, "zcrew", 5],
        
        [880, 770, 160, -1, "zpax", 8],
        [1030, 760, 150, -1, "zcrew", 9],
      ]),
      1,
    );
    const Lmid = layer(
      mk([
        [450, 900, 270, 1, "zcrew", 3, 1],
        [830, 900, 270, -1, "zcrew", 2, 1],
      ]),
      1,
    );
    const Lfront = layer(
      mk([
        [190, 1080, 430, 1, "zcrew", 1, 1],
        [1090, 1080, 430, -1, "zcrew", 4, 1],
      ]),
      1,
    );
    // --- composite ---
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, PW, PH);
    ctx.filter = "blur(5px)";
    ctx.drawImage(Lbg, 0, 0);
    ctx.filter = "none";
    // light beam + bloom
    let g = ctx.createRadialGradient(PW / 2, 470, 20, PW / 2, 470, 760);
    g.addColorStop(0, "rgba(255,246,205,.95)");
    g.addColorStop(0.25, "rgba(255,236,170,.42)");
    g.addColorStop(1, "rgba(255,236,170,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, PW, PH);
    ctx.fillStyle = "rgba(255,244,200,.13)";
    ctx.beginPath();
    ctx.moveTo(880, 480);
    ctx.lineTo(1040, 480);
    ctx.lineTo(1700, 1080);
    ctx.lineTo(220, 1080);
    ctx.fill();
    ctx.shadowColor = "rgba(255,245,210,.9)";
    ctx.shadowBlur = 60;
    ctx.drawImage(Lplane, 0, 0);
    ctx.shadowBlur = 0;
    for (const [x, y, r] of [
      [1060, 505, 46],
      [905, 520, 30],
    ]) {
      g = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
      g.addColorStop(0, "rgba(255,255,240,1)");
      g.addColorStop(0.3, "rgba(255,250,210,.7)");
      g.addColorStop(1, "rgba(255,250,210,0)");
      ctx.fillStyle = g;
      ctx.fillRect(x - r * 3, y - r * 3, r * 6, r * 6);
    }
    ctx.filter = "blur(3px)";
    ctx.globalAlpha = 0.9;
    ctx.drawImage(Lfar, 0, 0);
    ctx.globalAlpha = 1;
    ctx.filter = "none";
    ctx.fillStyle = "rgba(14,16,44,.2)";
    ctx.fillRect(0, 620, PW, 460);
    ctx.shadowColor = "rgba(255,200,120,.75)";
    ctx.shadowBlur = 34;
    ctx.drawImage(Lmid, 0, 0);
    ctx.shadowColor = "rgba(255,150,60,.85)";
    ctx.shadowBlur = 46;
    ctx.drawImage(Lfront, 0, 0);
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
    // grade + vignette
    ctx.globalCompositeOperation = "soft-light";
    g = ctx.createLinearGradient(0, 0, PW, PH);
    g.addColorStop(0, "rgba(30,90,200,.55)");
    g.addColorStop(1, "rgba(255,120,30,.55)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, PW, PH);
    ctx.globalCompositeOperation = "source-over";
    g = ctx.createRadialGradient(
      PW / 2,
      PH * 0.5,
      PH * 0.45,
      PW / 2,
      PH * 0.5,
      PH * 1.05,
    );
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(2,2,14,.6)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, PW, PH);
    // dust
    srand(42);
    for (let i = 0; i < 90; i++) {
      const x = rnd() * PW,
        y = 380 + rnd() * 700,
        r = 1 + rnd() * 3.5;
      ctx.fillStyle = `rgba(255,240,200,${0.15 + rnd() * 0.35})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 7);
      ctx.fill();
    }
    // title text with extrude + gradient
    const title = (s, x, y, sz, c0, c1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-0.025);
      ctx.font = "900 " + sz + "px Inter";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.lineJoin = "round";
      ctx.shadowColor = "rgba(0,0,0,.85)";
      ctx.shadowBlur = 50;
      ctx.shadowOffsetY = 18;
      ctx.lineWidth = sz * 0.26;
      ctx.strokeStyle = "#090a14";
      ctx.strokeText(s, 0, 0);
      ctx.shadowColor = "transparent";
      for (let d = 14; d > 0; d -= 2) {
        ctx.fillStyle = "#8a3a08";
        ctx.fillText(s, d * 0.5, d);
      }
      const gd = ctx.createLinearGradient(0, -sz * 0.5, 0, sz * 0.5);
      gd.addColorStop(0, c0);
      gd.addColorStop(1, c1);
      ctx.fillStyle = gd;
      ctx.fillText(s, 0, 0);
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = "#fff";
      ctx.save();
      ctx.beginPath();
      ctx.rect(-PW, -sz * 0.5, PW * 2, sz * 0.42);
      ctx.clip();
      ctx.fillText(s, 0, 0);
      ctx.restore();
      ctx.restore();
    };
    title("DON'T LAND", PW / 2, 190, 262, "#fff36a", "#ff9a1a");
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync(
    __dirname + "/out/thumb_hq.png",
    Buffer.from(out.split(",")[1], "base64"),
  );
  await b.close();
})();
