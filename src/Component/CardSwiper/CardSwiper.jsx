import React from 'react'
import './CardSwiper.css'
export default function CardSwiper({image, title, description}) {
  return (
    <div className="card">
        <img className='card-img-top' src={image} />
        <div className='card-body bg-light'>
            <h3>
                {title}
            </h3>
            <p className='text-secondary'>
                {description}
            </p>
        </div>
    </div>

  )
}
