import { useEffect, useState } from "react"

const formatPrice = price => {
  return price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")
}

const Items = (props) => {
  if (props.cart.length > 0) {
    return (
      props.cart.map(item => {
        return (
          <div key={item.shortName} className="cart-grid">
            <img src={"../../../assets/cart/" + item.cartImage} alt="" className="cart-photo" />
            <div className="cart-name">{item.shortName}</div>
            <div className="cart-price">$ {formatPrice(item.price)}</div>
            <div className="cart-buttons">
              <span id="quantity-summary">x{item.quantity}</span>
            </div>
          </div>
        )
      })
    )
  } else {
    return (
      <h6>No items in cart</h6>
    )
  }
}

const Summary = (props) => {
  
  const shipping = 50
  const [total, setTotal] = useState(0)
  const [vat, setVat] = useState(0)
  const [grandTotal, setGrandTotal] = useState(50)

  useEffect(() => {
    if (props.cart.length > 0) {
      const newTotal = props.cart.reduce((a, b) => a + (b.quantity * b.price), 0)
      const newVat = Math.round((newTotal * 0.2) * 10) / 10
      setTotal(newTotal)
      setVat(newVat)
      setGrandTotal(newTotal + newVat + shipping)
    } else {
      setTotal(0)
      setVat(0)
      setGrandTotal(50)
    }
  }, [props.cart])

  return (
    <div className="summary">
      <h3>Summary</h3>
      <Items cart={props.cart} />
      <div>
      <div className="first-wrapper">
          <span id="total">Total</span>
          <span id="total-price">$ {formatPrice(total)}</span>
      </div>
      <div className="first-wrapper">
          <span id="total">Shipping</span>
          <span id="total-price">$ 50</span>
        </div>
        <div className="first-wrapper">
          <span id="total">VAT (Included)</span>
          <span id="total-price">$ {formatPrice(vat)}</span>
        </div>
      </div>
        <div className="first-wrapper">
          <span id="total">Grand Total</span>
          <span id="total-price" className="orange">$ {formatPrice(grandTotal)}</span>
        </div>
        <div>
          <button className="continue-button" disabled={props.cart.length === 0}>Continue & Pay</button>
        </div>
    </div>
  )
}

export default Summary