/**
 * @file src/com/header/index.jsx
 * Presents the header and search bar at the top.
 */

import React, { useState } from "react";
import LocationDetails from "../location-details";
import { useGeolocationContext } from "../../ctx/geolocation";
import Arrow from "../../img/icon-arrow.svg";
import "./index.scss";

/**
 * @function Header
 * @brief Displays the header at the top of the page.
 */
const Header = () => {
  const [input, setInput] = useState("");
  const {
    loading,
    error,
    response,
    queryGeolocation,
  } = useGeolocationContext();

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const domainRegex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

    if (domainRegex.test(input)) await queryGeolocation(input, true);
    else await queryGeolocation(input);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="heading header__heading">IP Address Tracker</h1>
        <form onSubmit={onSubmit} className="header__query-form">
          <div className="header__query-form-element">
            <input
              type="text"
              className="header__input"
              id="query"
              name="query"
              aria-label="Enter an IP address or domain name."
              placeholder="IP address or domain name"
              value={input}
              onChange={(ev) => setInput(ev.target.value)}
            />
            <button type="submit" className="header__submit" disabled={loading}>
              {loading ? (
                "..."
              ) : (
                <>
                  <img src={Arrow} alt=">" />
                </>
              )}
            </button>
          </div>
        </form>
        <LocationDetails loading={loading} error={error} response={response} />
      </div>
    </header>
  );
};

export default Header;
