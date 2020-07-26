import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TechIcon = styled.img`
  max-width: 100%;
  width: 75px;
`

export const TechName = styled.p`
  font-size: 20px;
  font-weight: bold;
`

export const ImageContainer = styled.img`
  max-width: 100%;
  width: 100%;
  display: block;
`

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;

  :hover {
    opacity: 1;
  }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
`

export const ProjectInfoContainer = styled.div`
  position: relative;
`

export const ProjectInfo = styled.div`
  position: absolute;
  top: 8px;
  left: 16px;
`

export const ProjectDate = styled.h5`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  padding-top: 5px;
  color: #878a8f;
`

export const ProjectTitle = styled.h2`
  -webkit-animation: fadeInUp;
  animation: fadeInUp;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  color: black;
  font-family: inherit;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  @media (min-width: 1000px) {
    font-size: 2.3rem;
  }
`

export const ProjectDescription = styled.h4`
 font-size: 1.45rem;
  line-height: 2.1875rem;
  font-weight: lighter;
  color: black;
  text-align: center;
`

export const ProjectLink = styled(Link)`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgb(14, 14, 63);

  :hover {
    opacity: 1;
  }
`
