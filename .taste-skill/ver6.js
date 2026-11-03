const fs = require('fs');
const cut = (s, a, b) => s.slice(s.indexOf(a) + a.length, s.indexOf(b, s.indexOf(a) + a.length));
const strip = (s) => s.replace(/\/\*[^]*?\*\//g, '').replace(/\s+/g, '');
const markerA = 'DESKTOP PLACEHOLDER SCREEN';
const markerB = 'MOBILE PLACEHOLDER SCREEN';
const a = strip(cut(fs.readFileSync('.taste-skill/old.html', 'utf8'), markerA, markerB));
const b = strip(cut(fs.readFileSync('index.html', 'utf8'), markerA, markerB));
let diffs = 0, i = 0;
const isBothDigits = (c1, c2) => /[\w\u0640-\u06FF"ً'؟]/.test(c1) && /[\w\u0640-\u06FF"'؟]/.test(c2);
while (i < Math.min(a.length, b.length) && diffs < 12) {
  if (a[i] !== b[i]) {
    // skip over the differing token pair, count as one diff
    let j = i, k = i;
    while (j < a.length && (a[j] !== b[i] || a[i] !== b[j])) j++, k++;
    console.log('DIFF', diffs, ':', JSON.stringify(a.slice(i - 25, i + 25)), '<>', JSON.stringify(b.slice(i - 25, i + 25)));
    // naive resync: find common continuation
    const n = a.indexOf(b.slice(i, i + 20), i + 20);
    if (n === -1) { console.log('no resync found'); break; }
    i = n; diffs++;
  } else i++;
}
console.log('total diff hunks (before resync limit):', diffs > 0 ? diffs : 0);
