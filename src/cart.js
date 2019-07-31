import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component {
	
	handleCheckout = () => {
		alert("Checkout Price: " + this.props.cartItems.reduce(function (acc,obj) { return acc + obj.price;}, 0))
	}

	handleRemove = (itemId) => {
		this.props.dispatch({type: 'REMOVE_ITEM', id: itemId})
	}

	render(){
		return (
			<React.Fragment>
				<div className="drawer-main">
					<div className="cart-close-btn">
						<label>X</label>
					</div>
					<div className="drawer-header">
						<img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png" className="cart-icon"/>
						<p>Cart</p>
					</div>
					<div className="pricebubble-in-cart">
						{this.props.cartItems.length}
					</div>
					{
						this.props.cartItems.map(item => 
							<React.Fragment>
								<div className="cart-items-parent">

									<div className="cart-item-image">
										<img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${item.sku}_2.jpg`} />
									</div>

									<div className="cart-items-info">
										<span className="remove-item" onClick={() => this.handleRemove(item.id)}>X</span>
										<div className="cart-item-title">{item.title}</div>
										<div className="cart-available-sizes">{item.availableSizes[0]} | {item.style}</div>
										<div className="cart-item-quantity">Quantity</div>
									</div>

									<div className="cart-item-price">$ {item.price}</div>
								</div>
								<div className="division"></div>
							</React.Fragment>
						)}
						
					<div className="checkout" >
						<button className="drawer-btn" onClick={() => this.handleCheckout()}>Checkout</button>
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