import { Page } from "puppeteer";
import { loadCheerio } from "../../technical/cheerio";
import { BrowserInstance } from "../../technical/puppeteer/browser";
import { openPage, goTo, getHtmlPageContent } from "../../technical/puppeteer/page";
import { WebsiteConfig } from "./types";
import { getTotalResults } from "./websites/indeed";

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

const launchPage = async (config: WebsiteConfig) => {
    const browser = await new BrowserInstance().getBrowser({headless: false});
    const page = await openPage(browser);
    await goTo(page, config.url);
    return page;
};

export const executeCrawling = async (config: WebsiteConfig) => {
    console.log(`Start Crawling for ${config.name}`);
    const page = await launchPage(config);
    
    const $ = loadCheerio(await getHtmlPageContent(page));
    const totalResult = getTotalResults($);
    const totalPage = totalResult / config.paginationSize;
    
    crawlPage(config, page);
};