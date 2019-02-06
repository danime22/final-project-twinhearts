import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import MessagesList from "../MessageList/MessageList";
import session from "../../utils/Session";


class MessageBox extends Component {

    constructor(props) {
        super(props);
        this.props = props;




    }
    render() {
        return (
            <div>
            <h1>{this.props.name}</h1>
                <Container >
                    {this.props.list.map((message, i) => {
                        return (
                            <Row key={i}>
                                <Col xs="6">
                                    {session.get("user")._id !== message.userId ? message.text : ""}
                                </Col>
                                <Col xs="6">
                                {session.get("user")._id === message.userId ? message.text : ""}
                                </Col>
                            </Row>
                        )

                    })}

                </Container>

            </div>

        )
    }
}

export default MessageBox;