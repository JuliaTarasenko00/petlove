import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';
import { newsSlice } from './news/slice';
import { friendsSlice } from './friends/slice';
import { noticesSlice } from './notices/slice';
import { filterSlice } from './filter/slice';
import { InitialStateAuth, userSlice } from './auth/slice';

const persistConfigAuth: PersistConfig<InitialStateAuth> = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfigAuth, userSlice.reducer);

export const store: any = configureStore({
  reducer: {
    news: newsSlice.reducer,
    friends: friendsSlice.reducer,
    notices: noticesSlice.reducer,
    filter: filterSlice.reducer,
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
