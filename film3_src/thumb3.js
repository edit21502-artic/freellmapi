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
    TT = 2.26;
    BO = 3;
    LT = 1;
    SH = {
      pal: "emer",
      day: "",
      sp: "ELI",
      o: { pax: "zombie" },
      i: 0,
      dur: 5,
      words: [],
    };
    const layer = (fn, light) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, PW, PH);
      ctx.setTransform(K, 0, 0, K, 0, 0);
      fn();
      const c = document.createElement("canvas");
      c.width = PW;
      c.height = PH;
      const g = c.getContext("2d");
      g.drawImage(cv, 0, 0);
      if (light) {
        g.globalCompositeOperation = "source-atop";
        let gd = g.createLinearGradient(0, PH * 0.35, 0, PH);
        gd.addColorStop(0, "rgba(40,0,30,0)");
        gd.addColorStop(1, "rgba(40,0,30,.25)");
        g.fillStyle = gd;
        g.fillRect(0, 0, PW, PH);
        gd = g.createRadialGradient(
          light[0],
          light[1],
          30,
          light[0],
          light[1],
          light[2],
        );
        gd.addColorStop(0, light[3]);
        gd.addColorStop(1, "rgba(255,255,255,0)");
        g.fillStyle = gd;
        g.fillRect(0, 0, PW, PH);
      }
      return c;
    };
    const Lbg = layer(() => {
      ctx.save();
      ctx.translate(-260, -470);
      ctx.scale(1.8, 1.8);
      cabinBase(SH, 2.26, 1);
      ctx.restore();
    });
    const Lfar = layer(() => {
      for (let i = 0; i < 5; i++)
        ch({
          k: i % 2 ? "zpax" : "zcrew",
          x: 600 + i * 150,
          y: 820 + (i % 2) * 30,
          s: 230,
          f: -1,
          ci: i + 3,
          arm: "up",
        });
    }, [1300, 300, 900, "rgba(255,90,60,.35)"]);
    const Lz = layer(() => {
      ch({ k: "zsick", x: 1040, y: 1210, s: 640, f: -1, ci: 1 });
    }, [1250, 250, 900, "rgba(255,120,80,.1)"]);
    const Lhero = layer(() => {
      ch({ k: "eli", x: 330, y: 1250, s: 640, f: -1, scared: 1 });
    }, [300, 380, 760, "rgba(255,250,235,.14)"]);
    // composite
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, PW, PH);
    ctx.filter = "blur(9px)";
    ctx.drawImage(Lbg, 0, 0);
    ctx.filter = "none";
    let g = ctx.createLinearGradient(0, 0, PW, PH);
    g.addColorStop(0, "rgba(120,10,30,.55)");
    g.addColorStop(1, "rgba(255,40,20,.5)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, PW, PH);
    // light rays from top right
    for (let i = 0; i < 9; i++) {
      const a = 2.2 + i * 0.13;
      ctx.fillStyle = "rgba(255,120,80,.07)";
      ctx.beginPath();
      ctx.moveTo(1500, -80);
      ctx.lineTo(1500 + Math.cos(a) * 2600, -80 + Math.sin(a) * 2600);
      ctx.lineTo(
        1500 + Math.cos(a + 0.06) * 2600,
        -80 + Math.sin(a + 0.06) * 2600,
      );
      ctx.fill();
    }
    ctx.filter = "blur(4px)";
    ctx.drawImage(Lfar, 0, 0);
    ctx.filter = "none";
    ctx.fillStyle = "rgba(70,0,24,.42)";
    ctx.fillRect(0, 0, PW, PH);
    ctx.shadowColor = "rgba(255,70,40,.95)";
    ctx.shadowBlur = 60;
    ctx.drawImage(Lz, 0, 0);
    // glow behind hero
    ctx.shadowBlur = 0;
    g = ctx.createRadialGradient(520, 620, 40, 520, 620, 640);
    g.addColorStop(0, "rgba(255,248,225,.38)");
    g.addColorStop(1, "rgba(255,248,225,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1300, PH);
    ctx.shadowColor = "rgba(255,255,255,.95)";
    ctx.shadowBlur = 44;
    ctx.drawImage(Lhero, 0, 0);
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
    // sweat drops
    for (const [x, y, r] of [
      [250, 470, 22],
      [200, 560, 16],
      [930, 500, 18],
    ]) {
      ctx.beginPath();
      ctx.moveTo(x, y - r * 1.7);
      ctx.quadraticCurveTo(x + r * 1.2, y, x, y + r);
      ctx.quadraticCurveTo(x - r * 1.2, y, x, y - r * 1.7);
      ctx.fillStyle = "#8fd8ff";
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#161827";
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(x - r * 0.3, y, r * 0.25, 0, 7);
      ctx.fill();
    }
    // grade + vignette
    ctx.globalCompositeOperation = "soft-light";
    g = ctx.createLinearGradient(0, 0, PW, 0);
    g.addColorStop(0, "rgba(40,140,255,.28)");
    g.addColorStop(0.5, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(255,60,20,.3)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, PW, PH);
    ctx.globalCompositeOperation = "source-over";
    g = ctx.createRadialGradient(
      PW / 2,
      PH * 0.5,
      PH * 0.5,
      PW / 2,
      PH * 0.5,
      PH * 1.1,
    );
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(10,0,8,.75)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, PW, PH);
    srand(7);
    for (let i = 0; i < 70; i++) {
      ctx.fillStyle = `rgba(255,200,170,${0.12 + rnd() * 0.3})`;
      ctx.beginPath();
      ctx.arc(rnd() * PW, rnd() * PH, 1 + rnd() * 3.5, 0, 7);
      ctx.fill();
    }
    // red circle + arrow on the reaching hand
    const ring = (x, y, r) => {
      ctx.lineWidth = 30;
      ctx.strokeStyle = "#0b0c14";
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * 0.9, -0.2, 0, 7);
      ctx.stroke();
      ctx.lineWidth = 16;
      ctx.strokeStyle = "#ff2a1a";
      ctx.stroke();
    };
    
    const arrow = (x1, y1, cx, cy, x2, y2) => {
      for (const [w, c] of [
        [46, "#0b0c14"],
        [26, "#ffe21f"],
      ]) {
        ctx.lineCap = "round";
        ctx.lineWidth = w;
        ctx.strokeStyle = c;
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cx, cy, x2, y2);
        ctx.stroke();
        const a = Math.atan2(y2 - cy, x2 - cx),
          hs = w === 46 ? 92 : 70,
          ox = w === 46 ? 14 : 0;
        ctx.beginPath();
        ctx.moveTo(x2 + Math.cos(a) * (36 + ox), y2 + Math.sin(a) * (36 + ox));
        ctx.lineTo(x2 - Math.cos(a - 0.6) * hs, y2 - Math.sin(a - 0.6) * hs);
        ctx.lineTo(x2 - Math.cos(a + 0.6) * hs, y2 - Math.sin(a + 0.6) * hs);
        ctx.closePath();
        ctx.fill();
      }
    };
    arrow(1700, 470, 1760, 600, 1640, 660);
    ctx.save(); ctx.translate(1640, 400); ctx.rotate(.05); ctx.fillStyle = "#e02b1c"; ctx.strokeStyle = "#0b0c14"; ctx.lineWidth = 16; ctx.beginPath(); ctx.roundRect(-210, -66, 420, 132, 26); ctx.stroke(); ctx.fill(); ctx.font = "900 92px Inter"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = "#fff"; ctx.fillText("SEAT 14C", 0, 6); ctx.restore();
    // 3D title
    const title = (s, x, y, sz, c0, c1, ex, al) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-0.03);
      ctx.font = "900 " + sz + "px Inter";
      ctx.textAlign = al || "left";
      ctx.textBaseline = "middle";
      ctx.lineJoin = "round";
      ctx.shadowColor = "rgba(0,0,0,.9)";
      ctx.shadowBlur = 50;
      ctx.shadowOffsetY = 18;
      ctx.lineWidth = sz * 0.26;
      ctx.strokeStyle = "#090a14";
      ctx.strokeText(s, 0, 0);
      ctx.shadowColor = "transparent";
      for (let d = 14; d > 0; d -= 2) {
        ctx.fillStyle = ex;
        ctx.fillText(s, d * 0.5, d);
      }
      const gd = ctx.createLinearGradient(0, -sz * 0.5, 0, sz * 0.5);
      gd.addColorStop(0, c0);
      gd.addColorStop(1, c1);
      ctx.fillStyle = gd;
      ctx.fillText(s, 0, 0);
      ctx.globalAlpha = 0.35;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.rect(-PW, -sz * 0.5, PW * 2, sz * 0.42);
      ctx.clip();
      ctx.fillText(s, 0, 0);
      ctx.restore();
    };
    title("36,000 FT", 60, 150, 210, "#fff36a", "#ff9a1a", "#8a3a08");
    title(
      "NO WAY OUT",
      1860,
      960,
      150,
      "#ffffff",
      "#d9e2ff",
      "#3a4160",
      "right",
    );
    return cv.toDataURL("image/png");
  });
  fs.writeFileSync(
    "/home/user/freellmapi/thumb_flight_final.png",
    Buffer.from(out.split(",")[1], "base64"),
  );
  await b.close();
})();
