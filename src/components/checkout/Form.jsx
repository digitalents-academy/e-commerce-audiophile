const Form = ({ handleChange }) => {
  return (
    <div className="form">
      <h2>Checkout</h2>
      <form>
        <fieldset>
          <legend>Billing Details</legend>
          <div className="form-flex">
            <div className="form-half">
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange}/>
            </div>
            <div className="form-half">
          <label>Email Address</label>
          <input type="text" name="email" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>Phone Number</label>
          <input type="text" name="number" />
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Shipping Info</legend>
          <div className="form-flex">
          <div className="form-full">
          <label>Your Address</label>
          <input type="text" name="address" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>ZIP Code</label>
          <input type="text" name="zip" />
          </div>
          <div className="form-half">
          <label>City</label>
          <input type="text" name="city" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>Country</label>
          <input type="text" name="country" />
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
            <label><input type="radio" name="" id="" />
          e-Money</label>
          <label><input type="radio" name="" id="" />
          Cash on Delivery</label>
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>e-Money Number</label>
          <input type="text" name="eMoneyNumber" />
          </div>
          <div className="form-half">
          <label>e-Money PIN</label>
          <input type="text" name="eMoneyPin" />
          </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form