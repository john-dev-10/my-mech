import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import './PlaceOrder.css'

const PlaceOrder = () => {


const {getTotalCartAmount}=useContext(StoreContext)


  return (
    <form className='place-order' >
      <div className="place-order-left">
<p className='title'>Delivery Information</p>
<div className="multi-fields">
  <input type="text" placeholder='First Name'/>
  <input type="text" placeholder='Last Name'/>
</div>
<input type="text" placeholder='Email Address'/>
<input type="text" placeholder='Street'/>
<div className="multi-fields">
  <input type="text" placeholder='City'/>
  <input type="text" placeholder='State'/>
</div>
<div className="multi-fields">
  <input type="text" placeholder='Pin code'/>
  <input type="text" placeholder='Country'/>
</div>
<input type='text' placeholder='phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="card-total-details">
<p>SubTotal</p>
<p>Rs {getTotalCartAmount()}</p>
<hr/>
            </div>
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount()===0?0:2}</p>
              <hr/>
            </div>
            <div className="card-total-details">
              <b>Total</b>
              <b>Rs:{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>

      
    
  )
}

export default PlaceOrder
