import React from 'react'
import CartItems from './CartItems'
import Total from './Total'

class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItems 
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}/>
        <Total 
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}/>
      </section>
    );
  }
}


export default Cart
