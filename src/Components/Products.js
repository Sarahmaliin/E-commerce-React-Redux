import React, { Component } from 'react'
import formatCurrency from '../util'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <section className="product">
                                <img src={product.image} alt={product.title}></img>
                                <a href={"#" + product._id}>
                                    <p>{product.title}</p>
                                </a>
                                    <p>{product.description}</p>
                                <section className="product-price">
                                    <p>{formatCurrency(product.price)}</p> {/* för att lägga till kr/dollar osv efter kostnad */}
                                    <button type="button" className="button primary">Add to cart</button>
                                </section>
                            </section>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
