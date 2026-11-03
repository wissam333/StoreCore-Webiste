const fs = require('fs');
const cut = (s, a, b) => s.slice(s.indexOf(a), s.indexOf(b));
const markerA = 'DESKTOP PLACEHOLDER SCREEN';
const markerB = 'MOBILE PLACEHOLDER SCREEN';
// locate the watermark block in the old file and its minimal bounds
const od = cut(fs.readFileSync('.taste-skill/old.html', 'utf8'), markerA, markerB);
const idx = od.indexOf('[SCREENSHOT:');
console.log('watermark context:', JSON.stringify(od.slice(idx - 400, idx + 120)));
