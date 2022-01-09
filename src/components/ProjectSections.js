import React from 'react'
import { Badge, Button, Container, Col, Row } from 'react-bootstrap';
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
        <Container>
        <Row className={"project"}>
          <Col xl={4} className={"project-img " + project.imgStyle}></Col>
          <Col xl={6} className="project-content">
            <h3 className="project-heading">{project.title}</h3>
            <p className="project-text mb-3">{project.description}</p>
            <div className="project-badges">
              {project.tags.map(tag => <Badge pill bg="secondary" className="project-badge" key={tag}>{tag}</Badge>)}
            </div>
            <div className="project-buttons">
              <Button href={project.url} className="btn-project" variant="success" size="md">Live Project</Button>
              <Button href={project.github} className="btn-project" variant="secondary" size="md">
                Code
                <a href={project.github} className="project-github"><Github size={22}/></a>
              </Button>
            </div>
          </Col>
          </Row>
          </Container>
      </div>
    ))
  )
}

export default ProjectSections
