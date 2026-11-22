// ===== film 4: rules night =====
LOOK.dev = {
  skin: "#d9a67c",
  top: "#7b5fd0",
  bot: "#2b3040",
  hair: "#15161c",
  hs: "muffs",
};
LOOK.ortiz = {
  skin: "#e2b895",
  top: "#9a7b5a",
  bot: "#5a6a80",
  hair: "#e8e8e8",
  hs: "bald",
  stache: "#e8e8e8",
  glasses: 1,
  shirt: 1,
};
function nightWin(x, y, w, h, t, mood) {
  rr(x - 10, y - 10, w + 20, h + 20, 8, "#2a2f4a", OUT, 5);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  const M = MOOD[mood === "dusk" ? "dusk" : "night"];
  gr(x, y, w, h, M.sky[0], M.sky[1]);
  ctx.translate(x - 100, y - 250);
  ctx.scale(0.7, 0.7);
  cityDark(t, 560, 0);
  ctx.restore();
  ln([x + w / 2, y, x + w / 2, y + h], 6, OUT);
  rr(x - 10, y - 10, w + 20, h + 20, 8, null, OUT, 5);
}
BG.apt = (sh, t, lt) => {
  const o = sh.o,
    lit = o.lit && !(o.lightsout && lt > 2.2),
    dawn = sh.pal === "dusk";
  gr(0, 0, W, 600, lit ? "#e9dcc4" : "#59638f", lit ? "#cdbd9f" : "#3a426c");
  nightWin(90, 130, 250, 250, t, sh.pal);
  rr(60, 110, 60, 300, 8, "#7b5fd0", OUT, 4);
  rr(310, 110, 60, 300, 8, "#7b5fd0", OUT, 4);
  rr(430, 150, 110, 140, 6, "#f2c21a", OUT, 4);
  tx("GG", 485, 220, 44, "#161827");
  rr(1090, 190, 150, 420, 6, "#8a5a3c", OUT, 5);
  ci(1112, 410, 8, "#f2c21a", OUT, 3);
  rr(1020, 520, 80, 90, 6, "#5d6676", OUT, 4);
  for (let i = 0; i < 3; i++)
    el(1060, 545 + i * 26, 28, 9, ["#e04b3a", "#f4f6f8", "#3f9f5f"][i], OUT, 3);
  gr(0, 600, W, 120, lit ? "#a8825c" : "#3d3a5c", lit ? "#7a5a3c" : "#262440");
  rr(400, 470, 330, 130, 26, "#1fa193", OUT, 5);
  rr(380, 500, 50, 100, 16, "#17897c", OUT, 5);
  rr(700, 500, 50, 100, 16, "#17897c", OUT, 5);
  // lamp
  ln([370, 600, 370, 330], 7, OUT);
  po(
    [330, 330, 410, 330, 395, 270, 345, 270],
    lit ? "#ffe9a8" : "#8a8fa8",
    OUT,
    4,
  );
  // desk + monitor
  const mon = o.monitor && !(o.unplug && lt > 1.6);
  rr(800, 500, 240, 16, 6, "#c9a272", OUT, 4);
  ln([816, 516, 816, 600], 8, OUT);
  ln([1024, 516, 1024, 600], 8, OUT);
  rr(850, 380, 160, 104, 8, "#161827", OUT, 5);
  rr(860, 390, 140, 84, 4, mon ? "#4ab8ff" : "#1c2036");
  ln([930, 484, 930, 500], 8, OUT);
  if (mon) {
    for (let i = 0; i < 4; i++)
      rr(
        868 + i * 34,
        400 + ((i * 17 + Math.floor(t * 6)) % 40),
        22,
        14,
        3,
        "#fff",
      );
  }
  if (o.devsit) {
    const tk = o.devsit === 2;
    SH._mid = () => {
      rr(880, 520, 110, 90, 14, "#23252f", OUT, 5);
      ch({
        k: "dev",
        x: 930,
        y: 600,
        s: 150,
        f: -1,
        sit: 1,
        talk: tk && LT > 0.2 && LT < sh.dur - 0.6,
        arm: null,
      });
    };
  }
  if (o.floor) {
    rr(520, 640, 110, 12, 4, "#c9a272", OUT, 3);
  }
  SH._lite = () => {
    if (lit) {
      glow(370, 300, 330, "rgba(255,230,160,.5)");
    }
    if (mon) {
      glow(930, 430, 300, "rgba(80,180,255,.55)");
    }
  };
  return { gy: 686, s: 178 };
};
BG.hall = (sh, t, lt) => {
  const o = sh.o,
    lit = o.lit;
  gr(0, 0, W, 620, lit ? "#e9dcc4" : "#59638f", lit ? "#cdbd9f" : "#3a426c");
  gr(0, 620, W, 100, lit ? "#a8825c" : "#3d3a5c", lit ? "#7a5a3c" : "#262440");
  for (let i = 0; i < 3; i++) {
    ci(120 + i * 70, 200, 10, "#5d6676", OUT, 3);
  }
  rr(86, 205, 60, 150, 14, "#e04b3a", OUT, 4);
  const bang = o.bang || o.broken,
    sk = bang
      ? Math.sin(t * 38) * 5
      : o.feet && (sh.o.sfx || []).includes("knock") && lt < 1.6
        ? Math.sin(t * 40) * 3
        : 0;
  rr(520, 80, 400, 560, 8, "#3a2a20", OUT, 6);
  if (o.broken) {
    rr(540, 100, 360, 540, 4, "#0c0d16");
    for (let i = 0; i < 5; i++) {
      const y = 200 + i * 80;
      limb(
        [
          560,
          y,
          640 + Math.sin(t * 6 + i) * 20,
          y + Math.cos(t * 5 + i) * 16,
          700 + Math.sin(t * 7 + i) * 26,
          y + 10,
        ],
        22,
        "#8fb08a",
        4,
      );
      ci(700 + Math.sin(t * 7 + i) * 26, y + 10, 16, "#8fb08a", OUT, 4);
    }
  }
  ctx.save();
  ctx.translate(sk + (o.broken ? 110 : 0), 0);
  if (o.broken) {
    ctx.translate(900, 0);
    ctx.scale(0.55, 1);
    ctx.translate(-900, 0);
  }
  rr(540, 100, 360, 540, 4, "#8a5a3c", OUT, 5);
  rr(570, 130, 300, 200, 6, "#7a4c30", OUT, 3);
  rr(570, 370, 300, 240, 6, "#7a4c30", OUT, 3);
  ci(720, 300, 12, "#161827", OUT, 4);
  ci(858, 380, 14, "#f2c21a", OUT, 4);
  rr(840, 330, 40, 22, 5, "#c9ced6", OUT, 3);
  rr(840, 420, 40, 22, 5, "#c9ced6", OUT, 3);
  ctx.restore();
  if (!o.broken) {
    ln(
      [900, 250, 930, 262 + Math.sin(t * 30) * (bang ? 6 : 0), 960, 250],
      6,
      "#c9ced6",
    );
    ci(962, 250, 9, "#c9ced6", OUT, 3);
  } else ln([960, 250, 950, 330], 6, "#c9ced6");
  rr(960, 500, 200, 140, 8, "#5d6676", OUT, 5);
  for (let i = 0; i < 4; i++)
    el(
      1000 + (i % 2) * 110,
      540 + Math.floor(i / 2) * 60,
      40,
      14,
      ["#e04b3a", "#f4f6f8", "#3f9f5f", "#f2c21a"][i],
      OUT,
      4,
    );
  rr(540, 640, 360, 10, 0, "#ffe9a8");
  for (let i = 0; i < (o.feet || 0); i++) {
    const fx = 570 + ((i * 97) % 300) + Math.sin(t * 2 + i) * 8;
    rr(fx, 638, 34, 14, 0, "#161827");
  }
  if (bang)
    for (let i = 0; i < 6; i++) {
      const u = (t * 2 + i * 0.17) % 1;
      ci(560 + i * 62, 110 + u * 90, 5 * (1 - u), "rgba(230,220,200,.8)");
    }
  SH._lite = () => {
    glow(720, 660, 260, "rgba(255,230,160,.35)");
  };
  return { gy: 686, s: 178 };
};
BG.peep = (sh, t, lt) => {
  const o = sh.o;
  ctx.fillStyle = "#05060c";
  ctx.fillRect(-60, -60, W + 120, H + 120);
  ctx.save();
  ctx.beginPath();
  ctx.arc(640, 350, 330, 0, 7);
  ctx.clip();
  const fl = Math.sin(t * 23) > 0.92 ? 0.6 : 1;
  gr(310, 20, 660, 400, "#d8cdb6", "#b9ad96");
  gr(310, 420, 660, 260, "#7a6a58", "#4a4038");
  po([310, 20, 480, 150, 480, 420, 310, 500], "#c4b8a0");
  po([970, 20, 800, 150, 800, 420, 970, 500], "#c4b8a0");
  rr(560, 160, 160, 262, 4, "#8a5a3c", OUT, 4);
  tx("4C", 640, 200, 30, "#f2c21a");
  rr(600, 40, 80, 14, 6, "#ffe9a8");
  glow(640, 60, 260, `rgba(255,235,170,${0.5 * fl})`);
  const z = o.who[0] === "z",
    u = o.leave ? ease(lt / 2.6) : 0,
    s = o.close ? 560 : lerp(330, 190, u),
    y = o.close ? 1010 : lerp(700, 470, u);
  ch({
    k: o.who,
    x:
      640 +
      (z ? Math.sin(t * 1.3) * 6 : 0) +
      (o.leave ? Math.sin(lt * 7) * 8 * u : 0),
    y,
    s,
    f: 1,
    talk: o.talkp && !o.leave ? 1 : o.talkp && lt < 2,
    walk: o.leave ? lt * 6 : null,
  });
  if (z && o.close) {
    ctx.beginPath();
    ctx.arc(
      640 + 0.09 * s,
      y - 1.3 * s + 0.14 * s,
      0.16 * s,
      0.1 * PI,
      0.9 * PI,
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = OUT;
    ctx.stroke();
  }
  const vg = ctx.createRadialGradient(640, 350, 150, 640, 350, 335);
  vg.addColorStop(0, "rgba(0,0,0,0)");
  vg.addColorStop(0.8, "rgba(0,0,0,.45)");
  vg.addColorStop(1, "rgba(0,0,0,.95)");
  ctx.fillStyle = vg;
  ctx.fillRect(300, 10, 680, 680);
  ctx.restore();
  ctx.beginPath();
  ctx.arc(640, 350, 330, 0, 7);
  ctx.lineWidth = 26;
  ctx.strokeStyle = "#23252f";
  ctx.stroke();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#5d6676";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(640, 350, 300, PI * 1.15, PI * 1.4);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgba(255,255,255,.18)";
  ctx.stroke();
  return { gy: 2000, s: 100 };
};
BG.winst = (sh, t, lt) => {
  const o = sh.o,
    dawn = sh.pal === "dusk",
    n = o.n || 0;
  gr(0, 0, W, 330, dawn ? "#f08a4b" : "#070b22", dawn ? "#ffd9a0" : "#1a2552");
  srand(404);
  let x = -10;
  while (x < W) {
    const w = 150 + rnd() * 110,
      h = 170 + rnd() * 120;
    rr(x, 330 - h, w, h, 0, dawn ? "#7a5f78" : "#151a36", OUT, 4);
    for (let yy = 330 - h + 18; yy < 300; yy += 44)
      for (let xx = x + 16; xx < x + w - 30; xx += 46) {
        const on = rnd() < (o.walkers ? 0.35 : 0.07);
        rr(xx, yy, 26, 28, 3, on ? "#f2d36a" : dawn ? "#5a4560" : "#0b0e22");
      }
    rr(
      x + w / 2 - 18,
      276,
      36,
      54,
      3,
      o.walkers ? "#f2d36a" : "#0b0e22",
      OUT,
      3,
    );
    x += w;
  }
  gr(
    0,
    330,
    W,
    390,
    dawn ? "#8d7f8c" : "#2a3050",
    dawn ? "#6a5f70" : "#161a30",
  );
  for (let i = 0; i < 8; i++)
    rr(i * 180 + 30, 520, 100, 10, 4, dawn ? "#e8d8b0" : "#56608a");
  for (const lx of [260, 1020]) {
    ln([lx, 420, lx, 250], 7, OUT);
    rr(lx - 30, 238, 60, 16, 6, "#f2d36a", OUT, 3);
    glow(lx, 300, 220, "rgba(255,225,150,.35)");
  }
  if (o.beam) {
    po([560, 0, 720, 0, 900, 720, 380, 720], "rgba(90,190,255,.14)");
  }
  const list = [];
  for (let i = 0; i < n; i++) {
    const yy = 372 + hash(i * 7 + 1) * 330,
      s2 = 46 + ((yy - 372) / 330) * 62;
    let xx = 30 + hash(i * 13 + 5) * 1220;
    if (o.walkers === 2) xx = lerp(xx, 640 + (hash(i) - 0.5) * 500, 0.25);
    list.push({
      k: i % 4 === 0 ? "zcrew" : "zpax",
      x: xx,
      y: yy,
      s: s2,
      f: o.turn ? (xx < 640 ? 1 : -1) : hash(i * 3) > 0.5 ? 1 : -1,
      ci: i,
      still: 1,
      sit: o.sitall && lt > 0.8 + hash(i) * 0.5,
      nz: 1,
    });
  }
  if (o.walkers)
    for (let i = 0; i < 7; i++) {
      const sx = i % 2 ? 60 + i * 20 : 1220 - i * 20,
        tx2 = 640 + (i - 3) * 60,
        u = clamp(lt / (sh.dur * 0.8), 0, 1),
        xx = lerp(sx, tx2, o.walkers === 2 ? 0.6 + u * 0.4 : u * 0.6),
        yy = 420 + i * 36;
      if (!(o.walkers === 2 && u > 0.55))
        list.push({
          k: "pax",
          x: xx,
          y: yy,
          s: 60 + i * 7,
          f: sx < 640 ? 1 : -1,
          ci: i + 2,
          walk: lt * 7 + i,
          item: "phone",
          scared: o.walkers === 2,
        });
    }
  if (o.one)
    list.push({ k: "zortiz", x: 640, y: 660, s: 150, f: 1, ci: 1, arm: "up" });
  list.sort((a, b) => a.y - b.y);
  for (const p of list) {
    if (p.nz) {
      const sv = TT;
      ch(p);
    } else ch(p);
    if (p.item === "phone")
      glow(
        p.x + p.f * p.s * 0.3,
        p.y - p.s * 0.7,
        p.s * 0.5,
        "rgba(160,220,255,.8)",
      );
  }
  if (o.one) {
    glow(640, 470, 190, "rgba(255,60,50,.4)");
  }
  if (!o.roofview)
    SH._post = () => {
      ctx.fillStyle = "#1b1f38";
      ctx.beginPath();
      ctx.rect(-60, -60, W + 120, H + 120);
      ctx.rect(170, 60, 940, 540);
      ctx.fill("evenodd");
      ctx.lineWidth = 16;
      ctx.strokeStyle = "#3a4160";
      ctx.strokeRect(170, 60, 940, 540);
      ctx.lineWidth = 5;
      ctx.strokeStyle = OUT;
      ctx.strokeRect(170, 60, 940, 540);
      ln([640, 60, 640, 600], 12, "#3a4160");
      const cu = o.reveal ? ease(lt / 1.6) : 1;
      rr(170, 60, 470 * (1 - cu) + 40, 540, 0, "#7b5fd0", OUT, 4);
      rr(
        1110 - 470 * (1 - cu) - 40,
        60,
        470 * (1 - cu) + 40,
        540,
        0,
        "#7b5fd0",
        OUT,
        4,
      );
      ci(o.two ? 520 : 640, 720, 120, "#12142a");
      ctx.beginPath();
      ctx.arc(o.two ? 520 : 640, 760, 150, PI * 1.1, PI * 1.9);
      ctx.lineWidth = 44;
      ctx.strokeStyle = "#3a2412";
      ctx.stroke();
      if (o.two) ci(790, 730, 112, "#12142a");
    };
  else
    SH._post = () => {
      rr(-60, 640, W + 120, 120, 0, "#23283e", OUT, 5);
    };
  return { gy: 2000, s: 100 };
};
BG.alert = (sh, t, lt) => {
  const o = sh.o,
    fake = o.fake;
  gr(0, 0, W, H, "#2a0a14", "#0b0610");
  glow(640, 360, 560, `rgba(255,40,40,${0.35 + 0.2 * Math.sin(t * 8)})`);
  const sk = !o.noshake && lt < 0.9 ? Math.sin(t * 70) * 9 * (1 - lt / 0.9) : 0,
    zk = o.zoomsig ? ease(lt / 3) : 0;
  ctx.save();
  ctx.translate(640 + sk, 370 - zk * 330);
  ctx.scale(1 + zk * 1.1, 1 + zk * 1.1);
  ctx.rotate(-0.03);
  rr(-330, -330, 660, 680, 44, "#161827", OUT, 8);
  rr(-300, -290, 600, 600, 18, "#f4f6f8");
  rr(-300, -290, 600, 96, 18, "#e02b1c");
  rr(-300, -230, 600, 36, 0, "#e02b1c");
  po([-256, -216, -226, -268, -196, -216], "#ffe21f", OUT, 4);
  tx("!", -226, -234, 30, "#161827");
  tx("EMERGENCY ALERT", -170, -242, 40, "#fff", "left");
  const ls = o.lines || [];
  ls.forEach((s, i) => {
    const big = i === 0,
      k = clamp((lt - 0.35 - i * 0.28) / 0.2, 0, 1);
    ctx.globalAlpha = k;
    tx(
      s,
      0,
      -120 + i * (big ? 0 : 0) + [0, 96, 176][i],
      big ? Math.min(84, 9200 / (s.length * 10)) : Math.min(44, 12400 / (s.length * 10)),
      big ? "#e02b1c" : "#161827",
    );
    ctx.globalAlpha = 1;
  });
  if (!fake) {
    const on = o.zoomsig ? 1 : clamp((lt - 1.3) / 0.3, 0, 1);
    ctx.globalAlpha = on;
    tx("— WNTE", 250, 262, 34, o.zoomsig ? "#e02b1c" : "#5d6676", "right");
    if (o.zoomsig) {
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#e02b1c";
      ctx.beginPath();
      ctx.ellipse(170, 262, 110, 34, 0, 0, 7);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  ci(0, 330, 4, "#161827");
  ctx.restore();
  return { gy: 2000, s: 100 };
};
BG.box = (sh, t, lt) => {
  const o = sh.o;
  gr(0, 0, W, H, "#3d3a5c", "#1c1a30");
  glow(640, 360, 520, "rgba(255,230,170,.3)");
  ctx.save();
  ctx.translate(640, 372);
  ctx.rotate(-0.05);
  rr(-430, -300, 860, 600, 14, "#c9a272", OUT, 8);
  rr(-430, -300, 860, 46, 8, "#b08a5a", OUT, 5);
  srand(71);
  for (let i = 0; i < 5; i++)
    el(
      -300 + rnd() * 600,
      -180 + rnd() * 380,
      30 + rnd() * 40,
      20 + rnd() * 30,
      "rgba(120,80,30,.22)",
    );
  tx("PIZZA", 300, -206, 40, "rgba(140,60,30,.5)");
  const ls = o.lines || [],
    n = ls.length;
  ls.forEach((s, i) => {
    const k = clamp(
      (lt - 0.4 - i * (Math.min(sh.dur - 1.6, 4) / n)) / 0.45,
      0,
      1,
    );
    if (k <= 0) return;
    ctx.save();
    const y = -150 + i * (n > 2 ? 110 : 160) + (n === 1 ? 150 : 0),
      odd = i % 2;
    ctx.translate(odd ? 60 : -40, y);
    ctx.rotate(odd ? 0.03 : -0.02);
    const sz = n === 1 ? 150 : s.length > 18 ? 58 : 78;
    ctx.font = `900 italic ${sz}px Inter`;
    const w = ctx.measureText(s).width;
    ctx.beginPath();
    ctx.rect(-w / 2 - 10, -sz, (w + 20) * k, sz * 2);
    ctx.clip();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = odd ? "#7a2630" : "#161827";
    ctx.fillText(s, 0, 0);
    ctx.restore();
  });
  ctx.restore();
  return { gy: 2000, s: 100 };
};
BG.roof = (sh, t, lt) => {
  const o = sh.o,
    dawn = sh.pal === "dusk";
  sky(dawn ? "dusk" : "night", t);
  ctx.save();
  ctx.translate(0, -20);
  cityDark(t, 470, 0);
  ctx.restore();
  if (dawn) {
    ctx.fillStyle = "rgba(255,170,90,.18)";
    ctx.fillRect(0, 0, W, 470);
  }
  rr(-20, 440, W + 40, 50, 0, dawn ? "#8d7f8c" : "#3a4160", OUT, 5);
  gr(
    0,
    490,
    W,
    230,
    dawn ? "#a8989c" : "#4a5278",
    dawn ? "#7a6c74" : "#2a3050",
  );
  const sk = o.bang ? Math.sin(t * 36) * 5 : 0;
  rr(70, 250, 300, 380, 8, dawn ? "#9a8f98" : "#5d6690", OUT, 6);
  po(
    [56, 250, 384, 250, 364, 214, 76, 214],
    dawn ? "#7a6c74" : "#434b6e",
    OUT,
    5,
  );
  rr(150 + sk, 310, 150, 320, 6, "#3a2a20", OUT, 5);
  ci(280 + sk, 470, 9, "#f2c21a", OUT, 3);
  rr(900, 520, 220, 110, 10, "#8e97a6", OUT, 5);
  for (let i = 0; i < 5; i++)
    ln([912, 540 + i * 18, 1108, 540 + i * 18], 3, OUT);
  ln([1180, 630, 1180, 380], 6, OUT);
  ln([1150, 400, 1210, 400], 5, OUT);
  if (o.sitdoor)
    SH._post = () => {
      rr(540, 600, 120, 14, 4, "#c9a272", OUT, 4);
    };
  return { gy: o.sitdoor ? 640 : 686, s: 178 };
};
BG.fire = (sh, t, lt) => {
  gr(0, 0, W, H, "#3a2f4a", "#201a30");
  for (let y = 0; y < 720; y += 36)
    for (let x = ((y / 36) % 2) * 40 - 40; x < W; x += 80)
      rr(x, y, 76, 32, 2, "rgba(0,0,0,.14)");
  for (let i = 0; i < 3; i++) {
    const y = 600 - i * 230;
    rr(260, y - 150, 170, 150, 4, i === 0 ? "#ffe9a8" : "#0b0e22", OUT, 5);
    rr(880, y - 150, 170, 150, 4, "#0b0e22", OUT, 5);
    rr(200, y, 880, 16, 4, "#161827");
    for (let k = 0; k < 12; k++)
      ln([210 + k * 78, y, 210 + k * 78, y - 70], 5, "#161827");
    ln([200, y - 70, 1080, y - 70], 6, "#161827");
    if (i < 2) {
      ln([460, y, 760, y - 230], 9, "#161827");
      ln([500, y, 800, y - 230], 9, "#161827");
    }
  }
  for (let i = 0; i < 4; i++) {
    limb(
      [
        300 + i * 30,
        470 + Math.sin(t * 5 + i) * 10,
        350 + i * 30,
        430 + Math.cos(t * 6 + i) * 14,
      ],
      18,
      "#8fb08a",
      4,
    );
  }
  const pos = (u) => {
    u = clamp(u, 0, 1) * 2;
    const seg = Math.min(1, Math.floor(u)),
      f2 = u - seg;
    const y0 = 600 - seg * 230;
    return [lerp(480, 780, f2), y0 - f2 * 230];
  };
  [
    ["dev", 0.14],
    ["eli", 0],
  ].forEach(([k, d]) => {
    const u = lt / (sh.dur * 0.9) - d,
      p = pos(u);
    ch({ k, x: p[0], y: p[1], s: 110, f: 1, walk: lt * 9, scared: 1 });
  });
  return { gy: 2000, s: 100 };
};
// tag with rule pips
tag = function (sh, t) {
  if (!sh.day) return;
  const first = TL.shots.find((s) => s.day === sh.day),
    k = clamp((t - first.start) / 0.3, 0, 1);
  const m = sh.day.match(/RULE (\d)/);
  ctx.font = "900 26px Inter";
  const w = ctx.measureText(sh.day).width + 56 + (m ? 150 : 0);
  ctx.save();
  ctx.translate(lerp(-w, 34, backOut(k)), 30);
  rr(0, 0, w, 48, 24, "rgba(11,12,20,.85)");
  ci(24, 24, 7, Math.sin(t * 5) > 0 ? "#ff5a4a" : "#7a2222");
  tx(sh.day, 40, 25, 26, "#fff", "left");
  if (m)
    for (let i = 0; i < 6; i++)
      ci(w - 140 + i * 22, 24, 7, i < +m[1] ? "#ffd92e" : "#3a4160");
  ctx.restore();
};
