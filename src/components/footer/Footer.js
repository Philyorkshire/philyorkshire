import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-reveal">Keep up to date with Philyorkshire&nbsp;<i className="fa fa-chevron-down" aria-hidden="true"></i></div>

                <ul className="footer-nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="copyright">
                    <p>Company Number: 09912963<br />
                        &copy; Copyright <span id="year"></span> Philyorkshire Ltd.</p>
                </div>

                <i className="fa fa-snowflake-o" aria-hidden="true"></i>

            </footer>
        );
    }
}

export default Footer;