import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hello ' + this.props.frameWorkName + ' world!!!'
        )
    }
}

export default HelloWorld;