import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Inbox.css';
import { Table } from 'reactstrap';
import mainLogo from "../../Photos/clipart361312.png";
import { NavLink, Nav, NavItem, Container, Row, Col,} from 'reactstrap';


class Inbox extends Component {
    render() {
        return (

            <div>
            <Nav className="navbar navbar-expand-md bg-primary navbar-light">

            <NavLink className="navbar-brand" href="#"><img className="logoImage" src={mainLogo} alt="mainlogo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">

                        <Link to="Inbox" className={window.location.pathname === "Inbox" ? "nav-link active" : "nav-link"}>
                            <span class="iconify" data-icon="flat-ui:mail" data-inline="false"></span>
                        </Link>
                    </li>

                    <li className="nav-item">

                        <Link to="Inbox" className={window.location.pathname === "Inbox" ? "nav-link active" : "nav-link"}>
                            <span class="iconify" data-icon="emojione:red-heart" data-inline="false"></span>
                        </Link>
                    </li>

                    <li className="nav-item">

                        <Link to="Inbox" className={window.location.pathname === "Inbox" ? "nav-link active" : "nav-link"}>
                            <span class="iconify" data-icon="whh:skypeonline" data-inline="false"></span>
                        </Link>
                    </li>

                    <li className="nav-item">

                        <Link to="Inbox" className={window.location.pathname === "Inbox" ? "nav-link active" : "nav-link"}>
                            Edit Profile
                    </Link>
                    </li>

                    <li className="nav-item">
                        <h3> <Link to="SignIn" className={window.location.pathname === "SignIn" ? "nav-link active" : "nav-link"}>
                            Log Out
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
}

export default Inbox;