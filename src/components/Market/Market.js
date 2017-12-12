import React, {Component} from 'react';
import './Market.css';

import {connect} from 'react-redux';

import * as actions from '../../actions/marketActions';
import { getMarketOrders } from '../../reducers/market';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  newOrder = () => {
    const { createOrder } = this.props;

    createOrder(getNewOrder());
  }
  moveOrderToFarm = () => {
    const { orders, moveOrderToFarm } = this.props;

    moveOrderToFarm(orders[orders.length - 1]);
  }
  renderOrderDetails = () => {
    const { orders } = this.props;
    return orders.map( (order) => {
      return (
        <div key={ order.name } className="order">
          <div className="order__upper">
            <p className="p--order">Название: { order.name }</p>
            <p className="p--order">Цена: { order.price }</p>
          </div>
          <div className="order__lower">
            <p className="p--order">
              Создан: { Date(order.createdAt) }
            </p>
          </div>
        </div>
      )
    })
  }
  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          onClick={ this.newOrder }
          className="new-orders__create-button"
        >
          Создать заказ
        </button>
        <button
          onClick={ this.moveOrderToFarm }
          disabled={ !orders.length }
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          { this.renderOrderDetails() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  orders: getMarketOrders(state)
});


const mapDispatchToProps = {
  createOrder: actions.createOrder,
  moveOrderToFarm: actions.moveOrderToFarm
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);
