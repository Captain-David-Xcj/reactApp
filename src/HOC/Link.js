import React from "react";

class Link extends React.Component {
    render() {
        return (
            <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
        )
    }
}

export default Link;