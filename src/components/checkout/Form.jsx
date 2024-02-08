const Payment = ({ handleChange, checkedState, onBlur, errors }) => {
  if (checkedState) {
    return (
      <>
      <div className="form-half">
      <div className="label-flex">
          <label>e-Money Number</label>
          {errors.eMoneyNumber ? (
            <span className="error-message">{errors.eMoneyNumber}</span>
          ) : null}
          </div>
      <input type="text" name="eMoneyNumber" onChange={handleChange} onBlur={onBlur} placeholder="238521993" className={errors.eMoneyNumber ? "input-error" : ""} />
      </div>
      <div className="form-half">
      <div className="label-flex">
          <label>e-Money PIN</label>
          {errors.eMoneyPin ? (
            <span className="error-message">{errors.eMoneyPin}</span>
          ) : null}
          </div>
      <input type="text" name="eMoneyPin" onChange={handleChange} onBlur={onBlur} placeholder="6891" className={errors.eMoneyPin ? "input-error" : ""} />
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

const Form = ({ handleChange, handleMethod, checkedState, validateForm, errors }) => {
  return (
    <div className="form">
      <h2>Checkout</h2>
      <form>
        <fieldset>
          <legend>Billing Details</legend>
          <div className="form-flex">
            <div className="form-half">
              <div className="label-flex">
          <label>Name</label>
          {errors.name ? (
            <span className="error-message">{errors.name}</span>
          ) : null}
          </div>
          <input type="text" name="name" onChange={handleChange} onBlur={validateForm} placeholder="Alexei Ward" className={errors.name ? "input-error" : ""} />
            </div>
            <div className="form-half">
            <div className="label-flex">
          <label>Email Address</label>
          {errors.email ? (
            <span className="error-message">{errors.email}</span>
          ) : null}
          </div>
          <input type="text" name="email" onChange={handleChange} onBlur={validateForm} placeholder="alexei@mail.com" className={errors.email ? "input-error" : ""} />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <div className="label-flex">
          <label>Phone Number</label>
          {errors.number ? (
            <span className="error-message">{errors.number}</span>
          ) : null}
          </div>
          <input type="text" name="number" onChange={handleChange} onBlur={validateForm} placeholder="+1 202-555-0136" className={errors.number ? "input-error" : ""} />
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Shipping Info</legend>
          <div className="form-flex">
          <div className="form-full">
          <div className="label-flex">
          <label>Your Address</label>
          {errors.address ? (
            <span className="error-message">{errors.address}</span>
          ) : null}
          </div>
          <input type="text" name="address" onChange={handleChange} onBlur={validateForm} placeholder="1137 Williams Avenue" className={errors.address ? "input-error" : ""} />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <div className="label-flex">
          <label>ZIP Code</label>
          {errors.zip ? (
            <span className="error-message">{errors.zip}</span>
          ) : null}
          </div>
          <input type="text" name="zip" onChange={handleChange} onBlur={validateForm} placeholder="10001" className={errors.zip ? "input-error" : ""} />
          </div>
          <div className="form-half">
          <div className="label-flex">
          <label>City</label>
          {errors.city ? (
            <span className="error-message">{errors.city}</span>
          ) : null}
          </div>
          <input type="text" name="city" onChange={handleChange} onBlur={validateForm} placeholder="New York" className={errors.city ? "input-error" : ""} />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <div className="label-flex">
          <label>Country</label>
          {errors.country ? (
            <span className="error-message">{errors.country}</span>
          ) : null}
          </div>
          <input type="text" name="country" onChange={handleChange} onBlur={validateForm} placeholder="United States" className={errors.country ? "input-error" : ""} />
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
          <Payment checkedState={checkedState} handleChange={handleChange} onBlur={validateForm} errors={errors} />
        </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form