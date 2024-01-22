import './index.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <header>Test Header</header>
    <div>
      <Outlet />
    </div>
    <footer>Test Footer</footer>
    </>
  )
}

export default App
