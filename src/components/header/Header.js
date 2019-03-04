import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			mobileNavState: ''
		}
	}

    render() {
        return (
			<header>
				<Link to="/">
					<h1 className="logo">Philyorkshire Ltd.</h1>
				</Link>

				<div className={`mobile-toggle ${this.state.mobileNavState}`}>
					<i className="fa fa-bars" aria-hidden="true" onClick={this.onClickMobileNavigation}></i>
				</div>

				<nav className={`main-nav ${this.state.mobileNavState}`}>
					<ul onClick={this.closeMobileNavigation}>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/work">Work</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>
			</header>
        );
	}
	
	onClickMobileNavigation = () => {
		const mobileNavState = this.state.mobileNavState === 'active' ? '' : 'active';

		this.setState({
			mobileNavState: mobileNavState
		});
	}

	closeMobileNavigation = () => {
		this.setState({
			mobileNavState: ''
		});
	}
}

export default Header;