import React from 'react'
import { NavLink } from 'react-router-dom'

const Productlist = ({id,name,price,img,section}) => {
  return (
    <NavLink to={`/singleproduct/${section}/${id}`}>
    <div>
         <div style={{textAlign:"center"}} key={id}>
              <img src={img} alt={id}></img>
              <p>{name}</p>
              <p>price:{price}</p>
         </div>
        
    </div>
    </NavLink>
  )
}

export default Productlist
