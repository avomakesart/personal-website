import React from 'react'
import { experience } from '../../../data/experience'
import { certificates } from '../../../data/certificates'
import { contact } from '../../../data/contact'
import mySelf from '../../../assets/images/self-cut.png'
import Card from '../Card/Card'
import CardTools from '../Card/CardTools'
import {
  Container,
  TitleContainer,
  Title,
  EmojiContainer,
  AboutContainer,
  Hr,
  AboutTitle,
  AboutMeContainer,
  Image,
  DescriptionContainer,
  Paragraph,
  CardContainer,
  CardToolContainer,
  ExperienceContainer,
  ExperienceHistory,
  CertificateHistory,
  CertificateInfo,
  CertificateImage,
  CertParagraph,
  CertLink,
  ContactContainer,
  ContactInfo,
} from './AboutScreen.styles'

export default function AboutScreen() {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>
            Here is everything about me <br />
            -- Or part of it.
          </Title>
        </TitleContainer>
        <EmojiContainer role="img" aria-label="emoji">
          <span role="img" aria-label="emoji">
            🛸
          </span>
          <span role="img" aria-label="emoji">
            👇
          </span>
        </EmojiContainer>

        <Hr />

        <AboutContainer>
          <AboutMeContainer>
            <AboutTitle>Who I am</AboutTitle>
            <DescriptionContainer>
              <Image src={mySelf} alt="MySelf" />
              <Paragraph>
                I am a software engineer based in Guadalajara, Jalisco. I create
                web apps and cool software, focused on the best design patterns
                and creating stories visually, through enjoyable and meaningful
                experiences.
              </Paragraph>
            </DescriptionContainer>
          </AboutMeContainer>
        </AboutContainer>

        <Hr />

        <AboutContainer>
          <AboutMeContainer>
            <AboutTitle>Technologies I Use</AboutTitle>
            <CardContainer>
              <Card />
            </CardContainer>
          </AboutMeContainer>
          <AboutMeContainer>
            <AboutTitle>Tools I Use</AboutTitle>
            <CardToolContainer>
              <CardTools />
            </CardToolContainer>
          </AboutMeContainer>
        </AboutContainer>

        <Hr />

        <AboutContainer>
          <AboutMeContainer>
            <AboutTitle>Experience</AboutTitle>
            <ExperienceContainer>
              <Paragraph>
                I have been fortunate to meet incredible clients out there, I
                have worked as a freelance software engineer for a long time and
                in addition to working for large companies, which endorse my
                work with results and years of experience.
              </Paragraph>

              {experience.map((exp) => (
                <ExperienceHistory key={exp.id}>
                  <Paragraph>
                    <b>{exp.name}</b>
                  </Paragraph>
                  <Paragraph>{exp.position}</Paragraph>
                  <Paragraph>
                    {exp.startDate} - {exp.endDate}
                  </Paragraph>
                </ExperienceHistory>
              ))}
            </ExperienceContainer>
          </AboutMeContainer>
        </AboutContainer>

        <Hr />

        <AboutContainer>
          <AboutMeContainer>
            <AboutTitle>Certificates</AboutTitle>
            <DescriptionContainer>
              <Paragraph>
                Throughout my career as an engineer, I have taken some courses,
                what better than to keep learning something new every day
              </Paragraph>
            </DescriptionContainer>
            {certificates.map((cert) => (
              <CertificateHistory key={cert.id}>
                <CertificateImage src={cert.image} alt="Certificate" />
                <CertificateInfo>
                  <CertParagraph>
                    <b>{cert.name}</b>
                  </CertParagraph>
                  <CertParagraph>{cert.company}</CertParagraph>
                  <CertParagraph>{cert.expDate}</CertParagraph>
                  <CertParagraph>{cert.credentialID}</CertParagraph>
                  <CertLink href={cert.credentialURL}>See credential</CertLink>
                </CertificateInfo>
              </CertificateHistory>
            ))}
          </AboutMeContainer>
        </AboutContainer>

        <Hr />

        <AboutContainer>
          <AboutMeContainer>
            <AboutTitle>Get in touch</AboutTitle>
            <DescriptionContainer>
              <Paragraph>
                Let's talk or maybe write to us? These are my ways of
                contacting.
              </Paragraph>
            </DescriptionContainer>

            {contact.map((cont) => (
              <ContactContainer key={cont.id}>
                <CertParagraph>{cont.type}:</CertParagraph>
                <ContactInfo>
                  <CertLink href={cont.link} target="_blank">
                    {cont.info}
                  </CertLink>
                </ContactInfo>
              </ContactContainer>
            ))}
          </AboutMeContainer>
        </AboutContainer>

        <Hr />
      </Container>
    </>
  )
}
