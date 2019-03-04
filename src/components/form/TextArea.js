import React, { Component } from 'react';

class TextArea extends Component {

    render() {
        return (
            <textarea id={this.props.name}
                name={this.props.name}
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.handleChange}></textarea>
        );
    }
}

export default TextArea;