import { AnyAction } from 'redux';

export interface IDeviceState {
  isMobile: boolean;
}

const initialState = {
  isMobile: false,
};

const DeviceReducer = (
  state: IDeviceState = initialState,
  action: AnyAction
): IDeviceState => {
  switch (action.type) {
    case 'SET_DEVICE':
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
};

export default DeviceReducer;
