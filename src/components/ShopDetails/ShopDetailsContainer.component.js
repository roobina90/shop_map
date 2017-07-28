import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActionCreators from '../../actions/shop';
import InfoWindow from '../InfoWindow/InfoWindow.component';
import "./ShopDetails.css";



const ShopDetailsContainer = ({selectedShop}) => {
        if (selectedShop) {
            return (
                <div className="shop-shopDetailsContainer">
                    <InfoWindow data={selectedShop} />
                </div>
            );
        }
        return null;

}

ShopDetailsContainer.propTypes = {
    selectedShop: PropTypes.object
};

function mapStateToProps({ shop }) {
    return {
        selectedShop: shop.selectedShop
    };
}

export default connect(mapStateToProps)(ShopDetailsContainer);