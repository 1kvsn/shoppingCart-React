
export function products(state=[], action) {
	switch (action.type) {
		case "ADD_PRODUCTS":
			return action.products;
		default:
			return state;
	}

}

export function sizes(state=[], action) {
	console.log(state, "this is state", action)
	switch (action.type) {
		case "ADD_SIZES":
			return action.sizes;
		default:
			return state;
	}
}

