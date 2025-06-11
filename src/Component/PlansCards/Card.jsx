import React from 'react'
import './Card.css'
export default function Card({price, plan, description,tickets, booking, PersonalizedSupport, background}) {
  return (
    <div className={`card card-plans ${background}`} >
        <div className="card-body flex-col">
            <h2 className="card-title">{price}</h2>
            <h3>{plan}</h3>
            <p className="card-text">{description}</p>
            <hr />
            <ul>
                <li>{tickets}</li>
                <li>{booking}</li>
                <li>{PersonalizedSupport}</li>
            </ul>
            <button className='flex-center'> <i class="fa-solid fa-chevron-left bg-light text-dark"></i> Book Now </button>
        </div>
    </div>
  )
}
