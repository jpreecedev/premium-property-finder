import * as React from 'react'
import renderer from 'react-test-renderer'

import PropertyDetails from '.'

test('renders correctly', () => {
  const listing = {
    image: 'image.png',
    title: 'title',
    address: 'address',
    description: 'description',
    price: '999',
    features: ['first', 'second', 'third'],
    details: ['fourth', 'fifth', 'sixth']
  }
  const tree = renderer.create(<PropertyDetails listing={listing} />).toJSON()
  expect(tree).toMatchSnapshot()
})
