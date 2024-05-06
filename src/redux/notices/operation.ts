import { ErrorType } from '@/types/errorType';
import { Notices } from '@/types/notices';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants } from '../request';

interface NoticesArgs {
  p: number;
  l?: number;
}

interface FilterArg {
  p: number;
  l?: number;
  category?: string;
  species?: string;
  name?: string;
  type?: string;
  isSelected: string;
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
  FilterArg,
  {
    rejectValue: ErrorType;
  }
>(
  'notices/filter',
  async (
    { p = 1, l = 6, category, species, name, type, isSelected },
    thunkApi,
  ) => {
    const params = new URLSearchParams();
    params.append('page', p.toString());
    params.append('limit', l.toString());

    if (category) {
      params.append('category', category);
    }
    if (species) {
      params.append('species', species);
    }
    if (name) {
      params.append('keyword', name);
    }
    if (type) {
      params.append(`${type}`, isSelected);
    }

    try {
      const { data } = await $instants.get(`/notices?${params.toString()}`);
      return data;
    } catch (error: ErrorType | any) {
      return thunkApi.rejectWithValue({
        message: error.message,
        code: error.response.status,
      });
    }
  },
);
