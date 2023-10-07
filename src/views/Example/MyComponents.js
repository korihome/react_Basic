import React from "react";
import MyChildComponent from "./MyChildComponent";

class MyComponents extends React.Component {
    state = {
        firstName: "Nguyen",
        lastName: "Hoang Quan",
        arrJobs: [
            { id: "Quan1", job: "Developer", salary: "500$" },
            { id: "Quan2", job: "Tester", salary: "400$" },
            { id: "Quan3", job: "Project Manager", salary: "1500$" },

        ]
    }


    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    clickMe = (event) => {
        event.preventDefault()
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.clickMe(event)} />
                </form>
                <MyChildComponent firstName={this.state.firstName} lastName={this.state.lastName} age={"19"} address={"Ha Tinh"} arrJobs={this.state.arrJobs} />
            </>
        )
    }
}

export default MyComponents;