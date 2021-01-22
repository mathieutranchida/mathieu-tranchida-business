import { combineReducers } from "redux";

import languageReducer from "./languagesReducer";
import firstLoadReducer from "./firstLoadReducer";

export default combineReducers({ languageReducer, firstLoadReducer });
