import React, { Component } from 'react';
import PropTypes from 'prop-types';

//API key : AIzaSyD-Z2FglVKWeh1gguz95HE8VlytR4vcYEw 



export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="map">
            <div className='UpdatedText'>
                <p>Current Zoom: 10</p>
            </div>
            <div className='map_canvas' ref="mapCanvas">
            </div>
        </div>
    }

    componentDidMount() {  
        this.map = this.createMap()
        this.marker = this.createMarker()
        this.infoWindow = this.createInfoWindow()

        google.maps.event.addListener(this.map, 'zoom_changed', () => this.handleZoomChange())
    }

    // clean up event listeners when component unmounts
    componentDidUnMount() {
        google.maps.event.clearListeners(this.map, 'zoom_changed')
    }

    createMap() {
        let mapOptions = {
            zoom: 10,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
            this.props.initialCenter.lat,
            this.props.initialCenter.lng
        )
    }

    createMarker() {
        return new google.maps.Marker({
            position: this.mapCenter(),
            map: this.map
        })
    }

    createInfoWindow() {
        let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
        return new google.maps.InfoWindow({
            map: this.map,
            anchor: this.marker,
            content: contentString
        })
    }

    handleZoomChange() {
        this.setState({
            zoom: this.map.getZoom()
        })
    }
}

var initialCenter = { lng: -90.1056957, lat: 29.9717272 }



