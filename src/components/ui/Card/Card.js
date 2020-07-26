import React from 'react'
import { technologies } from '../../../data/technologies'
import ShowImage from './ShowImage'
import { ProductImageContainer, DataContainer, TechName } from './Card.styles'

export default function Card() {
  return technologies.map((tech) => (
    <ProductImageContainer key={tech.id}>
      <DataContainer>
        <ShowImage url={tech.image} item="Images" />
        <TechName>{tech.name}</TechName>
      </DataContainer>
    </ProductImageContainer>
  ))
}
