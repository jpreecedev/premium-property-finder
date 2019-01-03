import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import BaseLayout from '../../components/baseLayout'
import PropertyDetails from '../../components/propertyDetails'

function Details({ propertyId }) {
  return (
    <BaseLayout miniHero>
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ getListingByPropertyId }) => (
              <PropertyDetails listing={getListingByPropertyId(propertyId)} />
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </BaseLayout>
  )
}

export default Details
