import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import './MessagesPage.css';

import { Container, Row, Col, FormGroup, Label, Input, Form, Button } from 'reactstrap';

// import mainLogo from "../../Photos/clipart361312.png";
// import { NavLink, Nav, NavItem,} from 'reactstrap';


const containerStyle = {
  margin: "25vh auto 0",
  
}

const textArea = {
borderStyle: "none",
  width: "100%",
  height: "100%"

}

const imageStyle = {
  width: "100%"
}

const h4Style = {
  textAlign: "center"
}

class MessagesPage extends Component {
  render() {
    return (
<div>
<Navbar />


      <Container style={containerStyle}>
      
        <div>
          <Row>
            <Col xs="4"><img style={imageStyle} src="http://via.placeholder.com/6500x700" alt="examplePic"></img>
            <h4 style={h4Style}>Coleman</h4>
            </Col>
            
            <Col >
              <textarea style={textArea}></textarea>
              <Button>submit</Button>
            </Col>


          </Row>

        </div>

      </Container>

      </div>
    )

  }
}

export default MessagesPage;