import React, { useState, useEffect } from 'react'
import { fetchData } from '../../../helpers/fetch'
import AuthService from '../../../services/auth-service'
import { useParams } from 'react-router-dom'

import {
  ContainerProject,
  TitleContainer,
  Title,
  EmojiContainer,
  Hr,
  HeroImageWrapper,
  HeroImage,
  ProjectSection,
  ProjectFullContainer,
  ProjectContainer,
  ContentContainer,
  GridContainer,
  FullWidthContent,
  SectionHeader,
  SectionHeaderSpan,
  SectionParagraph,
  CtaTitle,
  CtaLink,
  FullImg,
  SectionTitle,
  TwoColumnsContainer,
  CtaContainer,
  ButtonContainer,
  LinkButton,
  ReturnButton,
} from './Projects.styles'

export default function Project({ history }) {
  const [, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [, setCurrentUser] = useState(undefined)

  const [projects, setProjects] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, [])

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }

  useEffect(() => {
    const getProjects = async () => {
      try {
        const resp = await fetchData(`projects/${id}`)
        const projectsData = await resp.json()

        setProjects(projectsData)
      } catch (error) {
        console.log(error.message)
      }
    }
    getProjects()
  }, [id])

  // TODO: ADD A CARROUSEL HERE TO SHOW PROJECT PICTURES

  return projects.map((project) => (
    <ContainerProject key={project.project_id}>
      <TitleContainer>
        <Title>{project.project_headline}</Title>
      </TitleContainer>
      <EmojiContainer role="img" aria-label="emoji">
        <span role="img" aria-label="emoji">
          {project.project_hero_emoji}
        </span>
      </EmojiContainer>
      <Hr />
      <HeroImageWrapper>
        <HeroImage src={project.project_hero_image} alt="HeroImage" />
      </HeroImageWrapper>
      <ProjectSection>
        <ProjectFullContainer>
          <ProjectContainer>
            <ContentContainer>
              <GridContainer>
                <FullWidthContent>
                  <SectionHeader>
                    <SectionHeaderSpan>Introduction</SectionHeaderSpan>
                  </SectionHeader>

                  <SectionTitle>{project.project_int_title}</SectionTitle>

                  <SectionParagraph>
                    {project.project_int_desc}
                  </SectionParagraph>
                </FullWidthContent>
              </GridContainer>
            </ContentContainer>
          </ProjectContainer>
        </ProjectFullContainer>
      </ProjectSection>
      <Hr />
      <ProjectSection className="bg-dark">
        <ProjectFullContainer>
          <ProjectContainer>
            <ContentContainer>
              <GridContainer>
                <FullWidthContent>
                  <SectionHeader>
                    <SectionHeaderSpan className="cl-light">
                      The planning
                    </SectionHeaderSpan>
                  </SectionHeader>

                  <SectionTitle className="cl-light">
                    {project.project_plan_title}
                  </SectionTitle>

                  <SectionParagraph className="cl-light">
                    {project.project_plan_desc}
                  </SectionParagraph>
                </FullWidthContent>
              </GridContainer>
            </ContentContainer>
          </ProjectContainer>
        </ProjectFullContainer>
      </ProjectSection>
      <Hr />
      <ProjectSection>
        <ProjectFullContainer>
          <ProjectContainer>
            <ContentContainer>
              <GridContainer>
                <FullWidthContent>
                  <SectionHeader>
                    <SectionHeaderSpan>The Solution</SectionHeaderSpan>
                  </SectionHeader>

                  <SectionTitle>{project.project_sol_title}</SectionTitle>

                  <SectionParagraph>
                    {project.project_sol_desc}
                  </SectionParagraph>
                </FullWidthContent>
              </GridContainer>
            </ContentContainer>
          </ProjectContainer>
        </ProjectFullContainer>
      </ProjectSection>
      <TwoColumnsContainer>
        <FullImg
          src={project.project_sol_img}
          alt={project.project_sol_title}
        />

        <FullImg
          src={project.project_sol_img_two}
          alt={project.project_sol_title}
        />
      </TwoColumnsContainer>
      <Hr />
      <ProjectSection className="bg-dark">
        <ProjectFullContainer>
          <ProjectContainer>
            <ContentContainer>
              <GridContainer>
                <FullWidthContent>
                  <SectionHeader>
                    <SectionHeaderSpan className="cl-light">
                      The Launching
                    </SectionHeaderSpan>
                  </SectionHeader>

                  <SectionTitle className="cl-light">
                    {project.project_launch_title}
                  </SectionTitle>

                  <SectionParagraph className="cl-light">
                    {project.project_launch_desc}
                  </SectionParagraph>
                </FullWidthContent>
              </GridContainer>
            </ContentContainer>
          </ProjectContainer>
        </ProjectFullContainer>
      </ProjectSection>

      <Hr />
      <ProjectSection>
        <ProjectFullContainer>
          <ProjectContainer>
            <ContentContainer>
              <GridContainer>
                <FullWidthContent>
                  <SectionHeader>
                    <SectionHeaderSpan>Results</SectionHeaderSpan>
                  </SectionHeader>

                  <SectionTitle>{project.project_result_title}</SectionTitle>

                  <SectionParagraph>
                    {project.project_result_desc}
                  </SectionParagraph>

                  <FullImg
                    src={project.project_result_img}
                    alt={project.project_result_title}
                  />
                </FullWidthContent>
              </GridContainer>
            </ContentContainer>
          </ProjectContainer>
        </ProjectFullContainer>
      </ProjectSection>
      <Hr />
      <ProjectSection>
        <ProjectFullContainer>
          <ProjectContainer>
            <ContentContainer>
              <CtaContainer>
                <CtaTitle>{project.project_cta_title}</CtaTitle>

                <CtaLink href={project.project_cta_url}>Have a Look</CtaLink>
              </CtaContainer>
            </ContentContainer>
          </ProjectContainer>
        </ProjectFullContainer>
      </ProjectSection>
      <Hr />
      {showAdminBoard ? (
        <>
          <ButtonContainer>
            <LinkButton to={`/admin/edit-project/${id}`}>
              Edit Project
            </LinkButton>
            <ReturnButton onClick={handleReturn}>Return</ReturnButton>
          </ButtonContainer>
          <Hr />
        </>
      ) : (
        <>
          <ReturnButton onClick={handleReturn}>Return</ReturnButton>
          <Hr />
        </>
      )}
    </ContainerProject>
  ))
}
