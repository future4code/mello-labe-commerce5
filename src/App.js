import React, { Component } from 'react';
import './App.css';
import { CartIndex } from './components/Cart/CartIndex';
import styled from 'styled-components'

const products = [
  {
    id: 1,
    name: 'Item A',
    value: 199,
    imgUrl: 'https://picsum.photos/200/200?a=1',
  },
  {
    id: 2,
    name: 'Item B',
    value: 55.90,
    imgUrl: 'https://picsum.photos/200/200?a=2',
  },
  {
    id: 3,
    name: 'Item C',
    value: 99,
    imgUrl: 'https://picsum.photos/200/200?a=3',
  },
  {
    id: 4,
    name: 'Item D',
    value: 80,
    imgUrl: 'https://picsum.photos/200/200?a=4',
  },
  {
    id: 5,
    name: 'Item E',
    value: 40.50,
    imgUrl: 'https://picsum.photos/200/200?a=5',
  },
  {
    id: 6,
    name: 'Item F',
    value: 499.99,
    imgUrl: 'https://picsum.photos/200/200?a=6',
  },
  {
    id: 7,
    name: 'Item G',
    value: 501,
    imgUrl: 'https://picsum.photos/200/200?a=7',
  },
  {
    id: 8,
    name: 'Item H',
    value: 210,
    imgUrl: 'https://picsum.photos/200/200?a=8',
  },
]

const WrapAll = styled.div`
`

class App extends Component {
  state ={
    cart: [],
  }

  removeCartItem = (product) =>{

  }

  render(){
    return (
      <div>
        
      </div>
    );
  }
}
export default App;
