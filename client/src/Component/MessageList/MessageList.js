import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import "./MessageList.css";

const imageStyle = {
    height: "150px",
    width: "150px"
}

const color = {
    color: "red"
}



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
            <div className="messageL">
                <Container >
                    <div>
                        {this.props.list.map((message, i) => {
                            return (
                                <Row key={message._id}>
                                    <Col><img  style={imageStyle}src="http://via.placeholder.com/6500x700" alt="examplePic"></img>
                                        <Link to="#" onClick={this.handleMessageClick} alt="link"><h4 style={color} data-id={message._id} data-name={message.otherUserName}>{message.otherUserName}</h4></Link>
                                    </Col>
                                    
                                </Row>
                                
                            )
                        })}
                       
                    </div>
                    

                    )

                </Container>

            </div>
        )

    }
}

export default MessagesList;