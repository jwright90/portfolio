import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="secondary" id="navbar">
      <Container className="justify-content-start">
        <LinkContainer to="/">
          <Nav.Link className="link-light fs-5">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link className="link-light fs-5">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/work">
          <Nav.Link className="link-light fs-5" href="#work">Work</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link className="link-light fs-5" href="#contact">Contact</Nav.Link>
        </LinkContainer>
      </Container>
    </Navbar>
  )
}

export default Navigation;