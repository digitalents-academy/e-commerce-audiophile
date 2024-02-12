import { Link } from "react-router-dom"

const Success = (props) => {
  return (
    <>
    <div className="order-background"></div>
    <div className="order-flex">
    <div className="order-summary">
      <img src="../../../assets/checkout/icon-check-mark.svg" alt="" />
      <h4>Thank you<br />for your order</h4>
      <p>You will receive an email confirmation shortly.</p>
      <div>Order</div>
      <Link to="/" onClick={props.onClick}>Back to home</Link>
    </div>
    </div>
    </>
  )
}

export default Success