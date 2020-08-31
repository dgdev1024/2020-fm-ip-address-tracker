/**
 * @file src/ctx/geolocation.jsx
 * A context for determining the user's geographical location based on their
 * IP address.
 */

import React, { useContext, useState } from 'react';
import Axios from 'axios';

// The API endpoint with API key.
const urlEndpoint = 
  `https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_API_KEY}`;

// Create the context.
const GelocationContext = React.createContext();

/**
 * @function GeolocationProvider
 * @brief The context provider for our geolocation functionality.
 */
const GeolocationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  /**
   * @function queryGeolocation
   * @brief Queries the Ipify API for a geolocation based on the given domain
   * or IP address.
   * @param {String} query The queried domain or IP address.
   * @param {Boolean} domain Is this query a domain name?
   */
  const queryGeolocation = async (query, domain = false) => {
    setResponse(null);
    setError('');
    setLoading(true);

    let url;
    if (domain === true) {
      url = `${urlEndpoint}&domain=${query}`;
    } else {
      url = query ? `${urlEndpoint}&ipAddress=${query}` : urlEndpoint;
    }

    try {
      const res = await Axios.get(url);
      const { ip, location, isp } = res.data;
      console.log(ip, location, isp);
      setResponse({ ip, location, isp });
    } catch (err) {
      if (err.response) {
        const { code, messages } = err.response.data;
        setError(`${code}: ${messages}`);
      } else {
        console.error(err);
        setError('An unexpected error occured. Try again later.');
      }
    }

    setLoading(false);
  };

  return (
    <GelocationContext.Provider value={{
      queryGeolocation, loading, response, error
    }}>{children}</GelocationContext.Provider>
  )
};

// Exports
export default GeolocationProvider;
export const useGeolocationContext = () => useContext(GelocationContext);
