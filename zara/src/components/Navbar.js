
import React, { useContext } from 'react'
import {Link} from "react-router-dom"
// import styles from "./Navbar.module.css"
// import style from "../pages/Global.module.css"
// import React, { Component } from 'react'
// import { BsCart4 } from "react-icons/fa";
import { Navigate ,NavLink} from 'react-router-dom';
import { FaCartPlus} from 'react-icons/fa';
// import { dataContext } from '../context/DatacontextProvider';
import { AuthContext } from '../context/AuthContextProvider';
// import { CartContext } from '../context/CartContextProvider';
import { useState } from 'react';
import axios from 'axios';
import {useEffect} from "react"

// let fetchcartdata = JSON.parse(localStorage.getItem("data")) || []



const Navbar = () => {

  const {Auth,logout} = useContext(AuthContext)
  const Links = [
    {to:"/",title:"Home"},
    {to:"/woman",title:"Women"},
    {to:"/man",title:"Men"},
    {to:"/kids",title:"Kids"},
    {to:"/beauty",title:"Beauty"},
    {to:"/about",title:"About"},
    {to:"/contact",title:"Contact"},

]
// const {newarray} = useContext(dataContext)
// const {cartLength} = useContext(dataContext)
const [fetchdata,setfetchdata] = useState([])
const {name} = useContext(AuthContext)
// const {fetchdata} = useContext(CartContext)

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
    },[fetchdata])


  return (
    <>
    <div className="header">
        <img src='./images/result.png' alt="logo" className="logo"></img>
      <nav className="navlist">
        
        {
          Links.map((item,index)=>{
            return <Link to={item.to} className="navlink" key={index+1}>{item.title}</Link>
          })
        } 
      </nav>

      <div className="rightdiv">
        {
          Auth?<b><div>{name}</div></b>:""
        }
        {
           Auth ? <div><button className='button' onClick={logout}>Logout</button></div> :<Link to="/login"><div><button className='button'>Login</button></div></Link> 
        }
       
        <NavLink to="/cart"><div style={{marginTop:"-3%"}}><span className='cart_icon'>{fetchdata.length}</span><FaCartPlus style={{ fontSize: '30px',alignItems:"center"}}></FaCartPlus> </div></NavLink>
      </div>

    </div>
    </> 
    
  )
}

export default Navbar
