import React, { Component } from 'react';
import Input from '../../components/form/Input';
import TextArea from '../../components/form/TextArea';

class Contact extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: {
                state: 'untouched',
                value: ''
            },
            email: {
                state: 'untouched',
                value: ''
            },
            telephone: {
                state: 'untouched',
                value: ''
            },
            message: {
                state: 'untouched',
                value: ''
            },
        }
    }

    render() {
        return (
            <div className="contact-page padded">

                <h2>Contact</h2>

                <p>If you’re interested in hearing a little more about us or would even love to just arrange a coffee then we’d love to hear from you…</p>

                <form noValidate className="simple-form" onSubmit={this.handleFormSubmit}>

                    <div className="left">
                        <Input type={'text'}
                            title={'Full Name'}
                            name={'name'}
                            value={this.state.name.value}
                            state={this.state.name.state}
                            placeholder={'Name'}
                            handleChange={this.handleName} />

                        <Input type={'email'}
                            title={'Email'}
                            name={'email'}
                            value={this.state.email.value}
                            state={this.state.email.state}
                            placeholder={'Email'}
                            handleChange={this.handleEmail} />

                        <Input type={'tel'}
                            title={'Telephone'}
                            name={'telephone'}
                            value={this.state.telephone.value}
                            state={this.state.telephone.state}
                            placeholder={'Telephone'}
                            handleChange={this.handleTelephone} />
                    </div>

                    <div className="right">
                        <TextArea
                            name={'message'}
                            value={this.state.message.value}
                            state={this.state.message.state}
                            placeholder={'Message'}
                            handleChange={this.handleMessage} />
                    </div>

                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    handleName = (e) => {
        let value = e.target.value;
        let state = value ? 'valid' : 'invalid';

        this.setState({
            name: {
                value: value,
                state: state
            }
        });
    }

    handleEmail = (e) => {
        let value = e.target.value;
        let state = value ? 'valid' : 'invalid';

        this.setState({
            email: value,
            state: state
        });
    }

    handleTelephone = (e) => {
        let value = e.target.value;
        let state = value ? 'valid' : 'invalid';

        this.setState({
            telephone: value,
            state: state
        });
    }

    handleMessage = (e) => {
        let value = e.target.value;
        let state = value ? 'valid' : 'invalid';

        this.setState({
            message: value,
            state: state
        });
    }
}

export default Contact;