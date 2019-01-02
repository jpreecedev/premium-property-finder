import * as React from 'react'
import classnames from 'classnames'

import BaseLayout from '../../components/baseLayout'
import PropertyListingsProvider, {
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'
import Listing from '../../components/listing'

import styles from './styles.css'

function Home() {
  const containerClasses = classnames('container', styles.container)

  return (
    <BaseLayout showHero>
      <div className={containerClasses}>
        <div className="columns">
          <PropertyListingsProvider>
            <PropertyListingsConsumer>
              {({ propertyListings }) =>
                propertyListings.map(listing => <Listing listing={listing} />)
              }
            </PropertyListingsConsumer>
          </PropertyListingsProvider>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home
