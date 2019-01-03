import * as React from 'react'
import renderer from 'react-test-renderer'

import Gallery from '.'

test('renders correctly', () => {
  const image = 'image.png'
  const title = 'title'
  const tree = renderer.create(<Gallery image={image} title={title} />).toJSON()
  expect(tree).toMatchSnapshot()
})
