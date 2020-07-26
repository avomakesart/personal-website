import React, { useEffect, useState } from 'react'

import { fetchData } from '../../../helpers/fetch'
import ProjectImage from './ProjectImage'
import {
  ProductImageContainer,
  ProjectInfo,
  ProjectDate,
  ProjectTitle,
  ProjectLink,
  Overlay,
  ProjectDescription,
} from './Card.styles'

export default function PersonalProjectCard() {
  const [personal_projects, setProjects] = useState([])

  const getProjects = async () => {
    try {
      const resp = await fetchData('personal_projects')
      const projectsData = await resp.json()

      setProjects(projectsData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <>
      {personal_projects.map((project) => (
        <ProductImageContainer key={project.project_id}>
          <ProjectImage url={project.project_image} alt="Avatar" />
          <ProjectInfo>
            <ProjectDate>{project.project_date}</ProjectDate>
          </ProjectInfo>
          <ProjectTitle>{project.project_title}</ProjectTitle>
          <ProjectDescription>{project.project_description}</ProjectDescription>
          <Overlay>
            <ProjectLink
              project={project}
              to={`personal_projects/${project.project_id}`}
            >
              View case
            </ProjectLink>
          </Overlay>
        </ProductImageContainer>
      ))}
    </>
  )
}
