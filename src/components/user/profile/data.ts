import { INoticesFavorite, INoticesViewed, IPet } from '@/types/user';

export const pet: IPet[] = [
  {
    _id: '65d48367b3c1132894a596a3',
    name: 'Lucie',
    title: 'Playful family member',
    imgURL: 'https://ftp.goit.study/img/pets/5.webp',
    species: 'cat',
    birthday: '2020-08-09',
    sex: 'female',
  },
  {
    _id: '65d48314cd5396262bb01808',
    name: 'Rex',
    title: 'Playful family member',
    imgURL: 'https://ftp.goit.study/img/pets/5.webp',
    species: 'dog',
    birthday: '2020-01-01',
    sex: 'male',
  },
];

export const favorite: INoticesFavorite[] = [
  {
    _id: '6589436d05a6bcd9b9379423',
    species: 'turtle',
    category: 'found',
    title: 'Found Red-Eared Slider',
    name: 'Shelly',
    birthday: '2019-12-08',
    comment: 'Found this turtle near the pond. Contact if yours.',
    sex: 'unknown',
    location: '641ffcd3ae4e889a02d29c75',
    imgURL: 'https://ftp.goit.study/img/pets/5.webp',
    popularity: 5,
  },
  {
    _id: '6589436d05a6bcd9b9379429',
    species: 'turtle',
    category: 'found',
    title: 'Found Red-Eared Slider',
    name: 'Shelly',
    birthday: '2019-12-08',
    comment: 'Found this turtle near the pond. Contact if yours.',
    sex: 'unknown',
    location: '641ffcd3ae4e889a02d29c75',
    imgURL: 'https://ftp.goit.study/img/pets/5.webp',
    popularity: 5,
  },
  {
    _id: '6589436d05a6bcd9b9379420',
    species: 'turtle',
    category: 'found',
    title: 'Found Red-Eared Slider',
    name: 'Shelly',
    birthday: '2019-12-08',
    comment: 'Found this turtle near the pond. Contact if yours.',
    sex: 'unknown',
    location: '641ffcd3ae4e889a02d29c75',
    imgURL: 'https://ftp.goit.study/img/pets/5.webp',
    popularity: 5,
  },
];

export const view: INoticesViewed[] = [
  {
    _id: '6589436d05a6bcd9b9379423',
    species: 'turtle',
    category: 'found',
    title: 'Found Red-Eared Slider',
    name: 'Shelly',
    birthday: '2019-12-08',
    comment: 'Found this turtle near the pond. Contact if yours.',
    sex: 'unknown',
    location: '641ffcd3ae4e889a02d29c75',
    imgURL: 'https://ftp.goit.study/img/pets/5.webp',
    popularity: 5,
  },
  {
    _id: '6589436d05a6bcd9b9379424',
    species: 'cat',
    category: 'sell',
    price: 130,
    title: 'Persian Cat for Sale',
    name: 'Fluffy',
    birthday: '2019-06-20',
    comment: 'Gorgeous Persian cat available for adoption.',
    sex: 'female',
    location: '641ffcd4ae4e889a02d2a6be',
    imgURL: 'https://ftp.goit.study/img/pets/6.webp',
    popularity: 2,
  },
];

export const user = {
  _id: '65f46246ddfd19cae8632685',
  email: 'test@gmail.com',
  name: 'TestName',
  phone: '',
  avatar: '',
};
