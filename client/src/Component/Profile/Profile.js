import React, { Component } from "react";
import { Col, Row, Form, FormGroup, Label } from 'reactstrap';
import { Card, CardBody, CardText, CardImg, } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';
import {Link} from "react-router-dom";
import classnames from 'classnames';
import "./Profile.css";
import utils from "../../utils/utils";
import API from "../../utils/API";
import session from "../../utils/Session";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            name: ""
        };
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleFavoriteClick = event => {

        event.preventDefault();

        let profileUser = this.props.user;
        let user = session.get("user");

        if (user.favorites.includes(profileUser._id)) {

            API.removeFavorite(user._id, profileUser._id)
                .then(res => {
                    user.favorites.splice(user.favorites.indexOf(profileUser._id), 1);
                    session.save("user", user);
                    console.log(res);
                    this.forceUpdate();
                })
                .catch(err => {
                    console.log(err);
                })

        } else {
            API.addFavorite(user._id, profileUser._id)
                .then(res => {
                    user.favorites.push(profileUser._id);
                    session.save("user", user);
                    console.log(res);
                    this.forceUpdate();
                })
                .catch(err => {
                    console.log(err);
                })

        }
  

    }

    getFavText() {
        if (session.get("user").favorites.includes(this.props.user._id)) {
            return "Remove Favorite";
            
        }
        else {
            return "Add Favorite";
            
        }
    }

 

    getValue(prop) {
        if (this.props.profile) {
            return this.props.profile[prop] ? this.props.profile[prop] : "Didn't Say";
        } else {
            return "";
        }
    }


    render() {
        console.log(this.props.user);
        console.log("****************");
        console.log(this.props.user.profile);
        console.log("****************");

        // WTF?!?!?!?!?
        //console.log(this.props.user.profile.religion);
        console.log(this.props.user.profile ? this.props.user.profile.religion : "profile undefined");
        return (

            <div className="divProfile">
                <Container className="containerProfile">
                    <Col md="4" className="imgCol">
                        <Card className="member-card">
                        <CardImg src={utils.getImage((this.props.user.profile ? this.props.user.profile.profilePic : "default")) } />
                            <CardBody className="card-bod">
                                <h1 className="user-name">{this.props.user.name}</h1>
                                <CardText className="car-text">Gender: <span className="val-name">{this.props.user.gender}</span></CardText>
                                <CardText className="car-text">Age: <span className="val-name">{utils.getAge(this.props.user.birthday)}</span></CardText>
                                <CardText className="car-text">City: <span className="val-name">{this.props.user.city}</span></CardText>
                                <CardText className="car-text">State: <span className="val-name">{this.props.user.state}</span></CardText>
                                <CardText className="car-text">Zip Code: <span className="val-name">{this.props.user.zip}</span></CardText>

                            </CardBody>
                        </Card>
                        <br></br>
                        <button className="button-profile"><Link to={utils.getMessagePath(this.props.user._id)}>Send Message</Link></button><br />
                        <button className="button-profile" onClick={this.handleFavoriteClick}>{this.getFavText()}</button>
                    </Col>
                    <Col className="imgCol">

                        <p className="labelName">{this.props.user.profile ? this.props.user.profile.headline : "Didn't Say"}</p><br />

                        <Nav tabs>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '1' })}

                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Profile
                </NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Photos
                </NavLink>
                            </NavItem>
                        </Nav>
                        <br></br><br></br>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabContent activeTab={this.state.activeTab} />
                            <TabPane tabId="1">

                                <Form>

                                    <Row>
                                        <Col className="col-value" md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Religion: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.religion : "Didn't Say"}</Label>

                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Height: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.height : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Smoking Habits: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.smoking : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Drinking Habits: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.drinking : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Has Children: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.hasChildren : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Wants Children: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.wantChildren : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Education Level: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.education : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Has pets: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.pets : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Likes to travel</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.wantTravel : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Ethnicity: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.ethnicity : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Salary: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.salary : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Body Type: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.bodyType : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Willing to relocate: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.willingToRelocate : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>


                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Eating habbits: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.eating : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <br></br><br></br>
                                    <Row>
                                        <Label className="labelName">Description</Label>
                                    </Row>
                                    <Row>
                                        <Label className="labelName">{this.props.user.profile ? this.props.user.profile.description : "Didn't Say"}</Label>
                                    </Row>
                                    <br></br>

                                </Form>

                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <img src="http://via.placeholder.com/200x200" alt="placeholder" />

                                    </Col>

                                </Row>
                            </TabPane>
                        </TabContent>


                    </Col>



                </Container>
            </div>
        )
    }
}

export default Profile;