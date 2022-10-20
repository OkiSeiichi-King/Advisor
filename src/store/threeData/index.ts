import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ThreeData {
  isOk: boolean;
}

const initialState: ThreeData = {
  isOk: false,
};

export const pageSlice = createSlice({
  name: 'threeData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ThreeData>) => {
      state.isOk = action.payload.isOk;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = pageSlice.actions;

export default pageSlice.reducer;
