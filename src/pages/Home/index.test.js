import * as React from 'react'
import { render, cleanup, waitForElement, fireEvent } from 'react-testing-library'
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

afterEach(cleanup)

test('should render basic elements', async () => {
  const { getByText } = renderComponent()
  getByText(/Premium Property Finder/i)
  getByText(/Bringing premium property right to your finger tips/i)
  await waitForElement(() => getByText(/6 private properties for sale/i))
})

test('should update the property count when setting price of £1,000,000', async () => {
  const { getByLabelText, getByText } = renderComponent()
  const input = getByLabelText(/Price from/i)
  fireEvent.change(input, { target: { value: '1000000' } })
  await waitForElement(() => getByText(/5 private properties for sale/i))
})
