import { useState } from "react"

const PhotoDetails = ({ imageFolder, name, isNew, price, description, addToCart, cartData }) => {
  const [quantity, setQuantity] = useState(1)

  const formattedPrice = price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")
  return (
    <div className="photo-details">
      <picture>
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../../assets/" + imageFolder + "/tablet/image-product.jpg"} />
        <source media="(min-width: 1440px)" srcSet={"../../../assets/" + imageFolder + "/desktop/image-product.jpg"} />
        <img src={"../../../assets/" + imageFolder + "/mobile/image-product.jpg"} />
      </picture>
      <div>
        <h4>{isNew ? "New Product" : ""}</h4>
        <h3>{name}</h3>
        <p>{description}</p>
        <h6>$ {formattedPrice}</h6>
      <div>
        <button className="number-buttons" onClick={() => (quantity === 1 ? "" : setQuantity(quantity -1))}>-</button>
        <span id="quantity-number">{quantity}</span>
        <button className="number-buttons" onClick={() => (quantity > 9 ? "" : setQuantity(quantity + 1))}>+</button>
        <button className="cart-button" onClick={() => addToCart(cartData, quantity)}>Add to Cart</button></div>
      </div>
    </div>
  )
}

export default PhotoDetails