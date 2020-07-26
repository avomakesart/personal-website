import React from 'react'
import { ImageContainer } from './Card.styles'

export default function ProjectImage({ item, url, className }) {
  return <ImageContainer src={url} alt={item} className={className} />
}
