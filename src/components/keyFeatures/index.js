import * as React from 'react'

function KeyFeatures({ features }) {
  return (
    <>
      <p className="text-bold">Key Features</p>
      <ul className="mt-0 mb-0">
        {features.map(feature => (
          <li key={feature}>
            <small>{feature}</small>
          </li>
        ))}
      </ul>
    </>
  )
}

export default KeyFeatures
