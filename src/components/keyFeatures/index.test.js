import * as React from 'react'
import renderer from 'react-test-renderer'

import KeyFeatures from '.'

test('renders correctly', () => {
  const features = ['first', 'second', 'third']
  const tree = renderer.create(<KeyFeatures features={features} />).toJSON()
  expect(tree).toMatchSnapshot()
})
