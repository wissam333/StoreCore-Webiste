const fs = require('fs');
const lib = fs.readFileSync('D:/2026/crypto/node_modules/three/build/three.min.js', 'utf8');
const enders = (lib.match(/<\/script/gi) || []).length;
if (enders) { console.log('ABORT: lib contains </script> tokens:', enders); process.exit(1); }

let src = fs.readFileSync('index.html', 'utf8');
const tag = '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>';
if (!src.includes(tag)) { console.log('ABORT: CDN tag not found'); process.exit(1); }

src = src.replace(tag, '<script>\n' + lib + '\n</script>');
fs.writeFileSync('index.html', src, 'utf8');
console.log('inlined', lib.length, 'chars; index.html now', src.length, 'chars');
