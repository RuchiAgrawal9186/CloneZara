import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
import style from "../pages/Global.module.css"
// import React, { Component } from 'react'
// import { BsCart4 } from "react-icons/fa";
import { FaCartPlus} from 'react-icons/fa';

const Navbar = () => {
  const Links = [
    {to:"/",title:"Home"},
    {to:"/woman",title:"Woman"},
    {to:"/man",title:"Man"},
    {to:"/kids",title:"Kids"},
    {to:"/beauty",title:"Beauty"},
    {to:"/about",title:"About"},
    {to:"/contact",title:"Contact"},
]
  return (
    <>
    <div className={styles.header}>
        <img src='./images/result.png' alt="logo" className={styles.logo}></img>
      <nav className={styles.navlist}>
        
        {
          Links.map((item)=>{
            return <Link to={item.to} className={styles.navlink}>{item.title}</Link>
          })
        } 
      </nav>

        {/* <form class="container-fluid">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{width:"20px"}}/>
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
      </form> */}
      <div className={styles.rightdiv}>
        <Link to="/login"><div><button className={style.button}>Login</button></div></Link>
        <div><FaCartPlus style={{ fontSize: '30px'}}/></div>
      </div>

    </div>
    </> 
    
  )
}

export default Navbar
