import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './Components/App';
import { products, sizes, cart, cartStatus as cartOpen } from './Reducer/index';

const root = combineReducers({
	products,
	sizes,
	cart,
	cartOpen
})

const store = createStore(root);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

