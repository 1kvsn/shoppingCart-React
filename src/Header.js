import React from 'react';
import Cart from './cart';
import {connect} from 'react-redux';


export class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			cartOpen: false,
		}
	}
	handleCartButton = () => {
		this.setState({cartOpen: !this.state.cartOpen})
	}
	render() {
		return (
			<>
				<header className="header-container">
					<div>
						<button onClick={() => this.handleCartButton()}><img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png"/>
							<div style={{background:"yellow", borderRadius:"50%", color:"black", height:"20px", width:"20px"}}>
							{(this.props.cartItems) ? this.props.cartItems.length : 0}
							</div>
						</button>
						{(this.state.cartOpen) ? <Cart /> : ""}
					</div>
				</header>
			</>
		)
	}
}

function mapStateToProps(state) {
	return {
		cartItems: state.cart
	}
}

export default connect(mapStateToProps)(Header)