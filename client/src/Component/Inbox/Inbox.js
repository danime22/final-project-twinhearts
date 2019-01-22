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
                    <Link to="Notification" className={window.location.pathname === "Notification"}>
                    <span class="iconify" data-icon="twemoji:bell" data-inline="false"></span>
                  </Link>
                    </li>
                    <li className="nav-item">
                        
                      <Link to="Inbox" className={window.location.pathname === "Inbox" ? "nav-link active" : "nav-link"}>
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

                <Container>

                    <Row>

                        <Col>
                        <Table bordered>
                  
                        <tbody>
                          <tr>
                            <th scope="row"> <Link to="Inbox" className={window.location.pathname === "Inbox"}>
                            <i class="material-icons">inbox</i>
                            Inbox</Link></th>
                            <td>Table cell</td>
                           
                          </tr>
                          <tr>
                            <th scope="row"><Link to="Inbox" className={window.location.pathname === "Inbox"}>
                            <i class="material-icons">send</i>
                            Sent Items</Link></th>
                            <td>Table cell</td>
                           
                          </tr>
                          <tr>
                            <th scope="row"><Link to="Inbox" className={window.location.pathname === "Inbox"}>
                            <i class="material-icons">drafts</i>
                            Drafts</Link></th>
                            <td>Table cell</td>
                            
                          </tr>
                          <tr>
                          <th scope="row"><Link to="Inbox" className={window.location.pathname === "Inbox"}>
                          <i class="material-icons">delete</i>
                          Trash</Link></th>
                          <td>Table cell</td>
                         
                        </tr>
                        </tbody>
                      </Table>
                        </Col>
                    </Row>
                    <h3> <Link to="Members" className={window.location.pathname === "Members"}>
                    Submmit
                  </Link></h3>
                </Container>
               


            </div>
        )

    }
}

export default Inbox;