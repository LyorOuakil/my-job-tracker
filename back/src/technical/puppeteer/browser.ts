import puppeteer, { Browser, PuppeteerLaunchOptions } from 'puppeteer';

export class BrowserInstance {
  constructor() {
    return;
  }

  async getBrowser(browserOptions: PuppeteerLaunchOptions = {}) {
    return await puppeteer.launch(browserOptions);
  }

  async closeBrowser(browser: Browser) {
    await browser?.close();
  }
}
