import * as React from 'react'
import renderer from 'react-test-renderer'

import Filter from '.'

test('renders correctly', () => {
  const postcodes = ['ABC 123', 'DEF 456', 'GHI 789']
  const count = 3
  const tree = renderer.create(<Filter postcodes={postcodes} count={count} />).toJSON()
  expect(tree).toMatchSnapshot()
})
