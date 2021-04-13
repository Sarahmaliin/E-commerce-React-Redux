import React, { Component } from 'react'
import FormatCurrency from '../util'

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props //get cartItems from parent. 
        return (
            <div>
                {cartItems.length === 0? (
                    <section className="cart cart-header">
                        Cart is empty
                    </section>
                ):(
                    <section className="cart cart-header">
                        You have {cartItems.length} items in the cart
                    </section>
                    )}
                <section>
                    <section className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <section>
                                        <img src={item.image} alt={item.title}></img>
                                    </section>
                                        <section className="text-wrap">
                                            <section>
                                            {item.title}
                                        </section>
                                        <section className="right">
                                            {FormatCurrency(item.price)} x { item.count }{" "}
                                            <button onClick={() => this.props.removeFromCart(item)}> X </button>
                                        </section>    
                                    </section>
                                       
                                </li>
                            ))}
                        </ul>
                    </section>
                    {cartItems.length !== 0 &&( //if cartItem is not zero then apply this
                        <section className="cart">
                            <section className="total">
                                <section>
                                    {`Total: `}
                                    {FormatCurrency(
                                        cartItems.reduce((a,c) => a + (c.price*c.count), 0)
                                        )}
                                </section>
                            </section>
                            <button className="button primary" type="button">Proceed</button>
                        </section>
                    )}
                    
                </section>
            </div>
        )}
        
}
