
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