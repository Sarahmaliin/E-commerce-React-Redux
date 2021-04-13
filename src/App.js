import './App.css';
import React from 'react'
import Products from './Components/Products'
import Filter from './Components/Filter'
import Cart from './Components/Cart'
import store from './store'
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems") ? 
      JSON.parse(localStorage.getItem("cartItems")) 
      : 
      [], //Doing opposite here, using same name as we set in example cartItems below
    }
  }

  createOrder = (order) =>{
    alert("Need to save order for" + order.name )
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x=>x.id !== product.id) 
    })//remove chosen product
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x=>x.id !== product.id) )) 
  } 

  addToCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item =>{
        if(item.id === product.id){ //if product already is in cart
        item.count++; 
        alreadyInCart = true;
      }
    })
    if(!alreadyInCart){ //if not in cart
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems)) //to save items even when user refreshes site
  }

  render(){
      return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href='/'>Shopping</a>
        </header>
        <main>
          <div className="content">
            <section className="mainContent">
              < Filter />
              < Products addToCart={this.addToCart}/>
            </section>
            <section className="sidebar">
              < Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder}/>
            </section>
          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
      </Provider> 
    );
  }

  
}

export default App;
