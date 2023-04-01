import React from 'react'
import { FiSearch} from 'react-icons/fi';
import { Select,VStack ,Input,InputGroup,InputRightAddon,Box, Stack} from '@chakra-ui/react'

const Sort = () => {
  return (
    <>
    <Box display="flex" justifyContent="space-around" boxShadow='md' p='6' rounded='md' mb="2%">
   <Box>

   <InputGroup size='sm'>
    <Input placeholder='mysite' w="md" border="1px solid black"/>
    <InputRightAddon children={<FiSearch></FiSearch>} border="1px solid black"/>
  </InputGroup>

   </Box>
  
    {/* <Box>   
    <Select placeholder='Select for sorting' w="120%" alignContent="right" border="1px solid black">
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
    </Box> */}

    </Box>
   
    </>
  )
}

export default Sort
