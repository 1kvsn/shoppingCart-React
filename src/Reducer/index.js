
export function products(state = [], action) {
	switch (action.type) {
		case "ADD_PRODUCTS":
			return action.products;
		case "LOW_TO_HIGH":
			return [...state.sort((a, b) => a.price - b.price)]
		case "HIGH_TO_LOW":
			return [...state.sort((a, b) => b.price - a.price)]
		default:
			return state;
	}
}

export function sizes(state = [], action) {
	switch (action.type) {
		case "ADD_SIZES":
			return action.sizes;
		case "TOGGLE":
			return state.map(d => {
				if (d.size === action.currentSize) {
					return { ...d, isClicked: !d.isClicked }
				}
				return d;
			})
		default:
			return state;
	}
}

export function cart(state = [], action) {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const { products } = action;
			let item = products;
			if (item && !item.quantity) {
				item.quantity = 1;
			}
			const cartItem = state.find(item => item.id === products.id);
			const remainingItems = state.filter(item => item.id !== products.id);
			if (cartItem) {
				item.quantity++;
				return [...remainingItems, item]
			}
			return [...state, item]
		}
		case 'REMOVE_ITEM':
			return [...state].filter(val => action.id !== val.id);

		default:
			return state;
	}
}

export function cartStatus(state = [], action) {
	switch (action.type) {
		case "CART_STATUS":
			return action.cartOpen

		default:
			return state;
	}
}