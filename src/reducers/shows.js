import {
  shows_request,
  shows_success,
  shows_failure
} from "actions/index.js";
import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";
const isFetching = handleActions(
  {
    [shows_request]: () => true,
    [shows_success]: () => false,
    [shows_failure]: () => false
  },
  false
);
const entities = handleAction(
  shows_success,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  shows_failure,
  (state, action) => action.error,
  null
);

export default combineReducers({
  entities,
  isFetching,
  error
});
export const getEntities = state => state.shows.entities;
export const getIsFetching = state =>
  state.shows.isFetching;
export const getError = state => state.shows.error;
