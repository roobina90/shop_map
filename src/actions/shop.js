export const FETCH_SHOP_STARTED = 'FETCH_SHOP_STARTED';

export function fetchShopData() {
    return (dispatch) => {
        dispatch({ type: FETCH_SHOP_STARTED });
       console.log("started");
    };
}

export function setSelectedShop(shop) {
    return { type: SET_SELECTED_SHOP, payload: shop };
}