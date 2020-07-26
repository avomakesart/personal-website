import styled from 'styled-components'

// About hero

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
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

// About content
export const Hr = styled.hr`
  margin: 10rem auto 3rem;
  width: 80%;
  color: black;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

export const AboutTitle = styled.h1`
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

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    margin: 0;
  }
`

export const Paragraph = styled.p`
  font-size: 1.375rem;
  ::selection {
    color: blue;
    background: transparent;
  }
`

export const Image = styled.img`
  max-width: 100%;
  width: 16rem;
  border-radius: 30%;
  margin: 0 3rem;
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const CardToolContainer = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem;
`

export const ExperienceHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 0;
`

export const CertificateHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 3rem 2rem;
  max-width: 1200px;
  width: 100%;
`

export const CertificateInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  width: 100%;
`

export const CertificateImage = styled.img`
  max-width: 100%;
  width: 75px;
  height: 75px;
`

export const CertParagraph = styled.p`
  font-size: 1.375rem;
  margin: 0;
  ::selection {
    color: blue;
    background: transparent;
  }
`

export const CertLink = styled.a`
  color: darkgray;
  font-size: 1.375rem;
  text-decoration: none;
  cursor: pointer;

  & :hover {
    color: blue;
  }

  ::selection {
    color: blue;
    background: transparent;
  }
`

export const ContactContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1rem 0 0;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  width: 100%;
`