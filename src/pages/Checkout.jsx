import BackButton from "../components/product-page/BackButton"
import Form from "../components/checkout/Form"
import Success from "../components/checkout/Success"
import Summary from "../components/checkout/Summary"
import { useState } from "react"

const Checkout = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoney: true,
    eMoneyNumber: "",
    eMoneyPin: ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  return (
    <div id="checkout">
      <BackButton />
      <div className="checkout-flex">
      <Form handleChange={handleChange} />
      <Summary />
      </div>
      <Success />
    </div>
  )
}

export default Checkout