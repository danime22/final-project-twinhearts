import React, { Component } from "react";
import { login } from "../../utils/UserFunction";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
// import Swiper from "../Swiper/Swiper";
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
                <Navbar />
                <Container style={box}>

                    <div className="sign-box">
                        <Form className="form-div" onSubmit={this.onSubmit}>

                            <FormGroup>
                                <Input className="input-div" type="email" name="email" id="exampleEmail" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup>
                                <Input className="input-div" type="password" name="password" id="examplePassword" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                            </FormGroup>
                            <Button color="secondary">Sign In</Button>
                        </Form>
                        <h5>Not yet a member? </h5>
                        <h5><Link to="/register" className={window.location.pathname === "/register"}>Register</Link></h5>
                    </div>
                </Container>



   {/* <Swiper /> */}

            </div>
        );
    }

}

export default WrapPage;