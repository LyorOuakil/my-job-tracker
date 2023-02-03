import { Browser, Page } from 'puppeteer';
import { loadCheerio } from '../../technical/cheerio';
import { BrowserInstance } from '../../technical/puppeteer/browser';
import { buildUrl, getHtmlPageContent, launchPage } from '../../technical/puppeteer/page';
import { WebsiteConfig } from './types';
import { getTotalPages } from './websites/indeed';
import fs from 'fs/promises';

interface CrawlWebsiteParam {
  browser: Browser;
  page: Page;
  config: WebsiteConfig;
}

export const crawlPage = async (config: WebsiteConfig, page: Page) => {
  try {
    const $ = loadCheerio(await getHtmlPageContent(page));
    const data = config.extractDataFn($);
    console.log('Extracting page content done');
    return data;
  } catch (err) {
    console.log(`Error trying to launch website ${config.url}`);
  }
};

const crawlWebsite = async ({ browser, page, config }: CrawlWebsiteParam) => {
  const $ = loadCheerio(await getHtmlPageContent(page));
  const totalPage = getTotalPages($, config.paginationSize);

  const websiteData = [];

  for (let pageNumber = 1; pageNumber <= totalPage; pageNumber += 1) {
    const newPage = await launchPage(browser, buildUrl(config, pageNumber));
    const data = await crawlPage(config, newPage);
    websiteData.push(data);
  }
  await fs.appendFile('myjsonfile.json', JSON.stringify(websiteData), 'utf8');
};

export const execute = async (config: WebsiteConfig) => {
  const { getBrowser, closeBrowser } = new BrowserInstance();
  const browser = await getBrowser({ headless: true });
  try {
    console.log(`Start Crawling for ${config.name}`);
    await crawlWebsite({
      browser,
      page: await launchPage(browser, config.url),
      config,
    });
  } catch (err) {
    console.log(err);
  } finally {
    await closeBrowser(browser);
  }
};
