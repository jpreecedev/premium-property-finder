import * as React from 'react'
import classnames from 'classnames'

import PropertyListingsProvider, {
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import BaseLayout from '../../components/baseLayout'
import Listing from '../../components/listing'
import Filter from '../../components/filter'

import styles from './styles.css'

function Home() {
  const containerClasses = classnames('container', styles.container)

  return (
    <BaseLayout showHero>
      <div className={containerClasses}>
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ propertyListings, allListings }) => (
              <>
                <Filter
                  count={propertyListings.length}
                  postcodes={allListings
                    .map(listing => listing.postcode.split(' ')[0])
                    .filter((item, i, arr) => arr.indexOf(item) === i)}
                />
                <hr />
                <div className="columns">
                  {propertyListings.map(listing => (
                    <Listing listing={listing} />
                  ))}
                </div>
              </>
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </BaseLayout>
  )
}

export default Home
