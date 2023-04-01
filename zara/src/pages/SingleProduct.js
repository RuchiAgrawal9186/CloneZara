import React from 'react'
import { useReducer,useEffect } from 'react'
import {useParams} from "react-router-dom"
// import Productlist from '../components/Productlist'
import { Skeleton ,Stack} from '@chakra-ui/react'
import axios from 'axios'

const SingleProduct = () => {

  const {id,section} = useParams()
  // console.log(id,section)

  const initState = {
    isLoading:false,
    isError:false,
    singleproduct:[]

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
          singleproduct:action.payload

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


  const API = `https://fragile-cow-umbrella.cyclic.app/${section}/${id}`;

  const getdata = async(URL) =>{
    dispatch({type:"loading"})

    try {
     
      const res = await axios.get(URL)
     const products = await res.data;
    //  let arr=[{...products}]
    //  console.log(products)
     dispatch({type:"get_data",payload:products})

      
    } catch (error) {
      console.log(error)
      dispatch({type:"error"})
    }
  }

  useEffect(()=>{
    getdata(API)
  },[])

  const {isLoading,singleproduct}  = state
  // console.log(singleproduct)

  const {name,img,rating,rate,price,color,catagory} = singleproduct

  return (
    <div>
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
             
            <div className='single_product_main_div'>

              <div className="single_product_left_div">
                <img src={img} alt={name} />
              </div>

              <div className="single_product_right_div">
                <h2>{name}</h2>
                <p>{rating} (50 customer reviews)</p>
                {/* <p>reviews</p> */}
                <p>Rating : <b><span>{rate}.0</span></b></p>
                <b><del>
                  MRP ₹{price+4599}
                </del></b>
                <p style={{color:"blue"}}>Deal of the Day:{price}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, asperiores repellat! Modi facilis velit laborum veniam enim nihil, itaque ad atque ipsam et rem hic consequuntur repellendus laboriosam delectus animi!</p>
                <div>
                  <b><p>Available: <span>In Stock</span></p></b>
                 <b><p>Categoty : {catagory}</p></b>
                 <b> <p>Color : {color}</p></b>
                </div>
               <b> <hr style={{color:"black"}}/></b>

                <button className='button'> Add to Cart</button>

              </div>

            </div>
         
             }
    </div>
  )
}

export default SingleProduct
