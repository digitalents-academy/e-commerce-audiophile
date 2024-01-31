import Header from "./components/shared/Header"
import Footer from './components/shared/Footer'
import Cart from "./components/shared/Cart"
import './styles/index.css'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useState, useEffect } from "react"

const App = () => {
  const [mainStyle, setMainStyle] = useState("")
  const [isHidden, setIsHidden] = useState(true)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const jsonCart = localStorage.getItem("cart")
    if (jsonCart) {
      const localCart = JSON.parse(jsonCart)
      setCart(localCart)
    }
  }, [])

  const cartClick = () => {
    setMainStyle('cart-open')
    setIsHidden(false)
  }

  const cartOffClick = () => {
    if(!isHidden) {
      setMainStyle('')
      setIsHidden(true)
    }
  }

  const addToCart = (itemData, quantity) => {
    const newItem = {
      shortName: itemData.shortName,
      price: itemData.price,
      cartImage: itemData.cartImage,
      quantity: quantity
    }
    if (cart.some(e => e.shortName === newItem.shortName)) {
      const newCart = cart.map(item => {
        if (item.shortName === newItem.shortName) {
          item.quantity = item.quantity + quantity
          return item
        } else {
          return item
        }
      })
      setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart))
    } else {
      const newCart = cart.concat(newItem)
      setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart))
    }
  }
  
  const removeAll = () => {
    localStorage.removeItem("cart")
    setCart([])
  }

  return (
    <div className={'main ' + mainStyle}>
      <Cart onClick={cartOffClick} isHidden={isHidden} cart={cart} removeAll={removeAll} />
      <Header onClick={cartClick} />
      <div>
        <Outlet context={addToCart} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
