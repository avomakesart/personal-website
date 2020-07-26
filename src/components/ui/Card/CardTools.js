import React from 'react'
import { tools } from '../../../data/tools'
import ShowImage from './ShowImage'
import { ProductImageContainer, DataContainer, TechName } from './Card.styles'

export default function CardTools() {
  return tools.map((tool) => (
    <ProductImageContainer key={tool.id}>
      <DataContainer>
        <ShowImage url={tool.image} item="Images" />
        <TechName>{tool.name}</TechName>
      </DataContainer>
    </ProductImageContainer>
  ))
}
