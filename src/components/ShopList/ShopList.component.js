import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shop from '../Shop/Shop.component';

export default class ShopList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const shops = this.props.shops;
        return (
            <ul>
                {shops.map((shop, i) => <Shop key={i} data={shop} onClick={this.props.onShopClick} />)}
            </ul>
        )
    }
}

ShopList.propTypes = {
    onShopClick: PropTypes.func.isRequired,
    shops: PropTypes.array.isRequired
};