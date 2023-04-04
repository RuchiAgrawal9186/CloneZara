import React, { useEffect } from 'react'
import { useState } from 'react'


export const dataContext = React.createContext()

const DatacontextProvider = (props) => {

    const [dataa,setdata]=useState([])
    // const [cartdata , setcartdata ] = useState([])
   

   

    // let [newarray,setnewarray] = useState([])
   
    

   

let API = `https://easy-puce-crow-garb.cyclic.app/user`

  const getdata = async (url) =>{

    try {

        let data_req = await fetch(url)
        let res = await data_req.json()
        .then((res)=>{
            // console.log(res)
            setdata(res)
        })
        
    } catch (error) {
        console.log(error)
    }
  }


// console.log(dataa)

useEffect(()=>{
    getdata(API)
},[API])

  return (
    <dataContext.Provider value= {{dataa , getdata }}>
        {props.children}
    </dataContext.Provider>
  )
}

export default DatacontextProvider
