import React, { Component } from 'react';
import './App.scss';
import Item from './Item.js';
import Size from './Size.js';





class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
    }
  }

  componentDidMount = () => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json").then(res => res.json()).then(d => this.setState({
      products: d.products,
    })
    )
  }

  render() {
    return (
      <div className="App">
        <Size />
        <Item products={this.state.products}/>
      </div>
    );
  }
}

export default App;
