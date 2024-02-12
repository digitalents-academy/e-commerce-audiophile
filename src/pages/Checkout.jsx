/* eslint-disable no-unused-vars */
import BackButton from "../components/product-page/BackButton"
import Form from "../components/checkout/Form"
import Success from "../components/checkout/Success"
import Summary from "../components/checkout/Summary"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"

const Checkout = () => {
  const { cart, successfulSubmit, backHome } = useOutletContext()

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
  
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

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
          setErrors(current => {
            const { [targetName]: _, ...rest } = current
            return rest
          })
        }
        break
      case "email":
        if (formData.email === "") {
          setErrors({...errors, email: "Field cannot be empty"})
        } else if (!/\S+@\S+\.\S+/.test(formData.email))
          setErrors({...errors, email: "Wrong format"})
        else {
          setErrors(current => {
            const { [targetName]: _, ...rest } = current
            return rest
          })
        }
        break
      case "zip":
        if (formData.zip === "") {
          setErrors({...errors, zip: "Field cannot be empty"})
        } else if (!(formData.zip.length === 5) || (/[^\d]/.test(formData.zip))) {
          setErrors({...errors, zip: "Wrong format"})
        } else {
          setErrors(current => {
            const { [targetName]: _, ...rest } = current
            return rest
          })
        }
        break
      case "eMoneyNumber":
        if (formData.eMoney) {
          if (formData.eMoneyNumber === "") {
            setErrors({...errors, eMoneyNumber: "Field cannot be empty"})
          } else if (!(formData.eMoneyNumber.length === 9) || (/[^\d]/.test(formData.eMoneyNumber))) {
            setErrors({...errors, eMoneyNumber: "Wrong format"})
          } else {
            setErrors(current => {
              const { [targetName]: _, ...rest } = current
              return rest
            })
          }
        }
        break
      case "eMoneyPin":
        if (formData.eMoney) {
          if (formData.eMoneyPin === "") {
            setErrors({...errors, eMoneyPin: "Field cannot be empty"})
          } else if (!(formData.eMoneyPin.length === 4) || (/[^\d]/.test(formData.eMoneyPin))) {
            setErrors({...errors, eMoneyPin: "Wrong format"})
          } else {
            setErrors(current => {
              const { [targetName]: _, ...rest } = current
              return rest
            })
          }
        }
        break
    }
  }

  const validateOnSubmit = () => {
    let submitErrors = {}
    let keys = Object.keys(formData)
    if (!formData.eMoney) {
      keys = keys.filter(key => key !== "eMoneyNumber" && key !== "eMoneyPin")
    }
    keys.forEach(key => {
      if (formData[key] === "") {
        submitErrors[key] = "Field cannot be empty"
      }
    })
    return submitErrors
  }

  const continuePay = () => {
    setErrors(validateOnSubmit())
    let formKeys = Object.keys(formData)
    let errorKeys = Object.keys(errors)
    if (!formData.eMoney) {
      formKeys = formKeys.filter(key => key !== "eMoneyNumber" && key !== "eMoneyPin")
      errorKeys = errorKeys.filter(key => key !== "eMoneyNumber" && key !== "eMoneyPin")
    }
    if ((errorKeys.length === 0) && (!formKeys.some(key => formData[key] === ""))) {
      setSuccess(true)
      successfulSubmit()
    } else {
      console.log("information missing")
    } 
  }

  return (
    <div id="checkout">
      <BackButton />
      <div className="checkout-flex">
      <Form handleChange={handleChange} handleMethod={handleMethod} checkedState={formData.eMoney} validateForm={validateForm} errors={errors} />
      <Summary cart={cart} continuePay={continuePay} />
      </div>
      {success ? <Success onClick={backHome} cart={cart} /> : null}
    </div>
  )
}

export default Checkout