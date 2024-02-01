import BackButton from "../components/product-page/BackButton"
import Form from "../components/checkout/Form"
import Success from "../components/checkout/Success"
import Summary from "../components/checkout/Summary"

const Checkout = () => {
  return (
    <div id="checkout">
      <BackButton />
      <div className="checkout-flex">
      <Form />
      <Summary />
      </div>
      <Success />
    </div>
  )
}

export default Checkout