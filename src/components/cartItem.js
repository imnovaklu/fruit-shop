import React, {Component} from 'react';
import Store from '../store';
import './cartItem.less';

class CartItem extends Component{
    constructor(props){
        super(props);
    }



    _increment_btn(e){
        const elem = e.target;
        Store.dispatch({
            type: 'INCREMENT',
            payload: {
                name: elem.getAttribute('data-name'),
                price: parseFloat(elem.getAttribute('data-price')),
                imgSrc: elem.getAttribute('data-imgSrc'),

            }
        })
    }

    render(){
        let {imgsrc, name, price, quantity} = this.props;

        return (
            <div className="cart-item">
                <div>
                    <img src={imgsrc}/>
                    <button className="">-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="" onClick={this._increment_btn}>+</button>
                </div>
                <div>
                    <span>{`@ $${price}each = $${price*quantity}`}</span>
                    <span title="delete" className="pull-right text-delete">Delete</span>
                </div>
            </div>
        )
    }
}

export default CartItem;