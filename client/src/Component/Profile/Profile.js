import React, {Component} from "react";
import { Link } from "react-router-dom";

import { Row, Col, Card,CardBody,CardText,CardImg, } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink,} from 'reactstrap';
import classnames from 'classnames';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.toggle = this.toggle.bind(this);
            this.state = {
              activeTab: '1'
    };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    
    render() {
        return (
            <div>
                {/* <h1>"TODO: Create SubComponents for the profile view and put here</h1>
                <p>This should have viewed user profile: {this.props.id}</p> */}

                      <Row>

                   <Col xs="3">
                        <Card className="member-card">
                        <CardImg src="http://via.placeholder.com/640x770" />
                            <CardBody>
                            <CardText>Gender: Male</CardText>
                                <CardText>Age: 28</CardText>
                                
                            </CardBody>
                        </Card>
                   </Col>
                    <Col xs="6">
                    <h2>Name: Harry</h2>
                     <p>About Me:</p>
                    <Nav tabs>
                      <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Profile 
            </NavLink>
           
          </NavItem>
                      <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Photos
            </NavLink>
          </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="6">
               
                <p>Religion:</p>
                <p>Do you smoke?</p>
                <p>Do you have childern?</p>
                <p>Do you like to travel?</p>
                <p>What is your body type?</p>
                <Link to="EditProfile" className={window.location.pathname === "EditProfile" }>
                                Edit 
                    </Link>

              </Col>
              <Col sm="6">
                <p>Hieght:</p>
                <p>Do you drinking?</p>
                <p>Do you have pets?</p>
                <p> Do you want Cildern?</p>
                <p>Would you relocate?</p>
                <p>What is your eating habbits?</p>
              </Col>
            </Row>
            
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <img src="http://via.placeholder.com/200x200" alt="placeholder"/>
                
              </Col>
              
            </Row>
          </TabPane>
        </TabContent>
                     
                   
                    </Col>
                    
                </Row>
            </div>
        )
    }
}

export default Profile;