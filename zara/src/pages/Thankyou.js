import React from 'react'
import {useNavigate} from "react-router-dom"



const Thankyou = () => {

  const navigate = useNavigate();

  setTimeout(() => {
    return navigate("/")
  },3000);

  return (
    <div>
        <div className="thank_you_div">
        <h1>Thank You</h1>
        <h3>Your order has been Confirmed.</h3>
    </div>
      
    </div>
  )
}

export default Thankyou
