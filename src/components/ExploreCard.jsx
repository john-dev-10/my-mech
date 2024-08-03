import React, { useState } from 'react'
import'./ExploreCard.css'
import BodyMain from '../BodyMain'
import { useNavigate } from 'react-router-dom'



const ExploreCard = (props) => {


  const [items,setItems]=useState( )
  const navigate=useNavigate()

  



const filter=(title)=>{
console.log(title,"ttt")
navigate('/main',{ state: title })
}


  return (
    <div className='explore' onClick={()=>filter(props.title)}>
     <div className='card'>
        <div class="card" style={{width:"18rem"}}>
        <p>{props.id}</p>
    <img className='imageofServices' src={props.img} />
    <div class="card-body">
    <p class="card-text">{props.title}</p>
  </div>
</div>
      </div>
  </div>

  )
}

export default ExploreCard
