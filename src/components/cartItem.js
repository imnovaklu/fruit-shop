import React, {Component} from 'react';
import Store from '../store';
import './cartItem.less';

class CartItem extends Component{
    constructor(props){
        super(props);
        this._increment_btn = this._increment_btn.bind(this);
        this._delete = this._delete.bind(this);
    }

    _increment_btn(){
        const {name, price} = this.props;
        Store.dispatch({
            type: 'INCREMENT',
            payload: {
                name: name,
                price: parseFloat(price)
            }
        })
    }

    _delete(){
        Store.dispatch({
            type: 'DELETE_FROM_CART',
            payload: {
                name: this.props.name
            }
        })
    }

    render(){
        let {imgsrc, price, quantity} = this.props;

        return (
            <div className="cart-item">
                <div>
                    <img src={imgsrc}/>
                    <button className="">-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="" onClick={this._increment_btn}>+</button>
                </div>
                <div>
                    <span>{`@ $${price}each = $${(price*quantity).toFixed(2)}`}</span>
                    <span title="delete" className="pull-right text-delete" onClick={this._delete}>Delete</span>
                </div>
            </div>
        )
    }
}

export default CartItem;
