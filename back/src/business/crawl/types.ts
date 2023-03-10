import { CheerioAPI } from 'cheerio';

export interface WebsiteConfig {
  name: string;
  url: string;
  paginationParam: string;
  paginationSize: number;
  extractDataFn: ($: CheerioAPI) => void;
}

export interface PageData {
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  jobSalary: string;
}
