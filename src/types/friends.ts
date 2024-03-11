export interface Friends {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: workDays[];
  phone: string;
  email: string;
}

type workDays = {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
};
