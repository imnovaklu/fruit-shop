import React, { Component } from 'react';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import './manageRow.less';


class ManageRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit_button_text: 'Edit',
            disabled: true
        };
        this.toggleBtnState = this.toggleBtnState.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    toggleBtnState(){
        let text = this.state.edit_button_text == 'Edit'? 'Save': 'Edit';
        this.setState({
            edit_button_text: text,
            disabled: !this.state.disabled
        })
    }

    edit(){
        this.toggleBtnState();
    }

    save(){
        var $inputs = $(`#tr${this.props.index}`).find('input[name]'),
            serialized = {};
        $inputs.map((index, input) => {
            serialized[$(input).attr('name')] = input.value;
        });
        console.log(serialized);
        this.toggleBtnState();
    }

    render() {
        let {index, name, directory, price, discount, amount, color, description, _id} = this.props;
        console.log('color:' + color);
        let btn_action = this.state.disabled? this.edit: this.save;

        return (
            <tr key={index} id={`tr${index}`}>
                <td><input type="text" disabled={this.state.disabled} defaultValue={name} name="name"/></td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={directory} name="directory"/>
                </td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={price} name="price"/>
                </td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={discount} name="discount"/>
                </td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={amount} name="amount"/>
                </td>
                <td><input type="text" disabled={this.state.disabled} defaultValue={color} name="colors"/></td>
                <td><input type="text" disabled={this.state.disabled} defaultValue={description} name="description"/></td>
                <td>
                    <input type="hidden" defaultValue={_id}/>
                    <span onClick={btn_action} className="sparkle"><i className="fa fa-pencil"></i> {this.state.edit_button_text}</span>
                    <span className="sparkle"><i className="fa fa-trash"></i> Delete</span>
                    {/*<button className="btn btn-success" onClick={btn_action}>{this.state.edit_button_text}</button>
                    <button className="btn btn-danger">Delete</button>*/}
                </td>
            </tr>
        );
    }
}

export default ManageRow;
