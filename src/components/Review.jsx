import React from 'react'
import ReviewCard from './ReviewCard'
import Value from '../Review.js'






function Rev(data){
    return(
        <ReviewCard 
        key={data.id}
        imag={data.imag}  
        title={data.title}  
        details={data.details}
                />
    )
}


const Review = () => {
return (
    <div style={{marginTop:"50px"}} id='about'>
        <h1 style={{marginBottom:"50px"}}>Why Choose Our Products?</h1>
       <div style={{display:"flex"}}>{Value.map(Rev)}</div> 
</div>
  )
}

export default Review
