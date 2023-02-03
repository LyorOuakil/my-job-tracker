import { Browser, executablePath, PuppeteerLaunchOptions } from 'puppeteer';
import puppeteer from 'puppeteer-extra';

import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

export class BrowserInstance {
  constructor() {
    puppeteer.use(AdblockerPlugin()).use(StealthPlugin());
    return;
  }

  async getBrowser(browserOptions: PuppeteerLaunchOptions = {}) {
    return await puppeteer.launch({
      ...browserOptions,
      executablePath: executablePath(),
    });
  }

  async closeBrowser(browser: Browser) {
    await browser?.close();
  }
}
