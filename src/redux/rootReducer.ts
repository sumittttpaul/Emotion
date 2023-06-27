import { combineReducers } from 'redux';
import { DeviceReducer } from './reducers/DeviceReducer';
import { HomePageReducer } from './reducers/HomePageReducer';
import { PageColorReducer } from './reducers/PageColorReducer';

const rootReducer = combineReducers({
  Device: DeviceReducer,
  HomePage: HomePageReducer,
  PageColor: PageColorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
