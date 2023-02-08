import React from "react";
import MyFormChild from "./MyFormChild";
class MyForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'dev', salary: '500 $' },
            { id: 'job2', title: 'tester', salary: '300 $' },
            { id: 'job3', title: 'project manager', salary: '1000 $' }
        ]
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
        console.log(this.state)
    }
    render() {
        console.log(this.state.firstName)
        return (
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
                <MyFormChild
                    name={this.state.firstName}
                    age={'25'}
                    address={'Da Nang'}
                    arrJobs={this.state.arrJobs} />
            </form>
        )
    }
}
export default MyForm