const fs = require('fs');
const cut = (s, a, b) => {
  const i = s.indexOf(a);
  const j = s.indexOf(b, i + a.length);
  if (i < 0 || j < 0) { console.log('MISSING MARKER', a, 'or', b); process.exit(1); }
  return s.slice(i, j);
};
const strip = (s) => s.replace(/\/\*[^]*?\*\//g, '').replace(/\s+/g, '');
const nw = fs.readFileSync('index.html', 'utf8');
const od = fs.readFileSync('.taste-skill/old.html', 'utf8');
for (const [a, b, name] of [
  ['THREE.JS — FIXED 3D SCENE', '   MARQUEE', 'threejs'],
  ['DESKTOP PLACEHOLDER SCREEN', 'MOBILE PLACEHOLDER SCREEN', 'drawDesktop'],
  ['MOBILE PLACEHOLDER SCREEN', 'Expose updater', 'drawMobile'],
]) {
  const same = strip(cut(nw, a, b)) === strip(cut(od, a, b));
  console.log(name, same ? 'IDENTICAL (stripped)' : 'DIFFERS');
}
