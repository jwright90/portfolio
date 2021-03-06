import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import coffee from '../assets/coffee.jpg';

const LandingPage = () => {
  return (
    <Container>
      <Row className="hero-row">
        <Col xl={6}>
        <section className="text-light hero-text-container" id="hero">
          <div className="flex flex-row text-align-left p-3">
            <div className="hero-left-section d-flex flex-column justify-content-around">
              <div className="hero-text">
                <h1 className="hero-title">Jason Wright</h1>
                <Image className="hero-img-col " src={ coffee } />
                <h3>Front End Developer</h3>
                <h4>Bootstrap, Tailwind, Vanilla JS (ES6+), React, Next.js,</h4>
                <h4>Python, Django, Git, Linux CLI</h4>
                <p>Management accountant pursuing a change of career.</p>
                <p>In search of first web development role.</p>
              </div>
              <Row className="hero-btns">
                <Col sm={6}>  
                  <Link to="/projects">
                    <Button className="btn-landing " variant="success" size="md">
                      Projects              
                    </Button>
                  </Link>
                </Col>
                <Col sm={6}>
                  <Button
                    href="https://docs.google.com/document/d/1Qz_cuHUk2XZPlo54GyREIULkyY99Izy0iD2OYUBX9To/edit?usp=sharing"
                    target="_blank"
                    className="btn-landing" variant="secondary" size="md">
                    CV              
                  </Button>
                </Col>
              </Row>
            </div>

          </div>
          </section>
        </Col>
        <Col xl={6}>
          <div className="hero-img-container">
          <Image className="hero-img " src={ coffee } />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage
