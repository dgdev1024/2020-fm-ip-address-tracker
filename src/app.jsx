/**
 * @file src/app.jsx
 * The application's top-level component.
 */

import React from "react";
import Header from "./com/header";
import LocationMap from "./com/location-map";
import GeolocationProvider from "./ctx/geolocation";

/**
 * @function InnerApp
 * @brief The application's second-to-top-level component contains the main
 * HTML content itself.
 */
const InnerApp = () => (
  <main className="main">
    <Header />
    <LocationMap />
  </main>
);

/**
 * @function App
 * @brief The application's top-level component contains our inner app wrapped
 * by our context providers.
 */
const App = () => (
  <GeolocationProvider>
    <InnerApp />
  </GeolocationProvider>
);

export default App;
