import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../App.scss';
import Header from './Header';

const Item = React.lazy(() => import('./Item'));
const Size = React.lazy(() => import('./Size'));


const API_URL = "https://react-shopping-cart-67954.firebaseio.com/products.json";

class App extends Component {

  componentDidMount = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(d => {
      this.props.dispatch({ type: "ADD_PRODUCTS", products: d.products })
    })
  }

  render() {
    return (
      <div className="super">
        <Header />
        <section className="shop-container">
          <React.Suspense fallback={<p style={{fontSize: '22px', textAlign: 'center', gridColumnStart: '2'}}>Loading...</p>}>
            <Size />
            <Item />
          </React.Suspense>
          
        </section>
      </div>
    );
  }
}

export default connect()(App);
