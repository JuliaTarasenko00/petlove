export interface News {
  page: number;
  perPage: number;
  totalPages: number;
  results: NewsResult[];
}

export interface NewsResult {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}
