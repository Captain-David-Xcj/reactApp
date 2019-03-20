import React from 'react';

class InputText extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <input
                type="text"
                onChange={this.handleChange}
                defaultValue="hi@azat.co"
            />
        )
    }
}

export default InputText;