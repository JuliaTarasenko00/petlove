import axios from 'axios';

export const $instants = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setToken = (token: string) => {
  $instants.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  $instants.defaults.headers.common['Authorization'] = '';
};
