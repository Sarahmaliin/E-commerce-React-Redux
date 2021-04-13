import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterProducts, sortProducts } from '../Actions/productActions'



class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts?(
            <p>Loading...</p>
            ): 
            (<div className="filter">
                <section className="filter-result">
                    {this.props.filteredProducts.length} Products{" "}
                </section>
                <section className="filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="Latest" >Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </section>
                <section className="filter-size">
                    Sizes {" "}
                    <select value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </section>
            </div>)
        )
    }
}
export default connect((state) => ({
    size: state.product.size,
    sort: state.product.sort,
    products: state.product.items,
    filteredProducts: state.product.filteredItems
}), 
{
    filterProducts,
    sortProducts
}
)(Filter)
