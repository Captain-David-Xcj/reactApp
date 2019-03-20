import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './clock/Clock';
import HelloWorld from './HelloWorld'
import Button from './button/Button'
import InputText from "./form/InputText";
import Account from "./form/Account";
import ButtonTest from './button/ButtonTest'

ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(<Clock/>, document.getElementById('clock'));

ReactDOM.render(<Button/>, document.getElementById('button'));

ReactDOM.render(<InputText/>, document.getElementById('inputText'))

ReactDOM.render(<Account/>, document.getElementById('account'))

ReactDOM.render(<div>
        <ButtonTest buttonLabel="start"/>
        <ButtonTest/>
        <ButtonTest/>
        <ButtonTest/>
    </div>
    , document.getElementById('buttonTest'))

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

serviceWorker.unregister();
