import { combineReducers } from 'redux';
import { AvatarReducer } from './reducers/AvatarReducer';
import { DeviceReducer } from './reducers/DeviceReducer';

const rootReducer = combineReducers({
  Avatar: AvatarReducer,
  Device: DeviceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
