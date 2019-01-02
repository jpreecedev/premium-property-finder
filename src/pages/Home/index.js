import * as React from 'react'
import { Link } from '@reach/router'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/details/123">Details</Link>
    </>
  )
}

export default Home
