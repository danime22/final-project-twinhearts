import React, { Component } from "react";
import options from "../../utils/options";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, CardBody, CardText, CardImg, } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';
import classnames from 'classnames';
import moment from 'moment';

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

    getAge(birthdate) {

        let now = moment();
        let bday = moment(birthdate, "YYYYMMDD");

        return now.diff(bday, "years", false);
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
                            <CardImg src="http://via.placeholder.com/640x770" />
                            <CardBody>
                                <CardText>Gender: {this.props.user.gender}</CardText>
                                <CardText>Age: {this.getAge(this.props.user.birthday)}</CardText>
                                <CardText>City: {this.props.user.city}</CardText>
                                <CardText>State: {this.props.user.state}</CardText>
                                <CardText>Zip Code: {this.props.user.zip}</CardText>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="imgCol">
                        <h1>{this.props.user.name}</h1>
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
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Religion: &nbsp;&nbsp;</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.religion : "Didn't Say"}</Label>

                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Height</Label>
                                                <Label className="labelName"></Label>
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
                                                <Label className="labelName">Drinking Habits</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.drinking : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Has Children</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.hasChildren : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Wants Children</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.wantsChildren : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Education Level</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.education : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Has pets</Label>
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
                                                <Label className="labelName">Ethnicity</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.ethnicity : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Salary</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.salary : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Body Type</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.bodyType : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Willing to relocate</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.willingToRelocate : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>


                                        <Col md={6}>
                                            <FormGroup>
                                                <Label className="labelName">Eating habbits</Label>
                                                <Label className="labelName">{this.props.user.profile ? this.props.user.profile.eating : "Didn't Say"}</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <br></br><br></br>
                                    <Row>
                                        <Label className="labelName">Description</Label>

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