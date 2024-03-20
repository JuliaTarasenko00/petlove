import { ErrorType } from '@/types/errorType';
import { Notices } from '@/types/notices';
import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCategories, getNotices } from './operation';

export interface InitialState extends Notices {
  categories: Array<string>;
  isLoading: boolean;
  error: ErrorType | null | undefined;
}

const initialState: InitialState = {
  page: 0,
  perPage: 0,
  totalPages: 0,
  results: [],
  categories: [],
  isLoading: false,
  error: null,
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getNotices.fulfilled,
        (state: InitialState, { payload }: PayloadAction<Notices>) => {
          state.page = payload.page;
          state.perPage = payload.perPage;
          state.totalPages = payload.totalPages;
          state.results = payload.results;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(
        getCategories.fulfilled,
        (state: InitialState, { payload }: PayloadAction<Array<string>>) => {
          state.categories = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(getNotices.pending, getCategories.pending),
        (state: InitialState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(getNotices.rejected, getCategories.rejected),
        (
          state: InitialState,
          { payload }: PayloadAction<ErrorType | undefined>,
        ) => {
          state.page = 0;
          state.perPage = 0;
          state.totalPages = 0;
          state.results = [];
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
