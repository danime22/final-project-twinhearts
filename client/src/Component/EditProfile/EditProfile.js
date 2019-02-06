import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';


class EditProfile extends Component {
    constructor(props) {
        super(props);

        console.log(JSON.stringify(props));

       //this.state = props.initialState;
       this.state = {
           name: ""
       }
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

            <div style={{ color: "white"}}>
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>

                                <FormGroup>
                                    <Label for="exampleName">Name</Label>
                                    <Input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" id="exampleName" placeholder="with a placeholder" />
                                </FormGroup>
                               
                                <FormGroup>
                                    <Label for="exampleGender">Gender</Label>
                                    <Input type="text" value={this.state.gender} onChange={this.handleInputChange} name="gender" id="exampleGender" placeholder="with a placeholder" />
                                </FormGroup>

                               
                                <FormGroup>
                                    <Label for="exampleZipCode">Religion</Label>
                                    <Input type="text" value={this.state.zipCode} onChange={this.handleInputChange} name="zipCode" id="exampleZipCode" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleZipCode">Hieght</Label>
                                    <Input type="text" value={this.state.zipCode} onChange={this.handleInputChange} name="zipCode" id="exampleZipCode" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup >
                                    <Label for="exampleText">About Me</Label>
                                     <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Do you drinking?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>yes</option>
                                              <option>no</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Do you smoke?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>yes</option>
                                              <option>no</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Do you have pets?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>yes</option>
                                              <option>no</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Do you have childern?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>yes</option>
                                              <option>no</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Do you want Cildern?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>yes</option>
                                              <option>no</option>
                                              <option>maby someday</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Do you like to travel?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>yes</option>
                                              <option>no</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Would you relocate?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>yes</option>
                                              <option>no</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">What is your body type?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>heveyset</option>
                                              <option>slender</option>
                                              <option>avrige</option>
                                              <option>toned and fit </option>
                                              <option>patite</option>
                                              <option>curvy</option>
                                            
                                   </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">What is your eating habbit?</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                             <option>select</option>
                                              <option>vegitarin</option>
                                              <option>veagin</option>
                                              <option>glutin free</option>
                                              <option>kosher</option>
                                              <option>nut free</option>
                                              <option>piky</option>
                                              <option>no eating habbit</option>
                                              
                                            
                                   </Input>
                                </FormGroup>
                                <Link to="Profile" className={window.location.pathname === "Profile" }>
                                Edit Profile
                                  </Link>


                                <button onClick={this.handleFormSubmit}>Submit</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }


}

export default EditProfile;