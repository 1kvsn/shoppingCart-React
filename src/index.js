import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
// import store from './App';
import {createStore, combineReducers} from 'redux';
import {products, sizes} from './Reducer';

const root = combineReducers({
	products,
	sizes
})


const store = createStore(root);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
