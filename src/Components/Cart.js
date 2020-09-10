import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {

	handleCheckout = () => {
		alert("Checkout Price: $" + this.props.cartItems.reduce(function (acc, obj) { return acc + obj.price; }, 0))
	}

	handleRemove = (itemId) => {
		this.props.dispatch({ type: 'REMOVE_ITEM', id: itemId })
	}

	handleCartCloseButton = () => {
		this.props.dispatch({ type: "CART_STATUS", cartOpen: !this.props.cartOpen })
	}

	render() {
		return (
			<React.Fragment>
				<div className="drawer-main">
					<div className="drawer-header">
						<img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png" className="cart-icon" />
						<p>Cart</p>
					</div>

					<div className="pricebubble-in-cart">
						{this.props.cartItems.length}
					</div>

					{/* empty cart notification */}
					<p className="empty-notification">{!this.props.cartItems.length ? "Add some products in the cart :)" : null}</p>

					{
						this.props.cartItems && this.props.cartItems.map(item =>
							<React.Fragment>
								<div className="cart-items-parent">
									<span className="remove-item" onClick={() => this.handleRemove(item.id)}>X</span>
									<div className="cart-item-image">
										<img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${item.sku}_2.jpg`} />
									</div>

									<div className="cart-items-info">
										<div className="cart-item-title">{item.title}</div>
										<div className="cart-available-sizes">{item.availableSizes[0]} | {item.style}</div>
										<div className="cart-item-quantity">Quantity: {item.quantity}</div>
									</div>

									<div className="cart-item-price">$ {item.price}</div>
								</div>
								<div className="division"></div>
							</React.Fragment>
						)}

					<div className="checkout">
						<div className="subtotal">
							<p>SUBTOTAL: </p>
							<p className="subtotal-price">$ {Math.floor(this.props.cartItems.reduce(function (acc, obj) { return acc + obj.price * obj.quantity; }, 0))}</p>

						</div>
						<button className="drawer-btn" onClick={() => this.handleCheckout()}>Checkout</button>
					</div>
				</div>
				<button
					onClick={() => this.handleCartCloseButton()} className="cart-close-btn">
					<label>X</label>
				</button>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		cartItems: state.cart,
		cartOpen: state.cartOpen
	}
}

export default connect(mapStateToProps)(Cart);