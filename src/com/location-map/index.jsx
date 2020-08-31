/**
 * @file src/com/location-map/index.jsx
 * Displays a map where the queried IP address/domain name is located.
 */

import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useGeolocationContext } from "../../ctx/geolocation";
import "./index.scss";

/**
 * @function LocationMap
 * @brief Displays a map pointing out the location of a queried IP address
 * or domain name.
 */
const LocationMap = () => {
  const { loading, error, response } = useGeolocationContext();
  const position = response && [response.location.lat, response.location.lng];

  return (
    <div className="location-map">
      {loading === false && error === "" && response !== null && (
        <>
          <Map
            center={position}
            zoom={13}
            zoomControl={false}
            dragging={false}
            touchZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker className="map-marker" position={position}>
              <Popup>
                A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </>
      )}
    </div>
  );
};

export default LocationMap;
