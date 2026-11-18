// ===== film 6: five rules overrides =====
FT = {
  1: "STOP CHECKING YOUR PHONE",
  2: "KNOW TWO WAYS OUT",
  3: "PICK ONE LEADER",
  4: "NO SHOPPING, FIRST HOUR",
  5: "ONE PERSON YOU TRUST",
};
// countdown board with 5 rows instead of 10
board = function (c, x0, y0, w, h) {
  rr(x0 - 14, y0 - 14, w + 28, h + 28, 14, "#8a5a3c", OUT, 6);
  rr(x0, y0, w, h, 6, "#27403a");
  tx("5 RULES", x0 + w / 2, y0 + 40, 36, "#f4f1e6");
  ln([x0 + 30, y0 + 66, x0 + w - 30, y0 + 66], 3, "rgba(244,241,230,.5)");
  for (var n = 5; n >= 1; n--) {
    var y = y0 + 128 + (5 - n) * 78,
      shown = n >= c,
      cur = n === c;
    if (cur) {
      rr(x0 + 14, y - 30, w - 28, 60, 10, "rgba(255,217,46,.24)");
      glow(
        x0 + w / 2,
        y,
        240,
        "rgba(255,217,46,.35)",
        0.5 + 0.3 * Math.sin(TT * 5),
      );
    }
    tx(
      String(n),
      x0 + 44,
      y,
      40,
      cur ? "#ffd92e" : shown ? "#f4f1e6" : "#7f9a90",
    );
    tx(
      shown ? FT[n] : "?????",
      x0 + 86,
      y,
      24,
      cur ? "#ffd92e" : shown ? "#f4f1e6" : "#6f8a80",
      "left",
    );
    if (shown && !cur)
      ln(
        [x0 + w - 56, y + 1, x0 + w - 47, y + 10, x0 + w - 30, y - 10],
        6,
        "#5ad17a",
      );
  }
};
