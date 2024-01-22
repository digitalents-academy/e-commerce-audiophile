import './index.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  const placeholder = {
    backgroundColor: "black",
    textAlign: "center",
    width: "100%",
    color: "white",
    position: "relative",
    zIndex: 1
  }
  return (
    <>
    <header style={placeholder}>Placeholder Header</header>
    <div>
      <Outlet />
    </div>
    <footer style={placeholder}>Placeholder Footer</footer>
    </>
  )
}

export default App
