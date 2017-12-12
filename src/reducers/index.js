import { combineReducers } from 'redux';

import marketReducer from './market';
import farmReducer from './farm';
import budgetReducer from './budget';

export default combineReducers({
  market: marketReducer,
  farm: farmReducer,
  budget: budgetReducer
});
