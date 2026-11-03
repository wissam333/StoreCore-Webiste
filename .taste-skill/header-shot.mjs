import { Browser, sleep } from
  'file:///C:/Users/Lenovo/.config/opencode/skills/taste-skill/scripts/lib/cdp.mjs';

const browser = await Browser.launch();
// deviceScaleFactor is fixed at 1 in setViewport unless supported; capture at 2x via clip scale
const shots = [
  { name: 'header-desktop', width: 1440, height: 300 },
  { name: 'header-mobile', width: 390, height: 300 },
];
for (const { name, width, height } of shots) {
  const page = await browser.newPage({ width, height });
  await page.goto('file:///D:/2026/store-website/index.html');
  await sleep(3000); // three.js + textures + particles settle
  await page.screenshot({
    path: `.taste-skill/inspect/${name}.png`,
    format: 'png',
    clip: { x: 0, y: 0, width, height: 100, scale: 2 },
  });
  console.log('saved', name);
  await page.close();
}
await browser.close();
