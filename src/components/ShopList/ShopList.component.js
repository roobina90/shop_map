import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShopList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
      Here are some shops or not!
       {this.props.shops.map((el) => {
           <li>el</li>
       })}
      </ul>
    )
  }
}

ShopList.propTypes = {
};