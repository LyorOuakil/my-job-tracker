import { Browser, Page, WaitForOptions } from 'puppeteer';
import { WebsiteConfig } from '../../business/crawl/types';

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

export const buildUrl = (config: WebsiteConfig, pageNumber: number) => {
  return `${config.url}${config.paginationParam}${config.paginationSize * pageNumber}`;
};
