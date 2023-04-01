import React from 'react'
import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Center,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    VStack,
    HStack,
    Container,
    Box,
    
  } from '@chakra-ui/react'

const Login = () => {
  // const [input, setInput] = useState('')
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [data,setdata]=useState([])

    const Validation = ()=>{

      let validate = true
      // let errormessege = "please enter details"

      if(email=="")
      {
        validate=false
        toast.warning("please enter email")
      }
      if(password=="")
      {
        validate=false
        toast.warning("please enter password")
      }
    

      return validate

    }


    // const handleInputChange = (e) => setInput(e.target.value)
  
    // const isError = input === ''
    const handlesubmit =(e)=>{
     
      e.preventDefault()
      console.log("hello")
      
      if(Validation())
      {
      const userdetails = {
        email,password
      }
      console.log(userdetails)

      fetch(`https://fragile-cow-umbrella.cyclic.app/user`)
      .then((res)=>{
        // toast.success("Registartion successfully")
        return res.json()
        
      })
      .then((dataa)=>{
        console.log(dataa)
        console.log("dataa",dataa)
        if(Object.keys(dataa).length==0)
        {
          toast.warning("please enter valid email")
        }
        else{
          // console.log(dataa.password,password)
          if(dataa.password==password)
          {
            toast.success("Login Successfully")
          }
          else{
            toast.warning("please enter valid password")
          }
        }
      })
      .catch((err)=>{
        toast.error("login failed",err)
      })
    }
   
     setemail("")
       setpassword("")
      //  setusername("")
    }

  return (
    <>
    <ToastContainer theme="colored"></ToastContainer>
    <Center>
        <Box border="1px solid black" w={{base:"30%", md:"30%",sm:"20%"}} height={{base:"400px",md:"400px",sm:"200px"}} margin="auto" marginTop="2%" boxShadow='dark-lg'>
            <h2 style={{fontFamily:"sans-serif",marginTop:"2%",textAlign:"center"}}>Login form</h2>
    <FormControl isRequired marginTop="4%" >
    
    <HStack></HStack>
      <Input type='email' onChange={(e)=> setemail(e.target.value)} marginTop="3%"placeholder='Enter Email' w={{base:"50%",md:"60%",sm:"15%"}} border="1px solid black" name="email" id="email" value={email}/>
     
      <Center>
       <InputGroup size='md' w={{base:"50%",md:"60%",sm:"15%"}} marginTop="5%" >
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        border="1px solid black"
        name="password"
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        id="password"/>
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} backgroundColor="black" color="white">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </Center>
    <Input type="submit" value="Login" onClick={handlesubmit} backgroundColor="black" color="white" w={{base:"50%",md:"60%",sm:"15%"}} marginTop="5%"></Input>
    </FormControl>
    </Box>
    </Center>
    </>

  )
}

export default Login
