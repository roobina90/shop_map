import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActionCreators from '../../actions/shop';
import ShopList from './ShopList.component';
import InfoWindow from '../Map/InfoWindow.component';

class ShopListContainer extends Component {
    constructor(props) {
        super(props);
        this.handleShopChange = this.handleShopChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchShopData();

    }

    handleShopChange(shop) {
        console.log(`Yay! You clicked shop ${shop.siec}`);
        this.props.setSelectedShop(shop)
    }

    render() {
        return (
            <div>
                {this.props.isFetching && this.props.shops.length === 0 && <h2>Loading...</h2>}
                {!this.props.isFetching && this.props.shops.length === 0 && <h2>Ooops! Could not get shops.</h2>}
                {this.props.shops.length > 0 &&
                    <div style={{ opacity: this.props.isFetching ? 0.5 : 1 }}>
                            <ShopList shops={this.props.shops} onShopClick={this.handleShopChange} />
                            <InfoWindow data={this.props.selectedShop} />
                    </div>}
                    
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