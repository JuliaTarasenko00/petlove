import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './news/slice';
import { friendsSlice } from './friends/slice';
import { noticesSlice } from './notices/slice';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    friends: friendsSlice.reducer,
    notices: noticesSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
