import {
  searchRequest,
  search_success,
  search_failure
} from "actions/index.js";
import { search } from "api.js";
export default store => next => action => {
  if (action.type == searchRequest.toString()) {
    search(action.payload)
      .then(shows =>
        store.dispatch(
          search_success(shows.map(show => show.show))
        )
      )
      .catch(err => store.dispatch(search_failure(err)));
  }
  return next(action);
};
