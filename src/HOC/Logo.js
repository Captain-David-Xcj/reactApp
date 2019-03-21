import React from "react";

class Logo extends React.Component {
    render() {
        return (
            <img onClick={this.props.handleClick} width="40" src="logo.png" href="#"/>
        )
    }
}

export default Logo;