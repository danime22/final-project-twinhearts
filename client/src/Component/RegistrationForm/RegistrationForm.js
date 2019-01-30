import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';


class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        console.log(JSON.stringify(props));

       this.state = props.initialState;
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });

      
    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        console.log("form state: " + JSON.stringify(this.state));
        var data = this.state;
        this.props.onRegister(data);
    }

    render() {
        return (

            <div>
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>

                                <FormGroup>
                                    <Label for="exampleName">Name</Label>
                                    <Input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" id="exampleName" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" value={this.state.email} onChange={this.handleInputChange} name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" value={this.state.password} onChange={this.handleInputChange} name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleGender">Gender</Label>
                                    <Input type="text" value={this.state.gender} onChange={this.handleInputChange} name="gender" id="exampleGender" placeholder="with a placeholder" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleZipCode">Zip Code</Label>
                                    <Input type="text" value={this.state.zipCode} onChange={this.handleInputChange} name="zipCode" id="exampleZipCode" placeholder="with a placeholder" />
                                </FormGroup>
                                <button onClick={this.handleFormSubmit}>Submit</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }


}

export default RegistrationForm;