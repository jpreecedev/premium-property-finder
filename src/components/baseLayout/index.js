import * as React from 'react'
import classnames from 'classnames'
import Hero from '../hero'

import styles from './styles.css'

function BaseLayout({ children, showHero = false }) {
  const classes = classnames('text-center', styles.footer)
  return (
    <>
      <main role="main">
        {showHero && <Hero />}
        {children}
      </main>
      <footer className={classes}>
        Developed By
        {' '}
        <a
          href="https://twitter.com/jpreecedev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jon Preece
        </a>
        , 2019
      </footer>
    </>
  )
}

export default BaseLayout
