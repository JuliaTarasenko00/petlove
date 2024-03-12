import { News } from '@/types/news';
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import { ErrorType } from '@/types/errorType';
import { getNews, getNewsSearch } from './operation';

export interface InitialState extends News {
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

type RejectedAction = ReturnType<typeof getNews.rejected>;

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder
      .addCase(
        getNews.fulfilled,
        (state: InitialState, { payload }: PayloadAction<News>) => {
          state.page = payload.page;
          state.perPage = payload.perPage;
          state.totalPages = payload.totalPages;
          state.results = payload.results;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(
        getNewsSearch.fulfilled,
        (state: InitialState, { payload }: PayloadAction<News>) => {
          state.page = payload.page;
          state.perPage = payload.perPage;
          state.totalPages = payload.totalPages;
          state.results = payload.results;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(getNews.pending, getNewsSearch.pending),
        (state: InitialState) => {
          state.isLoading = true;
          state.error = null;
          state.page = 0;
          state.perPage = 0;
          state.totalPages = 0;
          state.results = [];
        },
      )
      .addMatcher(
        isAnyOf(getNews.rejected, getNewsSearch.rejected),
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
