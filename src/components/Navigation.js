import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Github } from 'react-bootstrap-icons';
import '../styles/navigation.scss'

const Navigation = () => {
  return (
    <>
      <Navbar bg="secondary" id="navbar">
        <Container className="nav-links">
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

          <Nav.Link className="link-light fs-5" target="_blank" href="https://github.com/jwright90">
            <Github size={36}/>
          </Nav.Link>
        </Container>
      </Navbar>

      <Navbar collapseOnSelect expand="sm" bg="secondary" variant="dark" id="navbar-responsive">
        <Container className="nav-links">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
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

              <Nav.Link className="link-light fs-5" target="_blank" href="https://github.com/jwright90">
                <Github size={36}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
        </Navbar>
    </>
  )
}

export default Navigation;