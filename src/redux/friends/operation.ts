import { ErrorType } from '@/types/errorType';
import { Friends } from '@/types/friends';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { $instants } from '../request';

export const getFriends = createAsyncThunk<
  Friends[],
  void,
  { rejectValue: ErrorType }
>('friends', async (_, thunkApi) => {
  try {
    const { data }: AxiosResponse<Friends[]> = await $instants.get('/friends');
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
