import * as cheerio from 'cheerio';

export const loadCheerio = (data: string) => {
    return cheerio.load(data);    
};