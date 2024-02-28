import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUsers extends React.Component {

    state = {
        ListUsers: []
    }

    componentDidMount() {
        axios.get("https://reqres.in/api/users?page=1")
            .then((res) => {
                this.setState({
                    ListUsers: res && res.data && res.data.data ? res.data.data : []
                })
            })
    }

    handleDetailInfor(user) {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { ListUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="list-user-title">
                    <h3>Fetch ListUsers</h3>
                </div>
                <div className="list-user-content">
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => {
                                    this.handleDetailInfor(item)
                                }}>
                                    {index + 1}. {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUsers);