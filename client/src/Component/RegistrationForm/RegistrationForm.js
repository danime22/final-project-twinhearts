import React from "react";
import "../RegistrationForm/RegistrationForm.css";
import { Container } from "reactstrap";
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup, Label, Input,  FormFeedback, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
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


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            targetGender: [],
            validated: false
        };
    }


    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        console.log(name + " = " + value);

        this.setState({
            [name]: value
        });


    }

    handleCheckChange = event => {
        console.log("**************");
        console.log(`${event.target.name} = ${event.target.value} - ${event.target.checked}`);

        console.log("state: " + JSON.stringify(this.state));

        if (event.target.checked) {
            console.log("Checked");
            let arr = this.state[event.target.name]
            arr.push(event.target.value);
            this.setState({ [event.target.name]: arr });
        } else {
            console.log("Not");
            let arr = this.state[event.target.name];
            console.log(arr.indexOf(event.target.value));
            arr.splice(arr.indexOf(event.target.value), 1);
            this.setState({ [event.target.name]: arr });
        }

        console.log("new state: " + JSON.stringify(this.state));
        console.log("**************");
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
            <div className="divProfile">

                <Container style={containerStyle}>

                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={this.handleSubmit}
                    >
                        <Form>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className="labName">I am a...</Form.Label>
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

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className="labName">Seeking...</Form.Label>

                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon onChange={this.handleCheckChange} name="targetGender" value="Male" type="checkbox" aria-label="Checkbox for following text input" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Male" />


                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon onChange={this.handleCheckChange} name="targetGender" value="Female" type="checkbox" aria-label="Checkbox for following text input" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Female" />


                                </InputGroup>
                                {/*
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
                        */}
                            </Form.Group>



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
                                    placeholder="Email Address"

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
                                <Form.Label className="labName">Zip Code</Form.Label>
                                <Form.Control value={this.state.zip}
                                    onChange={this.handleInputChange} name="zip" type="text" placeholder="Zip Code" required />
                                <Form.Control.Feedback type="invalid" style={invalid}>
                                    Please provide a valid zip code.
              </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                        <br></br>
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