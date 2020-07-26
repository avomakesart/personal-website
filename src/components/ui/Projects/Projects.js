import React from 'react'
import {
  Container,
  TitleContainer,
  Title,
  EmojiContainer,
  Hr,
  ProjectsContainer,
  ProjectInfo,
  Headline,
  ProjectCardContainer,
} from './Projects.styles'

import ProjectCard from '../Card/ProjectCard'
import PersonalProjectCard from '../Card/PersonalProjectCard'

export default function Projects() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          Have a look at some projects
          <br />
          -- I've done, or part of it.
        </Title>
      </TitleContainer>
      <EmojiContainer role="img" aria-label="emoji">
        <span role="img" aria-label="emoji">
          👀
        </span>
        <span role="img" aria-label="emoji">
          👇
        </span>
      </EmojiContainer>

      <Hr />

      <ProjectsContainer>
        <ProjectInfo>
          <Headline>Case studies</Headline>
          <ProjectCardContainer>
            <ProjectCard />
          </ProjectCardContainer>
        </ProjectInfo>
      </ProjectsContainer>
      <Hr />
      <ProjectsContainer>
        <ProjectInfo>
          <Headline>Personal Projects</Headline>
          <ProjectCardContainer>
            <PersonalProjectCard />
          </ProjectCardContainer>
        </ProjectInfo>
      </ProjectsContainer>
    </Container>
  )
}
