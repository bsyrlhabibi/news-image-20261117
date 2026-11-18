// Renders build/page.html to ../entry.png at exactly 1024x1024.
// Puppeteer is borrowed from the best-game tooling folder on this machine.
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire('/home/hatch/workspace/makefun/best-game/tools/package.json');
const puppeteer = require('puppeteer');

const here = dirname(fileURLToPath(import.meta.url));
const pagePath = join(here, 'page.html');
const outPath = join(here, '..', 'entry.png');

const browser = await puppeteer.launch({ args: ['--no-sandbox', '--force-color-profile=srgb'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto('file://' + pagePath, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: outPath, type: 'png' });
  console.log('wrote', outPath);
} finally {
  await browser.close();
}
