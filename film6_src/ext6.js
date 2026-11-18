// ===== film 6: ten rules overrides =====
FT = { 1: 'STOP CHECKING YOUR PHONE', 2: 'KNOW TWO WAYS OUT', 3: 'PICK ONE LEADER', 4: 'NO SHOPPING, FIRST HOUR', 5: 'ONE PERSON YOU TRUST', 6: 'WATER BEFORE FOOD', 7: 'QUIET BEATS FAST', 8: 'SLEEP IN SHIFTS', 9: 'WRITE IT ON PAPER', 10: 'KNOW WHEN TO LEAVE' };
board = function (c, x0, y0, w, h) {
  rr(x0 - 14, y0 - 14, w + 28, h + 28, 14, '#8a5a3c', OUT, 6); rr(x0, y0, w, h, 6, '#27403a');
  tx('10 RULES', x0 + w / 2, y0 + 34, 34, '#f4f1e6'); ln([x0 + 30, y0 + 58, x0 + w - 30, y0 + 58], 3, 'rgba(244,241,230,.5)');
  for (var n = 1; n <= 10; n++) {
    var y = y0 + 92 + (n - 1) * 38.4, shown = n <= c, cur = n === c;
    if (cur) { rr(x0 + 14, y - 18, w - 28, 36, 8, 'rgba(255,217,46,.24)'); glow(x0 + w / 2, y, 240, 'rgba(255,217,46,.35)', .5 + .3 * Math.sin(TT * 5)) }
    tx(String(n), x0 + 44, y, 28, cur ? '#ffd92e' : (shown ? '#f4f1e6' : '#7f9a90'));
    tx(shown ? FT[n] : '?????', x0 + 80, y, 22, cur ? '#ffd92e' : (shown ? '#f4f1e6' : '#6f8a80'), 'left');
    if (shown && !cur) ln([x0 + w - 56, y + 1, x0 + w - 47, y + 9, x0 + w - 30, y - 9], 5, '#5ad17a');
  }
};
