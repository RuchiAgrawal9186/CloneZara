import React, { useEffect, useState } from 'react'
// import { dataContext } from '../context/DatacontextProvider'
// import {useContext} from "react"
import axios from 'axios'
// import { Navigate } from 'react-router-dom'
import {useNavigate} from "react-router-dom"



const Cart = () => {

  const [cartdata,setcartdata] = useState([])
  const navigate = useNavigate();

  const API = `https://easy-puce-crow-garb.cyclic.app/cart`


  const getdata = async(url) =>{

    try {

      let data_req = await axios.get(url)
      let data = await data_req.data
      setcartdata(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{

    getdata(API)

  },[])


  // const [quantity,setquantity] = useState(1)

  

  const  handlequantity = (id,payload)=>{
    const updateddata = cartdata.map((item)=>
      item.id==id?{...item,quantity:item.quantity + payload,} : item
    )
   setcartdata(updateddata)   
    
  }

  let sum=0
  {
    cartdata.map((product)=>{
      sum+=product.price*product.quantity
    })

  }

  const thankyou = () =>{
    //  return <Navigate to="/thankyou"></Navigate>
     setTimeout(() => {
      return navigate("/thankyou")
    },100);

     
  }

  
  return (
    <>
    <div className='main_cart_div'>

    <div className='cart_container'>
     {

      cartdata.map((item)=>{

        return <div key ={item.id}>
           <div>
            <img src={item.img} alt={item.name} />
            </div>
            <div>
            <span>Name: {item.name}</span>
            </div>
            <div>
            <button className='button' onClick={()=>handlequantity(item.id,1)}>+</button>
            <span style={{marginRight:"1%",marginLeft:"1%"}}>{item.quantity}</span>
            <button className='button'onClick={()=>handlequantity(item.id,-1)} disabled={item.quantity<=1}>-</button>
            </div>
            <div>
            <span>price: ₹{item.price*item.quantity}</span>
            </div>
        </div>
      })
    }
     {/* <h1>Total : {sum}</h1><button className='button' onClick={()=> thankyou()}>Payment</button> */}
    </div>

   
    
   <div className="total_div">

    <div>

    <div style={{fontSize:"20px"}}>Order Summary</div>
    <hr/>
    <div>Items Ordered :{cartdata.length} </div>
    <div>Product Price : ₹{sum}</div>
    <div>Shipping Cost : ₹50</div>
    <div>Tax + vat : ₹20</div>
    <div>Total Price : ₹{sum + 70}</div>
    <hr/>
    <button className='button' onClick={()=> thankyou()}>Payment</button>

    </div>

    </div> 


    </div>

    </>
  )
}

export default Cart
