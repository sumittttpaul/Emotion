import { combineReducers } from "redux";
import MensAvatarReducer from "./reducers/MensAvatarReducer";
import WomensAvatarReducer from "./reducers/WomensAvatarReducer";

const rootReducer = combineReducers({
    WomensAvatar: WomensAvatarReducer,
    MensAvatar: MensAvatarReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;