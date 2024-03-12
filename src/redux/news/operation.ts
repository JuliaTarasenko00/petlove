import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { $instants } from '../request';
import { News } from '@/types/news';
import { ErrorType } from '@/types/errorType';

interface NewsArgs {
  p: number;
  l?: number;
}

interface NewsSearchArg extends NewsArgs {
  name: string;
}

export const getNews = createAsyncThunk<
  News,
  NewsArgs,
  {
    rejectValue: ErrorType;
  }
>('news', async ({ p = 1, l = 6 }: NewsArgs, thunkApi) => {
  try {
    const { data }: AxiosResponse<News> = await $instants.get(
      `/news?page=${p}&limit=${l}`,
    );
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const getNewsSearch = createAsyncThunk<
  News,
  NewsSearchArg,
  {
    rejectValue: ErrorType;
  }
>('news/search', async ({ name, p = 1, l = 6 }: NewsSearchArg, thunkApi) => {
  try {
    const { data }: AxiosResponse<News> = await $instants.get(
      `/news?keyword=${name}&page=${p}&limit=${l}`,
    );
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
