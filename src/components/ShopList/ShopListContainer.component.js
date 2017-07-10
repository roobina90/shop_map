import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActionCreators from '../../actions/shop';
import ShopList from './ShopList.component';

class ShopListContainer extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		console.log("fetch shop data");

	}

	render() {
		return (
            <ShopList shops={this.props.shops} />		
		);
	}
}

ShopListContainer.propTypes = {
    shops: PropTypes.array.isRequired
};

function mapStateToProps({shop}) {
	return {...shop};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ShopActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);