import React from 'react';
import PropTypes from 'prop-types';

class ButtonTest extends React.Component {

    render() {
        return <button className="btn">{this.props.buttonLabel}</button>
    }
}

ButtonTest.propTypes = {
    title: PropTypes.string,
    handler: PropTypes.func.isRequired,
    email(props, propName, componentName) {
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!emailRegularExpression.test(props[propName])) {
            return new Error('Email validation failed!');
        }
    }
}

ButtonTest.defaultProps = {
    buttonLabel: 'submit'
}

export default ButtonTest;