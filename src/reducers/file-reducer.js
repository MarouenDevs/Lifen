import {
  DROP_FILE,
  DROP_FILE_FAIL,
  DROP_FILE_SUCCESS,
  DROP_FILE_START
} from "../actions/const";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case DROP_FILE: {
      return {
        ...state,
        ...action.payload
      };
    }

    case DROP_FILE_START: {
      return {
        ...state,
        ...action.payload,
        status: "pending"
      };
    }

    case DROP_FILE_FAIL: {
      return {
        ...state,
        ...action.payload,
        status: "fail"
      };
    }

    case DROP_FILE_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        status: "success"
      };
    }

    default: {
      return state;
    }
  }
}
