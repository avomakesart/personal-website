import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

import AuthService from '../../services/auth-service'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem 0.5rem;
  width: 100%;
`

const BrandLink = styled(Link)`
  display: none;
  @media (min-width: 1000px) {
    color: blue;
    display: inherit;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    :hover {
      color: black;
    }
  }
`

const BrandLinkMobile = styled(Link)`
  display: inherit;
  color: blue;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: black;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: blue;
  }
  :last-child {
    margin-right: 1rem;
  }
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function Navbar() {
  let history = useHistory()

  const [showModeratorBoard, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, [])

  async function handleLogout() {
    await AuthService.logout()

    history.push('/admin/login')
    AuthService.then(window.location.reload(true))
  }

  return (
    <Container>
      <Navigation>
        <StyledLink to="/projects">Work</StyledLink>
        <BrandLink to="/">Alvaro Castillo</BrandLink>
        <BrandLinkMobile to="/">AC</BrandLinkMobile>
        <StyledLink to="/myself">About me</StyledLink>
        {showModeratorBoard && (
          <StyledLink to="/mod-board">Moderator Board</StyledLink>
        )}

        {showAdminBoard && <StyledLink to="/admin">Admin Board</StyledLink>}

        {currentUser && <StyledLink to="/user-board">User Board</StyledLink>}

        {currentUser && (
          <>
            <StyledLink to="/profile">{currentUser.username}</StyledLink>
            <button onClick={handleLogout}>Log out</button>
          </>
        )}
        {/* ) : (
          <>
            <StyledLink to="/admin/login">Login</StyledLink>
            <StyledLink to="/admin/register">Register</StyledLink>
          </> */}
      </Navigation>
    </Container>
  )
}
