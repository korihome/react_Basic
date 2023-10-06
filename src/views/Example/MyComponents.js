import React from "react";


class MyComponents extends React.Component {
    state = {
        firstName: "",
        lastName: ""
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
            </>
        )
    }
}

export default MyComponents;