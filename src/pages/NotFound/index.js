import * as React from 'react'
import { Link } from '@reach/router'

function NotFound() {
  return (
    <div className="columns">
      <div className="column col-12">
        <div className="empty">
          <div className="empty-icon">
            <i className="icon icon-3x icon-mail" />
          </div>
          <p className="empty-title h5">404.</p>
          <p className="empty-subtitle">Sorry the requested page was not found</p>
          <div className="empty-action">
            {' '}
            <Link to="/">Go back home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
