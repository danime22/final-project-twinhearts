import React, { Component } from "react";
import API from "../../utils/API";
import "./RegistrationPage.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


class RegistrationPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            formState: {
                name: "",
                email: "",
                password: "",
                gender: "",
                zipCode: ""
            },
            errorMessage: ""
        };
    }


    handleRegister = data => {
        console.log("register" + JSON.stringify(data));
        //TODO: Validate all fields.

        this.setState({ formState: data });
        this.setState({ errorMessage: "" });

        console.log("state; " + JSON.stringify(this.state));

        console.log("name=" + data.name);
        if (data.name.length < 1) {
            this.setState({ errorMessage: "Please fill out all fields." });
        } else if (data.password.length < 6) {
            this.setState({ errorMessage: "Choose a more secure password'" });
        } else {

            API.saveUser(data)
                .then(res => {
                    console.log(JSON.stringify(res));

                    // if successful, redirect to the Members online search.
                    this.props.history.push("/onlineMembers");
                })
                .catch(err => {
                    console.log(JSON.stringify(err));

                    this.setState({ errorMessage: "User already exists." });
                });
        }
    };


    render() {
        console.log("render " + JSON.stringify(this.state));
        return (

            <div>
                <ErrorMessage message={this.state.errorMessage} />
                <RegistrationForm initialState={this.state.formState} onRegister={this.handleRegister} />
            </div >
        )
    }
}

export default RegistrationPage;