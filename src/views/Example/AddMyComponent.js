import React from "react";

class AddMyComponent extends React.Component {
    state = {
        nameJob: '',
        salary: ''
    }

    handleChangeNameJob = (event) => {
        this.setState({
            nameJob: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    clickMe = (event) => {
        event.preventDefault()

        if (!this.state.nameJob || !this.state.salary) {
            alert("Missing require params")
            return;
        }

        this.props.addJob({
            id: Math.floor(Math.random() * 1001),
            job: this.state.nameJob,
            salary: this.state.salary
        })

        this.setState({
            nameJob: "",
            salary: "",
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="nameJob">Name Job:</label><br />
                    <input type="text" value={this.state.nameJob} onChange={(event) => this.handleChangeNameJob(event)} /><br />
                    <label htmlFor="salary">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.clickMe(event)} />
                </form>
            </div>
        )
    }
}

export default AddMyComponent;