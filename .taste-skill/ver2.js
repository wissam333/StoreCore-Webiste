const fs = require('fs');
const nw = fs.readFileSync('index.html', 'utf8');
const od = fs.readFileSync('.taste-skill/old.html', 'utf8');
for (const [s, name] of [[nw, 'new'], [od, 'old']]) {
  console.log(name, {
    THREEJS: s.indexOf('THREE.JS'),
    MARQUEE_upper: s.indexOf('MARQUEE'),
    MARQUEE_nl: s.indexOf('MARQUEE\n'),
   Expose: s.indexOf('Expose updater'),
    DESKTOP: s.indexOf('DESKTOP PLACEHOLDER SCREEN'),
    MOBILE: s.indexOf('MOBILE PLACEHOLDER SCREEN'),
  });
}
