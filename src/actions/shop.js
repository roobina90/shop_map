export const FETCH_SHOP_STARTED = 'FETCH_SHOP_STARTED';
export const FETCH_SHOP_SUCCESS = 'FETCH_SHOP_SUCCESS';
export const FETCH_SHOP_ERROR = 'FETCH_SHOP_ERROR';
export const SET_SELECTED_SHOP = 'SET_SELECTED_SHOP';

export function fetchShopData() {
    return (dispatch) => {
        dispatch({ type: FETCH_SHOP_STARTED });
       console.log("started");
    };
}