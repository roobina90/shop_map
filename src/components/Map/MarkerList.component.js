import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class MarkerList extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }
    onClick() {
        this.props.onClick(this.props.data)
    }

    render() {
        return (
            <li onClick={this.onClick} >{this.props.data.adres}</li>
        )
    }
}

MarkerList.propTypes = {
    onClick: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};