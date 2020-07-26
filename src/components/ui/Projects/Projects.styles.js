import styled from 'styled-components'
import { Link } from 'react-router-dom'

// About hero

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`

export const ContainerProject = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
`

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  padding-top: 145px;
`

export const Title = styled.h1`
  animation: fadeInUp;
  animation-duration: 2s;
  color: black;
  font-family: inherit;
  font-weight: bold;
  font-size: 2.2rem;
  text-align: center;
  @media (min-width: 1000px) {
    font-size: 3.3rem;
  }

  ::selection {
    color: blue;
    background: transparent;
  }
`

export const EmojiContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  font-size: 50px;
  animation: fadeInUp;
  animation-duration: 2s;

  @media (min-width: 1000px) {
    font-size: 80px;
  }
`

// Work content
export const Hr = styled.hr`
  margin: 10rem auto 3rem;
  width: 80%;
  color: black;
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`

export const Headline = styled.h1`
  animation: fadeInUp;
  animation-duration: 2s;
  color: black;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  @media (min-width: 1000px) {
    font-size: 3.3rem;
  }

  ::selection {
    color: blue;
    background: transparent;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const ProjectCardContainer = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`

// Idividual Project

export const HeroImageWrapper = styled.div`
  margin: 0 5px;
  background: #f1f1f1;

  @media (min-width: 768px) {
    margin: 0 10px;
  }
  @media (min-width: 992px) {
    margin: 0 20px;
  }
`

export const HeroImage = styled.img`
  height: calc(100vw - 10px);
  margin-top: -40px;
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    height: 380px;
    margin-top: -60px;
  }
  @media (min-width: 992px) {
    height: 600px;
  }
`

export const ProjectSection = styled.section`
  position: relative;
  padding: 3rem;
  width: 80%;
`

export const ProjectFullContainer = styled.div`
  margin: 0 5px;
  padding: 40px 0;

  @media (min-width: 768px) {
    margin: 0 10px;
  }

  @media (min-width: 992px) {
    margin: 0 20px;
  }
`

export const ProjectContainer = styled.div`
  width: calc(100% - 40px);
  float: left;
  margin-left: 20px;

  @media (min-width: 768px) {
    padding: 0 30px;
    width: calc(100% - 60px);
    float: left;
    margin-left: 30px;
  }
  @media (min-width: 992px) {
    padding: 0;
    width: calc(58.3333333333% - 63.3333333333px);
    float: left;
    margin-left: 40px;
    margin-left: calc(25% - 50px + 80px);
  }
`

export const ContentContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 710px;
  }

  @media (min-width: 992px) {
    max-width: calc(100% - 80px);
  }
  @media (min-width: 1480px) {
    max-width: 1400px;
  }
`

export const GridContainer = styled.div`
  clear: both;
  content: '';
  display: block;
  @media only screen and (min-width: 768px) {
    margin-left: -30px;
    margin-right: -30px;
    width: calc(100% + 60px);
  }
  @media only screen and (min-width: 992px) {
    margin-left: -40px;
    margin-right: -40px;
    width: calc(100% + 80px);
  }
`
export const FullWidthContent = styled.div`
  text-align: center;
  width: calc(100% - 40px);
  float: left;
  margin-left: 20px;

  @media only screen and (min-width: 768px) {
    width: calc(100% - 60px);
    float: left;
    margin-left: 30px;
    padding: 0 30px;
  }

  @media only screen and (min-width: 992px) {
    float: left;
    margin-left: 40px;
    margin-left: calc(25% - 50px + 80px);
    padding: 0;
  }
`

export const SectionHeader = styled.div`
  display: inline-block;
  border-top: 2px solid #000;
  font-family: Brandon Text W01 Bold, sans-serif;
  font-size: 14px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 20px 5px 0 0;
  margin-bottom: 40px;

  @media (min-width: 992px) {
    position: absolute;
    top: 50px;
    left: 60px;
    padding: 0;
    display: block;
    margin: 20px 0;
  }
`

export const SectionHeaderSpan = styled.span`
  display: block;
  margin: 20px 0;
`

export const SectionTitle = styled.h3`
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  line-height: 40px;
  color: #303133;
  margin-bottom: 10px;
  text-align: left;

  ::selection {
    color: blue;
    background: transparent;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 20px;
  }
`

export const SectionParagraph = styled.p`
  font-size: 16px;
  color: #616366;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 20px;
  }

  ::selection {
    color: blue;
    background: transparent;
  }
`

export const CtaContainer = styled.div`
  max-width: 100%;
  width: 100%;
  text-align: center;
`

export const CtaTitle = styled.h3`
  font-size: 28px;
  line-height: 40px;
  color: black;
  max-width: 680px;
  margin: 0 auto 40px;
  ::selection {
    color: blue;
    background: transparent;
  }
`

export const CtaLink = styled.a`
  color: blue;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
`

export const FullImg = styled.img`
  max-width: 100%;
  width: 100%;
  margin: 0;

  @media (min-width: 1000px) {
    margin: 0.5rem;
  }
`

export const TwoColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 1000px) {
    flex-direction: row;
    width: 50%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-around;
    max-width: 100%;
  }
`

export const LinkButton = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  min-width: 12.5rem;
  width: auto;
  font-weight: 400;
  font-size: 0.875rem;
  user-select: none;
  text-transform: capitalize;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  padding: 0px 1.375rem;
  border-radius: 5px;
  outline: none;
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
    border 200ms ease 0ms, color 200ms ease 0ms;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  margin-top: 2rem;

  text-decoration: none;

  @media (min-width: 1000px) {
    margin-right: 2rem;
  }
  :hover {
    background-color: #4c92de;
    border: none;
  }
`

export const ReturnButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  min-width: 12.5rem;
  width: auto;
  font-weight: 400;
  font-size: 0.875rem;
  user-select: none;
  text-transform: capitalize;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  padding: 0px 1.375rem;
  border-radius: 5px;
  outline: none;
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
    border 200ms ease 0ms, color 200ms ease 0ms;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  margin-top: 2rem;
  @media (min-width: 1000px) {
    margin-left: 2rem;
  }
  :hover {
    background-color: #4c92de;
    border: none;
  }
`
