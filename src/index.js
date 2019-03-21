import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Clock from './clock/Clock';
import HelloWorld from './HelloWorld'
import Button from './button/Button'
import InputText from "./form/InputText";
import Account from "./form/Account";
import ButtonTest from './button/ButtonTest'
import Content from "./HOC/Content";

ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(<Clock/>, document.getElementById('clock'));

ReactDOM.render(<Button/>, document.getElementById('button'));

ReactDOM.render(<InputText/>, document.getElementById('inputText'))

ReactDOM.render(<Account/>, document.getElementById('account'))

ReactDOM.render(<Content/>, document.getElementById('hoc'))

ReactDOM.render(<div>
        <ButtonTest buttonLabel="start"/>
        <ButtonTest/>
        <ButtonTest title={1}/>
        <ButtonTest/>
        <ButtonTest email="not-a-valid-email"/>
        <ButtonTest email="534102725@qq.com"/>
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
