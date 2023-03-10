import React from "react";

class FormComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
    }
    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted!')
    }
    render() {
        return(
            <form>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text" id="fistName"
                    value={this.state.firstName}
                    onChange={(event) => this.handleOnChangeFirstName(event)} /> <br />
                <label htmlFor="lastName">Last Name: </label>
                <input
                    type="text"
                    id="lastName"
                    value={this.state.lastName}
                    onChange={(event) => this.handleOnChangeLastName(event)} /> <br />
                <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}
export default FormComponent