import React, { Component } from 'react';
import Store from '../store';
import Loading from './loading';
import Error from './error';
import ManageRow from './managerRow';
import {ADD_PRODUCT} from '../constants/actionTypes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './manager.less';

class Manage extends Component {

    constructor(props){
        super(props);
        this.add_new = this.add_new.bind(this);
    }

    add_new(){
        Store.dispatch({
            type: ADD_PRODUCT,
        })
    }

    render() {
        const {product} = Store.getState();
        let {products, fetching, fetched, fetch_error} = product;
        products = products.map((item, index)=>(
            <ManageRow key={index}
                       index={index}
                       name={item.name}
                       price={item.price}
                       directory={item.directory}
                       amount={item.amount}
                       discount={item.discount}
                       color={item.color}
                       description={item.description} _id={item._id}/>
        ));

        return (
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                    {fetched &&
                    <table className="table table-bordered table-hover table-responsive table-theme" ref='table'>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td className="reduced-width">directory</td>
                            <td className="reduced-width">price</td>
                            <td className="reduced-width">discount</td>
                            <td className="reduced-width">amount</td>
                            <td>colors</td>
                            <td>description</td>
                            <td>operations</td>
                        </tr>
                        </thead>
                        <tbody>
                        {products}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan="8">
                                <button className="btn-gold" onClick={this.add_new}>Add New Product</button>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                    }
                    {fetching && <Loading/>}
                    {fetch_error && <Error error="Sorry! Something went wrong! Please try later!"/>}
                </div>
            </div>
        );
    }
}

export default Manage;
