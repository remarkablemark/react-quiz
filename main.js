'use strict';

/**
 * Module dependencies.
 */
import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';

// needed for `onTouchTap`
// https://github.com/callemall/material-ui#react-tap-event-plugin
require('react-tap-event-plugin')();

render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
