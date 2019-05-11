import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  getStyle = () => {
    return {
      border:'2px'
    };
  }
  render() {
    const {id, name, price}=this.props.prod;
    return (
      <div style={this.getStyle()}>
        {name}{' '}{price}
      </div>
    );
  }
}
export default Product;
