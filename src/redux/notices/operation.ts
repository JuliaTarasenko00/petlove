import { ErrorType } from '@/types/errorType';
import { Notices } from '@/types/notices';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants } from '../request';

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

export const getNoticesFilter = createAsyncThunk<
  Notices,
  any,
  {
    rejectValue: ErrorType;
  }
>(
  'notices/filter',
  async (
    { p = 1, l = 6, category, species, name, type, isSelected },
    thunkApi,
  ) => {
    const params = new URLSearchParams({
      page: p,
      limit: l,
      keyword: name,
      category: category,
      species: species,
    });
    try {
      const { data } = await $instants.get(
        `/notices?${params.toString()}&${type}=${isSelected}`,
      );
      return data;
    } catch (error: ErrorType | any) {
      return thunkApi.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  },
);

export const getNoticesId = createAsyncThunk<
  any,
  string,
  {
    rejectValue: ErrorType;
  }
>('notices/id', async (id, thunkApi) => {
  try {
    const { data } = await $instants(`/notices/${id}`);
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
