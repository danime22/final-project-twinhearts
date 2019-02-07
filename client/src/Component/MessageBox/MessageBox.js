import React, { Component } from "react";
import { Container, Row, Col, Label, Button, Input, Form, FormGroup } from 'reactstrap';
import session from "../../utils/Session";
import "./MessageBox.css";

const textArea = {
    width: "100%"
}



class MessageBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });


    }

    handleSend = (event) => {
        event.preventDefault();
        this.setState({ text: "" });
        this.props.onSend(this.state.text);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <Container >
                    {this.props.list.map((message, i) => {
                        return (
                            <Row className="row-chat" key={i}>
                                <Col xs="6">
                                    <p className="currentUser">{session.get("user")._id !== message.userId ? message.text : ""}</p>
                                </Col>
                                <Col xs="6">
                                    <p className="speech-bubble-ds">{session.get("user")._id === message.userId ? message.text : ""}</p>
                                    <div class="speech-bubble-ds-arrow"></div>
                                </Col>
                            </Row>

                        )

                    })}
                    <br></br><br></br>
                    <Form onSubmit={this.handleSend}>
                        <FormGroup>
                            <Label for="exampleText">Type here...</Label>
                            <Input value={this.state.text} onChange={this.handleInputChange} type="textarea" name="text" style={textArea} />
                            <Button className="button" type="submit">Send</Button>
                        </FormGroup>
                    </Form>
                </Container>

            </div>

        )
    }
}

export default MessageBox;