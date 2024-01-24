import './styles/index.css'
import { Outlet, Link } from 'react-router-dom'

const App = () => {
  const placeholder = {
    backgroundColor: "rgb(25, 25, 25)",
    textAlign: "center",
    width: "100%",
    color: "white",
    position: "relative",
    zIndex: 1
  }
  return (
    <>
    <header style={placeholder}>
      <Link to={`/`}>Home</Link> <Link to={`/headphones`}>Headphones</Link> <Link to={`/speakers`}>Speakers</Link> <Link to={`/earphones`}>Earphones</Link>
    </header>
    <div>
      <Outlet />
    </div>
    <footer style={placeholder}>Placeholder Footer</footer>
    </>
  )
}

export default App
