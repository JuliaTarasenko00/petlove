import { ErrorType } from '@/types/errorType';
import { Friends } from '@/types/friends';
import { getFriends } from './operation';
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';

interface InitialState {
  friends: Friends[];
  isLoading: boolean;
  error: ErrorType | null | unknown;
}

const initialState: InitialState = {
  friends: [],
  isLoading: false,
  error: null,
};

type RejectedAction = ReturnType<typeof getFriends.rejected>;

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder
      .addCase(getFriends.pending, (state: InitialState) => {
        state.friends = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getFriends.fulfilled,
        (state: InitialState, { payload }: PayloadAction<Friends[]>) => {
          state.friends = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(
        getFriends.rejected,
        (state: InitialState, { payload }: RejectedAction) => {
          state.friends = [];
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});
