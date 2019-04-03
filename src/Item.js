import React from 'react';
import './App.scss';

export default class Item extends React.Component {
	
render() {
	return (
			<div className="item-container">
			{
				this.props.products.map((elem, i) => {
					return (
						<div className="item">
							<img className="img-responsive" src={`https://raw.githubusercontent.com/jeffersonRibeiro/react-shopping-cart/master/src/static/products/${elem.sku}_1.jpg`} alt="tshirt" />
							<p>{elem.title}</p>
							<p>${elem.price}</p>
							<p>or {elem.installments}x{(elem.price/elem.installments).toFixed(2)}</p>
							<button>Add to Cart</button>
						</div>

					)
				})
			}
			</div>

	)
}
}