/**
 * @file src/com/location-details/index.jsx
 * Displays the Location Details pane in the header.
 */

import React from "react";
import "./index.scss";

/**
 * @function LocationDetails
 * @brief Displays the Location Details pane in the header.
 */
const LocationDetails = ({ loading, error, response }) => {
  if (loading === false && error === "" && response === null) {
    return null;
  }

  return (
    <div
      className={`location-details ${
        response !== null && "location-details--with-response"
      }`}
    >
      {loading === true && <p className="text text--italic">Loading...</p>}
      {loading === false && error !== "" && (
        <p className="text text--italic text--error">{error}</p>
      )}
      {loading === false && error === "" && response !== null && (
        <>
          <div className="location-detail">
            <p className="text location-detail-key">IP Address</p>
            <p className="text location-detail-value">{response.ip}</p>
          </div>
          <div className="location-detail">
            <p className="text location-detail-key">Location</p>
            <p className="text location-detail-value">
              {response.location.city},{response.location.region}{" "}
              {response.location.postalcode}
            </p>
          </div>
          <div className="location-detail">
            <p className="text location-detail-key">Timezone</p>
            <p className="text location-detail-value">
              {response.location.timezone}
            </p>
          </div>
          <div className="location-detail">
            <p className="text location-detail-key">ISP</p>
            <p className="text location-detail-value">{response.isp}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationDetails;
