import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import {
  addFavoritePet,
  currentUser,
  deleteFavoritePet,
  signIn,
  signOut,
  signUp,
} from './operation';
import { UserAuth, UserInformation } from '@/types/user';
import { ErrorType } from '@/types/errorType';

export interface InitialStateAuth {
  token: string;
  user: UserAuth;
  userFullInformation: UserInformation;
  favoritePets: Array<string>;
  error: ErrorType | null | undefined;
  isLoading: boolean;
}

export const initialState: InitialStateAuth = {
  token: '',
  user: {
    email: '',
    name: '',
    token: '',
  },
  userFullInformation: {
    _id: '',
    name: '',
    email: '',
    phone: '',
    avatar: '',
    noticesViewed: [],
    noticesFavorites: [],
    pets: [],
    token: '',
  },
  favoritePets: [],
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
      .addCase(
        currentUser.fulfilled,
        (state, { payload }: PayloadAction<UserInformation>) => {
          state.isLoading = false;
          state.token = payload.token;
          state.user = {
            email: payload.email,
            name: payload.name,
            token: payload.token,
          };
          state.favoritePets = payload.noticesFavorites.map(({ _id }) => _id);
          state.userFullInformation = payload;
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
        state.userFullInformation = {
          _id: '',
          name: '',
          email: '',
          phone: '',
          avatar: '',
          noticesViewed: [],
          noticesFavorites: [],
          pets: [],
          token: '',
        };
        state.error = null;
      })
      .addCase(
        deleteFavoritePet.fulfilled,
        (state, { payload }: PayloadAction<Array<string>>) => {
          state.userFullInformation.noticesFavorites =
            state.userFullInformation.noticesFavorites.filter((product) =>
              payload.includes(product._id),
            );
          state.favoritePets = state.favoritePets.filter((id) =>
            payload.includes(id),
          );
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(
        addFavoritePet.fulfilled,
        (state, { payload }: PayloadAction<Array<string>>) => {
          state.favoritePets = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(deleteFavoritePet.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFavoritePet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
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
          state.userFullInformation = {
            _id: '',
            name: '',
            email: '',
            phone: '',
            avatar: '',
            noticesViewed: [],
            noticesFavorites: [],
            pets: [],
            token: '',
          };
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          signIn.rejected,
          signOut.rejected,
          currentUser.rejected,
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.token = '';
          state.user = {
            name: '',
            email: '',
            token: '',
          };
          state.userFullInformation = {
            _id: '',
            name: '',
            email: '',
            phone: '',
            avatar: '',
            noticesViewed: [],
            noticesFavorites: [],
            pets: [],
            token: '',
          };
          state.error = payload;
        },
      );
  },
});
