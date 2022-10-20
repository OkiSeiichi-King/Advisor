import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FirstData {
  firstName: string;
  lastName: string;
}

const initialState: FirstData = {
  firstName: '',
  lastName: '',
};

export const pageSlice = createSlice({
  name: 'firstData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<FirstData>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = pageSlice.actions;

export default pageSlice.reducer;
