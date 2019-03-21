import React from 'react';


class Account extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            accountNumber: ''
        }
    }

    handleChange(event) {
        console.log('Typed: ', event.target.value)
        this.setState({
            accountNumber: event.target.value.replace(/\D/ig, '')
        })
    }

    render() {
        return (
            <div>
                Account Number:
                <input
                    type="text"
                    onChange={this.handleChange}
                    placeholder="123456"
                    value={this.state.accountNumber}/>
                <br/>
                <span>{this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber : ''}</span>
            </div>
        )
    }
}

export default Account;