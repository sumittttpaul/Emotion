import { combineReducers } from 'redux';
import { DeviceReducer } from './reducers/DeviceReducer';
import { HomePageReducer } from './reducers/HomePageReducer';

const rootReducer = combineReducers({
  Device: DeviceReducer,
  HomePage: HomePageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
