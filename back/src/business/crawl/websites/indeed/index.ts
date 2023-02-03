import { CheerioAPI } from 'cheerio';
import { getTextElementWithSelector } from '../../../../technical/cheerio';
import { PageData } from '../../types';

export const selectors = {
  jobTitle: '.jobTitle',
  companyName: '.companyName',
  companyLocation: '.companyLocation',
  jobSalary: '.salary-snippet-container',
  totalResult: '.jobsearch-JobCountAndSortPane-jobCount',
};

export const extractData = ($: CheerioAPI) => {
  const pageData: PageData[] = [];
  const cardsElements = $('.jobsearch-ResultsList .resultContent');

  cardsElements.each((_index, card) => {
    pageData.push({
      jobTitle: getTextElementWithSelector($, card, selectors.jobTitle),
      companyName: getTextElementWithSelector($, card, selectors.companyName),
      companyLocation: getTextElementWithSelector($, card, selectors.companyLocation),
      jobSalary: getTextElementWithSelector($, card, selectors.jobSalary),
    });
  });
  return pageData;
};

export const getTotalPages = ($: CheerioAPI, paginationSize: number) => {
  const totalResult = Number($(selectors.totalResult).text().replace(/\D/g, ''));
  return totalResult / paginationSize;
};
