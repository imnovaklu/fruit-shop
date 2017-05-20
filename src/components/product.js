import React, {Component} from 'react';
import './product.less';
import 'bootstrap/dist/css/bootstrap.min.css';


class Product extends Component{
    render(){
        return (
            <div className="fruit-card">
                <div>
                    <img />
                    <p>TEST</p>
                    <h4>MONEY</h4>
                    <button className="btn ">ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Product;