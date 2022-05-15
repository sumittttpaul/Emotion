import { configureStore } from '@reduxjs/toolkit'
import { IAvatarState } from './reducers/AvatarReducer';
import rootReducer from './rootReducer'

const store = configureStore<IAvatarState>({ reducer: rootReducer })

export default store;
