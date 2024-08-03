import React from 'react'
import { createContext, useEffect } from "react";
import { useState } from "react";
import { food_list } from '../../asserts/assets';
import BodyMain from '../../BodyMain';
import { useNavigate } from 'react-router-dom';



export const StoreContext=createContext(null)

    const StoreContextProvider=(props)=>{

    const[cartItems,setCartItems]=useState({});

  
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };
    


    const removeFromCart = (itemId) => {
        setCartItems((prev) => {

            if (!prev[itemId]) {
                return prev;
            }
    
            
            const updatedCartItems = { ...prev };
    
            
            if (updatedCartItems[itemId] > 1) {
                updatedCartItems[itemId] -= 1;
            } else {
              
                delete updatedCartItems[itemId];
            }
    
            return updatedCartItems;
        });
    };
    



    
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item);
            totalAmount+=itemInfo.price*cartItems[item];
        }
        }
        return totalAmount;
    }

    const contextValue={

        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        
      
        }
  return (
    <div>
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
      
    </div>
  )
}

export default StoreContextProvider
