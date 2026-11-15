// usage: node render.js sheet            -> contact sheets of every shot
//        node render.js seg <t0> <t1> <out.mp4>
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs"),
  path = require("path");
const dir = __dirname,
  TL = JSON.parse(fs.readFileSync(path.join(dir, "out/timeline.json")));
const FPS = 24;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  const errs = new Set();
  p.on("pageerror", (e) => errs.add(e.message));
  await p.goto("file://" + dir + "/engine.html");
  await p.waitForFunction("window.ready");
  await p.evaluate((tl) => setTL(tl), TL);
  const mode = process.argv[2];
  if (mode === "sheet") {
    fs.mkdirSync(path.join(dir, "out/sheet"), { recursive: true });
    for (const s of TL.shots) {
      const t = s.start + s.dur * 0.55;
      const r = await p.evaluate((t) => {
        try {
          render(t);
          return document.getElementById("c").toDataURL("image/jpeg", 0.8);
        } catch (e) {
          return "ERR " + e.message + " " + (e.stack || "").split("\n")[1];
        }
      }, t);
      if (r.startsWith("ERR")) {
        console.log("shot", s.i, s.bg, r);
        continue;
      }
      fs.writeFileSync(
        path.join(dir, "out/sheet", String(s.i).padStart(3, "0") + ".jpg"),
        Buffer.from(r.split(",")[1], "base64"),
      );
    }
  } else {
    const t0 = +process.argv[3],
      t1 = +process.argv[4],
      out = process.argv[5];
    const ff = spawn(
      "ffmpeg",
      [
        "-y",
        "-loglevel",
        "error",
        "-f",
        "image2pipe",
        "-framerate",
        String(FPS),
        "-c:v",
        "mjpeg",
        "-i",
        "-",
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "-crf",
        "20",
        "-preset",
        "veryfast",
        out,
      ],
      { stdio: ["pipe", "inherit", "inherit"] },
    );
    const n0 = Math.round(t0 * FPS),
      n1 = Math.round(t1 * FPS);
    for (let n = n0; n < n1; n++) {
      const r = await p.evaluate((t) => {
        render(t);
        return document.getElementById("c").toDataURL("image/jpeg", 0.93);
      }, n / FPS);
      if (!ff.stdin.write(Buffer.from(r.split(",")[1], "base64")))
        await new Promise((res) => ff.stdin.once("drain", res));
    }
    ff.stdin.end();
    await new Promise((res) => ff.on("close", res));
  }
  if (errs.size) console.log("PAGE ERRORS", [...errs]);
  await b.close();
})();
