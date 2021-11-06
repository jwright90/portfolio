import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import '../styles/project.scss'
import '../styles/index.scss'


const projects = [
  {
    "title": "Movie Seat Bookings",
    "url": "https://jwright-movies-app.netlify.app/",
    "github": "https://github.com/jwright90/traversy-20-movies-app",
    "imgStyle": "movies-app-img",
    "tags": ["HTML / CSS", "Vanilla JS"],
    "description": "To create this app, I drew inspiration from a Udemy tutorial by Brad Traversy. I took Brad's initial idea and expanded upon it, using many other concepts I had already learned to create my own unique application. In this app, the user can add and delete movies to and from local storage. An image is fetched using an API based on the name of the movie. When the user selects the movie, the background image gets updated. A user is able to book movie seats for a particular movie, which then get stored in local storage. A basic revenue calculation is done based on the price of the movie and total seats booked."
  }
]

const ProjectSections = () => {

  return (
    projects.map(project => (
      <div key={project.title}>
        <Row className={"align-items-center"}>
          <Col lg={12}><h3 className="project-heading">{project.title}</h3></Col>
          <Col lg={12}>
            <div className="project-links-box">
              <a href={project.url} className="project-link">View Live Project</a>
              {project.tags.map(tag => <Badge pill bg="secondary" className="project-badge" key={tag}>{tag}</Badge>)}
              <a href={project.github} className="project-github"><Github size={28}/></a>
            </div>
          </Col>
        </Row>
        <Row className={"align-items-center justify-content-left mx-1" } >
          <Col lg={9} className={"mt-4 project-img " + project.imgStyle }></Col>
          <Col lg={9} >
            <Row className="project-text mb-5">{project.description}</Row>
          </Col>
        </Row>
      </div>
    ))
  )
}

export default ProjectSections
