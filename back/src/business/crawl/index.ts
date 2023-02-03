import { Page } from 'puppeteer';
import { loadCheerio } from '../../technical/cheerio';
import { BrowserInstance } from '../../technical/puppeteer/browser';
import { getHtmlPageContent, launchPage } from '../../technical/puppeteer/page';
import { WebsiteConfig } from './types';
import { getTotalResults } from './websites/indeed';

export const crawlPage = async (config: WebsiteConfig, page: Page) => {
  try {
    const $ = loadCheerio(await getHtmlPageContent(page));
    const data = config.extractDataFn($);
    console.log('Extracting page content done');
    console.log(data);
  } catch (err) {
    console.log(`Error trying to launch website ${config.url}`);
  }
};

export const executeCrawling = async (config: WebsiteConfig) => {
  console.log(`Start Crawling for ${config.name}`);

  const browser = await new BrowserInstance().getBrowser({ headless: false });
  const page = await launchPage(browser, config.url);

  const $ = loadCheerio(await getHtmlPageContent(page));
  const totalPage = getTotalResults($) / config.paginationSize;
  console.log(totalPage);

  crawlPage(config, page);
};
