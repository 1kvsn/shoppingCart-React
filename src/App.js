import React, { Component } from 'react';
import './App.scss';
import Item from './Item.js';
import Size from './Size.js';
import {connect} from 'react-redux';


class App extends Component {

  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
    .then(res => res.json())
    .then(d => {
      this.props.dispatch({type: "ADD_PRODUCTS", products: d.products})
    })
  }

  // fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
  //   .then(res => res.json())
  //   .then(d => this.setState({
  //     products: d.products,
  //     })
  //   )

  render() {
    return (
      <div className="super">
        <section className="shop-container">
          <Size />
          <Item />
        </section>
      </div>
    );
  }
}

export default connect()(App);
