import React from 'react'

const Card = ({author, description, imgUrl, name}) => {
  return (
  
<div className="container-card">
  <div className="card">
    <div class="card__header">
      <img src={imgUrl} alt="card__image" className="card__image" width="600" />
    </div>
    <div className="card__body">
      <h4>{author}</h4>
      <p>{description}</p>
      <h3>{name}</h3>
    </div>
  </div>
</div>
  )
}

export default Card