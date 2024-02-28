import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../NotFound/NotFound";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params) {
            const id = this.props.match.params.id;
            axios.get(`https://reqres.in/api/users/${id}`)
                .then((res) => {
                    this.setState({
                        user: res && res.data && res.data.data ? res.data.data : {}
                    })
                })
        }
    }

    Back() {
        this.props.history.push("/user")
    }

    render() {
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0
        return (
            <div>
                {isEmpty === false &&
                    <>
                        <div>First Name: {user.first_name}</div>
                        <div>Last Name: {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <div><img src={user.avatar} /></div>
                    </>
                    ||
                    <>
                        <NotFound />
                    </>
                }
                <button onClick={() => { this.Back() }}>Back</button>
            </div>
        )
    }
}

export default withRouter(DetailUser)