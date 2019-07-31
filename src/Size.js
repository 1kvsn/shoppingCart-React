import React from 'react';
import { connect } from 'react-redux';

import './App.scss';

class Size extends React.Component {

	componentDidMount(){
		fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
    .then(res => res.json())
    .then(({products}) => {
			let sizes = products.reduce((acc, v) => {
				return [...acc, ...v.availableSizes]
			}, [])

			this.props.dispatch({
				type: 'ADD_SIZES', 
				sizes: [...new Set(sizes)].map(s => ({
					size: s,
					isClicked: false,
				}))
			})
		})
	}
	
	handleButton = (size) => {
		this.props.dispatch({type: 'TOGGLE', currentSize: size})
	}

	render() {
		return (
			<div className="size-container">
				<h3>Sizes:</h3>
				<div className="sizes">
					{
						this.props.sizes.map(d => 
						<button className={d.isClicked ? 'active size' : 'size'} onClick={() => this.handleButton(d.size)}>{d.size}</button>
						)
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		sizes: state.sizes
	}
}

export default connect(mapStateToProps)(Size);