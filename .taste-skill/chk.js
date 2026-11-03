const fs = require('fs');
const src = fs.readFileSync('index.html', 'utf8');
const scripts = [...src.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (scripts.length < 2) { console.log('FAIL: expected 2 inline scripts'); process.exit(1); }
const main = scripts.map(m => m[1]).sort((a, b) => b.length - a.length)[0];
fs.writeFileSync('.taste-skill/inline.js', main, 'utf8');
console.log('script tags:', src.match(/<script/g).length,
  '| logo img ref:', /src="logo\.jpg"/.test(src),
  '| main js chars:', main.length);
