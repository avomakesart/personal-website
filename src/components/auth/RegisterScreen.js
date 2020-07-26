import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { useForm } from '../../hooks/useForm'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import {
  FormContainer,
  StyledForm,
  InputContainer,
  LabelSpan,
  StyledInput,
  SubmitButton,
  Container,
  InputWrapper,
  ButtonContainer,
  Headline,
  AlertValue,
  ActiveStatus,
  LinkButton,
  SuccessAlert,
  AlertContainer,
} from './LoginScreen.styles'

import AuthService from '../../services/auth-service'

const required = (value) => {
  if (!value) {
    return (
      <AlertValue role="alert">
        <ActiveStatus>
          <b>Status:</b>
        </ActiveStatus>
        This field is required
      </AlertValue>
    )
  }
}

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <AlertValue role="alert">
        <ActiveStatus>
          <b>Status:</b>
        </ActiveStatus>
        This is not a valid email.
      </AlertValue>
    )
  }
}

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <AlertValue role="alert">
        <ActiveStatus>
          <b>Status:</b>
        </ActiveStatus>
        The username must be between 3 and 20 characters.
      </AlertValue>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <AlertValue role="alert">
        <ActiveStatus>
          <b>Status:</b>
        </ActiveStatus>
        The password must be between 6 and 40 characters.
      </AlertValue>
    )
  }
}

export default function RegisterScreen() {
  const form = useRef()
  const checkBtn = useRef()

  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState('')
  const [formLoginValues, handleLoginInputChange] = useForm({
    username: '',
    email: '',
    password: '',
  })

  const { username, email, password } = formLoginValues

  const handleRegister = (e) => {
    e.preventDefault()

    setMessage('')
    setSuccessful(false)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message)
          setSuccessful(true)
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setMessage(resMessage)
          setSuccessful(false)
          toast.error(`👍🏻 ${resMessage}!`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      )
    }
  }

  return (
    <Container>
      <Headline>Register</Headline>
      <FormContainer>
        <StyledForm onSubmit={handleRegister} ref={form}>
          {!successful && (
            <>
              <InputContainer>
                <LabelSpan>Username:</LabelSpan>
                <InputWrapper>
                  <StyledInput
                    type="text"
                    name="username"
                    autoComplete="off"
                    value={username}
                    onChange={handleLoginInputChange}
                    validations={[required, vusername]}
                  />
                </InputWrapper>
              </InputContainer>
              <InputContainer>
                <LabelSpan>Email:</LabelSpan>
                <InputWrapper>
                  <StyledInput
                    type="text"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleLoginInputChange}
                    validations={[required, validEmail]}
                  />
                </InputWrapper>
              </InputContainer>
              <InputContainer>
                <LabelSpan>Password:</LabelSpan>
                <InputWrapper>
                  <StyledInput
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleLoginInputChange}
                    validations={[required, vpassword]}
                  />
                </InputWrapper>
              </InputContainer>
              <SubmitButton type="submit">Register</SubmitButton>
            </>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </StyledForm>
      </FormContainer>
      <ButtonContainer>
        {successful && (
          <AlertContainer>
            <SuccessAlert>
              <ActiveStatus>
                <b>Status:</b>
              </ActiveStatus>
              {message}
            </SuccessAlert>
            <LinkButton to="/admin/login">Go To Login</LinkButton>
          </AlertContainer>
        )}
      </ButtonContainer>
    </Container>
  )
}
