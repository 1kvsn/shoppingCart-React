import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { isNull } from 'util';

class Item extends React.Component {
	
	render() {
		const filterSizes = this.props.sizes.filter(size => size.isClicked === true).map(val => val.size)
		const filteredProd = this.props.products.filter((product, i) => {
			return product.availableSizes.some(size => filterSizes.includes(size)) 
		})
		console.log(filterSizes)
		console.log(filteredProd)

		return (
					<div className="item-container">
					{
						(filteredProd.length) ? 
							filteredProd.map((elem, i) => {
								console.log('called conditional');
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
										<button>Add to Cart</button>
									</div>
								)}
							)
						 : 
						 
							 this.props.products.map((elem, i) => {
							console.log('called second');
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
									<button>Add to Cart</button>
								</div>
							)
						})
					}
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