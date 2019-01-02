import * as React from 'react'

const DefaultState = {
  propertyListings: [],
  filter: {}
}

const PropertyListingsContext = React.createContext(DefaultState)

export const PropertyListingsConsumer = PropertyListingsContext.Consumer

class PropertyListingsProvider extends React.Component {
  static applyFilter(listings, filter) {
    const { priceFrom, postcode, sortOrder } = filter
    let result = listings
    if (priceFrom) {
      const from = Number(priceFrom)
      result = result.filter(item => Number(item.price) >= from)
    }
    if (postcode) {
      result = result.filter(item => item.postcode.toLowerCase().startsWith(postcode))
    }
    if (sortOrder) {
      if (sortOrder === 'highestfirst') {
        result = result.sort((a, b) => {
          if (Number(b.price) < Number(a.price)) {
            return -1
          }
          if (Number(b.price) > Number(a.price)) {
            return 1
          }
          return 0
        })
      }
      if (sortOrder === 'lowestfirst') {
        result = result.sort((a, b) => {
          if (Number(a.price) < Number(b.price)) {
            return -1
          }
          if (Number(a.price) > Number(b.price)) {
            return 1
          }
          return 0
        })
      }
    }
    return result
  }

  state = DefaultState

  componentDidMount() {
    fetch('/server/listings.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ propertyListings: res })
      })
  }

  updateFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    const { children } = this.props
    const { propertyListings, filter } = this.state

    const listings = PropertyListingsProvider.applyFilter(propertyListings, filter)

    return (
      <PropertyListingsContext.Provider
        value={{
          allListings: propertyListings,
          propertyListings: listings,
          updateFilter: this.updateFilter
        }}
      >
        {children}
      </PropertyListingsContext.Provider>
    )
  }
}

export default PropertyListingsProvider
