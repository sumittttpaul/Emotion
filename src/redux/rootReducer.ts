import { combineReducers } from 'redux';
import AvatarReducer from './reducers/AvatarReducer';
import DeviceReducer from './reducers/DeviceReducer';

const rootReducer = combineReducers({
  Avatar: AvatarReducer,
  Device: DeviceReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
