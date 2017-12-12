import {
  searchRequest,
  search_success,
  search_failure
} from "actions/index.js";
import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [search_success]: () => false,
    [search_failure]: () => false
  },
  false
);
const result = handleAction(
  search_success,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  search_failure,
  (state, action) => action.error,
  null
);

export default combineReducers({
  isFetching,
  result,
  error
});

export const getResult = state => state.search.result;
export const getIsFetching = state =>
  state.search.isFetching;
export const getError = state => state.search.error;
