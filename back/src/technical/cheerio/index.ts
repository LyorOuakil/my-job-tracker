import * as cheerio from 'cheerio';

export const loadCheerio = (data: string) => {
    return cheerio.load(data);    
};


export const getTextElementWithSelector = ($: cheerio.CheerioAPI, el: cheerio.Element, selector: string) => {
    return $(selector, el).text();
};
