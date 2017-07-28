import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shop from '../Shop/Shop.component';
import autobind from "autobind-decorator";
import "./ShopList.css";

export default class ShopList extends Component {
    constructor(props) {
        super(props);
        this.selected = {id:-1};
    }

    @autobind
    onClick(data) {
        this.selected = data;
        this.props.onShopClick(data);
    }

    render() {
        const shops = this.props.shops;
        return (
            <ul className="shop-shopList">
                {shops.map((shop, i) => <Shop isActive={this.selected.id === shop.id} key={i} data={shop} onClick={this.onClick} />)}
            </ul>
        );
    }
}

ShopList.propTypes = {
    onShopClick: PropTypes.func.isRequired,
    shops: PropTypes.array.isRequired
};