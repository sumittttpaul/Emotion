import { combineReducers } from "redux";
import AvatarReducer from "./reducers/AvatarReducer";

const rootReducer = combineReducers({
    Avatar: AvatarReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;