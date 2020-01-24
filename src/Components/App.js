import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../App.scss';
import Item from './Item';
import Size from './Size';
import Header from './Header';


class App extends Component {

  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
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
          <Size />
          <Item />
        </section>
      </div>
    );
  }
}

export default connect()(App);
