import React from 'react'
import "./index.css"
import styled from 'styled-components'

import AllProducts from './components/Products/AllProducts'
import SideBar from './components/Filters/SideBar'
import CartIndex from './components/Cart/CartIndex'

import iconCart from './images/iconCart.svg'


const products = [
  {
    id: 1,
    name: "Ágata Verde",
    value: 1818.0,
    urlPhoto: "https://16806.cdn.simplo7.net/static/16806/sku/thumb_4416-2-%C3%81GATA-AZUL.jpg",
  },
  {
    id: 2,
    name: "Ametista",
    value: 3920.0,
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
  {
    id: 9,
    name: "Turmalina Negra",
    value: 933.0,
    urlPhoto: "https://www.shopdoscristais.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/1/0/10327-turmalina-negra-biterminada.jpg",
  },
  {
    id: 10,
    name: "Esmeralda Oval",
    value: 2655.0,
    urlPhoto: "https://9a4cdd8e5789bb85.cdn.gocache.net/gemasdaterr/catalog/product/cache/1/small_image/480x/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc02003.jpg",
  },
  {
    id: 11,
    name: "Quartzo Rutilado",
    value: 998.0,
    urlPhoto: "https://9a4cdd8e5789bb85.cdn.gocache.net/gemasdaterr/catalog/product/cache/1/small_image/480x/9df78eab33525d08d6e5fb8d27136e95/q/u/quartzo-rutilado-retangular-facetado-25-50x21-mm_5_1.jpg",
  },
  {
    id: 12,
    name: "Labradorita",
    value: 3451.0,
    urlPhoto: "https://9a4cdd8e5789bb85.cdn.gocache.net/gemasdaterr/catalog/product/cache/1/small_image/480x/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc09522.jpg",
  },
]

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.viewCart ? '0.4fr 3fr 1fr' : '0.4fr 3fr'};
  padding: 10px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const NewWindowForCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  path {
    fill: #22252C;	
  }

  :active path {
    fill: #C98474;
  }
`;

const CartImg = styled.img`
  width: 40px; 
  background-color: #CCDFCB;
  border-radius: 50%;
  padding: 20px;
  position: fixed;
  right: 20px;
  top: 85%;
  -webkit-box-shadow: 5px 5px 5px silver; 
	-moz-box-shadow: 5px 5px 5px silver;
	box-shadow: 5px 5px 5px silver;
`;

const Footer = styled.footer`
    background-color: #414141;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -3vh;
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
    organization: "",
    searchProductValue: "",
    filter: {
      minValue: "",
      maxValue: ""
    }
  }

  componentDidUpdate () {
    localStorage.setItem("newCart", JSON.stringify(this.state.cart));
  }

  componentDidMount() {
    if(localStorage.getItem('newCart')){
      const newCart = JSON.parse(localStorage.getItem('newCart'));
      this.setState({
        cart: newCart
      })
    }  
  }

  changeFilterValues = (updatedFilterValues) => {
    this.setState({
      filter: {
        ...this.state.filter,
        ...updatedFilterValues,
      }
    })
  }

  addItemToCart = (product) => {
    const newCart = [...this.state.cart]

    const productInCart = this.state.cart.findIndex((cartItem) => cartItem.product.id === product.id)
    
    if(productInCart <= -1){
      newCart.push({product: product, quantity: 1})
    } else {
      newCart[productInCart].quantity += 1
    }

    this.setState({
      cart: newCart,
    })
  }

  removeItemToCart = (product) => {
    const newCart = [...this.state.cart]

    const removeProduct = this.state.cart.findIndex((cartItem) => cartItem.product.id === product.id)

    newCart.splice(removeProduct, 1);

    this.setState({
      cart: newCart
    })
  }

  getFilteredProducts() {
    const { products, searchProductValue, filter } = this.state
    
    let filteredProducts = products
      .filter(product => {
        const productName = product.name.toLowerCase()
        return productName.indexOf(searchProductValue.toLowerCase()) > -1
      })
      .filter((product) => {
        return product.value < (filter.maxValue || Infinity)
      })
      .filter((product) => {
        return product.value > (filter.minValue || 0)
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
    } else if(organization === "name") {
        const name1 = product1.name
        const name2 = product2.name
        return name1.localeCompare(name2)
      }else if(organization === "nameReverse"){
        const name1 = product1.name
        const name2 = product2.name
        return name2.localeCompare(name1)
      }
    }
  
  changeOrganization = (event) => {
    this.setState({
      organization: event.target.value
    })
  }

  newInputValue = (event) => {
    this.setState({
      searchProductValue: event.target.value,
    })
  }

  emptyCart = () => {
    this.setState({
      cart: []
    })
  }

  render () {
    const filteredProducts = this.getFilteredProducts()
    const organizedProducts = filteredProducts.sort(this.productsOrganization)
    
    return (
      <div>
        <AppContainer viewCart={this.state.viewCart}>

          <SideBar
            onChangeValue={this.changeFilterValues}
            searchProductValue={this.state.searchProductValue}
            newSearchValue={this.newInputValue}
            />

          <AllProducts
          products={organizedProducts} 
          addProduct = {this.addItemToCart} 
          onChangeOrder = {this.changeOrganization}
          />

          {this.state.viewCart && (
            <CartIndex
              productsOnCart={this.state.cart}
              removeProductOnCart={this.removeItemToCart}
              emptyCart={this.emptyCart}
              />
          )}

          <NewWindowForCart onClick={this.appearCart}>
            <CartImg src={iconCart} alt="iconCart"/>
          </NewWindowForCart>

        </AppContainer>

        <Footer>
          <h2>Volte Sempre!</h2>
          <p>Leonam Moura | Manoel Neto | Renata Karato</p>
        </Footer>
      </div>
    )
  }
}

export default App