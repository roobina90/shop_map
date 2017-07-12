import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store.config';
import ShopListContainer from './ShopList/ShopListContainer.component';
import MapContainer from './Map/MapContainer.component';
import ShopDetailsContainer from './ShopDetails/ShopDetailsContainer.component';
import "./App.css";
import "../style/common.css";


const store = configureStore();

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="shop-appContainer">
					<MapContainer />
					<ShopListContainer />
					<ShopDetailsContainer />
				</div>
			</Provider>
		);
	}
}