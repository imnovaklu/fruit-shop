import React, {Component} from 'react';
import './product.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from '../store';

class Product extends Component{
    constructor(props){
        super(props);

    }

    _add_to_cart(e){
        const elem = e.target;
        Store.dispatch({
            type: 'ADD_TO_CART',
            payload: {
                name: elem.getAttribute('data-name'),
                price: parseFloat(elem.getAttribute('data-price')),
                imgsrc: elem.getAttribute('data-imgsrc'),
                quantity: 1
            }
        })
    }

    render(){
        let {name, price, imgsrc, quantity} = this.props;

        return (
            <div className="fruit-card col-lg-3 col-md-3 col-sm-4 col-xs-6">
                <div>
                    <img src={imgsrc}/>
                    <p>{name}</p>
                    <h4><span className="price">{`$${price}  `}</span><span className="stock">{`${quantity} In Stock`}</span></h4>
                    <button className="btn btn_add_cart" data-name={name} data-price={price} data-imgsrc={imgsrc} onClick={this._add_to_cart}>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Product;