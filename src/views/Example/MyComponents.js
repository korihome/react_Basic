import React from "react";
import MyChildComponent from "./MyChildComponent";
import AddMyComponent from "./AddMyComponent";

class MyComponents extends React.Component {
    state = {
        arrJobs: [
            { id: "Quan1", job: "Developer", salary: "500" },
            { id: "Quan2", job: "Tester", salary: "400" },
            { id: "Quan3", job: "Project Manager", salary: "1500" },
        ]
    }

    addJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentArr = this.state.arrJobs
        currentArr = currentArr.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentArr
        })
    }


    render() {
        return (
            <>
                <AddMyComponent addJob={this.addJob} />
                <MyChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
            </>
        )
    }
}

export default MyComponents;