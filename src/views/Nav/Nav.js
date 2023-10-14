import React from "react";
import "./Nav.scss"
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                } >
                    Home
                </NavLink>
                <NavLink to="/todo" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    Todo
                </NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    About
                </NavLink>
            </div>
        )
    }
}

export default Nav