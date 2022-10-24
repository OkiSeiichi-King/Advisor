import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PageState {
  value: number;
  isFinish: boolean;
}

const initialState: PageState = {
  value: 0,
  isFinish: false,
};

export const pageSlice = createSlice({
  name: 'profile_active_page',
  initialState,
  reducers: {
    next: (state) => {
      state.value += 1;
    },
    prev: (state, action: PayloadAction<number>) => {
      state.value -= 1;
    },
    finish: (state) => {
      state.isFinish = true;
    },
    noFinish: (state) => {
      state.isFinish = false;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { next, prev, finish, noFinish, setValue } = pageSlice.actions;

export default pageSlice.reducer;
