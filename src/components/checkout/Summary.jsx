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
      <p>No items in cart</p>
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
    }
  }, [props.cart])

  return (
    <div className="summary">
      <h3>Summary</h3>
      <Items cart={props.cart} />
      <p>Total: $ {formatPrice(total)}</p>
      <p>Shipping: $ {shipping}</p>
      <p>VAT (Included): $ {formatPrice(vat)}</p>
      <p>Grand Total: $ {formatPrice(grandTotal)}</p>
    </div>
  )
}

export default Summary