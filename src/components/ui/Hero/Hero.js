import React from 'react'
import { Container, TitleContainer, Title, EmojiContainer } from './Hero.styles'

export default function Hero() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          I am a creative Software Engineer <br />
          -- Based on Guadalajara, México.
        </Title>
        <EmojiContainer role="img" aria-label="emoji">
          <span role="img" aria-label="emoji">👽</span>
        </EmojiContainer>
      </TitleContainer>
    </Container>
  )
}
