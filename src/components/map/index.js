import * as React from 'react'

function replaceAll(target, search, replacement) {
  return target.replace(new RegExp(search, 'g'), replacement)
}

function Map({ address }) {
  const replaced = replaceAll(address, ' ', '%20')
  const search = `https://maps.google.com/maps?q=${replaced}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title={address}
          width="100%"
          height="500"
          id="gmap_canvas"
          src={search}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  )
}

export default Map
