import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { fetchData } from '../../../helpers/fetch'
import UserService from '../../../services/user-service'
import AuthService from '../../../services/auth-service'
import ProjectImage from '../../ui/Card/ProjectImage'

import {
  Headline,
  Container,
  Hr,
  ProjectsListContainer,
  ProjectCard,
  ListContainer,
  ListTitle,
  DataContainer,
  ColumnsContainer,
  MediumColumn,
  FullColumn,
  ColumnButtonContainer,
  ColumnLink,
  ColumnDeleteButton,
  Title,
} from '../AdminScreen.styles'

export default function ProjectList() {
  const [, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [, setCurrentUser] = useState(undefined)
  const [content, setContent] = useState('')
  const [projects, setProjects] = useState([])
  const [personal_projects, setPersonalProjects] = useState([])

  // const { id } = useParams()

  useEffect(() => {
    const getProjects = async () => {
      try {
        const resp = await fetchData('projects')
        const projectsData = await resp.json()
        setProjects(projectsData)
      } catch (error) {
        console.log(error.message)
      }
    }

    getProjects()
  }, [])

  useEffect(() => {
    const getPersonalProjects = async () => {
      try {
        const resp = await fetchData('personal_projects')
        const projectsData = await resp.json()
        setPersonalProjects(projectsData)
      } catch (error) {
        console.log(error.message)
      }
    }

    getPersonalProjects()
  }, [])

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, [])

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()

        setContent(_content)
      }
    )
  }, [])

  const handleDeleteProject = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'crimson',
      cancelButtonColor: 'black',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your project has been deleted.', 'success')
        fetchData(`personal_projects/${id}`, {}, 'DELETE')
        const filteteredCustomerID = projects.filter(
          (project) => project.project_id !== id
        )
        setPersonalProjects(filteteredCustomerID)
        window.location.reload(true)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your project is safe',
          icon: 'error',
          confirmButtonColor: 'black',
        })
      }
    })
  }

  const handleDeletePersonalProject = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'crimson',
      cancelButtonColor: 'black',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your project has been deleted.', 'success')
        fetchData(`personal_projects/${id}`, {}, 'DELETE')
        const filteteredCustomerID = projects.filter(
          (project) => project.project_id !== id
        )
        setProjects(filteteredCustomerID)
        window.location.reload(true)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your project is safe',
          icon: 'error',
          confirmButtonColor: 'black',
        })
      }
    })
  }

  const projectContent = () => (
    <>
      <Headline>All the projects</Headline>
      <Hr />
      <Title>Projects</Title>
      <ProjectsListContainer>
        {projects.map((project) => (
          <ProjectCard key={project.project_id}>
            <ListContainer>
              <ColumnsContainer>
                <MediumColumn>
                  <DataContainer>
                    <ListTitle>Project Title:</ListTitle>
                    <span>{project.project_title}</span>
                  </DataContainer>

                  <DataContainer>
                    <ListTitle>Project Description:</ListTitle>
                    <span>{project.project_description}</span>
                  </DataContainer>

                  <DataContainer>
                    <ListTitle>Project Date:</ListTitle>
                    <span>{project.project_date}</span>
                  </DataContainer>
                </MediumColumn>
                <FullColumn>
                  <Link to={`projects/${project.project_id}`}>
                    <ProjectImage
                      url={project.project_image}
                      alt={project.project_title}
                    />
                  </Link>
                </FullColumn>
              </ColumnsContainer>
              <ColumnButtonContainer>
                <ColumnLink to={`projects/${project.project_id}`}>
                  View Project
                </ColumnLink>
                <ColumnLink to={`/admin/edit-project/${project.project_id}`}>
                  Edit Project
                </ColumnLink>
                <ColumnDeleteButton
                  onClick={() => handleDeleteProject(project.project_id)}
                >
                  Delete
                </ColumnDeleteButton>
              </ColumnButtonContainer>
            </ListContainer>
          </ProjectCard>
        ))}
      </ProjectsListContainer>
    </>
  )

  const personalProjectContent = () => (
    <>
      <Hr />
      <Title>Personal Projects</Title>
      <ProjectsListContainer>
        {personal_projects.map((project) => (
          <ProjectCard key={project.project_id}>
            <ListContainer>
              <ColumnsContainer>
                <MediumColumn>
                  <DataContainer>
                    <ListTitle>Project Title:</ListTitle>
                    <span>{project.project_title}</span>
                  </DataContainer>

                  <DataContainer>
                    <ListTitle>Project Description:</ListTitle>
                    <span>{project.project_description}</span>
                  </DataContainer>

                  <DataContainer>
                    <ListTitle>Project Date:</ListTitle>
                    <span>{project.project_date}</span>
                  </DataContainer>
                </MediumColumn>
                <FullColumn>
                  <Link to={`projects/${project.project_id}`}>
                    <ProjectImage
                      url={project.project_image}
                      alt={project.project_title}
                    />
                  </Link>
                </FullColumn>
              </ColumnsContainer>
              <ColumnButtonContainer>
                <ColumnLink to={`personal_projects/${project.project_id}`}>
                  View Project
                </ColumnLink>
                <ColumnLink
                  to={`/admin/edit-personal-project/${project.project_id}`}
                >
                  Edit Project
                </ColumnLink>
                <ColumnDeleteButton
                  onClick={() =>
                    handleDeletePersonalProject(project.project_id)
                  }
                >
                  Delete
                </ColumnDeleteButton>
              </ColumnButtonContainer>
            </ListContainer>
          </ProjectCard>
        ))}
      </ProjectsListContainer>
    </>
  )

  return (
    <Container>
      {showAdminBoard ? (
        <>
          {projectContent()}
          {personalProjectContent()}
        </>
      ) : (
        <Headline>{content}</Headline>
      )}
    </Container>
  )
}
