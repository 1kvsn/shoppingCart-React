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
					<div className="drawer-header">
						<img src="https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/bag-icon.png" className="cart-icon"/>
					</div>
					<div style={{background:"yellow", borderRadius:"50%", color:"black", height:"20px", width:"20px"}}>
						{this.props.cartItems.length}
					</div>
					<ul className="cart-items">
					{
						this.props.cartItems.map(item => 
							<React.Fragment>
								<div className="items-parent">

									<div className="item-image">
										<img src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${item.sku}_2.jpg`} width="80px" height="100px"/>
									</div>

									<div className="items-info">
										<span className="remove-item" onClick={() => this.handleRemove(item.id)}>X</span>
										<div>{item.title}</div>
										<div style={{color: "#AFAEAE"}}>{item.availableSizes[0]} | {item.style}</div>
										<div style={{color: "#AFAEAE"}}>Quantity{  }</div>
									</div>

									<div style={{color: "yellow", fontWeight: "bold"}}>${item.price}</div>
								</div>
								<hr />
							</React.Fragment>
						)}
					</ul>
					<div className="checkout"><button className="drawer-btn" onClick={() => this.handleCheckout()}>Checkout</button></div>
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