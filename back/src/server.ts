// SCRAPPING TOOLS 

import { executeCrawling } from "./business/crawl";
import { websiteConfig } from "./business/crawl/websites/config";

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

/**
 * Create crawl methods
 * Fetch what we want from given html tag
 * Parse it to a jsonobject
 */

/**
 * Create website config
 * Handle url to create
 * Handle pagination of website if needed
 * Handle what we want to get (pure data)
 * Handle how we want to get it  (html tag)
 */


executeCrawling(websiteConfig[0]);


/**
 * executeCrawl(config)
    * launchUrlAndGetHtmlContent(config.url)
    * getDataFromPage(config.extractData)
    * checkDataFromPage(config.transformData)
    * loadDataFromPage(config.loadData)
 *
 */
