import React, { useState } from 'react'
import ExploreCard from './ExploreCard';
import Details from '../Explore'



function Detail(value){



  return(
  <div>
    <ExploreCard 
key={value.id}
img={value.imgURL}
title={value.title}
  />
  </div>)
}


const Explore = () => {
  return (
   <div style={{marginTop:"50px"}} id='category'>
    <h1 style={{marginBottom:"50px"}}>Search by category</h1>
    <div style={{display:"flex",justifyContent:"space-around"}}>
{Details.map(Detail)}
</div>
   </div>
  )
}

export default Explore
