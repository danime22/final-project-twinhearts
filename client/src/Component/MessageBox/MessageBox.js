import React, { Component } from "react";
import { Container, Row, Col, Label, Button, Input, Form, FormGroup } from 'reactstrap';
import session from "../../utils/Session";
import "./MessageBox.css";

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

    getMessageForm() {
        if (this.props.name || (this.state.currentName && this.state.currentName.length > 0)) {
            return (
                <Form onSubmit={this.handleSend}>

                    <Row>
                        <div className="textAre">
                            <Label for="exampleText">Type here...</Label>
                            <Input value={this.state.text} onChange={this.handleInputChange} type="textarea" name="text" id="exampleText" />
                            <br></br>
                            <Button className="button" type="submit">Send</Button>
                        </div>
                    </Row>
                </Form>
            )
        }
        else {
            return (
                <h5>Start Conversation</h5>
            )
        }
    }

    render() {
        return (
            <div className="messageB">
                <h1>{this.props.name}</h1>
                <Container className="over">
                    {this.props.list.map((message, i) => {
                        return (
                            <div key={i} className="chatbox-div">

                                <Row className="row-chat" key={i}>

                                    <Col xs="6">
                                        <p className="currentUser">{session.get("user")._id !== message.userId ? message.text : ""}</p>
                                    </Col>
                                    <Col xs="6">
                                        <p className="speech-bubble-ds">{session.get("user")._id === message.userId ? message.text : ""}</p>

                                    </Col>
                                </Row>

                            </div>
                        )

                    })}
                    <br></br><br></br>
                    

                </Container>
                {this.getMessageForm()}
            

            </div>

        )
    }
}

export default MessageBox;