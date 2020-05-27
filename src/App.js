import React from 'react'
import "./index.css"
import styled from 'styled-components'

import AllProducts from './components/AllProducts'
import SideBar from './components/SideBar'
import CartWindow from './components/CartWindow'

import iconCart from './imgs/iconCart.svg'


const products = [
  {
    id: 1,
    name: "Ágata Verde",
    value: 1210.0,
    urlPhoto: "https://16806.cdn.simplo7.net/static/16806/sku/thumb_4416-2-%C3%81GATA-AZUL.jpg",
  },
  {
    id: 2,
    name: "Ametista",
    value: 2252.0,
    urlPhoto: "https://16806.cdn.simplo7.net/static/16806/sku/decoracao-capela-de-ametista-5-176kg--p-1547829259521.png",
  },
  {
    id: 3,
    name: "Esmeralda Bruta",
    value: 3504.0,
    urlPhoto: "https://16806.cdn.simplo7.net/static/16806/sku/thumb_pedras-e-cristais-a-m-pedra-esmeralda-bruta-706g--p-1541186646460.png",
  },
  {
    id: 4,
    name: "Pirita Bruta",
    value: 3225.0,
    urlPhoto: "https://16806.cdn.simplo7.net/static/16806/sku/thumb_pedras-e-cristais-n-z-pedra-pirita-bruta-31--p-1590325135806.png",
  },
  {
    id: 5,
    name: "Cianita Azul",
    value: 1933.0,
    urlPhoto: "https://img.elo7.com.br/product/original/272C393/pedra-cianita-azul-bruta-sao-miguel-g-1182-presente.jpg",
  },
  {
    id: 6,
    name: "Cristal",
    value: 1528.0,
    urlPhoto: "https://16806.cdn.simplo7.net/static/16806/sku/thumb_decoracao-drusa-de-cristal-1-835kg--p-1537117479678.jpg",
  },
  {
    id: 7,
    name: "Cristal Enxofre",
    value: 4221.0,
    urlPhoto: "https://16806.cdn.simplo7.net/static/16806/sku/decoracao-drusa-de-cristal-enxofre-03--p-1589747923986.png",
  },
  {
    id: 8,
    name: "Hematita",
    value: 2320.0,
    urlPhoto: "https://orgonitespoa.com.br/wp-content/uploads/2019/07/pedra-preto.jpg",
  },
]

const Geral = styled.div`
  background-color: #CCDFCB;
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.viewCart ? '1fr 3fr 1fr' : '1fr 3fr'};
  padding: 10px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const NewWindowForCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartImg = styled.img`
  width: 40px; 
  background-color: #CCDFCB;
  border-radius: 50%;
  padding: 20px;
  position: fixed;
  right: 20px;
  top: 85%;
  -webkit-box-shadow: 10px 10px 10px #999; 
	   -moz-box-shadow: 10px 10px 10px #999;
	        box-shadow: 10px 10px 10px #999;	
`;

const Footer = styled.footer`
    background-color: #414141;
    height: 10vh;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    color: white;
`;

class App extends React.Component {
  state = {
    products: products,
    cart: [],
    viewCart: false,
    organization: "increasing",
  }
  
  getFilteredProducts() {
    const { products } = this.state

    let filteredProducts = products.filter((product) => {
        const productName = product.name
        return productName
      })

    return filteredProducts
  }

  appearCart = () => {
    this.setState({
      viewCart: !this.state.viewCart
    })
  }

  productsOrganization = (product1, product2) => {
    const {organization}= this.state

    if (organization === "increasing") {
      return product1.value - product2.value
    } else if (organization === "decreasing") {
      return product2.value - product1.value
    }
  }

  changeOrganization = (event) => {
    this.setState({
      organization: event.target.value
    })
  }

  render () {
    const filteredProducts = this.getFilteredProducts()
    const orderedProducts = filteredProducts.sort(this.productsOrganization) 

    return (
      <Geral>
        <AppContainer viewCart={this.state.viewCart}>
          <SideBar/>
          <AllProducts
          products={orderedProducts} 
          addProduct = {this.buyProduct} 
          onChangeOrder = {this.changeOrganization}
          />
          {this.state.viewCart && (
            <CartWindow/>
          )}
          <NewWindowForCart onClick={this.appearCart}>
            <CartImg src={iconCart} alt="iconCart"/>
          </NewWindowForCart>
        </AppContainer>
        <Footer>
          <h3>Volte sempre!</h3>
        </Footer>
      </Geral>
    )
  }
}

export default App