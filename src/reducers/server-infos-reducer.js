import {
  FETCH_INFOS_START,
  FETCH_INFOS_FAIL,
  FETCH_INFOS_SUCCESS
} from "../actions/const";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_INFOS_START: {
      return {
        ...state,
        ...action.payload,
        status: "pending"
      };
    }

    case FETCH_INFOS_FAIL: {
      return {
        ...state,
        ...action.payload,
        status: "fail"
      };
    }

    case FETCH_INFOS_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        status: "succes"
      };
    }
    default: {
      return state;
    }
  }
}
