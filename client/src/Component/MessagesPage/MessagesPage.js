import React from 'react';
import Navbar from "../Navbar/Navbar";
import MessageList from "../MessageList/MessageList";
import MessageBox from "../MessageBox/MessageBox";
import API from "../../utils/API";
import session from "../../utils/Session";
import { Container, Row, Col, Button, Label, Input } from "reactstrap";
import "./MessagesPage.css"
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';


const containerStyle = {
  margin: "25vh auto 0",

}

const rowStyle = {
  padding: "0.5em",
  marginBottom: "10px"

}

const colStyle = {
  margin: "0.5em",
  alignItems: "center",

}





export default class MessagesPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messagesList: [],
      currentMessages: [],
      currentName: "",
      currentMessageId: ""
    };
  }
  // DD: get the user on the message to send.
  componentDidMount() {
    let user = session.get("user");
    API.getMessagesForUser(user._id).then(res => {
      let messageList = res.data;

      let otherUserId = this.props.match.params.userId;
      if (otherUserId) {
        let m = this.getMessageByUserId(messageList, otherUserId);

        if (m) {  // we already have messages with this user, so just get the messages and display.
          API.getMessages(m._id)
            .then((res2) => {
              this.setState({
                messagesList: messageList,
                currentMessages: res2.data.messages,
                currentName: m.otherUserName,
                currentMessageId: m._id
              });
            });

        } else { // we don't have messages with this user so we need to create.
          let user = session.get("user");
          let message = {
            user1Id: user._id,
            user2Id: this.props.match.params.userId,
            messages: []
          }

          API.createMessage(message)
            .then((res3) => {
              let newMessageId = res3.data._id;
              // we need to refresh the message List to now include that user.
              API.getMessagesForUser(user._id).then(res => {
                let messageList = res3.data;
                let m = this.getMessageByUserId(this.props.match.params.userId);
                API.getMessages(newMessageId)
                  .then((res4) => {
                    this.setState({
                      messagesList: messageList,
                      currentMessages: [],
                      currentName: m.otherUserName,
                      currentMessageId: newMessageId
                    });
                  });
              });
            });
        }


      } else {
        this.setState({ messagesList: res.data });
      }


    })
      .catch(err => {
        console.log(JSON.stringify(err));

      });
  }


  onSend = (text) => {
    let m = {
      userId: session.get("user")._id,
      text: text,
      date: null
    };


    API.addMessage({
      messageId: this.state.currentMessageId,
      message: m
    })
      .then(res => {
        let messages = this.state.currentMessages;
        messages.push(m);
        this.setState({ currentMessages: messages });
      })
      .catch(err => console.log(err));
  }

  displayMessage = (messageId, name) => {
    API.getMessages(messageId)
      .then(res => {
        this.setState({
          currentMessages: res.data.messages,
          currentName: name,
          currentMessageId: messageId
        });
      })
      .catch(err => console.log(err));
  }

  getMessageByUserId(messageList, userId) {

    let message = null;
    let i = 0;
    for (i = 0; i < messageList.length; i++) {
      let m = messageList[i];
      if (m.user1Id === userId || m.user2Id === userId) {
        message = m;
        console.log("found message by ID");
        break;
      }
    }

    return message;
  }

  getMessageById(messageId) {
    let messages = [];
    let i = 0;
    for (i = 0; i < this.state.messagesList.length; i++) {
      if (this.state.messagesList[i]._id === messageId) {
        messages = this.state.messagesList[i].messages;

        break;
      }
    }
    return messages;
  }

  render() {
    return (
      <div>

        <Navbar />


        <Container style={containerStyle}>

          <Row style={rowStyle}>
            <Col sm="4">
              <MessageList list={this.state.messagesList} onMessageSelect={this.displayMessage} />
            </Col>


            <Col style={colStyle}>
              <MessageBox list={this.state.currentMessages} name={this.state.currentName} onSend={this.onSend} />
              <br></br> <br></br>

            </Col>

          </Row>
        </Container>

      </div>
    );
  }
}