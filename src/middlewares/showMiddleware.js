import {
  shows_request,
  shows_success,
  shows_failure
} from "actions/index.js";
import { show } from "api.js";

export default store => next => action => {
  if (action.type == shows_request.toString()) {
    console.log("мидл вар принял");
    show(action.payload)
      .then(res => store.dispatch(shows_success(res)))
      .catch(err => store.dispatch(shows_failure(err)));
  }
  return next(action);
};
