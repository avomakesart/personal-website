import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useForm } from '../../../hooks/useForm'
import { fetchData } from '../../../helpers/fetch'
import AuthService from '../../../services/auth-service'
import {
  Headline,
  FormContainer,
  InputContainer,
  LabelSpan,
  Input,
  SubmitButton,
  Container,
  InputWrapper,
  Button,
  ButtonContainer,
  Hr,
  TextArea,
  TextAreaContainer,
  DisabledButton,
} from '../AdminScreen.styles'

export default function EditProject({ history }) {
  const [, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [, setCurrentUser] = useState(undefined)

  const [projects, setProjects] = useState([])
  const [formValues, handleInputChange] = useForm({
    project_title: '',
    project_description: '',
    project_image: '',
    project_date: '',
    project_headline: '',
    project_hero_image: '',
    project_int_title: '',
    project_int_desc: '',
    project_plan_title: '',
    project_plan_desc: '',
    project_sol_title: '',
    project_sol_desc: '',
    project_sol_img: '',
    project_sol_img_two: '',
    project_launch_title: '',
    project_launch_desc: '',
    project_launch_img: '',
    project_launch_img_two: '',
    project_launch_img_three: '',
    project_launch_img_four: '',
    project_launch_img_five: '',
    project_result_title: '',
    project_result_desc: '',
    project_result_img: '',
    project_cta_title: '',
    project_cta_url: '',
  })

  const {
    project_title,
    project_description,
    project_image,
    project_date,
    project_headline,
    project_hero_image,
    project_int_title,
    project_int_desc,
    project_plan_title,
    project_plan_desc,
    project_sol_title,
    project_sol_desc,
    project_sol_img,
    project_sol_img_two,
    project_launch_title,
    project_launch_desc,
    project_launch_img,
    project_launch_img_two,
    project_launch_img_three,
    project_launch_img_four,
    project_launch_img_five,
    project_result_title,
    project_result_desc,
    project_result_img,
    project_cta_title,
    project_cta_url,
  } = formValues

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

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const resp = await fetchData(
        `projects/${id}`,
        {
          project_title,
          project_description,
          project_image,
          project_date,
          project_headline,
          project_hero_image,
          project_int_title,
          project_int_desc,
          project_plan_title,
          project_plan_desc,
          project_sol_title,
          project_sol_desc,
          project_sol_img,
          project_sol_img_two,
          project_launch_title,
          project_launch_desc,
          project_launch_img,
          project_launch_img_two,
          project_launch_img_three,
          project_launch_img_four,
          project_launch_img_five,
          project_result_title,
          project_result_desc,
          project_result_img,
          project_cta_title,
          project_cta_url,
        },
        'PUT'
      )
      const body = await resp.json()

      if (body) {
        toast
          .dark(`Your customer, has been updated`, {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          .then(
            setTimeout(() => {
              window.location.reload(true)
            }, 2000)
          )
      }
    } catch (err) {
      console.log(err.message)
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

  return (
    <Container>
      {showAdminBoard ? (
        <>
          <Headline>Edit Project</Headline>
          <form onSubmit={handleUpdate}>
            {projects.map((project) => (
              <FormContainer key={project.project_id}>
                <Headline>Projects page</Headline>
                <InputContainer>
                  <LabelSpan>Project name:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_title"
                      autoComplete="off"
                      placeholder={project.project_title}
                      value={project_title}
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Project Description:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      autoComplete="off"
                      name="project_description"
                      placeholder={project.project_description}
                      value={project_description}
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Image url:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      autoComplete="off"
                      name="project_image"
                      placeholder={project.project_image}
                      value={project_image}
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Project Date:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_date"
                      placeholder={project.project_date}
                      value={project_date}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <Hr />
                <Headline>Project Page</Headline>
                <InputContainer>
                  <LabelSpan>Project Headline:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_headline"
                      placeholder={project.project_headline}
                      value={project_headline}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Hero Image:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_hero_image"
                      placeholder={project.project_hero_image}
                      value={project_hero_image}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <h3>Introduction:</h3>
                <InputContainer>
                  <LabelSpan>Introduction Title:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_int_title"
                      placeholder={project.project_int_title}
                      value={project_int_title}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <TextAreaContainer>
                  <LabelSpan>Introduction Description:</LabelSpan>
                  <InputWrapper>
                    <TextArea
                      type="text"
                      name="project_int_desc"
                      placeholder={project.project_int_desc}
                      value={project_int_desc}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </TextAreaContainer>
                <h3>Planning:</h3>
                <InputContainer>
                  <LabelSpan>Planning Title:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_plan_title"
                      placeholder={project.project_plan_title}
                      value={project_plan_title}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <TextAreaContainer>
                  <LabelSpan>Planning Description:</LabelSpan>
                  <InputWrapper>
                    <TextArea
                      type="text"
                      name="project_plan_desc"
                      placeholder={project.project_plan_desc}
                      value={project_plan_desc}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </TextAreaContainer>
                <h3>Solutions:</h3>
                <InputContainer>
                  <LabelSpan>Solution Title:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_sol_title"
                      placeholder={project.project_sol_title}
                      value={project_sol_title}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <TextAreaContainer>
                  <LabelSpan>Solution Description:</LabelSpan>
                  <InputWrapper>
                    <TextArea
                      type="text"
                      name="project_sol_desc"
                      placeholder={project.project_sol_desc}
                      value={project_sol_desc}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </TextAreaContainer>
                <InputContainer>
                  <LabelSpan>Solution Image 1:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_sol_img"
                      placeholder={project.project_sol_img}
                      value={project_sol_img}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Solution Image 2:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_sol_img_two"
                      placeholder={project.project_sol_img_two}
                      value={project_sol_img_two}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <h3>Launch:</h3>
                <InputContainer>
                  <LabelSpan>Launching Title:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_launch_title"
                      placeholder={project.project_launch_title}
                      value={project_launch_title}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <TextAreaContainer>
                  <LabelSpan>Solution Description:</LabelSpan>
                  <InputWrapper>
                    <TextArea
                      type="text"
                      name="project_launch_desc"
                      placeholder={project.project_launch_desc}
                      value={project_launch_desc}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </TextAreaContainer>
                <InputContainer>
                  <LabelSpan>Launching Image 1:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_launch_img"
                      placeholder={project.project_launch_img}
                      value={project_launch_img}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Launching Image 2:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_launch_img_two"
                      placeholder={project.project_launch_img_two}
                      value={project_launch_img_two}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Launching Image 3:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_launch_img_three"
                      placeholder={project.project_launch_img_three}
                      value={project_launch_img_three}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Launching Image 4:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_launch_img_four"
                      placeholder={project.project_launch_img_four}
                      value={project_launch_img_four}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>Launching Image 5:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_launch_img_five"
                      placeholder={project.project_launch_img_five}
                      value={project_launch_img_five}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <h3>Results:</h3>
                <InputContainer>
                  <LabelSpan>Results Title:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_result_title"
                      placeholder={project.project_result_title}
                      value={project_result_title}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <TextAreaContainer>
                  <LabelSpan>Results Description:</LabelSpan>
                  <InputWrapper>
                    <TextArea
                      type="text"
                      name="project_result_desc"
                      placeholder={project.project_result_desc}
                      value={project_result_desc}
                      autoComplete="off"
                      onChange={handleInputChange}
                    ></TextArea>
                  </InputWrapper>
                </TextAreaContainer>
                <InputContainer>
                  <LabelSpan>Results Image 1:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_result_img"
                      placeholder={project.project_result_img}
                      value={project_result_img}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <h3>CTA Information:</h3>
                <InputContainer>
                  <LabelSpan>CTA Title:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_cta_title"
                      placeholder={project.project_cta_title}
                      value={project_cta_title}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                <InputContainer>
                  <LabelSpan>CTA Url:</LabelSpan>
                  <InputWrapper>
                    <Input
                      type="text"
                      name="project_cta_url"
                      placeholder={project.project_cta_url}
                      value={project_cta_url}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </InputWrapper>
                </InputContainer>
                {
                  (!project_title,
                  !project_description,
                  !project_image,
                  !project_date,
                  !project_headline,
                  !project_hero_image,
                  !project_int_title,
                  !project_int_desc,
                  !project_plan_title,
                  !project_plan_desc,
                  !project_sol_title,
                  !project_sol_desc,
                  !project_sol_img,
                  !project_sol_img_two,
                  !project_launch_title,
                  !project_launch_desc,
                  !project_launch_img,
                  !project_launch_img_two,
                  !project_launch_img_three,
                  !project_launch_img_four,
                  !project_launch_img_five,
                  !project_result_title,
                  !project_result_desc,
                  !project_result_img,
                  !project_cta_title,
                  !project_cta_url ? (
                    <DisabledButton disabled>Update</DisabledButton>
                  ) : (
                    <SubmitButton type="submit">Update</SubmitButton>
                  ))
                }
              </FormContainer>
            ))}
          </form>
        </>
      ) : (
        <Container>
          <Headline>Access denied</Headline>
        </Container>
      )}
      <ButtonContainer>
        <Button onClick={handleReturn}>Return</Button>
      </ButtonContainer>
    </Container>
  )
}
