// node r3.js stills t1,t2,...   |   node r3.js video from to fps out.mp4
// Serves local files through Playwright routing (no web server needed).
const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
};

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));
  p.on("console", (m) => {
    if (m.type() === "error") errs.push(m.text());
  });
  await p.route("http://local.test/**", (route) => {
    const rel = decodeURIComponent(
      new URL(route.request().url()).pathname,
    ).replace(/^\//, "");
    const f = path.join(__dirname, rel);
    if (!f.startsWith(__dirname) || !fs.existsSync(f))
      return route.fulfill({ status: 404, body: "nf" });
    route.fulfill({
      status: 200,
      body: fs.readFileSync(f),
      contentType: MIME[path.extname(f)] || "application/octet-stream",
    });
  });
  await p.goto("http://local.test/scene.html");
  await p.waitForFunction(() => window.ready === true, null, {
    timeout: 90000,
  });
  await p.evaluate(() => document.fonts.ready);
  const mode = process.argv[2];
  if (mode === "stills") {
    for (const t of process.argv[3].split(",")) {
      await p.evaluate((t) => renderAt(+t), t);
      await p.screenshot({
        path: path.join(__dirname, `st_${t}.jpg`),
        type: "jpeg",
        quality: 85,
      });
    }
  } else {
    const [a, z, fps, out] = [
      +process.argv[3],
      +process.argv[4],
      +process.argv[5],
      process.argv[6],
    ];
    const ff = spawn(
      "ffmpeg",
      [
        "-v",
        "error",
        "-y",
        "-f",
        "image2pipe",
        "-framerate",
        String(fps),
        "-i",
        "-",
        "-c:v",
        "libx264",
        "-preset",
        "medium",
        "-crf",
        "17",
        "-pix_fmt",
        "yuv420p",
        out,
      ],
      { stdio: ["pipe", "inherit", "inherit"] },
    );
    const n = Math.round((z - a) * fps);
    const t0 = Date.now();
    for (let i = 0; i < n; i++) {
      const t = a + i / fps;
      await p.evaluate((t) => renderAt(t), t);
      const buf = await p.screenshot({ type: "jpeg", quality: 93 });
      if (!ff.stdin.write(buf))
        await new Promise((r) => ff.stdin.once("drain", r));
      if (i % 30 === 0)
        console.log(i, "/", n, ((Date.now() - t0) / 1000).toFixed(0) + "s");
    }
    ff.stdin.end();
    await new Promise((r) => ff.on("close", r));
  }
  if (errs.length) console.log("ERRS", errs.slice(0, 5));
  await b.close();
})();
