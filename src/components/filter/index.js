/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

function getSortOrderValue(sortOrder) {
  return sortOrder.replace(' ', '').toLowerCase()
}

function getPropertiesDisplayText(count) {
  if (count > 1 || count === 0) {
    return 'properties'
  }
  return 'property'
}

const DefaultState = {
  priceFrom: '',
  postcode: '',
  sortOrder: '',
  sortOrders: ['Highest First', 'Lowest First']
}

class Filter extends React.Component {
  state = Object.assign({}, DefaultState)

  handleChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  render() {
    const containerClasses = classnames('container', 'mb-1', styles.container)
    const formClasses = classnames('form-horizontal', styles.form)
    const { priceFrom, postcode, sortOrder, sortOrders } = this.state
    const { postcodes, count, updateFilter } = this.props

    return (
      <aside className="mt-2">
        <div className={containerClasses}>
          <h2 data-cy="property-count">
            {`${count} private ${getPropertiesDisplayText(count)} for sale`}
          </h2>
          <form
            onChange={() => setTimeout(() => updateFilter(this.state), 0)}
            className={formClasses}
            noValidate
          >
            <p className="mb-1">
              Refine your results
              <button
                data-cy="clear-button"
                className="ml-1 btn btn-sm"
                type="button"
                onClick={() => {
                  this.setState(Object.assign({}, DefaultState))
                  updateFilter({})
                }}
              >
                Clear
              </button>
            </p>
            <div className="columns text-center">
              <div className="column col-4 col-xs-12">
                <div className="form-group">
                  <div className="col-3 col-sm-12">
                    <label className="form-label" htmlFor="price-from">
                      Price from
                    </label>
                  </div>
                  <div className="col-9 col-sm-12">
                    <input
                      className="form-input"
                      min="0"
                      max="10000000"
                      type="number"
                      id="price-from"
                      placeholder="£1,000,000"
                      value={priceFrom}
                      onChange={event =>
                        this.handleChange('priceFrom', Number(event.target.value))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="column col-4 col-xs-12">
                <div className="form-group">
                  <div className="col-3 col-sm-12">
                    <label className="form-label" htmlFor="postcode">
                      Postcode
                    </label>
                  </div>
                  <div className="col-9 col-sm-12">
                    <select
                      className="form-select"
                      id="postcode"
                      value={postcode}
                      onChange={event =>
                        this.handleChange('postcode', event.target.value)
                      }
                    >
                      <option value="">Choose...</option>
                      {postcodes.map(pc => (
                        <option value={pc.toLowerCase()}>{pc}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="column col-4 col-xs-12">
                <div className="form-group">
                  <div className="col-3 col-sm-12">
                    <label className="form-label" htmlFor="sortorder">
                      Sort Order
                    </label>
                  </div>
                  <div className="col-9 col-sm-12">
                    <select
                      className="form-select"
                      id="sortorder"
                      value={sortOrder}
                      onChange={event =>
                        this.handleChange('sortOrder', event.target.value)
                      }
                    >
                      <option value="">Choose...</option>
                      {sortOrders.map(order => (
                        <option value={getSortOrderValue(order)}>{order}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </aside>
    )
  }
}

export default Filter
