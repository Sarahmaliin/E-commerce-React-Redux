import './App.css';
import React from 'react'
import Products from './Components/Products'

const data = require('./assets/data.json')


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
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
            < Products products={this.state.products} />
            </section>
            <section className="sidebar">
              CartItems
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
