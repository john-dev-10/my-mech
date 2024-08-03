import React from 'react'

const ReviewCard = (props) => {
  return (
    <div>
        <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
        <p>{props.id}</p>
      <img src={props.imag} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.details}</p>
       </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ReviewCard
