import React from "react";
import { Container } from "reactstrap";
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup, Label, Input } from "reactstrap";


const containerStyle = {
    margin: "10vh auto 0",
    padding: "0.5em",
    display: "flex",
    justifyContent: "center",
    background: "rgba(144,238,144, 0.2)",
    boxShadow: "5px 10px 5px 10px #888888"
}

const button = {

    fontSize: "18px",
    fontWeight: "bold",

}

const invalid = {
    fontSize: "15px",

}

const label = {
    fontColor: "black",
    fontWeight: "bold"
}


const h1Style = {
    textAlign: "center",

}


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = props.initialState;
    }

    componentDidMount() {
        this.setState({ validated: false });
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        console.log(name + " = " + value);

        this.setState({
            [name]: value
        });


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
                                <Form.Label style={label}>Name</Form.Label>
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
                                <Form.Label style={label}>Email</Form.Label>
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
                            <Label style={label} for="exampleDate">Password</Label>
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
                            <Label style={label} for="exampleDate">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                                value={this.state.birthday}
                                onChange={this.handleInputChange} required
                            />
                            <FormControl.Feedback type="invalid" style={invalid}>
                                Please put valid birthday
                </FormControl.Feedback>
                        </FormGroup>




                        <Form>
                            <Form.Group controlId="validationCustom03">
                                <Form.Label style={label}>City</Form.Label>
                                <Form.Control type="text" name="city" placeholder="City" value={this.state.city}
                                    onChange={this.handleInputChange} required />
                                <Form.Control.Feedback type="invalid" style={invalid}>
                                    Please provide a valid city.
              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Label style={label}>State</Form.Label>
                                <Form.Control value={this.state.state}
                                    onChange={this.handleInputChange} name="state" type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid" style={invalid}>
                                    Please provide a valid state.
              </Form.Control.Feedback>
                            </Form.Group>




                            <Form.Group controlId="validationCustom05">
                                <Form.Label style={label}>Zip</Form.Label>
                                <Form.Control value={this.state.zip}
                                    onChange={this.handleInputChange} name="zip" type="text" placeholder="Zip" required />
                                <Form.Control.Feedback type="invalid" style={invalid}>
                                    Please provide a valid zip.
              </Form.Control.Feedback>
                            </Form.Group>
                        </Form>




                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label style={label}>Gender</Form.Label>
                            <Form.Control as="select" name="gender" value={this.state.gender}
                                onChange={this.handleInputChange} required>
                                <option disabled selected></option>
                                <option>Female</option>
                                <option>Male</option>

                            </Form.Control>
                            <Form.Control.Feedback type="invalid" style={invalid}>
                                Please choose your gender.
          </Form.Control.Feedback>
                        </Form.Group>

                        <br></br>

                        <Form.Group>
                            <Form.Check
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