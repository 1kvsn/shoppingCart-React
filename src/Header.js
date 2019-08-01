import React from 'react';
import {connect} from 'react-redux';

import Cart from './cart';


export class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			cartOpen: false,
		}
	}

	handleCartButton = () => {
		// this.setState({cartOpen: !this.state.cartOpen});
		this.props.dispatch({type: "CART_STATUS", cartOpen: !this.state.cartOpen});
	}

	render() {
		return (
			<>
				<header className="header-container">
					{
						(this.props.cartOpen === true) ? <Cart /> : (
						<button
							className="cart-logo" 
							onClick={() => this.handleCartButton()}>
							<img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png"/>
							<div className="price-bubble-home">
								{(this.props.cartItems) ? this.props.cartItems.length : 0}
							</div>
						</button>)
					}
				</header>
			</>
		)
	}
}

function mapStateToProps(state) {
	return {
		cartItems: state.cart,
		cartOpen: state.cartOpen
	}
}

export default connect(mapStateToProps)(Header)