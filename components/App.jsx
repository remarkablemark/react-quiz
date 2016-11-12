'use strict';

/**
 * Module dependencies.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * App component.
 */
class App extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title='React Quiz'
                    showMenuIconButton={false}
                />
            </div>
        );
    }
}

export default App;
