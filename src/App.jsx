import { Outlet } from 'react-router-dom'
import Header from "./components/shared/Header"
import Footer from './components/shared/Footer'
import './styles/index.css'

const App = () => {

  return (
    <div className='main'>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
