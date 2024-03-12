import { ErrorType } from '@/types/errorType';
import { Notices } from '@/types/notices';
import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getNotices } from './operation';

export interface InitialState extends Notices {
  isLoading: boolean;
  error: ErrorType | null | unknown;
}

const initialState: InitialState = {
  page: 0,
  perPage: 0,
  totalPages: 0,
  results: [],
  isLoading: false,
  error: null,
};

type RejectedAction = ReturnType<typeof getNotices.rejected>;

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
        (state: InitialState, { payload }: RejectedAction) => {
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
