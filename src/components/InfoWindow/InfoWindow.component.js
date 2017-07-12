import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./InfoWindow.css";



export default class InfoWindow extends Component {
    constructor(props) {
        super(props);
        this.infoWindow = null;
        this.infoWindowNode = null;
        this.daysOfWeek = { Sunday: "Niedziela", Monday: "Poniedziałek", Tuesday: "Wtorek", Wednesday: "Środa", Thursday: "Czwartek", Friday: "Piątek", Saturday: "Sobota" };
        this.todaysDateDay = new Date().getDay();
    }

    componentDidMount() {
        if (this.props.marker && this.props.map && this.props.passRefsToParent) {
            this.infoWindow = new google.maps.InfoWindow();
            this.makeInfoWindowEvent(this.props.map, this.infoWindow, this.infoWindowNode, this.props.marker);
            this.props.passRefsToParent(this.infoWindow);
        }

    }

    makeInfoWindowEvent(map, infowindow, contentString, marker) {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
        });
    }


    componentDidUnMount() {
        google.maps.event.clearListeners(this.props.marker, 'click');
    }

    render() {
        const data = this.props.data;
        return (
            <div className="shop-infoWindow" ref={(info) => {this.infoWindowNode = info}}>
                <img className="shop-infoWindow-logo" src={data.logo} alt={data.siec} title={data.siec}/>
                <span className="shop-infoWindow-name">{data.siec}</span>
                <div className="shop-infoWindow-addres">{data.adres}</div>
                <hr />
                <ul className="shop-infoWindow-openHours">
                    {
                        Object.keys(this.daysOfWeek).map((el, i) => (<li key={i} className={"shop-infoWindow-openHours-item "+ ((i === this.todaysDateDay) ? "is-active" : "")}><span className="shop-infoWindow-openHours-item--left">{this.daysOfWeek[el]}:</span><span className="shop-infoWindow-openHours-item--right">{data.godziny[0][el]}</span></li>))
                    }
                </ul>
            </div>);
    }
}

InfoWindow.propTypes = {
    marker: PropTypes.object,
    map: PropTypes.object,
    data: PropTypes.object.isRequired,
    passRefsToParent: PropTypes.func
};