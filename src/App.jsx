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
    const newCart = cart.concat(newItem)
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  return (
    <div className={'main ' + mainStyle}>
      <Cart onClick={cartOffClick} isHidden={isHidden} cart={cart} />
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
