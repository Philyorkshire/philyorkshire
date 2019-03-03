import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
			<header>
				<Link to="/">
					<h1 className="logo">Philyorkshire Ltd.</h1>
				</Link>

				<div className="mobile-toggle">
					<i className="fa fa-bars" aria-hidden="true"></i>
				</div>

				<nav className="main-nav">
					<ul>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/work">Work</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>
			</header>
        );
    }
}

export default Header;