import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class InfoWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <img src={this.props.data.logo} width="50px" alt={this.props.data.siec} />
            <hr />
            <div>piątek - {this.props.data.godziny[0].Friday}</div>
        </div>)
    }
}