import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './news/operation';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
