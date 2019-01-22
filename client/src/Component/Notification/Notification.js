import React from 'react';
import { Table } from 'reactstrap';
import { Link } from "react-router-dom";
import { Nav, NavLink, NavItem, } from 'reactstrap';
import mainLogo from "../../Photos/clipart361312.png";

export default class Example extends React.Component {
  render() {
    return (
      <div>

      <Nav className="navbar navbar-expand-md bg-primary navbar-light">

            <NavLink className="navbar-brand" href="#"><img className="logoImage" src={mainLogo} alt="mainlogo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="Notification" className={window.location.pathname === "Notification"}>
                        <span class="iconify" data-icon="twemoji:bell" data-inline="false"></span>
                      </Link>
                    </li>
                    <li className="nav-item">
                        
                      <Link to="Inbox" className={window.location.pathname === "Inbox"}>
                      <span class="iconify" data-icon="twemoji:incoming-envelope" data-inline="false"></span>
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
      <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}