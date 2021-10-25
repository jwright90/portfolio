import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/navigation.scss'

const Navigation = () => {
  return (
    <Navbar bg="secondary" id="navbar">
      <Container className="">
        <LinkContainer to="/">
          <Nav.Link className="link-light fs-5">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link className="link-light fs-5">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/projects">
          <Nav.Link className="link-light fs-5" href="#projects">Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link className="link-light fs-5" href="#contact">Contact</Nav.Link>
        </LinkContainer>
      </Container>
    </Navbar>
  )
}

export default Navigation;