import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import utils from "../../utils/utils";
import "./MessageList.css";





class MessagesList extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    handleMessageClick = event => {
        this.props.onMessageSelect(event.target.dataset.id, event.target.dataset.name);
    }


    render() {
        return (
            <div>
                <Container>
                    <div>
                        {this.props.list.map((message, i) => {
                            return (
                                <Row key={message._id}>
                                    <Col><img className="imageStyle" src={utils.getImage(message.profilePic)} alt="profile pictur"></img>
                                        <div className="user-name">
                                            <Link to="#" onClick={this.handleMessageClick} alt="link"><h4 className="color" data-id={message._id} data-name={message.otherUserName}>{message.otherUserName}</h4></Link>
                                        </div>
                                    </Col>

                                </Row>

                            )
                        })}

                    </div>




                </Container>

            </div>
        )

    }
}

export default MessagesList;