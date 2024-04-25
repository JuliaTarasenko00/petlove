import { ErrorType } from '@/types/errorType';
import { Notices } from '@/types/notices';
import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getNotices,
  getNoticesFilter,
} from './operation';

export interface InitialState extends Notices {
  isLoading: boolean;
  error: ErrorType | null | undefined;
}

const initialState: InitialState = {
  page: 0,
  perPage: 0,
  totalPages: 0,
  results: [],
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
        getNoticesFilter.fulfilled,
        (state: InitialState, { payload }: PayloadAction<Notices>) => {
          state.page = payload.page;
          state.perPage = payload.perPage;
          state.totalPages = payload.totalPages;
          state.results = payload.results;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(isAnyOf(getNotices.pending), (state: InitialState) => {
        state.page = 0;
        state.perPage = 0;
        state.totalPages = 0;
        state.results = [];
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(getNotices.rejected),
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
