import React from "react";
import "../RegistrationForm/RegistrationForm.css";
import { Container } from "reactstrap";
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";
import options from '../../utils/options';


const containerStyle = {
    margin: "5vh auto 0",
    padding: "0.5em",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2F4F4F",

}

const button = {

    fontSize: "18px",
    fontWeight: "bold",

}

const invalid = {
    fontSize: "15px",

}

const label = {
    fontColor: "white",
    fontWeight: "bold"
}





class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = props.initialState;
    }

    componentDidMount() {
        this.setState({ validated: false });
        this.setState({profilePic: ""})
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        console.log(name + " = " + value);

        this.setState({
            [name]: value
        });


    }

    selectFile = event => {
        // var reader = new FileReader();
        // reader.readAsDataURL(event.target.files[0]);
        // reader.onloadend = () => {
        //     const base64data = reader.result;
        //     this.setState({ profilePic: base64data })
        // }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ validated: true });

        this.props.onRegister(this.state);

        // API.saveUser(data)
        // .then(res => {
        //     console.log(JSON.stringify(res));
        //     this.props.history.push('/onlineMembers');
        // })
        // .catch(err => {
        //     console.log(JSON.stringify(err));
        //     this.setState({ errorMessage: "User already exists." });
        // })
    }

    render() {
        const { validated } = this.state;
        return (
            <div>

                <Container style={containerStyle}>

                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={this.handleSubmit}
                    >
                        <Form>
                            <Form.Group controlId="validationCustom01">
                                <Form.Label className="labName">Name</Form.Label>
                                <Form.Control
                                    required
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    placeholder="First name"

                                />
                                <FormControl.Feedback type="invalid" style={invalid}>
                                    Please put your first name
                            </FormControl.Feedback>
                            </Form.Group>



                            <Form.Group controlId="validationCustom01">
                                <Form.Label className="labName">Email</Form.Label>
                                <Form.Control
                                    required
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    placeholder="First name"

                                />
                                <FormControl.Feedback type="invalid" style={invalid}>
                                    Please put valid e-mail
                        </FormControl.Feedback>
                            </Form.Group>

                        </Form>


                        <FormGroup>
                            <Label className="labName" >Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplepassword"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInputChange} required
                            />
                            <FormControl.Feedback type="invalid" style={invalid}>
                                Please put valid at least 5 characters
            </FormControl.Feedback>
                        </FormGroup>


                        <FormGroup>
                        <Label className="labName" for="exampleDate">Birthday</Label>
                        <Input
                          type="date"
                          name="birthday"
                          id="exampleDate"
                          placeholder="date placeholder"
                          value={this.state.birthday}
                          onChange={this.handleInputChange} 
                        />
                        <FormFeedback type="invalid">Please put a valid birthday</FormFeedback>
                      </FormGroup>

            


                        <Form>
                            <Form.Group controlId="validationCustom03">
                                <Form.Label className="labName">City</Form.Label>
                                <Form.Control type="text" name="city" placeholder="City" value={this.state.city}
                                    onChange={this.handleInputChange} required />
                                <Form.Control.Feedback type="invalid" style={invalid}>
                                    Please provide a valid city.
              </Form.Control.Feedback>
                            </Form.Group>



                            <Form.Group controlId="validationCustom04">
                                <Form.Label className="labName">State</Form.Label>
                                <Form.Control value={this.state.state}
                                    onChange={this.handleInputChange} name="state" type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid" style={invalid}>
                                    Please provide a valid state.
              </Form.Control.Feedback>
                            </Form.Group>




                            <Form.Group controlId="validationCustom05">
                                <Form.Label className="labName">Zip</Form.Label>
                                <Form.Control value={this.state.zip}
                                    onChange={this.handleInputChange} name="zip" type="text" placeholder="Zip" required />
                                <Form.Control.Feedback type="invalid" style={invalid}>
                                    Please provide a valid zip.
              </Form.Control.Feedback>
                            </Form.Group>
                        </Form>




                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="labName">Gender</Form.Label>
                            <Form.Control as="select" name="gender" value={this.state.gender}
                                onChange={this.handleInputChange} required>
                                <option disabled selected></option>
                                {options.gender.map((gender, i) => {
                                    return (
                                        <option value={gender}>{gender}</option>
                                    )
                                })}

                            </Form.Control>
                            <Form.Control.Feedback type="invalid" style={invalid}>
                                Please choose your gender.
          </Form.Control.Feedback>
                        </Form.Group>
                        <br></br>
                       {/* <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="labName">Seeking</Form.Label>
                        <Form.Control as="select" name="gender" value={this.state.gender}
                            onChange={this.handleInputChange} required>
                            <option disabled selected></option>
                            {options.gender.map((gender, i) => {
                                return (
                                    <option value={gender}>{gender}</option>
                                )
                            })}

                        </Form.Control>
                        <Form.Control.Feedback type="invalid" style={invalid}>
                            Please choose your gender.
      </Form.Control.Feedback>
                        </Form.Group>*/}


{/*}
                        <FormGroup >
                            <Label  className="labName">Upload Photo</Label>
                            <Col>
                                <Input onChange={this.selectFile} type="file" name="file" />

                            </Col>
                        </FormGroup>
                        */}

                        <br></br>

                        <Form.Group>
                            <Form.Check
                            className="labName"
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>

                        <br></br>
                        <Button style={button} on={this.handleSubmit} type="submit">Submit form</Button>
                    </Form>

                </Container>
            </div>
        );
    }
}



export default Registration;