import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    data: '',
    loading: false,
    error: null,
  })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: '', loading: true, error: null })
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          })
        }
      })
      .catch(() => {
        setState({
          data: '',
          loading: false,
          error: 'Info its not loading',
        })
      })
  }, [url])

  return state
}
