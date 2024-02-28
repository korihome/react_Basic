import React from "react";
import HOC from "../HOC/RenderColor";
import picture from "../../assets/imgs/Planet9_3840x2160.jpg"

class Home extends React.Component {
    render() {
        return (
            <div>
                Hello world from Home by ReactJS
                <div>
                    <img src={picture} />
                </div>
            </div>
        )
    }
}

export default HOC(Home)