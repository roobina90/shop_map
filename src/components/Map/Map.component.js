import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Marker from '../Marker/Marker.component';
import "./Map.css";

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mapCenter = this.mapCenter.bind(this);
        this.createMarkersComponents = this.createMarkersComponents.bind(this);
        this.createMarkersRefference = this.createMarkersRefference.bind(this);
        this.state = { map: null };
        this.markers = [];
        this.mapCanvas = null;
    }

    componentDidMount() {
        this.setState({ map: this.createMap() });
    }

    componentDidUpdate() {
        if (this.props.selectedItem) {
            const newCenter = new google.maps.LatLng(this.props.selectedItem.latitude, this.props.selectedItem.longitude);
            this.state.map.panTo(newCenter);
            const selected = this.markers.filter((el) => {
                el.infoWindow.close();
                return this.props.selectedItem.id === el.id;
            });
            google.maps.event.trigger(selected[0].marker, "click");
        }

    }
    createMarkersComponents() {
        return this.props.data.map((el) => <Marker passRefsToParent={this.createMarkersRefference} key={el.id} data={el} map={this.state.map} />);
    }

    createMarkersRefference(marker, id, infoWindow) {
        this.markers.push({ marker, id, infoWindow });
    }

    createMap() {
        let mapOptions = {
            zoom: 20,
            center: this.mapCenter()
        };
        return new google.maps.Map(this.mapCanvas, mapOptions);
    }

    mapCenter() {
        if (this.props.data.length > 0) {
            return new google.maps.LatLng(
                this.props.data[0].latitude,
                this.props.data[0].longitude);
        }
    }
    render() {
        return (
            <div className="shop-mapContainer">
                <div className="shop-mapContainer-canvas" ref={(map)=>{this.mapCanvas = map}}></div>
                <div className="shop-u-hidden">{this.state.map && (this.createMarkersComponents())}</div>
            </div>);
    }

}


Map.propTypes = {
    data: PropTypes.array,
    selectedItem: PropTypes.object
};