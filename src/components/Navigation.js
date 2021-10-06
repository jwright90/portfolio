import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="secondary" id="navbar">
      <Container className="justify-content-start">
        <Nav.Link className="link-light fs-5" href="#home">Home</Nav.Link>
        <Nav.Link className="link-light fs-5" href="#home">About</Nav.Link>
        <Nav.Link className="link-light fs-5" href="#home">Work</Nav.Link>
        <Nav.Link className="link-light fs-5" href="#home">Contact</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default Navigation;