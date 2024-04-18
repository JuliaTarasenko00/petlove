import { ErrorType } from '@/types/errorType';
import { UserAuth } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants, setToken } from '../request';

interface SignUpArgs {
  email: string;
  name: string;
  password: string;
}

interface SignInArgs {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk<
  UserAuth,
  SignUpArgs,
  {
    rejectValue: ErrorType;
  }
>('user/sig_up', async (userData, thunkApi) => {
  try {
    const { data } = await $instants.post<UserAuth>('/users/signup', userData);
    setToken(data.token);
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const signIn = createAsyncThunk<
  UserAuth,
  SignInArgs,
  {
    rejectValue: ErrorType;
  }
>('user/sig_in', async (userData, thunkApi) => {
  try {
    const { data } = await $instants.post<UserAuth>('/users/signin', userData);
    setToken(data.token);
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const signOut = createAsyncThunk<
  any,
  void,
  {
    rejectValue: ErrorType;
  }
>('user/sign_out', async (_, thunkApi) => {
  try {
    return await $instants.post('/users/signout');
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
