import React, {Component} from 'react';
import './product.less';
import 'bootstrap/dist/css/bootstrap.min.css';


class Product extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {name, price, imgsrc, quantity} = this.props;

        return (
            <div className="fruit-card col-lg-3 col-md-3 col-sm-4 col-xs-6">
                <div>
                    <img src={imgsrc}/>
                    <p>{name}</p>
                    <h4><span className="price">{`$${price}  `}</span><span className="stock">{`${quantity} In Stock`}</span></h4>
                    <button className="btn ">ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Product;