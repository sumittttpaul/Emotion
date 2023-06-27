import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  color: '#0f0f0f',
};

export const BGColorSlice = createSlice({
  name: 'PageColor',
  initialState: initialState,
  // For Client Side Update
  reducers: {
    setPageColor: (state, action) => {
      state.color = action.payload;
    },
  },
  // For Server Side Update
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.PageColor.color) return state;
      state.color = action.payload.PageColor.color;
    },
  },
});

export const { setPageColor } = BGColorSlice.actions;

export const PageColorReducer = BGColorSlice.reducer;
