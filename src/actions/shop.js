export const FETCH_SHOP_STARTED = 'FETCH_SHOP_STARTED';

export function fetchShopData() {
    return (dispatch) => {
        dispatch({ type: FETCH_SHOP_STARTED });
       console.log("started");
    };
}