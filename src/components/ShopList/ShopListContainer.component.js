import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActionCreators from '../../actions/shop';
import ShopList from './ShopList.component';

class ShopListContainer extends Component {
    constructor(props) {
        super(props);
        this.handleShopChange = this.handleShopChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchShopData();
    }

    handleShopChange(shop) {
        
        this.props.setSelectedShop(shop);
    }

    render() {
        return (
            <div className="shop-shopListContainer">
                {this.props.isFetching && this.props.shops.length === 0 && <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>}
                {!this.props.isFetching && this.props.shops.length === 0 && <h2 className="shop-u-alert">Ooops! Could not get shops.</h2>}
                {this.props.shops.length > 0 && <ShopList shops={this.props.shops} onShopClick={this.handleShopChange} />}
                    
            </div>

        );
    }
}

ShopListContainer.propTypes = {
    shops: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchShopData: PropTypes.func.isRequired,
    setSelectedShop: PropTypes.func.isRequired
};

function mapStateToProps({shop}) {
    return { ...shop };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ShopActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);