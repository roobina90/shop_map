import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Marker extends Component {
    constructor(props) {
        super(props);
        this.createMarker = this.createMarker.bind(this);
        this.makeInfoWindowEvent = this.makeInfoWindowEvent.bind(this);
    }


    makeInfoWindowEvent(map, infowindow, contentString, marker) {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
        });
    }

    createMarker() {
        var infowindow = new google.maps.InfoWindow();
        var infoWindowText = `<img src="${this.props.data.logo}" width="50px" alt="${this.props.data.siec}" /><hr /><div>${this.props.data.godziny[0].Friday} - piątek</div>`;
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
        this.makeInfoWindowEvent(this.map, infowindow, infoWindowText, marker);
    }
    componentDidMount() {
        this.createMarker();

    }

    render() {
        return null;
    }
}