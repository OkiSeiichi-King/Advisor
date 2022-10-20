import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SecondData {
  salary: number;
}

const initialState: SecondData = {
  salary: 0,
};

export const pageSlice = createSlice({
  name: 'secondData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<number>) => {
      state.salary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = pageSlice.actions;

export default pageSlice.reducer;
