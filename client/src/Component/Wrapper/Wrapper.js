import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Wrapper.css";


const Footer = {
    textAlign: "center",
    backgroundColor: "yellow",
    height: "50px",
    padding: "5px"
}

const contain = {
    height: "50vh",
    margin: "25vh auto 0"
}


class WrapPage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Container style={contain}>

                    <div className="sign-box">
                        <Form>

                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                            <h3> <Link to="Members" className={window.location.pathname === "Members"}>
                                Sign In
                    </Link></h3>
                        </Form>
                        <h5>Not yet a member? </h5>
                        <Link to="Registration" className={window.location.pathname === "Registration"}>Register</Link>
                    </div>
                </Container>
            </div>
        );
    }

}

export default WrapPage;