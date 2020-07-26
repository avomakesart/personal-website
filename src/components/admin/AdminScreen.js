import React, { useState, useEffect } from 'react'
import UserService from '../../services/user-service'
import AuthService from '../../services/auth-service'
import {
  Container,
  Headline,
  LinkButton,
  ButtonContainer,
  SubTitle,
  DataContainer,
} from './AdminScreen.styles'
import { fetchData } from '../../helpers/fetch'

export default function AdminScreen() {
  const [projects, setProjects] = useState([])
  const [personal_projects, setPersonalProjects] = useState([])
  const [content, setContent] = useState('')
  const [, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [, setCurrentUser] = useState(undefined)

  const getProjects = async () => {
    try {
      const resp = await fetchData(`projects`)
      const projectsData = await resp.json()

      setProjects(projectsData)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getPersonalProjects = async () => {
    try {
      const resp = await fetchData(`personal_projects`)
      const projectsData = await resp.json()

      setPersonalProjects(projectsData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getProjects()
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

  return (
    <Container>
      {showAdminBoard ? (
        <>
          <Headline>Admin Area</Headline>

          <ButtonContainer>
            <DataContainer>
              <SubTitle>#Projects:</SubTitle>
              <p>{projects.length}</p>
            </DataContainer>
            <DataContainer>
              <SubTitle>#Personal projects:</SubTitle>
              <p>{personal_projects.length}</p>
            </DataContainer>
          </ButtonContainer>

          <ButtonContainer>
            <LinkButton to="/admin/add-project">Add a new project</LinkButton>
            <LinkButton to="/admin/add-personal-project">
              Add a new personal project
            </LinkButton>
          </ButtonContainer>

          <ButtonContainer>
            <LinkButton to="/admin/project-list">Project list</LinkButton>
            <LinkButton to="/projects">Go to projects</LinkButton>
          </ButtonContainer>
        </>
      ) : (
        <Container>
          <Headline>{content}</Headline>
        </Container>
      )}
    </Container>
  )
}
