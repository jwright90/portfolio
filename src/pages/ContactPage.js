import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactPage = () => {

  return (
    <Container className="p-4">
      <h1 className="my-4">Contact</h1>

      <Form>
        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="contactForm">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" className="mb-2" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Form.Group className="mb-3" controlId="contactFormMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
          <Button variant="success" type="submit" style={{width: "100%" }}>
            Message Me
          </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default ContactPage