import React from 'react'
import "./Prod.css"

function Prod(props) {
  return (
    <div className='item'>
        {/* <img src={props.img} alt="" /> */}
        <p>{props.name}</p>
        {/* <div className="item-prices">
            Rs.{props.price}
        </div> */}
        <p>{props.desc}</p>
    </div>
  )
}

export default Prod