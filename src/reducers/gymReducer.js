import {
  GYM_LIST_SUCCESS,
  GYM_LIST_REQUEST,
  GYM_LIST_ERROR,
} from "../constants/gymConstants";

export function gymReducer(state, action) {
  switch (action.type) {
    case GYM_LIST_REQUEST:
      return { ...state, loading: true };
    case GYM_LIST_SUCCESS:
      return { ...state, gymlistings: action.payload, loading: false };
    case GYM_LIST_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
