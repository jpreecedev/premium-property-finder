import * as React from 'react'
import classnames from 'classnames'

import KeyFeatures from '../keyFeatures'
import Gallery from '../gallery'
import Map from '../map'

import { asCurrency } from '../../utils/number'
import styles from './styles.module.css'

function PropertyDetails({ listing }) {
  if (!listing) {
    return null
  }

  const { image, title, address, description, price, features, details } = listing
  const priceClasses = classnames(styles.price, 'text-success', 'text-right')

  return (
    <div className={styles.container}>
      <div className="columns">
        <div className="column col-9 col-xs-12">
          <h2>{title}</h2>
          <h3 className="text-dark text-small mb-1">{description}</h3>
        </div>
        <div className="column col-3 col-xs-12">
          <h5 className={priceClasses}>
            <small>Priced from</small>
            <br />
            &pound;
            {asCurrency(price)}
          </h5>
        </div>
      </div>
      <div className="columns">
        <div className="column col-6 col-xs-12">
          <Gallery image={image} title={title} />
        </div>
        <div className="column col-6 col-xs-12">
          <KeyFeatures features={features} />
        </div>
      </div>
      <p className="text-bold mt-3">Full Details</p>
      {details.map(detail => (
        <p key={detail}>{detail}</p>
      ))}
      <p className="text-bold mt-3">Map</p>
      <Map address={address} />
    </div>
  )
}

export default PropertyDetails
