/**
 * @file src/app.jsx
 * The application's top-level component.
 */

import React from 'react';

/**
 * @function InnerApp
 * @brief The application's second-to-top-level component contains the main
 * HTML content itself.
 */
const InnerApp = () => (
  <main className="main"></main>
);

/**
 * @function App
 * @brief The application's top-level component contains our inner app wrapped
 * by our context providers.
 */
const App = () => (
  <InnerApp />
);

export default App;
