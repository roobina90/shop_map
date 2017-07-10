import { FETCH_SHOP_STARTED, FETCH_SHOP_SUCCESS, FETCH_SHOP_ERROR, SET_SELECTED_SHOP } from '../actions/shop';

const DEFAULT_STATE = {
	selectedShop: undefined,
	shops: [],
	isFetching: false
};

const shopData = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case FETCH_SHOP_STARTED:
			return {
				...state,
				isFetching: true
			};
		case FETCH_SHOP_SUCCESS:
			return {
				shops: action.payload,
				isFetching: false
			};
		case SET_SELECTED_SHOP:
			return {
				...state,
				selectedShop: action.payload
			};
		default:
			return state;
	}
};

export default shopData;
