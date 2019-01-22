import React from 'react';
import logo from "../../Photos/clipart361312.png";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./Navbar.css";


const navStyle = {
    backgroundColor: '#19419C',
}

const logoPic = {
    height: "100px",
    width: "140px"
}

function Navbar() {

    return (
        <div>
            <Nav style={navStyle} className="navbar navbar-expand-md">

                <NavLink className="navbar-brand" href="#"><img style={logoPic} src={logo} alt="mainlogo" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <h3> <Link to="SignIn" className={window.location.pathname === "SignIn" ? "nav-link active" : "nav-link"}>
                                Sign In
                      </Link></h3>
                        </li>
                        <li className="nav-item">
                            <h3> <Link to="Registration" className={window.location.pathname === "Registration" ? "nav-link active" : "nav-link"}>
                                Register
                      </Link></h3>
                        </li>
                    </ul>
                </div>


                <NavItem>

                </NavItem>
            </Nav>
        </div>
    )

}


export default Navbar;
