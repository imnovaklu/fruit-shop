import {combineReducers} from 'redux';
import productReducer from './reducers/productReducer';

const reducers = combineReducers({
    product: productReducer
});

export default reducers;