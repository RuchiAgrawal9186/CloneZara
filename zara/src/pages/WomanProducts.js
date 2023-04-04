import React, { useContext, useState } from 'react'
import {useEffect,useReducer} from "react"
import axios from 'axios'
import {Box,Select,VStack,Center,Button,ButtonGroup,Input,InputGroup,InputRightAddon, } from "@chakra-ui/react"
import { FiSearch} from 'react-icons/fi';
// import { Select,VStack ,Input,InputGroup,InputRightAddon,Box, Stack} from '@chakra-ui/react'
// import { useState } from 'react'
// import FilterSection from '../components/FilterSection'
// import Sort from '../components/Sort'
import Productlist from '../components/Productlist'
import { Skeleton ,Stack} from '@chakra-ui/react'
import { dataContext } from '../context/DatacontextProvider';

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
  const [search,setsearch]=useState("")
  const [page,setpage]=useState(1)
  

  console.log(order,color,catagory)

  // let total = 27

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
  if(search)
  {
    obj.q=search
  }
  if(page)
  {
    obj._page=page
    obj._limit=6
  }
  console.log(obj)

  const section = "womenProducts"
  let API = `https://easy-puce-crow-garb.cyclic.app/${section}`;
   
  
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
    const interval = setTimeout(()=>{
      getdata(API)
    },1000)

    return ()=>clearTimeout(interval)
    // getdata(API)
  },[order,color,catagory,search,page])

  // const {isLoading,womanproducts}  = state

  return (
    <>
    <div className='gridContainer'>

      <div className='left_filter_view'>
        {/* <FilterSection></FilterSection> */}
        <Center>
    <VStack spacing={6}>
      <Box  mt="10%">   
      {/* <label alignContent="left">price sorting </label> */}
    <Select placeholder='Sorting by price'  w={{base:"md",lg:"sm" ,md:"md",sm:"sm",xs:"xs"}}  border="1px solid black" name="sort" id="sort" value={order} onChange={(e)=> setorder(e.target.value)}>
    <option value='asc'>low to high</option>
    <option value='desc'>high to low</option>
    {/* <option value='option3'>Option 3</option> */}
    </Select>
   
    </Box> 
   
    <Box>   
    <Select placeholder='Select By Category' w={{bas:"130%",md:"130%",sm:"100%",xs:"80%"}} alignContent="right" border="1px solid black" name="catagory" id="catagory" value={catagory} onChange={(e)=> setcatagory(e.target.value)}>
    <option value='tops'>tops</option>
    <option value='shirt'>shirt</option>
    <option value='dress'>dress</option>
    <option value='jeans'>jeans</option>
    <option value='palazzos'>palazzos</option>
    <option value='patialas'>patialas</option>
    </Select>
    </Box> 
    
    <Box width="100%">   
    <Select placeholder='Select By Color' w={{bas:"130%",md:"130%",sm:"100%",xs:"80%"}} alignContent="right" border="1px solid black" name="color" id="color" value={color} onChange={(e)=> setcolor(e.target.value)}>
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
      setsearch("")
    }}>Reset All</button>
    </VStack>
    </Center> 
      </div>

      <div className="product_view">

        <div className='sort_filter'>
          {/* <Sort></Sort> */}
          <Box display="flex" justifyContent="space-around" boxShadow='md' p='6' rounded='md' mb="2%" border="1px solid black">
          <Box>

          <InputGroup size='sm'>
            <Input placeholder='Search products' w={{base:"md" , md:"md", sm:"sm"}} border="1px solid black" name="search" value={search} id="search"onChange={(e)=> setsearch(e.target.value)}/>
            <InputRightAddon children={<FiSearch></FiSearch>} border="1px solid black"/>
          </InputGroup>

          </Box>
          
            </Box>
        </div>

        <div className='main_product'>
          {
            isLoading ? <Stack>
            <Skeleton height='70px' />
            <Skeleton height='70px' />
            <Skeleton height='70px' />
            <Skeleton height='70px' />
            <Skeleton height='70px' />
            <Skeleton height='70px' />
          </Stack>
             :
             
              womanproducts.map((item)=>{
                return <Productlist {...item} key={item.id} section={section} f></Productlist>
              })
         
             }
        
        </div>

          {/* <div className='pagination'>
          <button className='button' onClick={()=> setpage(page-1)} disabled={page==1} >Prev</button>
          <p>{page}</p>
          <button className='button' onClick={()=> setpage(page+1)} >Next</button>
          </div>  */}

      </div>

    </div>


    <div className='pagination'>
    <button className='button' onClick={()=> setpage(page-1)} disabled={page==1} >Prev</button>
    <span>{page}</span>
    <button className='button' onClick={()=> setpage(page+1)} >Next</button>
    </div> 
    </>
  )
}

export default WomanProducts
