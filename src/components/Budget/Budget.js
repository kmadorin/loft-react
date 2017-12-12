import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getBudgetProfit,
  getMarketExpanse,
  getFarmExpanse,
  getDeliveryExpanse
} from '../../reducers/budget';

import './Budget.css';

class Budget extends Component {
  render() {
    const {
      profit,
      marketExpanse,
      farmExpanse,
      deliveryExpanse
    } = this.props;
    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег: { profit }</p>
        <p>Расходы продавцов: { (marketExpanse > 0) ? '-': '' } { marketExpanse }</p>
        <p>Расходы на ферме: { (farmExpanse > 0) ? '-': '' } { farmExpanse }</p>
        <p>Расходы на доставку: { (deliveryExpanse > 0) ? '-': '' } { deliveryExpanse }</p>
        <p>Итого: { profit - marketExpanse - farmExpanse - deliveryExpanse }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profit: getBudgetProfit(state),
    marketExpanse: getMarketExpanse(state),
    farmExpanse: getFarmExpanse(state),
    deliveryExpanse: getDeliveryExpanse(state)
  }
}

export default connect(mapStateToProps)(Budget);
