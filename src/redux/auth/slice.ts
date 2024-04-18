import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import { signIn, signOut, signUp } from './operation';
import { UserAuth } from '@/types/user';
import { ErrorType } from '@/types/errorType';

export interface InitialStateAuth {
  token: string;
  user: UserAuth;
  error: ErrorType | null | undefined;
  isLoading: boolean;
}

export const initialState: InitialStateAuth = {
  token: '',
  user: {
    name: '',
    email: '',
    token: '',
  },
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialStateAuth>) => {
    builder
      .addCase(
        signUp.fulfilled,
        (state, { payload }: PayloadAction<UserAuth>) => {
          state.isLoading = false;
          state.token = payload.token;
          state.user = payload;
          state.error = null;
        },
      )
      .addCase(
        signIn.fulfilled,
        (state, { payload }: PayloadAction<UserAuth>) => {
          state.isLoading = false;
          state.token = payload.token;
          state.user = payload;
          state.error = null;
        },
      )
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.token = '';
        state.user = {
          name: '',
          email: '',
          token: '',
        };
        state.error = null;
      })
      .addMatcher(
        isAnyOf(signUp.pending, signIn.pending, signOut.pending),
        (state) => {
          state.isLoading = true;
          state.token = '';
          state.user = {
            name: '',
            email: '',
            token: '',
          };
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected, signOut.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.token = '';
          state.user = {
            name: '',
            email: '',
            token: '',
          };
          state.error = payload;
        },
      );
  },
});
