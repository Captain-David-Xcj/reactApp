import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';
import HelloWorld from './HelloWorld'

ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(<Clock/>, document.getElementById('clock'));

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(
            HelloWorld,
            {
                id: 'ember',
                frameWorkName: 'Ember.js',
                title: 'A framework named Ember.'
            }
        ),
        React.createElement(
            HelloWorld,
            {
                id: 'backbone',
                frameWorkName: 'Backbone.js',
                title: 'A framework named Backbone.'
            }
        ),
        React.createElement(
            HelloWorld,
            {
                id: 'angular',
                frameWorkName: 'Angular.js',
                title: 'A framework named Angular.'
            }
        )
    ),
    document.getElementById('helloWorld')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
