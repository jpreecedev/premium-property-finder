import * as React from 'react'
import renderer from 'react-test-renderer'

import Hero from '.'

test('renders correctly', () => {
  const miniHero = false
  const tree = renderer.create(<Hero miniHero={miniHero} />).toJSON()
  expect(tree).toMatchSnapshot()
})
