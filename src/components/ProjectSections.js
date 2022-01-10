import React from 'react'
import { Badge, Button, Container, Col, Row } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import '../styles/project.scss'
import '../styles/index.scss'


const projects = [
  {
    "title": "Physio Career - Material",
    "url": "https://www.physiocareer.com/",
    "imgStyle": "physiocareer-material-img",
    "tags": ["HTML / CSS", "React JS", "Material UI"],
    "description": "Website for a physiotherapist who wanted to teach student physios how to find work in the UK. I used Material template by Creative Tim. Private repository on GitLab.",
    "attributions": "https://www.creative-tim.com/product/material-kit-react"
  },

  {
    "title": "Physio Career - Next.js / Strapi",
    "url": "https://physiocareer-tailwind.vercel.app/",
    "imgStyle": "physiocareer-nextjs-img",
    "github": "https://gitlab.com/jason.wright90/physiocareer-tailwind",
    "tags": ["Tailwind", "Next JS", "Strapi", "Cloudinary"],
    "description": "Recreated the website above without using a template. Added additional features such as the ability for the user to add blog posts via Strapi, and then render them using React Markdown (fetched via getStaticProps). The blog section includes the feature to filter tags, as well as pagination. I learned a lot about useEffect and dependencies whilst creating this. I used Tailwind for the layout.",
  },
  {
    "title": "Movie Seat Bookings",
    "url": "https://jwright-movies-app.netlify.app/",
    "github": "https://github.com/jwright90/traversy-20-movies-app",
    "imgStyle": "movies-app-img",
    "tags": ["HTML / CSS", "Vanilla JS", "API Request", "Local Storage"],
    "description": "To create this app, I drew inspiration from a Udemy tutorial by Brad Traversy. I took Brad's initial idea and expanded upon it, using many other concepts I had already learned to create my own unique application. In this app, the user can add and delete movies to and from local storage. An image is fetched using an API based on the name of the movie. When the user selects the movie, the background image gets updated. A user is able to book movie seats for a particular movie, which then get stored in local storage. A basic revenue calculation is done based on the price of the movie and total seats booked."
  },
  {
    "title": "Kriti Yoga",
    "url": "https://jwright-kriti-yoga.netlify.app/",
    "github": "https://github.com/jwright90/kriti-yoga",
    "imgStyle": "kritiyoga-img",
    "tags": ["HTML / CSS", "Vanilla JS", "Web Design"],
    "description": "Basic HTML / CSS and Vanilla JS made from scratch."
  },

  {
    "title": "GitHub Finder",
    "url": "https://traversy-react-front-to-back.netlify.app/",
    "github": "https://github.com/jwright90/traversy-react-ftb",
    "imgStyle": "rftb-gh-img",
    "tags": ["React", "Context"],
    "description": "Brad Traversey tutorial follow along."
  },

]

const ProjectSections = () => {

  return (
    projects.map(project => (
      <div key={project.title}>
        <Container>
          <Row className={"project"}>
          <Col xl={4} className={"project-img " + project.imgStyle}></Col>
            <Col xl={6} className="project-content">
            <div className="project-header">
              <h3 className="project-heading">{project.title}</h3>
              <p className="project-text mb-2">{project.description}</p>
                {project.attributions && <a className="attribution-text project-text mb-3" href={project.attributions}>{project.attributions}</a>}
            </div>
              
            <div className="project-footer">
              <div className="project-badges">
                {project.tags.map(tag => <Badge pill bg="secondary" className="project-badge mt-3" key={tag}>{tag}</Badge>)}
              </div>
              <div className="project-buttons">
                <Button href={project.url} target="_blank" className="btn-project" variant="success" size="md">Live Project</Button>
                
                  {project.github && <Button href={project.github} target="_blank" className="btn-project" variant="secondary" size="md">
                    Code
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-github"><Github size={20} /></a>
                  </Button>}

              </div>
            </div>
          </Col>
          </Row>
          </Container>
      </div>
    ))
  )
}

export default ProjectSections
