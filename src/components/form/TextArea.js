import React, { Component } from 'react';
import './textarea.scss';

class TextArea extends Component {

    render() {
        return (
            <textarea 
                className={this.props.state}
                id={this.props.name}
                name={this.props.name}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.handleChange}></textarea>
        );
    }
}

export default TextArea;