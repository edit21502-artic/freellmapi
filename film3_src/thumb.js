const { chromium } = require("playwright");
const fs = require("fs");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  p.on("pageerror", (e) => console.log("ERR", e.message));
  await p.goto("file://" + __dirname + "/engine.html");
  await p.waitForFunction("window.ready");
  const helpers = `
    var big = function (s, x, y, sz, col, rot, al) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0); ctx.font = '900 ' + sz + 'px Inter'; ctx.textAlign = al || 'left'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round'; ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 10; ctx.lineWidth = sz * .24; ctx.strokeStyle = '#0b0c14'; ctx.strokeText(s, 0, 0); ctx.shadowColor = 'transparent'; ctx.fillStyle = col; ctx.fillText(s, 0, 0); ctx.restore() };
    var vig = function (a) { var vg = ctx.createRadialGradient(640, 360, 330, 640, 360, 820); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,' + a + ')'); ctx.fillStyle = vg; ctx.fillRect(0, 0, 1280, 720) };
  `;
  const A = await p.evaluate((h) => {
    eval(h);
    TT = 2.26;
    BO = 3;
    LT = 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    SH = {
      pal: "emer",
      day: "",
      sp: "ELI",
      o: { pax: "zombie" },
      i: 0,
      dur: 5,
      words: [],
    };
    ctx.save();
    ctx.translate(-200, -420);
    ctx.scale(1.7, 1.7);
    cabinBase(SH, 2.26, 1);
    ctx.restore();
    let g = ctx.createLinearGradient(0, 0, 0, 720);
    g.addColorStop(0, "rgba(200,20,30,.62)");
    g.addColorStop(1, "rgba(40,0,30,.72)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1280, 720);
    for (let i = 0; i < 5; i++)
      ch({
        k: i % 2 ? "zpax" : "zcrew",
        x: 520 + i * 170,
        y: 900 + (i % 2) * 40,
        s: 300,
        f: -1,
        ci: i + 3,
        walk: i,
      });
    ctx.fillStyle = "rgba(60,0,20,.45)";
    ctx.fillRect(0, 0, 1280, 720);
    ch({ k: "zpax", x: 1000, y: 1240, s: 660, f: -1, ci: 2 });
    glow(360, 430, 420, "rgba(255,245,220,.75)");
    ch({ k: "eli", x: 350, y: 1290, s: 640, f: -1, scared: 1 });
    vig(0.55);
    big("36,000 FT", 34, 92, 124, "#ffdd1f", -0.03);
    big("NO EXIT", 36, 232, 104, "#ffffff", -0.03);
    return document.getElementById("c").toDataURL("image/png");
  }, helpers);
  fs.writeFileSync(
    "/home/user/freellmapi/thumb_flight_A.png",
    Buffer.from(A.split(",")[1], "base64"),
  );
  const B = await p.evaluate((h) => {
    eval(h);
    TT = 1.4;
    BO = 2;
    LT = 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    SH = { pal: "night", day: "", sp: "ELI", o: {}, i: 0, dur: 5, words: [] };
    sky("night", 1.4);
    ctx.save();
    ctx.translate(0, -40);
    cityDark(1.4, 470, 1);
    ctx.restore();
    gr(0, 430, 1280, 290, "#2a3048", "#0d0f1e");
    po([420, 720, 600, 430, 680, 430, 860, 720], "#3a4160");
    for (let i = 0; i < 6; i++)
      rr(634 - i * 2, 440 + i * 48, 12 + i * 4, 22 + i * 4, 3, "#f2c21a");
    glow(640, 330, 330, "rgba(255,245,200,.9)");
    ctx.fillStyle = "rgba(255,245,200,.18)";
    po([560, 200, 720, 200, 1100, 720, 180, 720], "rgba(255,245,200,.16)");
    plane(650, 320, 0.6, { gear: 1, rot: -0.04 });
    glow(700, 345, 60, "rgba(255,255,230,1)");
    const zs = [
      [130, 1090, 420, 1, "zcrew"],
      [1150, 1090, 420, -1, "zcrew"],
      [340, 1000, 330, 1, "zcrew"],
      [940, 1000, 330, -1, "zcrew"],
      [540, 930, 250, 1, "zpax"],
      [750, 930, 250, -1, "zcrew"],
    ];
    zs.forEach((z, i) =>
      ch({
        k: z[4],
        x: z[0],
        y: z[1],
        s: z[2],
        f: z[3],
        ci: i + 1,
        item: i < 4 ? "wands" : null,
        arm: "up",
      }),
    );
    vig(0.5);
    big("DON'T LAND", 640, 118, 168, "#ffdd1f", -0.02, "center");

    return document.getElementById("c").toDataURL("image/png");
  }, helpers);
  fs.writeFileSync(
    "/home/user/freellmapi/thumb_flight_B.png",
    Buffer.from(B.split(",")[1], "base64"),
  );
  await b.close();
})();
