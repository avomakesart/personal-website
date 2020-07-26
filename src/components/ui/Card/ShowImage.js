import React from 'react'
import { TechIcon } from './Card.styles'

export default function ShowImage({ item, url }) {
  return <TechIcon src={url} alt={item.name} />
}
