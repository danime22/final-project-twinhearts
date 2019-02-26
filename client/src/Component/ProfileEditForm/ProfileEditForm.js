import React, { Component } from "react";
import options from "../../utils/options";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, CardBody, CardText, CardImg, Container} from 'reactstrap';
import "../ProfileEditForm/ProfileEditForm.css";
import utils from "../../utils/utils";
import session from "../../utils/Session";

class ProfileEditForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = this.props.profile;

  }

  selectFile = event => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
        const base64data = reader.result;
        this.setState({ profilePicData: base64data })
    }
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

 

    this.setState({

      [name]: value
    });
  }


  handleSave = event => {
    event.preventDefault();
    this.props.onSaveProfile(this.state);
    
  }


  render() {
    return (

      <div className="divProfile">

        <Container className="containerProfile">
          <Col md="4" className="imgCol">
            <Card className="member-card">
              <CardImg src={utils.getImage(session.get("user").profile.profilePic) } />
              <CardBody className="card-bod">
                <CardText className="car-text"><span className="val-name"><h1 className="user-name">{session.get("user").name}</h1></span></CardText>
                <CardText className="car-text">Gender: <span className="val-name">{session.get("user").gender}</span></CardText>
                <CardText className="car-text">Age: {utils.getAge(session.get("user").birthday)}</CardText>
                <CardText className="car-text">City: <span className="val-name">{session.get("user").city}</span></CardText>
                <CardText className="car-text">State: <span className="val-name">{session.get("user").state}</span></CardText>
                <CardText className="car-text">Zip Code: <span className="val-name">{session.get("user").zip}</span></CardText>

              </CardBody>
            </Card>
          </Col>
          <Col className="imgCol">


            <br></br><br></br>
         

                <Form onSubmit={this.handleSave}>
                  <Row>
                    <Label className="labelName">Headline</Label>
                    <Input type="text" onChange={this.handleInputChange} name="headline" value={this.state.headline}></Input>
                  </Row>


                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Religion</Label>
                        <Input value={this.state.religion} type="select" onChange={this.handleInputChange} name="religion">
                          <option key={99}></option>
                          {options.religion.map((religion, i) => {
                            return (
                              <option key={i} value={religion} onChange={this.handleInputChange}>{religion}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Height</Label>
                        <Input  onChange={this.handleInputChange} value={this.state.height} type="select" name="height" id="exampleSelect">
                          <option key={99}></option>
                          {options.height.map((height, i) => {
                            return (
                              <option key={i}value={height}>{height}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Smoking Habits</Label>
                        <Input onChange={this.handleInputChange} value={this.state.smoking} type="select" name="smoking" id="exampleSelect">
                          <option key={99}></option>
                          {options.smokingHabits.map((smokingHabits, i) => {
                            return (
                              <option key={i}value={smokingHabits}>{smokingHabits}</option>
                            )
                          })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Drinking Habits</Label>
                        <Input onChange={this.handleInputChange} value={this.state.drinking} type="select" name="drinking" id="exampleSelect">
                          <option key={99}></option>
                          {options.smokingHabits.map((smokingHabits, i) => {
                            return (
                              <option key={i} value={smokingHabits} >{smokingHabits}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Do you have any kids?</Label>
                        <Input onChange={this.handleInputChange} value={this.state.hasChildren} type="select" name="hasChildren" id="exampleSelect">
                          <option key={99}></option>
                          {options.hasChildren.map((hasChildren, i) => {
                            return (
                              <option key={i} value={hasChildren}>{hasChildren}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Do you want children?</Label>
                        <Input onChange={this.handleInputChange} value={this.state.wantChildren} type="select" name="wantChildren" id="exampleSelect">
                          <option key={99}></option>
                          {options.wantChildren.map((wantChildren, i) => {
                            return (
                              <option key={i} value={wantChildren}>{wantChildren}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">What is your education level?</Label>
                        <Input onChange={this.handleInputChange} value={this.state.education} type="select" name="education" id="exampleSelect">
                          <option></option>
                          {options.educationLevel.map((educaitonLevel, i) => {
                            return (
                              <option value={educaitonLevel}>{educaitonLevel}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Do you have pets?</Label>
                        <Input onChange={this.handleInputChange} value={this.state.pets} type="select" name="pets" id="exampleSelect">
                          <option key={99}></option>
                          {options.pets.map((pets, i) => {
                            return (
                              <option key={i} value={pets}>{pets}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Do you like to travel?</Label>
                        <Input onChange={this.handleInputChange} value={this.state.wantTravel} type="select" name="wantTravel" id="exampleSelect">
                          <option key={99}></option>
                          {options.wantTravel.map((wantTravel, i) => {
                            return (
                              <option key={i} value={wantTravel}>{wantTravel}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">What ethnicities best describe you?</Label>
                        <Input onChange={this.handleInputChange} value={this.state.ethnicity} type="select" name="ethnicity" id="exampleSelect">
                          <option key={99}></option>
                          {options.ethnicity.map((ethnicity, i) => {
                            return (
                              <option key={i} value={ethnicity}>{ethnicity}</option>
                            )
                          })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">What is your salary?</Label>
                        <Input onChange={this.handleInputChange} value={this.state.salary}type="select" name="salary" id="exampleSelect">
                          <option key={99}></option>
                          {options.salary.map((salary, i) => {
                            return (
                              <option key={i} value={salary}>{salary}</option>
                            )
                          })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Body Type</Label>
                        <Input type="select" onChange={this.handleInputChange} value={this.state.bodyType} name="bodyType" id="exampleSelect">
                          <option key={99}></option>
                          {options.bodyType.map((bodyType, i) => {
                            return (
                              <option key={i} value={bodyType} onChange={this.handleInputChange}>{bodyType}</option>
                            )
                          })}
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Are you willing to relocate?</Label>
                        <Input value={this.state.willingToRelocate} onChange={this.handleInputChange} type="select" name="willingToRelocate" id="exampleSelect">
                          <option key={99}></option>
                          {options.relocate.map((relocate, i) => {
                            return (
                              <option key={i} value={relocate} >{relocate}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>


                    <Col md={6}>
                      <FormGroup>
                        <Label className="labelName">Eating habits</Label>
                        <Input onChange={this.handleInputChange} value={this.state.eating} type="select" name="eating" id="exampleSelect">
                          <option key={99}></option>
                          {options.eatingHabits.map((eatingHabit, i) => {
                            return (
                              <option key={i} value={eatingHabit} >{eatingHabit}</option>
                            )
                          })}

                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br></br><br></br>
                  <Row>
                    <Label className="labelName">Something about yourself</Label>

                    <Input type="textarea" value={this.state.description} onChange={this.handleInputChange} name="description"></Input>
                  </Row>
                  <br></br>
              <FormGroup >
                <Label className="labName">Upload Profile Photo</Label>
                <Col>
                  <Input onChange={this.selectFile} type="file" name="profilePic" />

                </Col>
              </FormGroup>
              <br/><br/>
                  <Button type="submit">Save</Button>

              
                </Form>


        
                <Row>
                  <Col sm="12">
                   

                  </Col>

                </Row>
           

          </Col>

        </Container>
      </div>
    )
  }
}

export default ProfileEditForm;