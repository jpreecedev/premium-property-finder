import * as React from 'react'
import renderer from 'react-test-renderer'

import Map from '.'

test('renders correctly', () => {
  const address = 'Baker street'
  const tree = renderer.create(<Map address={address} />).toJSON()
  expect(tree).toMatchSnapshot()
})
