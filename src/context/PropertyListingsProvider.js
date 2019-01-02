import * as React from 'react'

const DefaultPropertyListings = []
const PropertyListingsContext = React.createContext({
  propertyListings: DefaultPropertyListings
})

export const PropertyListingsConsumer = PropertyListingsContext.Consumer

class PropertyListingsProvider extends React.Component {
  state = {
    propertyListings: DefaultPropertyListings
  }

  componentDidMount() {
    fetch('/server/listings.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ propertyListings: res })
      })
  }

  render() {
    const { children } = this.props
    const { propertyListings } = this.state

    return (
      <PropertyListingsContext.Provider
        value={{
          propertyListings
        }}
      >
        {children}
      </PropertyListingsContext.Provider>
    )
  }
}

export default PropertyListingsProvider
