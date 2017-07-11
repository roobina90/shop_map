import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';



export default class InfoWindow extends Component {
    constructor(props) {
        super(props);
        this.infoWindow = null;
        this.infoWindowNode = null;
    }

    componentDidMount() {
        if (this.props.marker && this.props.map && this.props.passRefsToParent) {
            this.infoWindow = new google.maps.InfoWindow();
            this.makeInfoWindowEvent(this.props.map, this.infoWindow, ReactDOM.findDOMNode(this.infoWindowNode), this.props.marker);
            this.props.passRefsToParent(this.infoWindow);
        }

    }


    makeInfoWindowEvent(map, infowindow, contentString, marker) {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
        });
    }

    render() {
        return (<div ref={(info) => { this.infoWindowNode = info } }>
            <img src={this.props.data.logo} width="50px" alt={this.props.data.siec} />
            <hr />
            <div>piątek - {this.props.data.godziny[0].Friday}</div>
        </div>)
    }
}