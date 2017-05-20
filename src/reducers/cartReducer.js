const initState = {
    products: [],
    total: 0.00
};

const productReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('received');
            let hasItem = false;
            for (let item of newState.products) {
                if (item.name === action.payload.name) {
                    item.quantity++;
                    newState.total += action.payload.price;
                    hasItem = true;
                    break;
                }
            }
            if(!hasItem){
                newState.products.push(action.payload);
                newState.total += action.payload.price;
            }
            console.log(newState);
            return newState;
    }
    return newState;
};

export default productReducer;
