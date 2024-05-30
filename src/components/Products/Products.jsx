import React from 'react'
import "./Products.css"
import Prods from "../assets/Products"
import Prod from '../Prod/Prod'

function Products() {
  return (
    <div className="pro">
      <div className='products'>
        {Prods.map((item,i)=>{
          return <Prod key={i} name={item.name} desc={item.description} />
        })}
      </div>
    </div>
  )
}

export default Products