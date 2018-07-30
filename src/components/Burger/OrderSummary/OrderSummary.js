import React, { Component } from 'react';

import Ax from '../../../hoc/Ax/Ax';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class
  componentWillUpdate() {
    console.log('orderSummary will update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
        </li> );
    });

    return (
      <Ax>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCanceled}>Cancel</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
      </Ax>
    )
  }
}

export default OrderSummary;