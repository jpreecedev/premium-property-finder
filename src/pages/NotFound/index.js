import * as React from 'react'
import { Link } from '@reach/router'

function NotFound() {
  return (
    <>
      <h1>404.</h1>
      <p>Sorry the requested page was not found</p>
      <Link to="/">Home</Link>
    </>
  )
}

export default NotFound
