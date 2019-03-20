import React from 'react';

class ButtonTest extends React.Component {

    render() {
        return <button className="btn">{this.props.buttonLabel}</button>
    }
}

ButtonTest.defaultProps = {
    buttonLabel: 'submit'
}

export default ButtonTest;