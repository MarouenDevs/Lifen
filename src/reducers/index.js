import { combineReducers } from "redux";
import file_reducer from "./file-reducer";

const rootReducer = combineReducers({
  file: file_reducer
});

export default rootReducer;
