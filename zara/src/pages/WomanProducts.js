import React, { useState } from 'react'
import {useEffect,useReducer} from "react"
import axios from 'axios'
import {Box,Select,HStack,VStack,Center,Button,ButtonGroup} from "@chakra-ui/react"
// import { useState } from 'react'
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'
import Productlist from '../components/Productlist'
import { Skeleton ,Stack} from '@chakra-ui/react'

// import { useParams } from 'react-router-dom'

const WomanProducts = () => {

  const initState = {
    isLoading:false,
    isError:false,
    womanproducts:[],
    // sorting:"",
    // catagory:"",
    // color:"",

  }

  const [order,setorder]=useState("")
  const [color,setcolor]=useState("")
  const [catagory,setcatagory]=useState("")

  console.log(order,color,catagory)


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
      case "sorting":{
        return {
          ...state,
          isLoading:false,
          isError:false,
          sorting:action.payload

        }
      }
      case "catagory":{
        return {
          ...state,
          isLoading:false,
          isError:false,
          catagory:action.payload

        }
      }
      case "color":{
        return {
          ...state,
          isLoading:false,
          isError:false,
          color:action.payload

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
  console.log(state)

  const {womanproducts,isLoading} = state
  
 let obj={};

  if(order)
  {
   obj._sort="price"
   obj._order=order
  }
  if(catagory)
  {
    obj.catagory=catagory
  }
  if(color)
  {
    obj.color=color
  }
  console.log(obj)

  const section = "womenProducts"
  let API = `https://fragile-cow-umbrella.cyclic.app/${section}`;
   
  
  const getdata = async(URL) =>{
    dispatch({type:"loading"})

    try {
     
      const res = await axios.get(URL,{
        params:obj
      })
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
  },[order,color,catagory])

  // const {isLoading,womanproducts}  = state

  return (
    <>
    <div className='gridContainer'>

      <div className='left_filter_view'>
        {/* <FilterSection></FilterSection> */}
        <Center>
    <VStack spacing={6}>
      <Box width="100%">   
      {/* <label alignContent="left">price sorting </label> */}
    <Select placeholder='Sort by price' w="130%"  border="1px solid black" name="sort" id="sort" value={order} onChange={(e)=> setorder(e.target.value)}>
    <option value='asc'>low to high</option>
    <option value='desc'>high to low</option>
    {/* <option value='option3'>Option 3</option> */}
    </Select>
   
    </Box> 
   
    <Box>   
    <Select placeholder='Select By Category' w="130%" alignContent="right" border="1px solid black" name="catagory" id="catagory" value={catagory} onChange={(e)=> setcatagory(e.target.value)}>
    <option value='tops'>tops</option>
    <option value='shirt'>shirt</option>
    <option value='dress'>dress</option>
    <option value='jeans'>jeans</option>
    <option value='palazzos'>palazzos</option>
    <option value='patialas'>patialas</option>
    </Select>
    </Box> 
    
    <Box width="100%">   
    <Select placeholder='Select By Color' w="130%" alignContent="right" border="1px solid black" name="color" id="color" value={color} onChange={(e)=> setcolor(e.target.value)}>
    <option value='red'>red</option>
    <option value='green'>green</option>
    <option value='blue'>blue</option>
    <option value='green'>green</option>
    <option value='orange'>orange</option>
    <option value='black'>black</option>
    <option value='white'>white</option>
    </Select>
    </Box> 
    <button className='button' onClick={()=>{
      setcolor("")
      setorder("")
      setcatagory("")
    }}>Reset All</button>
    </VStack>

    

    </Center> 
      </div>

      <div className="product_view">

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

      </div>

    </div>
   
    </>
  )
}

export default WomanProducts
