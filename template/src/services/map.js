import L from 'leaflet'

import { rd } from '../services/geojson'

/**
 * Returns a Leaflet map for Amsterdam
 * @param el
 * @returns {*}
 */
export function amsMap (el) {
  const map = L.map(el, {
    crs: rd,
    attributionControl: false,
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([52.35, 4.9], 6)

  map.addLayer(tileLayer())
  return map
}

/**
 * Returns a tile layer for Amsterdam
 * This tyle layer can be used to show a given shape on the map of Amsterdam
 * @returns {*}
 */
function tileLayer () {
  return L.tileLayer(
    'https://t1.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png',
    {
      tms: true,
      minZoom: 0,
      maxZoom: 20,
      opacity: 0.8
    }
  )
}
