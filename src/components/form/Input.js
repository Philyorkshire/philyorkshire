import React, { Component } from 'react';
import './input.scss'

class Input extends Component {

    render() {
        return (
            <input
                className={this.props.state}
                id={this.props.name}
                name={this.props.name}
                type={this.props.type}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.handleChange}
            />
        );
    }
}

export default Input;