import React from 'react'
import {useEffect,useReducer} from "react"
import axios from 'axios'
import { useState } from 'react'
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'
import Productlist from '../components/Productlist'
import { Skeleton ,Stack} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const WomanProducts = () => {

  const initState = {
    isLoading:false,
    isError:false,
    womanproducts:[]

  }

  const reducer = (state,action) =>
  {
    switch(action.type)
    {
      case "loading":{
        return {
          ...state,
          isLoading:true

        }
      }
      case "get_data":{
        return {
          ...state,
          isLoading:false,
          isError:false,
          womanproducts:action.payload

        }
      }
      case "error":{
        return {
          ...state,
          isLoading:false,
          isError:true,

        }
      }
      default:{
        return state;
      }
    }

  }
  
  
  const [state,dispatch] = useReducer(reducer,initState)


  const section = "womenProducts"
  const API = `https://fragile-cow-umbrella.cyclic.app/${section}`;
  
  const getdata = async(URL) =>{
    dispatch({type:"loading"})

    try {
     
      const res = await axios.get(URL)
     const products = await res.data;
     console.log(products)
     dispatch({type:"get_data",payload:products})

      
    } catch (error) {
      console.log(error)
      dispatch({type:"error"})
    }
  }

  useEffect(()=>{
    getdata(API)
  },[])

  const {isLoading,womanproducts}  = state

  return (
    <>
    <div className='gridContainer'>

      <div>
        <FilterSection></FilterSection>
      </div>

      <section classNmae="product_view">

        <div className='sort_filter'>
          <Sort></Sort>
        </div>

        <div className='main_product'>
          {
            isLoading ? <Stack>
            <Skeleton height='40px' />
            <Skeleton height='40px' />
            <Skeleton height='40px' />
            <Skeleton height='40px' />
            <Skeleton height='40px' />
            <Skeleton height='40px' />
          </Stack>
             :
             
              womanproducts.map((item)=>{
                return <Productlist {...item} key={item.id} section={section}></Productlist>
              })
         
             }
        
        </div>

      </section>

    </div>
    {/* <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {
        data.map((item)=>{
          return <div style={{textAlign:"center"}}>
            <img src={item.img} alt={item.id}></img>
            <p>{item.name}</p>
            <p>price:{item.price}</p>
          </div>
        })
      }
    </div> */}
    </>
  )
}

export default WomanProducts
