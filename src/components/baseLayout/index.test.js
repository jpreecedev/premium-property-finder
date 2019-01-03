import React from 'react'
import renderer from 'react-test-renderer'

import BaseLayout from './index'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BaseLayout>
        <div>Child</div>
      </BaseLayout>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
