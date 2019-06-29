import {
  DROP_FILE,
  DROP_FILE_START,
  DROP_FILE_SUCCESS,
  DROP_FILE_FAIL,
  FETCH_INFOS_START,
  FETCH_INFOS_SUCCESS,
  FETCH_INFOS_FAIL
} from "./const";
import { toast } from "react-toastify";
import { sendFile, seekSummary } from "../app/api/fileApi";

export const dropFileAction = payload => {
  return dispatch => {
    dispatch({ type: DROP_FILE, payload: { name: payload.name } });
    dispatch({ type: DROP_FILE_START, payload: { name: payload.name } });
    sendFile(payload)
      .then(() => {
        dispatch({ type: DROP_FILE_SUCCESS, payload: { name: payload.name } });

        toast.success("File uploaded !", {
          position: toast.POSITION.TOP_CENTER
        });

        dispatch(fetchInfosAction());
      })
      .catch(() => {
        dispatch({ type: DROP_FILE_FAIL, payload: { name: payload.name } });

        toast.error("File upload failed !", {
          position: toast.POSITION.TOP_CENTER
        });
      });
  };
};

export const fetchInfosAction = payload => {
  return dispatch => {
    dispatch({ type: FETCH_INFOS_START });
    seekSummary()
      .then(result => {
        dispatch({
          type: FETCH_INFOS_SUCCESS,
          payload: result
        });
      })
      .catch(() => {
        dispatch({
          type: FETCH_INFOS_FAIL
        });
      });
  };
};
