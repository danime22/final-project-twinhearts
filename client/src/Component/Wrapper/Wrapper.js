import React, { Component } from "react";
import logo from "../../Photos/clipart361312.png";
import { Link } from "react-router-dom";
import Swiper from "../Swiper/Swiper";
import { Container, Form, FormGroup, Button, Input } from 'reactstrap';
import "./Wrapper.css";
import API from "../../utils/API";
import session from "../../utils/Session";



const box = {
    height: "50vh",
    margin: "25vh auto 0"
}


class WrapPage extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }

    }



    onChange = (event) => {

        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        API.userLogin(this.state)
            .then(res => {
                if (res) {
                    if (res.data != null) {
                        session.save("user", res.data);
                        this.props.history.push("/onlineMembers");
                    } else {
                        // TODO handle better
                        
                        alert("not logged in");
                    }

                }
            }).catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div>
                <Container style={box}>
                    <Container className="container-logo">
                        <div className="logo-name">
                            <img src={logo} alt="logo"></img>
                        </div>


                    </Container>
                    <div className="sign-box">
                        <Form className="form-div" onSubmit={this.onSubmit}>

                            <FormGroup className="group-form">
                         
                                <Input className="input-div" type="email" name="email" id="exampleEmail" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup className="group-form">
                                <Input className="input-div" type="password" name="password" id="examplePassword" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                            </FormGroup>
                            <Button color="secondary">Sign In</Button>
                            <br /><br />
                        </Form>
                        <h5>Not yet a member? Free to Join!</h5>
                        <h5><Link to="/register" className={window.location.pathname === "/register"}>Register</Link></h5>
                    </div>
                </Container>

<div className="swiper-div">

<Swiper />
</div>
                

            </div>
        );
    }

}

export default WrapPage;