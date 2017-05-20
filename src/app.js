import React, { Component } from "react";
import ReactDOM from "react-dom";
import Store from './store';
import Header from './components/header';
import Product from './components/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {product} = Store.getState();
        console.log(product);

        return (
            <div>
                <Header/>
                <div className="fruit-container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                {product.products.map((item, index)=> (
                                    <Product name={item.itemName} price={item.price} imgsrc={item.imgSrc} quantity={item.quantityRemaining} key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 checkout">
                            <h4>Shopping Cart</h4>
                            <span>2 items</span>
                            <div className="cart-container">

                            </div>
                            <div className="checkout-container">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const app = document.getElementById('root');
const renderDOM = () => {
    ReactDOM.render( <App/>, app);
};

renderDOM();
Store.subscribe(renderDOM);
