import { WebsiteConfig } from '../types';
import { extractData } from './indeed';

export const websiteConfig: WebsiteConfig[] = [
  {
    name: 'indeed',
    url: 'https://fr.indeed.com/jobs?q=développeur+web',
    paginationParam: '&start=',
    paginationSize: 20,
    extractDataFn: extractData,
  },
];
