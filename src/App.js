import './App.css';
import React from 'react'
import Products from './Components/Products'
import Filter from './Components/Filter'
import Cart from './Components/Cart'

const data = require('./assets/data.json')


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: ""
    }
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x=>x.id !== product.id) 
    })//remove chosen product
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
  }

  sortProducts= (e)=>{
    //implement
    const sort = e.target.value
    this.setState(state => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "Lowest"?
        (a.price > b.price) ? 1:-1
        :
        sort === "Highest"?
        (a.price < b.price) ? 1:-1
        :
        (a.id > b.id) ? 1:-1
      ))
    }))
  }

  filterProducts = (e) =>{
    //implement
    if(e.target.value === ""){
      this.setState({size: e.taerget.value, product: data.products})
    }else{
      this.setState({
      size: e.target.value,
      products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0) //checking if the size exist in array
      })
    }
    
  }


  render(){
      return (
      <div className="grid-container">
        <header>
          <a href='/'>Shopping</a>
        </header>
        <main>
          <div className="content">
            <section className="mainContent">
              < Filter count={this.state.products.length} size={this.state.size} sort={this.state.sort} 
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              />
              < Products products={this.state.products} addToCart={this.addToCart}/>
            </section>
            <section className="sidebar">
              < Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
            </section>
          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
    );
  }

  
}

export default App;
