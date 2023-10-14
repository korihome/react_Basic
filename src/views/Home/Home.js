import React from "react";
import HOC from "../HOC/RenderColor";
class Home extends React.Component {
    render() {
        return (
            <div>
                Hello world from Home by ReactJS
            </div>
        )
    }
}

export default HOC(Home)