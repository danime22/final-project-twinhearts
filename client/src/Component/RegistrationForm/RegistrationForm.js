import React from "react";
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import API from "../../utils/API";




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
            <Form
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}
            >
                <Form>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            placeholder="First name"

                        />
                        <FormControl.Feedback type="invalid">
                            Please put your first name
        </FormControl.Feedback>
                    </Form.Group>



                    <Form.Group controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup>
                                <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                            </InputGroup>
                            <Form.Control
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <FormControl.Feedback type="invalid">
                                Please use a valid e-mail.
                </FormControl.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form>




                <Form.Row>
                    <Form.Group controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="City" value={this.state.city}
                            onChange={this.handleInputChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
              </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control value={this.state.state}
                            onChange={this.handleInputChange} name="state" type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
              </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control value={this.state.zip}
                            onChange={this.handleInputChange} name="zip" type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
              </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="validationCustomPassword">
                    <Form.Label >
                        Password
                </Form.Label>
                    <Col >
                        <Form.Control name="password" type="password" value={this.state.password}
                            onChange={this.handleInputChange} placeholder="Password" required/>
                    </Col>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
              </Form.Control.Feedback>
                </Form.Group>


                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" name="gender" value={this.state.gender}
                        onChange={this.handleInputChange} required>
                        <option disabled selected></option>
                        <option>Female</option>
                        <option>Male</option>

                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please choose your gender.
          </Form.Control.Feedback>
                </Form.Group>



                <Form.Group>
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button on={this.handleSubmit} type="submit">Submit form</Button>
            </Form>
        );
    }
}



export default Registration;