import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store.config';
import ShopListContainer from './ShopList/ShopListContainer.component.js';
import MapContainer from './Map/MapContainer.component.js';


const store = configureStore();

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<MapContainer initialCenter={{ lng: -90.1056957, lat: 29.9717272 }} />
					<ShopListContainer />
				</div>
			</Provider>
		);
	}
}