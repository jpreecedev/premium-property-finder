import * as React from 'react'
import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Home from '..'

beforeAll(() => {
  global.alert = jest.fn()
})

afterEach(cleanup)

test('should render "Home" as title', () => {
  const { getByText } = render(<Home />)
  expect(getByText(/Home/i)).toBeTruthy()
})
