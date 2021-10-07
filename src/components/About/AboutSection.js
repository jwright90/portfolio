import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../../styles/about.scss'


const AboutSection = ({ children, svgStyle, year, rowStyle}) => {

  return (
    <Row className={"align-items-center justify-content-center " + rowStyle } >
        <Col lg={5} className={"mt-5 gx-5 " + svgStyle}></Col>
        <Col lg={5} className="about-text" >
          <Row className="about-desc" >{children}</Row>
          <Row className="about-year">{year}</Row>
        </Col>
    </Row>
  )
}

export default AboutSection
