import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../Product.js'

class ProductList extends Component {
  state = {
    products: [
      {
        id:0,
        name:"paine",
        price:15
      },
      {
        id:1,
        name:"oua",
        price:2
      }
    ]
  };
  render() {
    return this.state.products.map((prod) => (
      <Product key={ prod.id } prod={prod}/>
    )
    );
  }
}
export default ProductList;
