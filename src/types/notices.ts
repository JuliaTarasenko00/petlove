export interface Notices {
  page: number;
  perPage: number;
  totalPages: number;
  results: NoticesResult[];
}

export interface NoticesResult {
  _id: string;
  species: string;
  category: string;
  title: string;
  price?: number;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt: string;
}
