
export function products(state=[], action) {
	switch (action.type) {
		case "ADD_PRODUCTS":
			return action.products;
		case "LOW_TO_HIGH":
			return [...state.sort((a,b) => a.price - b.price)]
		case "HIGH_TO_LOW":
			return [...state.sort((a,b) => b.price - a.price)]
			default:
			return state;
	}
}

export function sizes(state=[], action) {
	switch (action.type) {
		case "ADD_SIZES":
			return action.sizes;
		case "TOGGLE":
			return state.map(d => {
				if(d.size === action.currentSize){
					return {...d, isClicked: !d.isClicked}
				}
				return d;
			})
		default:
			return state;
	}
}

export function cart(state = [], action) {
	console.log('item received in CART reducer', state, action)
	switch(action.type) {
		case 'ADD_TO_CART': {
			return [...state, action.products]
		}
		case 'REMOVE_ITEM': 
		// console.log(action.id);
			return [...state].filter(val => action.id !== val.id);
		case 'ADD_QUANTITY':
			return [...state]
		
		default: 
			return state;
	}
}

export function cartStatus(state=[], action) {
	switch (action.type) {
		case "CART_STATUS": 
			return action.cartOpen

		default:
			return state;
	}
}