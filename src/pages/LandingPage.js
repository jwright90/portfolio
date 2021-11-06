import React from 'react'
import { Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const LandingPage = () => {
  return (
    <Container>
      <section className="text-light d-flex align-items-center" id="hero">
        <div className="flex-column text-align-left p-3">
          <div className="hero-left-section d-flex flex-column justify-content-around">
            <div className="hero-text">
              <h1>Jason Wright</h1>
              <h3>Front End Developer</h3>
              <h4>Specialising in React &amp; Next.js</h4>
            </div>
            <div className="hero-btn">
              <Link to="/projects">
                <Button variant="success" size="lg">
                  View My Projects              
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default LandingPage
