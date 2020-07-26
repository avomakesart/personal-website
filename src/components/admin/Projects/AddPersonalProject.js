import React, { useState, useEffect } from 'react'
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
  Hr,
  TextArea,
  TextAreaContainer,
} from '../AdminScreen.styles'

export default function AddPersonalProject() {
  const [, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [, setCurrentUser] = useState(undefined)

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

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await fetchData(
        'personal_projects',
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
        'POST'
      )
      const body = await resp.json()
      if (body) {
        toast
          .success(`El usario ${project_title} ha sido publicado`, {
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

  return (
    <Container>
      {showAdminBoard ? (
        <>
          <Headline>Add a Personal Project</Headline>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <InputContainer>
                <LabelSpan>Project name:</LabelSpan>
                <InputWrapper>
                  <Input
                    type="text"
                    name="project_title"
                    autoComplete="off"
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
                    value={project_int_desc}
                    autoComplete="off"
                    onChange={handleInputChange}
                  ></TextArea>
                </InputWrapper>
              </TextAreaContainer>
              <h3>Planning:</h3>
              <InputContainer>
                <LabelSpan>Planning Title:</LabelSpan>
                <InputWrapper>
                  <Input
                    type="text"
                    name="project_plan_title"
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
                    value={project_plan_desc}
                    autoComplete="off"
                    onChange={handleInputChange}
                  ></TextArea>
                </InputWrapper>
              </TextAreaContainer>
              <h3>Solutions:</h3>
              <InputContainer>
                <LabelSpan>Solution Title:</LabelSpan>
                <InputWrapper>
                  <Input
                    type="text"
                    name="project_sol_title"
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
                    value={project_sol_desc}
                    autoComplete="off"
                    onChange={handleInputChange}
                  ></TextArea>
                </InputWrapper>
              </TextAreaContainer>
              <InputContainer>
                <LabelSpan>Solution Image 1:</LabelSpan>
                <InputWrapper>
                  <Input
                    type="text"
                    name="project_sol_img"
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
                    value={project_launch_title}
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </InputWrapper>
              </InputContainer>
              <TextAreaContainer>
                <LabelSpan>Launch Description:</LabelSpan>
                <InputWrapper>
                  <TextArea
                    type="text"
                    name="project_launch_desc"
                    value={project_launch_desc}
                    autoComplete="off"
                    onChange={handleInputChange}
                  ></TextArea>
                </InputWrapper>
              </TextAreaContainer>
              <InputContainer>
                <LabelSpan>Launching Image 1:</LabelSpan>
                <InputWrapper>
                  <Input
                    type="text"
                    name="project_launch_img"
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
                    value={project_cta_url}
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </InputWrapper>
              </InputContainer>
              <SubmitButton type="submit">Add</SubmitButton>
            </FormContainer>
          </form>
        </>
      ) : (
        <Container>
          <Headline>Access denied</Headline>
        </Container>
      )}
    </Container>
  )
}
