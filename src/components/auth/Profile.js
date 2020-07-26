import React, { useState, useEffect } from 'react'
import { fetchData } from '../../helpers/fetch'
import AuthService from '../../services/auth-service'

const Profile = () => {
  const [projects, setProjects] = useState([])
  const [personal_projects, setPersonalProjects] = useState([])
  const currentUser = AuthService.getCurrentUser()

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

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{' '}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <b>Projects #</b> {projects.length}
      </p>
      <p>
        <b>Personal projects #</b> {personal_projects.length}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  )
}

export default Profile
