import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/farmActions';
import { getFarmOrders } from '../../reducers/farm';

import './Farm.css';

class Farm extends Component {
  moveOrderToCustomer = () => {
    const { orders, orderToCustomer } = this.props;

    orderToCustomer(orders[orders.length - 1]);
  }
  renderOrders = () => {
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
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          onClick={ this.moveOrderToCustomer }
          disabled={ !orders.length }
        >
          Отправить урожай клиенту
        </button>
        { this.renderOrders() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: getFarmOrders(state)
  }
}

const mapDispatchToProps = {
  orderToCustomer: actions.moveOrderToCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
