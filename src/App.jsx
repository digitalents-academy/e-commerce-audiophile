import Header from "./components/shared/Header"
import Footer from './components/shared/Footer'
import './styles/index.css'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const App = () => {

  return (
    <div className='main'>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
