import React from 'react'
import './Cart.css'
import { StoreContext } from '../Context/StoreContext.jsx';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {


  const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)

const navigate=useNavigate()

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div> <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs:{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs:{item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr/></div>
             
            )
          }
        })}
      </div>
      
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="card-total-details">
<p>SubTotal</p>
<p>Rs:{getTotalCartAmount()}</p>
<hr/>
            </div>
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>Rs:{getTotalCartAmount()===0?0:2}</p>
              <hr/>
            </div>
            <div className="card-total-details">
              <b>Total</b>
              <b>Rs:{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code,Enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { StoreContext } from '../Context/StoreContext';
// import { assets } from '../../asserts/assets';
// import './Cart.css'

// const Cart = () => {
//     const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
//     const [cartData, setCartData] = useState([]);

//     const fetchCartData = async () => {
//         try {
//             const res = await axios.get("http://localhost:3001/data");
//             const allData = res.data;
//             const filteredData = allData.filter(item => cartItems[item._id]);
//             setCartData(filteredData);
//         } catch (error) {
//             console.error("Error fetching cart data:", error);
//         }
//     };

//     useEffect(() => {
//       fetchCartData();
//   }, [cartItems]);

//   return (
//       <div className='food-display' id='food-display'>
//           <h2>Your Order's</h2>
//           <div className='food-display-list'>
//               {cartData.map(item => (
//                   <div key={item._id} className='food-item'>
//                       <div className="food-item-img-container">
//                           <img src={item.image} alt={item.name} className="food-item-image" />
//                           <div className='food-item-counter'>
//                               <img onClick={() => removeFromCart(item._id)} src={assets.remove_icon_red} alt='Remove' />
//                               <p>{cartItems[item._id]}</p>
//                               <img onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt='Add' />
//                           </div>
//                       </div>
//                       <div className="food-item-info">
//                           <div className="food-item-name-rating">
//                               <p>{item.name}</p>
//                               <p>{item.description}</p>
//                               <p>{item.price}</p>
//                           </div>
//                           <button onClick={() => removeFromCart(item._id)}>Remove</button>
//                       </div>
//                   </div>
//               ))}
// </div>
//         </div>
//     );
// }

export default Cart;