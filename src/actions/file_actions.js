import {
  DROP_FILE,
  DROP_FILE_START,
  DROP_FILE_SUCCESS,
  DROP_FILE_FAIL
} from "./const";
import { sendFile } from "../app/api/fileApi";
export const dropFileAction = payload => {
  return dispatch => {
    dispatch({ type: DROP_FILE, payload: { name: payload.name } });
    dispatch({ type: DROP_FILE_START, payload: { name: payload.name } });
    sendFile(payload)
      .then(() => {
        dispatch({ type: DROP_FILE_SUCCESS, payload: { name: payload.name } });
      })
      .catch(() => {
        dispatch({ type: DROP_FILE_FAIL, payload: { name: payload.name } });
      });
  };
};
