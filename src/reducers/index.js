import { combineReducers } from "redux";
import file_reducer from "./file-reducer";
import server_infos_reducer from "./server-infos-reducer";

const rootReducer = combineReducers({
  file: file_reducer,
  serverInfos: server_infos_reducer
});

export default rootReducer;
