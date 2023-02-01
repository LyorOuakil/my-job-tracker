import { loadCheerio } from "../../technical/cheerio";
import { BrowserInstance } from "../../technical/puppeteer/browser";
import { openPage, goTo, getHtmlPageContent } from "../../technical/puppeteer/page";
import { WebsiteConfig } from "./types";

export const executeCrawling = async (config: WebsiteConfig) => {
    try {
        console.log(`Start Crawling for ${config.name}`);
        const browser = await new BrowserInstance().getBrowser({headless: false});
        const page = await openPage(browser);
        await goTo(page, config.url);
        return loadCheerio(await getHtmlPageContent(page));
    } catch (err) {
        console.log(`Error trying to launch website ${config.url}`);
    }
};