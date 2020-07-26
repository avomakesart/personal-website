import React, { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { useForm } from '../../hooks/useForm'

import CheckButton from 'react-validation/build/button'
import {
  FormContainer,
  StyledForm,
  InputContainer,
  LabelSpan,
  StyledInput,
  SubmitButton,
  Container,
  InputWrapper,
  Button,
  ButtonContainer,
  Headline,
  AlertValue,
  ActiveStatus,
} from './LoginScreen.styles'

import AuthService from '../../services/auth-service'
import Spinner from '../ui/Spinner/Spinner'

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

export default function LoginScreen({ history }) {
  const form = useRef()
  const checkBtn = useRef()
  const [loading, setLoading] = useState(false)
  const [, setMessage] = useState('')
  const [formLoginValues, handleLoginInputChange] = useForm({
    username: '',
    password: '',
  })

  const { username, password } = formLoginValues

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          history.push('/profile')
          window.location.reload()
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setLoading(false)
          setMessage(resMessage)
          toast.dark(`👍🏻 ${resMessage} :(`, {
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
    } else {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Headline>Login</Headline>
      <FormContainer>
        <StyledForm onSubmit={handleLogin} ref={form}>
          <InputContainer>
            <LabelSpan>Username:</LabelSpan>
            <InputWrapper>
              <StyledInput
                type="text"
                name="username"
                autoComplete="off"
                value={username}
                onChange={handleLoginInputChange}
                validations={[required]}
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
                validations={[required]}
              />
            </InputWrapper>
          </InputContainer>
          <SubmitButton type="submit" disabled={loading}>
            Login
          </SubmitButton>
          {loading && <Spinner />}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </StyledForm>
      </FormContainer>
      <ButtonContainer>
        <Button onClick={handleReturn}>Return</Button>
      </ButtonContainer>
    </Container>
  )
}
