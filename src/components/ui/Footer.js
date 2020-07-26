import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 4rem auto 0;
  max-width: 1200px;
  width: 100%;
`

const BrandLink = styled(NavLink)`
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

const BrandLinkMobile = styled(NavLink)`
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

export const Hr = styled.hr`
  margin: 7rem auto 2rem;
  width: 80%;
  color: black;
`

export default function Footer() {
  return (
    <>
      <Container>
        <BrandLink to="/">Alvaro</BrandLink>
        <BrandLinkMobile to="/">AC</BrandLinkMobile>
        <p>© {new Date().getFullYear()}</p>
      </Container>
    </>
  )
}
