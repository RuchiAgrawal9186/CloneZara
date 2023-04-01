import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHeart } from "react-icons/fi";

const Productlist = ({id,name,price,img,section}) => {
  return (
    <>
    <NavLink to={`/singleproduct/${section}/${id}`}>
    <div className='products'>
         {/* <div style={{textAlign:"center"}} key={id}> */}
              <img src={img} alt={id}></img>
              <p>{name}</p>
              <p>price:₹{price}</p>
              {/* <div>
              {/* <NavLink to={`/singleproduct/${section}/${id}`}><p>Read More</p></NavLink> */}
              <p>Read More...</p>
              <FiHeart></FiHeart>

              {/* </div> */} 
         {/* </div> */}
        
    </div>
    </NavLink>
    </>
  )
}

export default Productlist
