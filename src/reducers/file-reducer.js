import { DROP_FILE } from "../actions/const";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case DROP_FILE: {
      return {
        ...state,
        ...action.payload
      };
    }

    default: {
      return state;
    }
  }
}
