import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  HomePage: 'Discover',
};

export const PageSlice = createSlice({
  name: 'Page',
  initialState: initialState,
  // For Client Side Update
  reducers: {
    setPage: (state, action) => {
      state.HomePage = action.payload;
    },
  },
  // For Server Side Update
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.Page.HomePage) return state;
      state.HomePage = action.payload.Page.HomePage;
    },
  },
});

export const { setPage } = PageSlice.actions;

export const PageReducer = PageSlice.reducer;
