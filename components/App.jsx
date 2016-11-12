'use strict';

/**
 * Module dependencies.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * App component.
 */
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to React Quiz</h1>
                <RaisedButton label='Start' />
            </div>
        );
    }
}

export default App;
