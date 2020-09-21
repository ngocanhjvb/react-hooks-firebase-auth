import {combineReducers} from "redux";
import user from "./signIn";

const reducers = combineReducers({
    signIn: user
});

export default reducers;
