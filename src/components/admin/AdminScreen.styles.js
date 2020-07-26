import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin: 7rem auto;
  width: 100%;
  max-width: 900px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 100%;
  margin: 0 auto;
`

export const InputContainer = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: initial;
  height: calc(26.992pt);
  margin-top: 1rem;
`

export const TextAreaContainer = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: initial;
  height: calc(133.992pt);
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

export const Input = styled.input`
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

export const DisabledButton = styled.button`
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
  color: gray;
  background-color: #e2e2e2;
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
  border-image: initial;
  margin-top: 2rem;
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
  text-decoration: none;
  font-family: inherit;
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

export const Hr = styled.hr`
  margin: 3rem auto;
  width: 80%;
  color: black;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  box-shadow: none;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.875rem;
  width: 100%;
  height: 100%;
  min-height: 6.25rem;
  resize: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  padding: 8pt;
`

// Project List styles

export const ProjectsListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 2px;
  height: auto;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-top: 3rem;

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
`

export const ListTitle = styled.h4`
  font-size: inherit;
  margin-right: 5px;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ColumnsContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  margin: 3rem;
  --row-gap: calc(0 * 16pt);
  justify-content: normal;
  align-items: normal;
`

export const MediumColumn = styled.div`
  float: left;
  box-sizing: border-box;
  padding-left: calc(var(--row-gap) / 2);
  padding-right: calc(var(--row-gap) / 2);
  width: 60.3333%;
  margin-left: 0%;
`

export const FullColumn = styled.div`
  float: left;
  box-sizing: border-box;
  padding-left: calc(var(--row-gap) / 2);
  padding-right: calc(var(--row-gap) / 2);
  width: 70%;
  margin-left: 0%;
`

export const ColumnButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto 3rem;
`

export const ColumnLink = styled(Link)`
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
  margin-right: 1rem;
  text-decoration: none;
  font-family: inherit;
  :hover {
    background-color: #4c92de;
    border: none;
  }
`

export const ColumnDeleteButton = styled.button`
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
  color: white;
  background-color: crimson;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px;
  padding: 0px 1.375rem;
  border-radius: 5px;
  outline: none;
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
    border 200ms ease 0ms, color 200ms ease 0ms;
  border: none;
  overflow: hidden;
  border-width: 1px;
  margin-right: 1rem;
  text-decoration: none;
  font-family: inherit;
  :hover {
    background-color: #f08080;
    border: none;
  }
`

export const Title = styled.h2`
  color: black;
  font-family: inherit;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;

  ::selection {
    color: blue;
    background: transparent;
  }
`

export const SubTitle = styled.h2`
  color: black;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;

  ::selection {
    color: blue;
    background: transparent;
  }
`
