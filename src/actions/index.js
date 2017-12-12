import { createActions } from "redux-actions";

const actionCreators = createActions(
  {
    SEARCH: {
      REQUEST: undefined,
      SUCCESS: shows => shows,
      FAILURE: undefined
    },
    SHOWS: {
      REQUEST: undefined,
      SUCCESS: result => result,
      FAILURE: undefined
    }
  },
  { namespace: "_" }
);

export const searchRequest = actionCreators.search.request;
export const search_success = actionCreators.search.success;
export const search_failure = actionCreators.search.failure;

export const shows_request = actionCreators.shows.request;
export const shows_success = actionCreators.shows.success;
export const shows_failure = actionCreators.shows.failure;
