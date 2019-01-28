import React from 'react';
import logo from "../../Photos/clipart361312.png";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, FormGroup, Label, Input } from 'reactstrap';
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


                <NavItem>
                
                </NavItem>
            </Nav>
</div>
    )

}


export default Navbar;
