import React from 'react';
import logo from './bag-icon.png';
import {connect} from 'react-redux';

class Cart extends React.Component {
	render() {
		console.log(this.props.cartItems, 'test')
		return (
			<React.Fragment>
				<div className="cart-container">
					<div className="cart-item">
						{
							this.props.cartItems.map(item => 
								<div>
									<img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${item.sku}_2.jpg`} alt="item-image" />
									<p>{item.title}</p>
									<p>{item.availableSizes}</p>
									<p>{item.style}</p>
									<p>{item.price}</p>
								</div>

							)
						}
					</div>
				</div>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		cartItems: state.cart
	}
}


export default connect(mapStateToProps)(Cart);