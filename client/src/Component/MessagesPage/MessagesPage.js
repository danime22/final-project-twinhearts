import React from 'react';
import Navbar from "../Navbar/Navbar";
import MessageList from "../MessageList/MessageList";
import MessageBox from "../MessageBox/MessageBox";
import API from "../../utils/API";
import session from "../../utils/Session";
import { Container, Row, Col, Button } from "reactstrap";


const containerStyle = {
  margin: "25vh auto 0",

}

const rowStyle = {
  padding: "0.5em",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
 
}

const colStyle = {
  margin: "0.5em",
  alignItems: "center"
}





export default class MessagesPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messagesList: [],
      currentMessage: [],
      currentName: ""
    };
  }

  componentDidMount() {
    console.log("message page");
    let user = session.get("user");
    API.getMessagesForUser(user._id).then(res => {

      if (this.props.match.params.userId) {

        let m = this.getMessageByUserId(this.props.match.params.userId);

     

        // if we do, set that as the messages for the right
        // if not, create a new message between this user and that user in the DB,
        //    add the return from DB to the messagesList in state and setState


      } else {
        this.setState({ messagesList: res.data });
      }


    })
      .catch(err => {
        console.log(JSON.stringify(err));

      });
  }

  displayMessage = (messageId, name) => {
    API.getMessages(messageId)
      .then(res => {
        this.setState({
          currentMessage: res.data.messages,
          currentName: name
        });
      })
      .catch(err => console.log(err));
  }

  getMessageByUserId(userId) {
    let message = null;
    let i = 0;
    for (i = 0; i < this.state.messagesList; i++) {
      let m = this.state.messagesList[i];
      if (m.user1Id === userId || m.user2Id === userId) {
        message = m;
        break;
      }
    }

    return message;
  }

  // getMessageById(messageId) {
  //   let messages = [];
  //   let i=0;
  //   for(i=0; i<this.state.messagesList.length; i++) {
  //     if(this.state.messagesList[i]._id === messageId) {
  //       messages = this.state.messagesList[i].messages;

  //       break;
  //     }
  //   }
  //   return messages;
  // }

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
              <MessageBox list={this.state.currentMessage} name={this.state.currentName}/>
              <br></br> <br></br>
              {/*<Button color="success">Send</Button>*/}
              </Col>
              
          </Row>
        </Container>

      </div>
    );
  }
}