export const FETCH_SHOP_STARTED = 'FETCH_SHOP_STARTED';
export const FETCH_SHOP_SUCCESS = 'FETCH_SHOP_SUCCESS';
export const FETCH_SHOP_ERROR = 'FETCH_SHOP_ERROR';
export const SET_SELECTED_SHOP = 'SET_SELECTED_SHOP';

export function fetchShopData() {
    return (dispatch) => {
        dispatch({ type: FETCH_SHOP_STARTED });
        fetch('/shops')
            .then(res => res.json())
            .then(data => {
                dispatch({  type: FETCH_SHOP_SUCCESS, payload: data });
            })
            .catch(err => dispatch({ type: FETCH_SHOP_ERROR, payload: err }));
    };
}

export function setSelectedShop(shop) {
    return { type: SET_SELECTED_SHOP, payload: shop };
}