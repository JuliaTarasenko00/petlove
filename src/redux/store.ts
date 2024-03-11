import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './news/slice';
import { friendsSlice } from './friends/slice';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    friends: friendsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
