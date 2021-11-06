import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactPage = () => {

  return (
    <Container className="p-4">
      <h1 className="my-4">Contact</h1>

      <Form className="mb-5">
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="contactForm">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" className="mb-2" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="contactForm">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Company" className="mb-2" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="contactFormMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
          <Button variant="success" type="submit" style={{width: "100%" }}>
            Send Message
          </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default ContactPage