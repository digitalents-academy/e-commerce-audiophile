const Payment = ({ handleChange, checkedState, onBlur }) => {
  if (checkedState) {
    return (
      <>
      <div className="form-half">
      <label>e-Money Number</label>
      <input type="text" name="eMoneyNumber" onChange={handleChange} onBlur={onBlur} placeholder="238521993" />
      </div>
      <div className="form-half">
      <label>e-Money PIN</label>
      <input type="text" name="eMoneyPin" onChange={handleChange} onBlur={onBlur} placeholder="6891" />
      </div>
      </>
    )
  } else {
    return (
      <div className="form-full cash-delivery">
        <img src="../../../assets/checkout/icon-cash-on-delivery.svg" alt="" />
        <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
        </p>
      </div>
    )
  }
}

const Form = ({ handleChange, handleMethod, checkedState, validateForm }) => {
  return (
    <div className="form">
      <h2>Checkout</h2>
      <form>
        <fieldset>
          <legend>Billing Details</legend>
          <div className="form-flex">
            <div className="form-half">
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} onBlur={validateForm} placeholder="Alexei Ward"/>
            </div>
            <div className="form-half">
          <label>Email Address</label>
          <input type="text" name="email" onChange={handleChange} onBlur={validateForm} placeholder="alexei@mail.com" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>Phone Number</label>
          <input type="text" name="number" onChange={handleChange} onBlur={validateForm} placeholder="+1 202-555-0136" />
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Shipping Info</legend>
          <div className="form-flex">
          <div className="form-full">
          <label>Your Address</label>
          <input type="text" name="address" onChange={handleChange} onBlur={validateForm} placeholder="1137 Williams Avenue" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>ZIP Code</label>
          <input type="text" name="zip" onChange={handleChange} onBlur={validateForm} placeholder="10001" />
          </div>
          <div className="form-half">
          <label>City</label>
          <input type="text" name="city" onChange={handleChange} onBlur={validateForm} placeholder="New York" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>Country</label>
          <input type="text" name="country" onChange={handleChange} onBlur={validateForm} placeholder="United States" />
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Payment Details</legend>
          <div className="form-flex">
            <div className="form-half">
          <label>Payment Method</label>
            </div>
            <div className="form-half">
            <label className="money-radio" id="emoney" onClick={handleMethod}><input type="radio" name="payment" id="emoney" defaultChecked={true} />
            <div className="radio-ring">{checkedState ? <div className="radio-checked"></div> : ""}</div>
               e-Money</label>
          <label className="money-radio" id="cash" onClick={handleMethod}><input type="radio" name="payment" id="cash" />
          <div className="radio-ring">{!checkedState ? <div className="radio-checked"></div> : ""}</div>
              Cash on Delivery</label>
          </div>
          <div className="break"></div>
          <Payment checkedState={checkedState} handleChange={handleChange} onBlur={validateForm} />
        </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form