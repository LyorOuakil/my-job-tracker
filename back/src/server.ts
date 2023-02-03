// SCRAPPING TOOLS

import { execute } from './business/crawl';
import { websiteConfig } from './business/crawl/websites/config';

/**
 * Create an IP adress rotation
 * Method that will create a new IP adress
 * Method that will update the IP of a browser
 */

/**
 * Create a user-agent rotation
 * Method that will create a new user-agent
 * Method that will update the User-agent of the browser
 */

execute(websiteConfig[0]);

/**
 * executeCrawl(config)
 * launchUrlAndGetHtmlContent(config.url)
 * getDataFromPage(config.extractData)
 * checkDataFromPage(config.transformData)
 * loadDataFromPage(config.loadData)
 *
 */
