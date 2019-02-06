import React from 'react';
import mainLogo from "../../Photos/clipart361312.png";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink} from 'reactstrap';
import "./Navbar.css";



const iconOnline = {
    color: "blue"
    
}

const logoPic = {
    height: "100px",
    width: "140px"
}

function Navbar() {

    return (
        <div>
            <Nav className="navbar navbar-expand-md bg-primary navbar-light">

                <NavLink className="navbar-brand" href="#"><img style={logoPic} className="logoImage" src={mainLogo} alt="mainlogo" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">

                            <Link to="/messages" className={window.location.pathname === "/messages" ? "nav-link active" : "nav-link"}>
                                <span className="iconify" data-icon="flat-ui:mail" data-inline="false"></span>
                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                                <span className="iconify" data-icon="mdi:account-search" data-inline="false"></span>
                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to="/favorites" className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}>
                                <span className="iconify" data-icon="emojione:red-heart" data-inline="false"></span>
                            </Link>
                        </li>

                        <li className="nav-item">

                            <Link to="/onlineMembers" className={window.location.pathname === "/onlineMembers" ? "nav-link active" : "nav-link"}>
                                Members
                            </Link>
                        </li>

                      

                        <li className="nav-item">

                            <Link to="/viewProfile" className={window.location.pathname === "/viewProfile" ? "nav-link active" : "nav-link"}>
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



        </div>
    )

}


export default Navbar;
