import React from 'react'
import './Card.css'
export default function Card({image, title, description}) {
  return (
    <div className="card card-service-contact" >
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-secondary">{description}</p>
        </div>
    </div>
  )
}
