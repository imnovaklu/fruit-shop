const initState = {
    products: [],
    total: 0.00
};

const productReducer = (state = initState, action) => {
    var newState = {...state};
    switch (action.type) {
        case 'ADD_TO_CART':
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
            return newState;
        case 'DELETE_FROM_CART':
            const len = newState.products.length;
            for (let i = 0; i < len; i++){
                if(newState.products[i].name === action.payload.name){
                    newState.products.splice(i,1);
                    break;
                }
            }
            return newState;

        case 'INCREMENT':
        console.log('received');
            // let hasItem = false;
            for(let item of newState.products) {
                if (item.name === action.payload.name) {
                    item.quantity++;
                    newState.total += action.payload.price;
                    hasItem = true;
                    break;
                }
            }
            if(!hasItem){
                console.log(newState.products);
                newState.products.push(action.payload);
                newState.total += action.payload.price;
            }
            console.log(newState);
            return newState;
    }


    return newState;
};

export default productReducer;
