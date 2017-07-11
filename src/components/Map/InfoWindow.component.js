import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';



export default class InfoWindow extends Component {
    constructor(props) {
        super(props);
        this.infoWindow = null;
        this.infoWindowNode = null;
        this.daysOfWeek = { Sunday: "Niedziela", Monday: "Poniedziałek", Tuesday: "Wtorek", Wednesday: "Środa", Thursday: "Czwartek", Friday: "Piątek", Saturday: "Sobota" };
        //var today = new Date();
        this.todaysDateDay = new Date().getDay();
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
        const data = this.props.data;
        return (<div ref={(info) => { this.infoWindowNode = info } }>
            <img src={data.logo} width="50px" alt={data.siec} />
            <span>{data.siec}</span>
            <div>{data.adres}</div>
            <hr />
            <ul>
                {
                    Object.keys(this.daysOfWeek).map((el, i) => (<li key={i} className={(i === this.todaysDateDay) ? "active" : ""}><span>{this.daysOfWeek[el]}:</span><span>{data.godziny[0][el]}</span></li>))
                }
            </ul>
        </div>)
    }
}