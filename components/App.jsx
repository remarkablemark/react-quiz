'use strict';

/**
 * Module dependencies.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Quiz from './Quiz';

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
                <Quiz
                    id='choices'
                    question='Who composed "The Magic Flute"?'
                    choices={[
                        { text: 'Bach', id: 'bach' },
                        { text: 'Beethoven', id: 'beethoven' },
                        { text: 'Chopin', id: 'chopin' },
                        { text: 'Mozart', id: 'mozart' }
                    ]}
                />
            </div>
        );
    }
}

export default App;
