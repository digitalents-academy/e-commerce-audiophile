import Header from "./components/shared/Header"
import Footer from './components/shared/Footer'
import Cart from "./components/shared/Cart"
import './styles/index.css'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useState, useEffect } from "react"
import { ToastContainer, toast, Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const [mainStyle, setMainStyle] = useState("")
  const [isHidden, setIsHidden] = useState(true)
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const jsonCart = localStorage.getItem("cart")
    if (jsonCart) {
      const localCart = JSON.parse(jsonCart)
      setCart(localCart)
    }
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      setTotalQuantity(cart.reduce((a, b) => a + b.quantity, 0))
    }
  }, [cart])

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

  const addToCart = (itemData, quantity, longName) => {
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
    toast.success('Item "' + longName + '" was added to cart')
  }
  
  const removeAll = () => {
    localStorage.removeItem("cart")
    setCart([])
    setTotalQuantity(0)
    toast.success("All items removed from cart")
  }

  const increaseQuantity = (itemName) => {
    const newCart = cart.map(item => {
      if (item.shortName === itemName) {
        item.quantity = item.quantity + 1
        return item
      } else {
        return item
      }
    })
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const decreaseQuantity = (changedItem) => {
    if (changedItem.quantity === 1) {
      const newCart = cart.filter(item => item.shortName !== changedItem.shortName)
      setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart))
      setTotalQuantity(0)
    } else {
      const newCart = cart.map(item => {
        if (item.shortName === changedItem.shortName) {
          item.quantity = item.quantity - 1
          return item
        } else {
          return item
        }
      })
      setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart))
    }
  }

  return (
    <div className={'main ' + mainStyle}>
      <Cart onClick={cartOffClick} isHidden={isHidden} cart={cart} removeAll={removeAll} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
      <Header onClick={cartClick} totalQuantity={totalQuantity} />
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Zoom}
      />
      <div>
        <Outlet context={{
          addToCart, cart, removeAll
        }} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
