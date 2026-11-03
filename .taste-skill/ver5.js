const fs = require('fs');
const cut = (s, a, b) => s.slice(s.indexOf(a), s.indexOf(b));
const strip = (s) => s.replace(/\/\*[^]*?\*\//g, '').replace(/\s+/g, '');
const markerA = 'DESKTOP PLACEHOLDER SCREEN';
const markerB = 'MOBILE PLACEHOLDER SCREEN';
const removeBlock = (s, from, to) => {
  if (!s.includes(from)) return s; // block absent
  const i = s.indexOf(from);
  const j = s.indexOf(to, i);
  return s.slice(0, i) + s.slice(j);
};
const od = removeBlock(
  cut(fs.readFileSync('.taste-skill/old.html', 'utf8'), markerA, markerB),
  'g.fillStyle = `rgba(${ac.r},${ac.g},${ac.b},0.06)`;',
  '        return c;',
);
const nw = removeBlock(
  cut(fs.readFileSync('index.html', 'utf8'), markerA, markerB),
  'g.fillStyle = `rgba(${ac.r},${ac.g},${ac.b},0.06)`;',
  '        return c;',
);
const a = strip(od), b = strip(nw);
if (a === b) { console.log('drawDesktop IDENTICAL modulo watermark + comments'); }
else {
  // report first difference
  let k = 0; while (a[k] === b[k]) k++;
  console.log('FIRST DIFF at', k, JSON.stringify(a.slice(k - 60, k + 60)), '|||', JSON.stringify(b.slice(k - 60, k + 60)));
}
