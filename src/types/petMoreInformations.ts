export interface Pet {
  _id: string;
  species: string;
  category: string;
  price: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: {
    _id: string;
    stateEn: string;
    cityEn: string;
  };
  imgURL: string;
  createdAt: string;
  user: {
    _id: string;
    email: string;
    phone: string;
  };
  popularity: number;
  updatedAt: string;
}
