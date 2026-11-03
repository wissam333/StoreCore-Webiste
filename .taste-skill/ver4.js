const fs = require('fs');
const cut = (s, a, b) => s.slice(s.indexOf(a), s.indexOf(b));
const strip = (s) => s.replace(/\/\*[^]*?\*\//g, '').replace(/\s+/g, '');
const markerA = 'DESKTOP PLACEHOLDER SCREEN';
const markerB = 'MOBILE PLACEHOLDER SCREEN';
const remove = (s, from, to) => {
  const i = s.indexOf(from);
  const j = s.indexOf(to, i);
  if (i < 0 || j < 0) throw new Error('wm marker missing');
  return s.slice(0, i) + s.slice(j);
};
const odRaw = cut(fs.readFileSync('.taste-skill/old.html', 'utf8'), markerA, markerB);
const od = remove(odRaw, 'g.fillStyle = `rgba(${ac.r},${ac.g},${ac.b},0.06)`;', '        return c;');
const nwRaw = cut(fs.readFileSync('index.html', 'utf8'), markerA, markerB);
const nw = remove(nwRaw, '<?', '<!'); // no watermark block exists; make remove a no-op guard is wrong — handle below
