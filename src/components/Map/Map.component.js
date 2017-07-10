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

    // clean up event listeners when component unmounts
    componentDidUnMount() {
        ``
        //google.maps.event.clearListeners(this.map, 'zoom_changed')
    }

    createMap() {
        let mapOptions = {
            zoom: 10,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        // if (this.props.selectedShop) {
        //     return new google.maps.LatLng(
        //         this.props.selectedShop.latitude,
        //         this.props.selectedShop.longitude
        //     )
        // } else {
        if(this.props.data.length>0) {
             return new google.maps.LatLng(
            this.props.data[0].latitude,
           this.props.data[0].longitude)
        }
       
        //}

    }

    createMarkers() {
        return this.props.data.map((el) => {
            return new google.maps.Marker({
                position: new google.maps.LatLng(el.latitude, el.longitude),
                map: this.map
            })
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