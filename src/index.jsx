/**
 * @file src/index.jsx
 * The entry point of our application.
 */

import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.scss';

const appRoot = document.querySelector('.app-root');
render(<App />, appRoot);
