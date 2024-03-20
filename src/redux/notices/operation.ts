import { ErrorType } from '@/types/errorType';
import { Notices } from '@/types/notices';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants } from '../request';
import { AxiosResponse } from 'axios';

interface NoticesArgs {
  p: number;
  l?: number;
}

export const getNotices = createAsyncThunk<
  Notices,
  NoticesArgs,
  {
    rejectValue: ErrorType;
  }
>('notices', async ({ p = 1, l = 6 }: NoticesArgs, thunkApi) => {
  try {
    const { data } = await $instants.get<Notices>(
      `/notices?page=${p}&limit=${l}`,
    );
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const getCategories = createAsyncThunk<
  Array<string>,
  void,
  {
    rejectValue: ErrorType;
  }
>('categories', async (_, thunkApi) => {
  try {
    const { data } = await $instants.get<Array<string>>('/notices/categories');
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const getSex = createAsyncThunk<
  Array<string>,
  void,
  {
    rejectValue: ErrorType;
  }
>('categories', async (_, thunkApi) => {
  try {
    const { data } = await $instants.get<Array<string>>('/notices/sex');
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
