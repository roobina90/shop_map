import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from "autobind-decorator";
import "./Shop.css";


export default class Shop extends Component {
    constructor(props) {
        super(props);
    }

    @autobind
    onClick() {
        this.props.onClick(this.props.data);
    }

    render() {
        return (
            <li className={"shop-shopList-item " + (this.props.isActive ? "is-active" : "")} onClick={this.onClick} >{this.props.data.adres}</li>
        );
    }
}

Shop.propTypes = {
    onClick: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};