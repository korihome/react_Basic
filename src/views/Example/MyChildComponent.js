import React from "react";

class MyChildComponent extends React.Component {

    state = {
        isVisib: false,
    }

    handleShowHide = () => {
        this.setState({
            isVisib: !this.state.isVisib
        })
    }

    handleDelete = (item) => {
        this.props.deleteJob(item);
    }

    render() {
        const { arrJobs } = this.props;
        let a = arrJobs.map((item) => (
            <p key={item.id}>
                {item.job} - {item.salary} $
                <button onClick={() => { this.handleDelete(item) }}>X</button>
            </p>
        ))
        return (
            <div>
                {
                    this.state.isVisib === false ?
                        <>
                            <div>
                                <button onClick={() => { this.handleShowHide() }} >SHOW</button>
                            </div>
                        </>
                        :
                        <>
                            <div>{a}</div>
                            <div>
                                <button onClick={() => { this.handleShowHide() }}>HIDE</button>
                            </div>
                        </>
                }
            </div>
        )
    }
}

export default MyChildComponent;