import React from 'react'
import { Container } from 'react-bootstrap';
import ProjectSections from '../components/ProjectSections';

const ProjectsPage = () => {

  return (
    <Container className="p-4">
      <h1 className="mt-3 mb-5">Projects</h1>
      <ProjectSections />
    </Container>
  )
}

export default ProjectsPage