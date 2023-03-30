import React from 'react'
import {useState} from "react"
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

const Register = () => {
    const [input, setInput] = useState('')
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  return (
    
    <Center>
        <Box border="1px solid black" w={{base:"30%", md:"30%",sm:"20%"}} height={{base:"450px",md:"450px",sm:"200px"}} margin="auto" marginTop="2%" boxShadow='dark-lg'>
            <h2 style={{fontFamily:"sans-serif",marginTop:"2%",textAlign:"center"}}>Registration form</h2>
    <FormControl isRequired marginTop="4%" >
    {/* <FormLabel>Username</FormLabel> */}
    <Input placeholder='Enter Username' type="text" w={{base:"50%",md:"60%",sm:"15%"}} border="1px solid black"/>
    {/* <FormLabel>Email</FormLabel> */}
    <HStack></HStack>
      <Input type='email' value={input} onChange={handleInputChange} marginTop="5%"placeholder='Enter Email' w={{base:"50%",md:"60%",sm:"15%"}} border="1px solid black"/>
      {!isError ? (
        ""
        // <FormHelperText>
        //   Enter the email you'd like to receive the newsletter on.
        // </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      
      {/* <VStack></VStack> */}
      <Center>
       <InputGroup size='md' w={{base:"50%",md:"60%",sm:"15%"}} marginTop="5%" >
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        border="1px solid black"/>
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} backgroundColor="black" color="white">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </Center>
    <Input type="submit" value="Register" backgroundColor="black" color="white" w={{base:"50%",md:"60%",sm:"15%"}} marginTop="5%"></Input>
    </FormControl>
    </Box>
    </Center>
    
  )
}

export default Register
