import React from 'react';
import logo from './bag-icon.png';

export default class Header extends React.Component {
	render() {
		return (
			<>
			<header>
				<div>
					<img src={logo} alt="cart-logo" width="50px" height="50px" />
				</div>
			</header>
			</>
		)
	}
}