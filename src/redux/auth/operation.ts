import { ErrorType } from '@/types/errorType';
import { UserAuth, UserInformation } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants, clearToken, setToken } from '../request';

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

export const currentUser = createAsyncThunk<
  UserInformation,
  void,
  {
    rejectValue: ErrorType;
  }
>('user/current', async (_, thunkApi) => {
  const state: any = thunkApi.getState();
  const token = state.user.token;
  try {
    setToken(token);
    const { data } = await $instants.get('/users/current/full');
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
    await $instants.post('/users/signout');
    return clearToken();
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const deleteFavoritePet = createAsyncThunk<
  Array<string>,
  string,
  {
    rejectValue: ErrorType;
  }
>('delete/favorite', async (id, thunkApi) => {
  try {
    const { data } = await $instants.delete(`/notices/favorites/remove/${id}`);
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});

export const addFavoritePet = createAsyncThunk<
  Array<string>,
  string,
  {
    rejectValue: ErrorType;
  }
>('add/favorite', async (id, thunkApi) => {
  try {
    const { data } = await $instants.post(`/notices/favorites/add/${id}`);
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
