import React from 'react';
import './App.scss';
import { connect } from 'react-redux';

class Item extends React.Component {

	handleChange = (e) => {
		(e.target.value === "Lowest to Highest") ? this.props.dispatch({type: "LOW_TO_HIGH"}) : this.props.dispatch({type: "HIGH_TO_LOW"})
	}
	handleAddToCart = (products) => {
		console.log('handleAddCart', products);
		this.props.dispatch({type: "ADD_TO_CART", products})
	}
	
	render() {
		const filterSizes = this.props.sizes.filter(size => size.isClicked === true).map(val => val.size)
		const filteredProd = this.props.products.filter((product, i) => {
			return product.availableSizes.some(size => filterSizes.includes(size))
		})
		// console.log(filterSizes)
		// console.log(filteredProd)

		return (
					<div className="main-container">
						<div className="sort-bar">
							<p>16product(s) found</p>
							<div>
								<label for="sort-select">Order by:</label>
								<select onChange={(e) => this.handleChange(e)}>
									<option value="select">select</option>
									<option value="Lowest to Highest">Lowest to Highest</option>
									<option value="Highest to Lowest">Highest to Lowest</option>
								</select>
							</div>
						</div>

						<div className="item-container">
							{
								(filteredProd.length) ? 
									filteredProd.map((elem, i) => {
										// console.log('called conditional');
										return (
											<div className="item">
												<img className="img-responsive" src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${elem.sku}_1.jpg`} alt="tshirt" />
												<p className="title">{elem.title}</p>
												<hr></hr>
												<p className="price">${elem.price}</p>
												<span className="price-container">
													<p className="installment">or {elem.installments} x</p>
													<p className="installment-price">${(elem.price/elem.installments).toFixed(2)}</p>
												</span>
												<button onClick={() => {console.log('onclick'); this.handleAddToCart(elem)}}>Add to Cart</button>
											</div>
										)}
									)
								: 
									this.props.products.map((elem, i) => {
									// console.log('called second');
									return (
										<div className="item">
											<img className="img-responsive" src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${elem.sku}_1.jpg`} alt="tshirt" />
											<p className="title">{elem.title}</p>
											<hr></hr>
											<p className="price">${elem.price}</p>
											<span className="price-container">
												<p className="installment">or {elem.installments} x</p>
												<p className="installment-price">${(elem.price/elem.installments).toFixed(2)}</p>
											</span>
											<button onClick={() => {console.log('onclick',elem); this.handleAddToCart(elem)}}>Add to Cart</button>
										</div>
									)
								})
							}
						</div>
					</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		products: state.products,
		sizes: state.sizes,
	}
}

export default connect(mapStateToProps)(Item);