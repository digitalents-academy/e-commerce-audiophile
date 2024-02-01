const Form = () => {
  return (
    <div className="form">
      <h2>Checkout</h2>
      <form>
        <fieldset>
          <legend>Billing Details</legend>
          <div>
            <div>
          <label>Name</label>
          <input type="text" name="" id="" />
            </div>
            <div>
          <label>Email Address</label>
          <input type="text" name="" id="" />
          </div>
          <div>
          <label>Phone Number</label>
          <input type="text" name="" id="" />
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Shipping Info</legend>
          <div>
          <div>
          <label>Your Address</label>
          <input type="text" name="" id="" />
          </div>
          <div>
          <label>ZIP Code</label>
          <input type="text" name="" id="" />
          </div>
          <div>
          <label>City</label>
          <input type="text" name="" id="" />
          </div>
          <div>
          <label>Country</label>
          <input type="text" name="" id="" />
          </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Payment Details</legend>
          <div>
            <div>
          <label>Payment Methord</label>
            </div>
            <div>
          <input type="radio" name="" id="" />
          <label>e-Money</label>
          <input type="radio" name="" id="" />
          <label>Cash on Delivery</label>
          </div>
          <div>
          <label>e-Money Number</label>
          <input type="text" name="" id="" />
          </div>
          <div>
          <label>e-Money PIN</label>
          <input type="text" name="" id="" />
          </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Form