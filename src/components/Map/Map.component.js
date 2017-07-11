import React, { Component } from 'react';
import PropTypes from 'prop-types';

//API key : AIzaSyD-Z2FglVKWeh1gguz95HE8VlytR4vcYEw 

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkers = this.createMarkers.bind(this);
        this.mapCenter = this.mapCenter.bind(this);
    }

    render() {
        return (
            <div id="map">
                <div className='map_canvas' ref="mapCanvas"></div>
            </div>);
    }

    componentDidMount() {
        this.map = this.createMap();
        this.markers = this.createMarkers();

        // this.infoWindow = this.createInfoWindow();

        //google.maps.event.addListener(this.map, 'zoom_changed', () => this.handleZoomChange())
    }

    componentDidUpdate() {
        //this.map = this.createMap();
        //this.markers = this.createMarkers();
        if (this.props.selectedItem) {
            var newCenter = new google.maps.LatLng(this.props.selectedItem.latitude, this.props.selectedItem.longitude);
            this.map.panTo(newCenter);
            var selected = this.props.selectedItem;
            var selected1 = this.markers.filter((el) => {
                return el.adres === selected.adres;
            });
            google.maps.event.trigger(selected1[0].marker, "click");
        }

    }

    // clean up event listeners when component unmounts
    componentDidUnMount() {
        ``
        //google.maps.event.clearListeners(this.map, 'zoom_changed')
    }

    createMap() {
        let mapOptions = {
            zoom: 20,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        if (this.props.selectedItem) {
            return new google.maps.LatLng(
                this.props.selectedItem.latitude,
                this.props.selectedItem.longitude
            )
        } else {
            if (this.props.data.length > 0) {
                return new google.maps.LatLng(
                    this.props.data[0].latitude,
                    this.props.data[0].longitude)
            }
        }
    }

    createMarkers() {


        function makeInfoWindowEvent(map, infowindow, contentString, marker) {
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(contentString);
                infowindow.open(map, marker);
            });
        }

        var infowindow = new google.maps.InfoWindow();

        return this.props.data.map((el, i) => {
            var infoWindowText = `<img src="${el.logo}" width="50px" alt="${el.siec}" /><hr /><div>${el.godziny[0].Friday} - piątek</div>`;
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(el.latitude, el.longitude),
                map: this.map,
                icon: {
                    url: el.logo,
                    scaledSize: new google.maps.Size(60, 30),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 0)
                }
            });
            makeInfoWindowEvent(this.map, infowindow, infoWindowText, marker);
            return { marker, adres: el.adres };
        });
    }

    // createInfoWindow() {
    //     let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    //     return new google.maps.InfoWindow({
    //         map: this.map,
    //         anchor: this.marker,
    //         content: contentString
    //     })
    // }

    // handleZoomChange() {
    //     this.setState({
    //         zoom: this.map.getZoom()
    //     })
    // }
}


Map.PropTypes = {

};