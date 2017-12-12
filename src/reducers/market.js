import { combineReducers } from 'redux';

import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

export const orders = ( state = [], action ) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, action.payload]
    case MOVE_ORDER_TO_FARM:
      return state.filter( (order) => action.payload.id !== order.id )
    default:
      return state;
  }
}

export default combineReducers({
  orders
});

export const getMarketOrders = (state) => {
  return state.market.orders;
}
