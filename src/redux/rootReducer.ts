import { combineReducers } from 'redux';
import { AvatarReducer } from './reducers/AvatarReducer';
import { DeviceReducer } from './reducers/DeviceReducer';
import { PageReducer } from './reducers/PageReducer';

const rootReducer = combineReducers({
  Avatar: AvatarReducer,
  Device: DeviceReducer,
  Page: PageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
