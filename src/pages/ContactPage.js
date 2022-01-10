import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactPage = () => {

  return (
    <Container className="p-4">
      <h1 className="my-4 hero-title">Contact</h1>

      <Form className="mb-5">
        <Row>
          <Col md={7}>
            <Form.Group className="mb-3" controlId="contactForm">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" className="mb-2 contact-text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <Form.Group className="mb-3" controlId="contactForm">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Company" className="mb-2 contact-text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <Form.Group className="mb-3" controlId="contactFormMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" className="contact-text"/>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={7}>
          <Button variant="success" type="submit" style={{width: "100%", height: '60px', marginTop: '12px' }}>
            Send Message
          </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default ContactPage