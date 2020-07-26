import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../auth/index'

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location, props }) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/admin/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
