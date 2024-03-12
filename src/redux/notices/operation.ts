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
    const { data } = await $instants.get(`/notices?page=${p}&limit=${l}`);
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
