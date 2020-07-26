import styled from 'styled-components'

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
  max-width: 1200px;
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
  margin: 0 auto;
  font-size: 50px;
  animation: fadeInUp;
  animation-duration: 2s;

  @media (min-width: 1000px) {
    font-size: 100px;
  }
`
