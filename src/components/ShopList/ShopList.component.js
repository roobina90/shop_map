import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShopList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const shops = this.props.shops;
        return (

            <ul>
                Here are some shops or not!
       {shops.map((el) => <li onClick={this.props.onShopClick.bind(null, el)}>{el.siec}</li>
                )}
            </ul>
        )
    }
}

ShopList.propTypes = {
    onShopClick: PropTypes.func.isRequired,
    shops: PropTypes.array.isRequired
};