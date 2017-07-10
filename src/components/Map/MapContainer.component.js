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
        if (this.props.isFetching) {
            return (<div>Map is loading</div>)
        } else {
            return (
                <Map data={this.props.shops} />);
        }
    }
}

MapContainer.PropTypes = {

};



function mapStateToProps({shop}) {
    return { ...shop };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ShopActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);