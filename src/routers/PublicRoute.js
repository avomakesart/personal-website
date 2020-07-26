import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

export default function PublicRoute({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  return <Route {...rest} component={(props) => <Component {...props} />} />
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
}
