import React from 'react';
import Cart from './cart';


export default class Header extends React.Component {

	render() {
		return (
			<>
				<header className="header-container">
					<div>
						<Cart />
					</div>
				</header>
			</>
		)
	}
}