import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Inbox.css';
import { Table } from 'reactstrap';
import mainLogo from "../../Photos/clipart361312.png";
import { NavLink, Nav, NavItem,} from 'reactstrap';


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

                        <Link to="" className={window.location.pathname === "" ? "nav-link active" : "nav-link"}>
                            <span class="iconify" data-icon="emojione:red-heart" data-inline="false"></span>
                        </Link>
                    </li>

                    <li className="nav-item">

                        <Link to="Members" className={window.location.pathname === "Members" ? "nav-link active" : "nav-link"}>
                            <span class="iconify" data-icon="whh:skypeonline" data-inline="false"></span>
                        </Link>
                    </li>

                    <li className="nav-item">

                        <Link to="Registration" className={window.location.pathname === "Registration" ? "nav-link active" : "nav-link"}>
                            Edit Profile
                    </Link>
                    </li>

                    <li className="nav-item">
                        <h3> <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Log Out
  </Link></h3>
                    </li>
                </ul>
            </div>


            <NavItem>

            </NavItem>
        </Nav>

     
              <Table bordered>
                <thead>
                  <tr>
                    <th >Sender</th>
                    <th>Conversation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">who u</th>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                  </tr>
                  <tr>
                  <th scope="row">who me</th>
                  <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                </tr>
                  
                </tbody>
              </Table>
     

            </div>
        )

    }
}

export default Inbox;