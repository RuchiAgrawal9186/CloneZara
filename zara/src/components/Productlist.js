import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHeart } from "react-icons/fi";
import { textDecoration } from '@chakra-ui/styled-system';
import { dataContext } from '../context/DatacontextProvider';
import { CartContext } from '../context/CartContextProvider';

const Productlist = ({id,name,price,img,section}) => {

  // const {cartdata,setcartdata,getcart} = useContext(dataContext)
  const {getcart} = useContext(CartContext)
  let arr = {id:id,name:name,price:price,img:img,section:section}

  
  return (
    <>
    
    <div className='products' key={id}>
         {/* <div style={{textAlign:"center"}} key={id}> */}
              <img src={img} alt={id}></img>
              <p>Name:{name}</p>
              <p>price:₹{price}</p>
              {/* <div>
              {/* <NavLink to={`/singleproduct/${section}/${id}`}><p>Read More</p></NavLink> */}
              <NavLink to={`/singleproduct/${section}/${id}`}><p style={{color:"blue", textDecoration:"line"}}>Read More...</p></NavLink>
              {/* <FiHeart></FiHeart> */}
              <button className='button' onClick={()=> getcart(arr)}>Add to Cart</button>
        
    </div>
   
    </>
  )
}

export default Productlist
