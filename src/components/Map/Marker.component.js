import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoWindow from './InfoWindow.component';


export default class Marker extends Component {
    constructor(props) {
        super(props);
        this.createMarker = this.createMarker.bind(this);
        this.getInfoWindow = this.getInfoWindow.bind(this);
        this.infoWindow = null;
        this.marker = null;
    }

    componentDidUnMount() {
        //google.maps.event.clearListeners(this.map, 'zoom_changed')
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
    componentWillMount() {
        this.createMarker();
    }

    componentDidMount() {
        this.props.passRefsToParent(this.marker, this.props.data.id, this.infoWindow);
    }

    render() {
        return (<InfoWindow passRefsToParent={this.getInfoWindow} marker={this.marker} map={this.props.map} data={this.props.data} />);
    }
}