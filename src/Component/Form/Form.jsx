import React from 'react'
import './Form.css'
export default function Form() {
  return (
        <form>
            <div className="form-group">
                <h3 for="exampleFormControlInput1">Email address</h3>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <h3 for="exampleFormControlInput1">Email address</h3>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <h3 for="exampleFormControlTextarea1">Example textarea</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn bg-dark text-light">Submit</button>
        </form>
  )
}
