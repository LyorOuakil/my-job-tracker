import { Browser, Page, WaitForOptions } from 'puppeteer';

const goToDefaultOptions: WaitForOptions = {
  waitUntil: 'domcontentloaded',
};

export const getHtmlPageContent = async (page: Page) => {
  return await page.content();
};

export const goTo = async (page: Page, destination: string, options: WaitForOptions = goToDefaultOptions) => {
  return await page.goto(destination, options);
};

export const openPage = async (browser: Browser) => {
  return await browser.newPage();
};

export const launchPage = async (browser: Browser, url: string) => {
  const page = await openPage(browser);
  await goTo(page, url);
  return page;
};
