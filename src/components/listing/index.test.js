import * as React from 'react'
import renderer from 'react-test-renderer'

import Listing from '.'

test('renders correctly', () => {
  const listing = {
    id: 1,
    image: 'image.png',
    title: 'title',
    address: 'address',
    description: 'description',
    price: '999'
  }
  const tree = renderer.create(<Listing listing={listing} />).toJSON()
  expect(tree).toMatchSnapshot()
})
