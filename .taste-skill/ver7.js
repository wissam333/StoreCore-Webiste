const fs = require('fs');
const cut = (s, a, b) => s.slice(s.indeundefinedOf(a) + a.length, s.indexOf(b, s.indexOf(a) + a.length));
const strip = (s) => s.replace(/\/\*[^]*?\*\//g, '').replace(/\s+/g, '');
const markerA = 'DESKTOP PLACEHOLDER SCREEN';
const markerB = 'MOBILE PLACEHOLDER SCREEN';
const removeBlock = (s, from, to) => {
  if (!s.includes(from)) return s;
  const i = s.indexOf(from);
  const j = s.indexOf(to, i);
  return s.slice(0, i) + s.slice(j);
};
let od = removeBlock(cut(fs.readFileSync('.taste-skill/old.html', 'utf8'), markerA, markerB),
  'g.fillStyle = `rgba(${ac.r},${ac.g},${ac.b},0.06)`;', '        return c;');
let nd = removeBlock(cut(fs.readFileSync('index.html', 'utf8'), markerA, markerB),
  'g.fillStyle = `rgba(${ac.r},${ac.g},${ac.b},0.06)`;', '        return c;');
let a = strip(od)
  .replace('g.font="bold15pxOutfit";g.textAlign="center";g.fillText("OS",brandMarkX+17,34);', '')
  .replace('g.fillText("StoreOS",brandTxtX,36);', '');
let b = strip(nd)
  .replace('g.font=isAr?"bold17pxCairo,sans-serif":"bold15pxOutfit";g.textAlign="center";g.fillText(isAr?"م":"M",brandMarkX+17,34);', '')
  .replace('g.fillText(isAr?"محلي":"MyStore",brandTxtX,36);', '');

console.log(a === b ? 'drawDesktop IDENTICAL modulo the two brand renames' : 'UNEXPECTED DIFF');
if (a !== b) { let k = 0; while (a[k] === b[k]) k++; console.log(JSON.stringify(a.slice(k - 60, k + 60)), '<>', JSON.stringify(b.slice(k - 60, k + 60))); }
