import React, { Component } from 'react'
import FormatCurrency from '../util'
import  Fade from 'react-reveal/Fade'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            adress:"",
            showCheckout: false //by default checkoutform is not visible
        } 
    }

    handleInput = (e) =>{
        this.setState({[e.taerget.name]: e.target.value }) //update state of component
    }

    createOrder = (e) =>{
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            adress: this.state.adress,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order)
    }

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
                        <Fade left cascade >
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
                        </Fade>
                    </section>
                    {cartItems.length !== 0 &&( //if cartItem is not zero then apply this
                        <>
                        <section className="cart">
                            <section className="total">
                                <section>
                                    {`Total: `}
                                    {FormatCurrency(
                                        cartItems.reduce((a,c) => a + (c.price*c.count), 0)
                                        )}
                                </section>
                            </section>
                            <button className="button primary" type="button" onClick={() => {this.setState({showCheckout: true})}}>
                                Proceed
                                </button>
                        </section>
                        {this.state.showCheckout &&(
                            < Fade top cascade >
                                <section className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <label>Email</label>
                                                <input name="email" type="email" required onChange={this.handleInput}></input>
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input name="name" type="text" required onChange={this.handleInput}></input>
                                            </li>
                                            <li>
                                                <label>Adress</label>
                                                <input name="adress" type="text" required onChange={this.handleInput}></input>
                                            </li>
                                            <li>
                                                <button className="button primary" type="submit">Checkout</button>
                                            </li>
                                        </ul>
                                    </form>
                                </section>
                            </Fade>
                        )}
                        </>
                    )}
                    
                </section>
            </div>
        )}
        
}
