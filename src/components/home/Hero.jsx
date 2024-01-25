import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div id="hero">
      <div className="flex-container">
        <p id="label">New product</p>
        <h2>XX99 Mark II Headphones</h2>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to="headphones/xx99-mark-two-headphones" className="product-button">See Product</Link>
      </div>
    </div>
  )
}

export default Hero