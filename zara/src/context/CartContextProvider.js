import React, { useEffect } from 'react'
import {useState} from "react"
import axios from 'axios'


export const CartContext = React.createContext()






const CartContextProvider = (props) => {

    const [fetchdata,setfetchdata] = useState([])


    const getcart  = (data) =>{

        const cartdetails = {
            ...data,quantity:1
        }

        console.log(data)
     
        try {
    
            let data_req = fetch(`https://zara-vej9.onrender.com/cart`,{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify(cartdetails)
                })
            .then((res)=>{
                console.log("data sent successfully")
            })
    
            
        } catch (error) {
    
            console.log("error",error)
            
        }
    
     
    }
    
    const API = `https://zara-vej9.onrender.com/cart`
    
    
      const getdata = async(url) =>{
    
        try {
    
          let data_req = await axios.get(url)
          let data = await data_req.data
          setfetchdata(data)
          
        } catch (error) {
          console.log(error)
        }
    
    
      }
    
    
    
    useEffect(()=>{
        getdata(API)
    },[])


  return (
    <CartContext.Provider value = {{getcart,fetchdata,getdata}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
