import BackButton from "../components/product-page/BackButton"
import Form from "../components/checkout/Form"
import Success from "../components/checkout/Success"
import Summary from "../components/checkout/Summary"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"

const Checkout = () => {
  const { cart } = useOutletContext()

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

  const handleMethod = (e) => {
    if (e.target.id === "emoney") {
      setFormData({...formData, eMoney: true })
    } else {
      setFormData({...formData, eMoney: false })
    }
  }

  return (
    <div id="checkout">
      <BackButton />
      <div className="checkout-flex">
      <Form handleChange={handleChange} handleMethod={handleMethod} checkedState={formData.eMoney} />
      <Summary cart={cart} />
      </div>
      <Success />
    </div>
  )
}

export default Checkout