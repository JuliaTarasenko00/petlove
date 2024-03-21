import { ErrorType } from '@/types/errorType';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instants } from '../request';

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
>('sex', async (_, thunkApi) => {
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

export const getSpecies = createAsyncThunk<
  Array<string>,
  void,
  {
    rejectValue: ErrorType;
  }
>('species', async (_, thunkApi) => {
  try {
    const { data } = await $instants.get<Array<string>>('/notices/species');
    return data;
  } catch (error: ErrorType | any) {
    return thunkApi.rejectWithValue({
      message: error.message,
      code: error.response.status,
    });
  }
});
