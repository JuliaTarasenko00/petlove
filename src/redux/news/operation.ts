import { News } from '@/types/newsTypes';
import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { ErrorType, getNews } from './slice';

export interface InitialState extends News {
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

type FulfilledActon = ReturnType<typeof getNews.fulfilled>;
type RejectedAction = ReturnType<typeof getNews.rejected>;

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder
      .addCase(getNews.pending, (state: InitialState) => {
        state.isLoading = true;
        state.error = null;
        state.page = 0;
        state.perPage = 0;
        state.totalPages = 0;
        state.results = [];
      })
      .addCase(
        getNews.fulfilled,
        (state: InitialState, { payload }: FulfilledActon) => {
          state.page = payload.page;
          state.perPage = payload.perPage;
          state.totalPages = payload.totalPages;
          state.results = payload.results;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(
        getNews.rejected,
        (state: InitialState, { payload }: RejectedAction) => {
          state.isLoading = false;
          state.error = payload;
          state.page = 0;
          state.perPage = 0;
          state.totalPages = 0;
          state.results = [];
        },
      );
  },
});
