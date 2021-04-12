import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <section className="filter-result">
                    {this.props.count} Products{" "}
                </section>
                <section className="filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value="">Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </section>
                <section className="filter-size">
                    Sizes {" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </section>
            </div>
        )
    }
}
