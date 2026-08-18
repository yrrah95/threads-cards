// 用系統 Chrome 把 HTML 截成 1080x1350 PNG
import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
import { resolve } from 'path';
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(resolve(process.argv[2])).href);
await page.waitForTimeout(1500); // 等 Google Fonts
await page.screenshot({ path: process.argv[2].replace('.html', '.png') });
await browser.close();
console.log('done:', process.argv[2].replace('.html', '.png'));
