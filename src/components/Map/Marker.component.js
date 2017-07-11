import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import InfoWindow from './InfoWindow.component';


export default class Marker extends Component {
    constructor(props) {
        super(props);
        this.createMarker = this.createMarker.bind(this);
        this.makeInfoWindowEvent = this.makeInfoWindowEvent.bind(this);
        this.infoWindowRef = null;
    }


    makeInfoWindowEvent(map, infowindow, contentString, marker) {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
        });
    }

    componentDidUnMount() {
        //google.maps.event.clearListeners(this.map, 'zoom_changed')
    }

    createMarker() {
        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.props.data.latitude, this.props.data.longitude),
            map: this.props.map,
            icon: {
                url: this.props.data.logo,
                scaledSize: new google.maps.Size(60, 30),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0)
            }
        });
        this.makeInfoWindowEvent(this.map, infowindow, ReactDOM.findDOMNode(this.infoWindowRef), marker);
        this.props.pass(marker, this.props.data.id, infowindow);
    }
    componentDidMount() {
        this.createMarker();
    }

    render() {
        return (<InfoWindow data={this.props.data} ref={(infoWindow) => { this.infoWindowRef = infoWindow; }} />);
    }
}