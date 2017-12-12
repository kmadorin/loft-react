import { combineReducers } from 'redux';

import { MOVE_ORDER_TO_CUSTOMER, MOVE_ORDER_TO_FARM, CREATE_ORDER } from '../actions/budgetTypes';

export const profit = ( state = 0, action ) => {
  switch (action.type) {
    case CREATE_ORDER:
      return state + action.payload.price;
    default:
      return state;
  }
}

export const marketExpanse = ( state = 0, action ) => {
  switch (action.type) {
    case CREATE_ORDER:
      return state + 20;
    default:
      return state;
  }
}

export const farmExpanse = ( state = 0, action ) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return state + 100;
    default:
      return state;
  }
}
export const deliveryExpanse = ( state = 0, action ) => {
  switch (action.type) {
    case  MOVE_ORDER_TO_CUSTOMER:
      return state + 20;
    default:
      return state;
  }
}

export default combineReducers({
  profit,
  marketExpanse,
  farmExpanse,
  deliveryExpanse
})

export const getBudgetProfit = (state) => {
  return state.budget.profit;
}

export const getMarketExpanse = (state) => {
  return state.budget.marketExpanse;
}

export const getFarmExpanse = (state) => {
  return state.budget.farmExpanse;
}

export const getDeliveryExpanse = (state) => {
  return state.budget.deliveryExpanse;
}
