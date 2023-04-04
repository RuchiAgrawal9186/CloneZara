import React from 'react'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
// bg="dark" variant="dark" color="white"
const Navbar1 = () => {
  return (

    <>  
      <Navbar collapseOnSelect expand="lg" >  
        <Container>  
          <Navbar.Brand href="/"><img src='./images/result.png' alt="logo" className='logo'></img></Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link href="/" color="white">Home</Nav.Link>  
              <Nav.Link href="/woman" color="light">Women</Nav.Link>
              <Nav.Link href="/man">Men</Nav.Link> 
              <Nav.Link href="/kids">Kids</Nav.Link> 
              <Nav.Link href="/beauty">Beauty</Nav.Link> 
              <Nav.Link href="/about">About</Nav.Link> 
              <Nav.Link href="/contact">Contact</Nav.Link> 

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
              </NavDropdown>  
            </Nav>  
            <Nav>  
              <Nav.Link href="#deets">Another Link</Nav.Link>  
              <Nav.Link eventKey={2} href="#memes">  
                Another Link  
              </Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
   
  )
}

export default Navbar1
