import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

function Hero() {
  const classes = classnames(styles.hero, 'hero', 'hero-lg', 'mb-3')

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
        <h1>Premium Property Finder</h1>
        <p className="mb-0">Bringing premium property right to your finger tips</p>
      </div>
    </div>
  )
}

export default Hero
