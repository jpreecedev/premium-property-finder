import * as React from 'react'
import { render, cleanup, waitForElement } from 'react-testing-library'
import { FetchMock } from '@react-mock/fetch'

import Home from '.'

import listingsJson from '../../../public/server/listings.json'

const renderComponent = () =>
  render(
    <FetchMock
      mocks={[
        { matcher: '/server/listings.json', method: 'GET', response: listingsJson }
      ]}
    >
      <Home />
    </FetchMock>
  )

beforeAll(() => {
  global.alert = jest.fn()
})

afterEach(cleanup)

test('should render basic elements', async () => {
  const { getByText } = renderComponent()
  getByText(/Premium Property Finder/i)
  getByText(/Bringing premium property right to your finger tips/i)
  await waitForElement(() => getByText(/6 private properties for sale/i))
})
