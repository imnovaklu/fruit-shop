import React, { Component } from "react";
import ReactDOM from "react-dom";
import Store from './store';
import Header from './components/header';
import Product from './components/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less';

class App extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="fruit-container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
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
