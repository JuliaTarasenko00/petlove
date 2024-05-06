export interface UserAuth {
  email: string;
  name: string;
  token: string;
}

export interface UserInformation {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  token: string;
  noticesViewed: INoticesViewed[];
  noticesFavorites: INoticesFavorite[];
  pets: IPet[];
}

export interface INoticesViewed {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  popularity?: number;
  createdAt?: string;
  updatedAt?: string;
  user?: string;
}

export interface INoticesFavorite {
  _id: string;
  species: string;
  category: string;
  price?: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  popularity?: number;
  createdAt?: string;
  updatedAt?: string;
  user?: string;
}

export interface IPet {
  _id?: string;
  species: string;
  title: string;
  name: string;
  birthday: string;
  sex: string;
  imgURL: string;
  createdAt?: string;
  updatedAt?: string;
}
