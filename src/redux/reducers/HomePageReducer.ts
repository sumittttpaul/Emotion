import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  page: 'Discover',
};

export const PageSlice = createSlice({
  name: 'HomePage',
  initialState: initialState,
  // For Client Side Update
  reducers: {
    setHomePage: (state, action) => {
      state.page = action.payload;
    },
  },
  // For Server Side Update
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.Page.HomePage) return state;
      state.page = action.payload.Page.HomePage;
    },
  },
});

export const { setHomePage } = PageSlice.actions;

export const HomePageReducer = PageSlice.reducer;
