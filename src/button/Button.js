import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    handleClick(event) {
        this.setState({
            counter: ++this.state.counter
        })
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick.bind(this)}>
                    Don't Click me {this.state.counter} times!
                </button>
            </div>
        )
    }
}


export default Button;