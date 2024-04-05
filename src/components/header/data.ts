import { routes } from '@/helpers/routes';
import { Options } from './Header';

export const options: Options[] = [
  { title: 'News', href: routes.main.news },
  { title: 'Find pet', href: routes.main.notices },
  { title: ' Our friends', href: routes.main.friends },
];
