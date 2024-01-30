import Header from "./components/shared/Header"
import Footer from './components/shared/Footer'
import Cart from "./components/shared/Cart"
import './styles/index.css'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { useState } from "react"

const App = () => {
  const [mainStyle, setMainStyle] = useState("")
  const [isHidden, setIsHidden] = useState(true)

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

  return (
    <div className={'main ' + mainStyle}>
      <Cart onClick={cartOffClick} isHidden={isHidden} />
      <Header onClick={cartClick} />
      <div>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
