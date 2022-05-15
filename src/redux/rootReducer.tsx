import { combineReducers } from "redux";
import AvatarReducer from "./reducers/AvatarReducer";

const rootReducer = combineReducers({
    Avatar: AvatarReducer
})

export default rootReducer;