import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { Label, Form, Input, FormGroup, Card, CardBody, } from 'reactstrap';


class SignIn extends Component {
    render() {

        return (
            <div>
<Navbar />
                <Card>
                    <div>
                        
                    </div>
                    <CardBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Username</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Check me out
                                            </Label>
                                </FormGroup>
                                <h3> <Link to="Members" className={window.location.pathname === "Members"}>
                                Submmit
                              </Link></h3>
                            </Form>
                        </div>
                    </CardBody>
                </Card>

            </div>
        )
    }
}


export default SignIn