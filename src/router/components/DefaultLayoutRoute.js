import React from 'react'
import { Route } from 'react-router-dom'

import DefaultLayout from '../../components/DefaultLayout'

function DefaultLayoutRoute({ component, render, ...rest }) {
  if (component !== undefined) {
    const Component = component
    return (
      <Route
        {...rest}
        render={props => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    )
  } else if (render !== undefined) {
    return (
      <Route
        {...rest}
        render={props => (
          <DefaultLayout {...props}>{render({ ...props })}</DefaultLayout>
        )}
      />
    )
  }
  return null
}

export default DefaultLayoutRoute
