import React, { Component } from 'react';
import '../public.less';

class Error extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {error} = this.props;

        return (
            <label>{error}</label>
        );
    }
}

export default Error;