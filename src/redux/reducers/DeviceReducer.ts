import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  isMobile: null,
};

export const DeviceSlice = createSlice({
  name: 'Device',
  initialState: initialState,
  reducers: {
    setDevice: (state, action) => {
      state.isMobile = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.Device.isMobile) return state;
      state.isMobile = action.payload.Device.isMobile;
    },
  },
});

export const { setDevice } = DeviceSlice.actions;

export const DeviceReducer = DeviceSlice.reducer;
