import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Marker from './Marker.component';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mapCenter = this.mapCenter.bind(this);
        this.createMarkersComponents = this.createMarkersComponents.bind(this);
        this.createMarkersRefference = this.createMarkersRefference.bind(this);
        this.state = { map: null };
        this.markers = [];
    }

    createMarkersComponents() {
        return this.props.data.map((el, i) => <Marker pass={this.createMarkersRefference} key={i} data={el} map={this.state.map} />);
    }

    createMarkersRefference(marker, id, infoWindow) {
        this.markers.push({ marker, id, infoWindow });
    }

    render() {
        return (
            <div id="map">
                <div className='map_canvas' ref="mapCanvas"></div>
                {this.state.map && (this.createMarkersComponents())}
            </div>);
    }

    componentDidMount() {
        this.setState({ map: this.createMap() });
    }


    componentDidUpdate() {
        if (this.props.selectedItem) {
            var newCenter = new google.maps.LatLng(this.props.selectedItem.latitude, this.props.selectedItem.longitude);
            this.state.map.panTo(newCenter);
            var selected = this.props.selectedItem;
            var selected1 = this.markers.filter((el) => {
                el.infoWindow.close();
                return selected.id === el.id;
            });
            google.maps.event.trigger(selected1[0].marker, "click");
        }

    }

    componentDidUnMount() {
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
        if (this.props.data.length > 0) {
            return new google.maps.LatLng(
                this.props.data[0].latitude,
                this.props.data[0].longitude)
        }
    }
}


Map.PropTypes = {

};