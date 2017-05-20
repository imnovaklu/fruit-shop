import React, {Component} from 'react';
import './cartItem.less';

class CartItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {imgsrc, name, price, quantity} = this.props;

        return (
            <div className="cart-item">
                <div>
                    <img src={imgsrc}/>
                    <button className="">-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="">+</button>
                </div>
                <div>
                    <span>{`@ $${price}each = $${price*quantity}`}</span>
                    <span>Delete</span>
                </div>
            </div>
        )
    }
}

export default CartItem;