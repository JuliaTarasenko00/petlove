import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { $instants } from '../request';
import { News } from '@/types/news';
import { ErrorType } from '@/types/errorType';

interface NewsArgs {
  p: number;
  l: number;
}

export const getNews = createAsyncThunk<
  News,
  NewsArgs,
  {
    rejectValue: ErrorType;
  }
>('news', async ({ p = 1, l = 1 }: NewsArgs, thunkApi) => {
  try {
    const { data }: AxiosResponse<News> = await $instants.get(
      `/news?page=${p}&l=${l}`,
    );
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
