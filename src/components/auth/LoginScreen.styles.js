import styled from 'styled-components'
import Form from 'react-validation/build/form'
import { Link } from 'react-router-dom'
import Input from 'react-validation/build/input'

export const Container = styled.div`
  margin: 7rem auto;
  width: 100%;
  max-width: 900px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  width: 50%;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
`

export const InputContainer = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: initial;
  height: calc(26.992pt);
  margin-top: 1rem;
`

export const LabelSpan = styled.span`
  display: inline-flex;
  width: initial;
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
  pointer-events: none;
  color: rgb(136, 136, 136);
  background-color: rgb(250, 250, 250);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 0.875rem;
  line-height: 1;
  margin: 0px;
  padding: 0px 8pt;
  border-top: 1px solid rgb(234, 234, 234);
  border-left: 1px solid rgb(234, 234, 234);
  border-bottom: 1px solid rgb(234, 234, 234);
`

export const InputWrapper = styled.div`
  display: inline-flex;
  vertical-align: middle;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  user-select: none;
  flex: 1 1 0%;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(234, 234, 234);
  border-image: initial;
  transition: border 0.2s ease 0s, color 0.2s ease 0s;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

export const StyledInput = styled(Input)`
  box-shadow: none;
  font-size: 0.875rem;
  background-color: transparent;
  color: rgb(0, 0, 0);
  width: 100%;
  min-width: 0px;
  appearance: none;
  margin: 4px 10px;
  padding: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  border-radius: 0px;
`

export const SubmitButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  min-width: 12.5rem;
  width: auto;
  font-weight: 400;
  font-size: 0.875rem;
  user-select: none;
  text-transform: capitalize;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  padding: 0px 1.375rem;
  border-radius: 5px;
  outline: none;
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
    border 200ms ease 0ms, color 200ms ease 0ms;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  margin-top: 2rem;
  :hover {
    background-color: #4c92de;
    border: none;
  }
`

export const LinkButton = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  min-width: 12.5rem;
  width: auto;
  font-weight: 400;
  font-size: 0.875rem;
  user-select: none;
  text-transform: capitalize;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  padding: 0px 1.375rem;
  border-radius: 5px;
  outline: none;
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
    border 200ms ease 0ms, color 200ms ease 0ms;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  margin-top: 2rem;
  :hover {
    background-color: #4c92de;
    border: none;
  }
`

export const Button = styled.button`
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  min-width: 12.5rem;
  width: auto;
  font-weight: 400;
  font-size: 0.875rem;
  user-select: none;
  text-transform: capitalize;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  pointer-events: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  padding: 0px 1.375rem;
  border-radius: 5px;
  outline: none;
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
    border 200ms ease 0ms, color 200ms ease 0ms;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  margin-top: 2rem;
  :hover {
    background-color: #4c92de;
    border: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin: 0 auto;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-around;
    max-width: 100%;
    width: 100%;
  }
`

export const Headline = styled.h1`
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

  &::selection {
    color: blue;
    background: transparent;
  }
`

export const AlertValue = styled.div`
  font-size: 14px;
  line-height: 1.8;
  color: rgb(238, 0, 0);
  background-color: rgb(255, 255, 255);
  padding: 8pt 16pt;
  position: absolute;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 0, 0);
  border-image: initial;
  border-radius: 5px;
`

export const ActiveStatus = styled.span`
  text-transform: uppercase;
  user-select: none;
  line-height: 1.5;
  padding-right: 4pt;

  ::selection {
    display: none;
  }
`

export const SuccessAlert = styled.div`
  animation: fadeInUp;
  animation-duration: 1s;
  font-size: 14px;
  line-height: 1.8;
  color: rgb(0, 112, 243);
  background-color: rgb(255, 255, 255);
  padding: 8pt 16pt;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 112, 243);
  border-image: initial;
  border-radius: 5px;
`

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
