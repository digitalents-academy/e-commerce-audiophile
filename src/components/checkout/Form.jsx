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
          <input type="text" name="name" onChange={handleChange}  placeholder="Alexei Ward"/>
            </div>
            <div className="form-half">
          <label>Email Address</label>
          <input type="text" name="email" placeholder="alexei@mail.com" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>Phone Number</label>
          <input type="text" name="number" placeholder="+1 202-555-0136" />
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Shipping Info</legend>
          <div className="form-flex">
          <div className="form-full">
          <label>Your Address</label>
          <input type="text" name="address" placeholder="1137 Williams Avenue" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>ZIP Code</label>
          <input type="text" name="zip" placeholder="10001" />
          </div>
          <div className="form-half">
          <label>City</label>
          <input type="text" name="city" placeholder="New York" />
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>Country</label>
          <input type="text" name="country" placeholder="United States" />
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
            <label><input type="radio" name="payment" id="" checked/>
          e-Money</label>
          <label><input type="radio" name="payment" id="" />
          Cash on Delivery</label>
          </div>
          <div className="break"></div>
          <div className="form-half">
          <label>e-Money Number</label>
          <input type="text" name="eMoneyNumber" placeholder="238521993" />
          </div>
          <div className="form-half">
          <label>e-Money PIN</label>
          <input type="text" name="eMoneyPin" placeholder="6891" />
          </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form