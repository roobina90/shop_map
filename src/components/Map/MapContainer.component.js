import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActionCreators from '../../actions/shop';
import Map from './Map.component';
//API key : AIzaSyD-Z2FglVKWeh1gguz95HE8VlytR4vcYEw 



class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isFetching || this.props.shops.length === 0) {
            return (<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>);
        } else {
            return (
                <Map selectedItem={this.props.selectedShop} data={this.props.shops} />);
        }
    }
}

MapContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    selectedShop: PropTypes.object,
    shops: PropTypes.array.isRequired
};



function mapStateToProps({shop}) {
    return { ...shop };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ShopActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);