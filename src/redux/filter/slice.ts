import { ErrorType } from '@/types/errorType';
import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCategories, getSex, getSpecies } from './operation';

export interface InitialState {
  categories: Array<string>;
  sex: Array<string>;
  species: Array<string>;
  isLoading: boolean;
  error: ErrorType | null | undefined;
}

const initialState: InitialState = {
  categories: [],
  sex: [],
  species: [],
  isLoading: false,
  error: null,
};

export const filterSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getCategories.fulfilled,
        (state: InitialState, { payload }: PayloadAction<Array<string>>) => {
          state.categories = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(
        getSex.fulfilled,
        (state: InitialState, { payload }: PayloadAction<Array<string>>) => {
          state.sex = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(
        getSpecies.fulfilled,
        (state: InitialState, { payload }: PayloadAction<Array<string>>) => {
          state.species = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(getCategories.pending, getSex.pending, getSpecies.pending),
        (state: InitialState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(getCategories.rejected, getSex.rejected, getSpecies.rejected),
        (
          state: InitialState,
          { payload }: PayloadAction<ErrorType | undefined>,
        ) => {
          state.categories = [];
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
