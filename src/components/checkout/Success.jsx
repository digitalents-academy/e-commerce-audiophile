import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const formatPrice = price => {
  return price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")
}

const Items = (props) => {
  if (props.cart.length === 2) {
    return (
        <div key={props.cart[0].shortName} className="order-grid">
            <img src={"../../../assets/cart/" + props.cart[0].cartImage} alt="" className="photo-wrapper"/>
            <div className="name-wrapper">{props.cart[0].shortName}</div>
            <div className="price-wrapper">$ {formatPrice(props.cart[0].price)}</div>
            <div className="quantity-wrapper">
              <span id="quantity-summary">x{props.cart[0].quantity}</span>
            </div>
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

const Success = (props) => {
  const shipping = 50
  const [grandTotal, setGrandTotal] = useState(50)

  useEffect(() => {
    const newTotal = props.cart.reduce((a, b) => a + (b.quantity * b.price), 0)
    const newVat = Math.round((newTotal * 0.2) * 10) / 10
    setGrandTotal(newTotal + newVat + shipping)
  }, [props.cart])

  return (
    <>
    <div className="order-background"></div>
    <div className="order-flex">
    <div className="order-summary">
      <img src="../../../assets/checkout/icon-check-mark.svg" alt="" />
      <h4>Thank you<br />for your order</h4>
      <p>You will receive an email confirmation shortly.</p>
      <div className="confirmation-flex">
        <div className="confirmation-items"><Items cart={props.cart} /></div>
        <div className="confirmation-total"><h6>Grand Total</h6>
        <h5>$ {formatPrice(grandTotal)}</h5></div>
      </div>
      <Link to="/" onClick={props.onClick}>Back to home</Link>
    </div>
    </div>
    </>
  )
}

export default Success