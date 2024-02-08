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
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    zip: "",
    city: "",
    country: "",
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

  const validateForm = (e) => {
    const targetName = e.target.name
    switch (targetName) {
      case "name":
      case "number":
      case "address":
      case "city":
      case "country":
        if (formData[targetName] === "") {
          setErrors({...errors, [targetName]: "Field cannot be empty"})
        } else {
          setErrors({...errors, [targetName]: ""})
        }
        break
      case "email":
        if (formData.email === "") {
          setErrors({...errors, email: "Field cannot be empty"})
        } else if (!/\S+@\S+\.\S+/.test(formData.email))
          setErrors({...errors, email: "Wrong format"})
        else {
          setErrors({...errors, email: ""})
        }
        break
      case "zip":
        if (formData.zip === "") {
          setErrors({...errors, zip: "Field cannot be empty"})
        } else if (!(formData.zip.length === 5) || (/[^\d]/.test(formData.zip))) {
          setErrors({...errors, zip: "Wrong format"})
        } else {
          setErrors({...errors, zip: ""})
        }
        break
      case "eMoneyNumber":
        if (formData.eMoneyNumber === "") {
          setErrors({...errors, eMoneyNumber: "Field cannot be empty"})
        } else if (!(formData.eMoneyNumber.length === 9) || (/[^\d]/.test(formData.eMoneyNumber))) {
          setErrors({...errors, eMoneyNumber: "Wrong format"})
        } else {
          setErrors({...errors, eMoneyNumber: ""})
        }
        break
      case "eMoneyPin":
        if (formData.eMoneyPin === "") {
          setErrors({...errors, eMoneyPin: "Field cannot be empty"})
        } else if (!(formData.eMoneyPin.length === 4) || (/[^\d]/.test(formData.eMoneyPin))) {
          setErrors({...errors, eMoneyPin: "Wrong format"})
        } else {
          setErrors({...errors, eMoneyPin: ""})
        }
        break
    }
  }

  return (
    <div id="checkout">
      <BackButton />
      <div className="checkout-flex">
      <Form handleChange={handleChange} handleMethod={handleMethod} checkedState={formData.eMoney} validateForm={validateForm} />
      <Summary cart={cart} />
      </div>
      <Success />
    </div>
  )
}

export default Checkout