import React, { useState, useEffect } from 'react'

import UserService from '../../services/user-service'
import Hero from './Hero/Hero'

export default function HomeSreen() {
  const [, setContent] = useState('')

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()

        setContent(_content)
      }
    )
  }, [])

  return <Hero />
}
