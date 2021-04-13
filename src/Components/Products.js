import React, { Component } from 'react'
import formatCurrency from '../util'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom'

export default class Products extends Component {
    constructor(props){
        super(props)
        this.state ={
            product: null,
        }
    }

    openModal = (product =>{
        this.setState({product}) 
    })
    closeModal = () =>{
        this.setState({product: null})
    }

    render() {
        const {product} = this.state
        return (
            <div>
                < Fade bottom cascade>
                    <ul className="products">
                        {this.props.products.map(product => (
                            <li key={product.id}>
                                <section className="product">
                                    <img src={product.image} alt={product.title} onClick={() => this.openModal(product)}></img>
                                    <a href={"#" + product.id}>
                                        <p>{product.title}</p>
                                    </a>
                                        <p>{product.description}</p>
                                    <section className="product-price">
                                        <p>{formatCurrency(product.price)}</p> {/* för att lägga till kr/dollar osv efter kostnad */}
                                        <button onClick={() => this.props.addToCart(product)} type="button" className="button primary">Add to cart</button>
                                    </section>
                                </section>
                            </li>
                        ))}
                    </ul>
                </Fade>

                {
                    product &&( //when product exist that is clicked on this will happen
                        <Modal isOpen={true} onRequestClose={this.closeModal}>
                            <Zoom>
                                <button onClick={this.closeModal} className="close-modal">X</button>
                                <section className="product-details">
                                    <img src={product.image} alt={product.title}></img>
                                    <section className="product-details-description">
                                        <p>{product.title}</p>
                                        <p>{product.description}</p>
                                        <p>Available sizes:{ " " }
                                            {product.availableSizes.map(x=>(

                                            <span> { " " } <button className="button">{x}</button></span>

                                        ))}</p>
                                        <section className="product-price">
                                            <p>
                                                { formatCurrency(product.price) }
                                            </p>
                                            <button className="button primary" onClick={() =>{
                                                this.props.addToCart(product)
                                                this.closeModal()
                                            }}>
                                                Add to cart
                                            </button>
                                        </section>
                                        
                                    </section>
                                    
                                </section>
                            </Zoom>
                        </Modal>
                    )
                }

            </div>
        )
    }
}
