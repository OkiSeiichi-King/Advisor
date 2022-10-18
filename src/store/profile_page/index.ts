import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PageState {
  value: number;
}

const initialState: PageState = {
  value: 1,
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
  },
});

// Action creators are generated for each case reducer function
export const { next, prev } = pageSlice.actions;

export default pageSlice.reducer;
