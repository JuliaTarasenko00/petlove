import axios from 'axios';

export const $instants = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
});
