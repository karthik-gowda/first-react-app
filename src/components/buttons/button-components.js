import React from 'react';
import './button-components.css';


class Button extends React.Component {
    constructor(){
        super();

        this.state = {
            value: 'CheckOut For More'
        }
    }
    render() {
        return (
            <button type="Reset" >{this.state.value}</button>
        )
    }
}

export default Button;