import { combineReducers } from 'redux';

import { MOVE_ORDER_TO_CUSTOMER, MOVE_ORDER_TO_FARM } from '../actions/farmTypes';

export const orders = ( state =  [], action ) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return [...state, action.payload]
    case MOVE_ORDER_TO_CUSTOMER:
      return state.filter( (order) => action.payload.id !== order.id )
    default:
      return state;
  }
}

export default combineReducers({
  orders
});

export const getFarmOrders = (state) => {
  return state.farm.orders;
}
