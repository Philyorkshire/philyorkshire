import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-page padded">

                <h2>Contact</h2>

                <p>If you’re interested in hearing a little more about us or would even love to just arrange a coffee then we’d love to hear from you…</p>

                <form noValidate className="simple-form">

                    <div className="left">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="tel" name="telephone" placeholder="Telephone" required />
                    </div>

                    <div className="right">
                        <textarea placeholder="Message" name="Message"></textarea>
                    </div>

                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default Contact;