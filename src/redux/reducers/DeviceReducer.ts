import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  isMobile: false,
};

export const DeviceSlice = createSlice({
  name: 'Device',
  initialState: initialState,
  // For Client Side Update
  reducers: {
    setDevice: (state, action) => {
      state.isMobile = action.payload;
    },
  },
  // For Server Side Update
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.Device.isMobile) return state;
      state.isMobile = action.payload.Device.isMobile;
    },
  },
});

export const { setDevice } = DeviceSlice.actions;

export const DeviceReducer = DeviceSlice.reducer;
