const initState = {
    products: [],
    fetching: false,
    fetched: false,
    error: null
};

const productReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type) {
        case 'INIT_PRODUCT':
            newState.products = action.products;
            newState.fetching = false;
            newState.fetched = true;
            return newState;
        case 'FETCH_PRODUCT_START':
            newState.fetching = true;
            return newState;
        case 'FETCH_PRODUCT_FAILED':
            newState.fetching = false;
            newState.fetched = false;
            newState.error = action.error;
            return newState;
    }
    return newState;
};

export default productReducer;
