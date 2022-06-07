import { combineReducers } from "redux";
import AnimalAvatarReducer from "./reducers/AnimalAvatarReducer";
import EmojiAvatarReducer from "./reducers/EmojiAvatarReducer";

const rootReducer = combineReducers({
    AnimalAvatar: AnimalAvatarReducer,
    EmojiAvatar: EmojiAvatarReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;