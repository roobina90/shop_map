import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoWindow from '../InfoWindow/InfoWindow.component';


export default class Marker extends Component {
    constructor(props) {
        super(props);
        this.createMarker = this.createMarker.bind(this);
        this.getInfoWindow = this.getInfoWindow.bind(this);
        this.infoWindow = null;
        this.marker = null;
    }

    componentWillMount() {
        this.createMarker();
    }

    componentDidMount() {
        this.props.passRefsToParent(this.marker, this.props.data.id, this.infoWindow);
    }

    getInfoWindow(windowObj) {
        this.infoWindow = windowObj;
    }

    createMarker() {
        this.marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.props.data.latitude, this.props.data.longitude),
            map: this.props.map,
            icon: {
                url: this.props.data.logo,
                scaledSize: new google.maps.Size(60, 30),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0)
            }
        });
    }

    render() {
        return (<InfoWindow passRefsToParent={this.getInfoWindow} marker={this.marker} map={this.props.map} data={this.props.data} />);
    }
}

Marker.propTypes = {
    passRefsToParent: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    map: PropTypes.object.isRequired
};