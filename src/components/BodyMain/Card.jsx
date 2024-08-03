import React, { useContext } from 'react'
import './Card.css'
import { assets } from '../../asserts/assets'
import { StoreContext } from '../Context/StoreContext'

const Card = ({ id,...props}) => {

   
    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
   


  return (
    <div className='food-item'>
        <div className="food-item-img-container">
        <img src={props.img} alt=""  className="food-item-image"/>
       
        {
               !cartItems[id]
               ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
               :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                  </div>
            }
</div>
       <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{props.name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
           <p className="food-item-desc">{props.description}</p>
           <p className="food-item-price">Rs:{props.price}</p>
        </div>
    </div>
  )
}

export default Card
