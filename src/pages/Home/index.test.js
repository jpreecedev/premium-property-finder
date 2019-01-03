import * as React from 'react'
import { render, cleanup } from 'react-testing-library'

import 'jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import Home from '.'

beforeAll(() => {
  global.alert = jest.fn()
})

afterEach(cleanup)

test('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('should render basic elements', () => {
  const { getByText } = render(<Home />)
  expect(getByText(/Premium Property Finder/i)).toBeTruthy()
  expect(getByText(/Bringing premium property right to your finger tips/i)).toBeTruthy()
})
