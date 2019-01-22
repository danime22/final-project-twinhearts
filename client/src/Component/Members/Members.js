import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import mainLogo from "../../Photos/clipart361312.png";
import { Nav, NavLink, Form, NavItem, FormGroup, Label, Input, } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import mainPic1 from "../../Photos/46724540_2185790025002654_8692972979144884224_o.jpg";
import mainPic2 from "../../Photos/49277800_2213652985549691_3475424696256692224_n.jpg";
import mainPic3 from "../../Photos/49718031_2213828315532158_2607641796938825728_o.jpg";
import mainPic4 from "../../Photos/47323018_2191354671112856_3767320779750899712_n.jpg";
import mainPic5 from "../../Photos/42146053_2148499885398335_919254169645219840_o.jpg";
import "./Members.css";

const memberImage = {
    height: "250px",
}



class MembersPage extends Component {
    render() {
        return (

            <div>
            <Nav className="navbar navbar-expand-md bg-primary navbar-light">

            <NavLink className="navbar-brand" href="#"><img className="logoImage" src={mainLogo} alt="mainlogo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="Notification" className={window.location.pathname === "Notification"}>
                        <span class="iconify" data-icon="twemoji:bell" data-inline="false"></span>
                      </Link>
                    </li>
                    <li className="nav-item">
                        
                      <Link to="Inbox" className={window.location.pathname === "Inbox"}>
                      <span class="iconify" data-icon="twemoji:incoming-envelope" data-inline="false"></span>
                      </Link>
                    </li>
                    <li className="nav-item">
                    <h3> <Link to="SignIn" className={window.location.pathname === "SignIn" ? "nav-link active" : "nav-link"}>
                    Log Out
          </Link></h3>
                    </li>
                </ul>
            </div>


            <NavItem>

            </NavItem>
        </Nav>
            <Container>
                <Row>
                    <Col xs="4">
                        <div>
                            <Form>
                                <div className="ageSelection">
                                    <h1>Search</h1>
                                    <FormGroup>
                                        <Label for="exampleSelect">Gender</Label>

                                        <Input type="select" name="select" id="ageSelection">
                                            <option>Male</option>
                                            <option>Female</option>

                                        </Input>

                                    </FormGroup>
                                </div>


                                <div className="genderSelection">

                                    <FormGroup>
                                        <Label for="exampleSelect">Miles</Label>

                                        <Input type="select" name="select" id="ageSelection">
                                            <option>5 miles</option>
                                            <option>10 miles</option>
                                            <option>15 miles</option>
                                            <option>20 miles</option>
                                            <option>30 miles</option>
                                            <option>40 miles</option>
                                            <option>50 miles</option>
                                            <option>60 miles</option>
                                            <option>70 miles</option>
                                            <option>80 miles</option>
                                            <option>90 miles</option>
                                            <option>100 miles</option>
                                        </Input>

                                    </FormGroup>
                                </div>

                                <div className="genderSelection">

                                    <FormGroup>
                                        <Label for="exampleSelect"><h5>City</h5></Label>

                                        <Input type="select" name="select" id="ageSelection">
                                            <option>Houston City</option>
                                            <option>San Antonio City</option>
                                            <option>Dallas City</option>
                                            <option>Austin City</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>

                                        </Input>

                                    </FormGroup>
                                </div>


                                <h5>Age from:</h5>
                                <div className="genderSelection">
                                    <div className="select2">
                                        <FormGroup>


                                            <Input type="select" name="select" id="ageSelection">
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                                <option>31</option>
                                                <option>32</option>
                                                <option>33</option>
                                                <option>34</option>
                                                <option>35</option>
                                                <option>36</option>
                                                <option>37</option>
                                            </Input>

                                        </FormGroup>
                                    </div>

                                    <div className="to">to</div>

                                    <div className="select1">
                                        <FormGroup>

                                            <Input type="select" name="select" id="ageSelection">

                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                                <option>31</option>
                                                <option>32</option>
                                                <option>33</option>
                                                <option>34</option>
                                                <option>35</option>
                                                <option>36</option>
                                                <option>37</option>
                                            </Input>

                                        </FormGroup>
                                    </div>


                                </div>

                            </Form>
                            
                        </div>
    
                    </Col>

                    <Col xs="8">
                        <div className="members-container">
                            <Card className="memberCard">

                                <CardBody>
                                    <CardTitle><p>Name: Harry</p></CardTitle>
                                    <CardSubtitle>Age: 30</CardSubtitle>
                                    <CardImg style={memberImage} className="memberPic" src={mainPic1} />
                                    <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>


                                </CardBody>
                            </Card>



                            <Card className="memberCard">

                                <CardBody>
                                    <CardTitle>Name: Anthony</CardTitle>
                                    <CardSubtitle>Age: 27</CardSubtitle>
                                    <CardImg style={memberImage} className="memberPic" src={mainPic2} />
                                    <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>
                                </CardBody>
                            </Card>



                            <Card className="memberCard">

                                <CardBody>
                                    <CardTitle>Name: Alexander</CardTitle>
                                    <CardSubtitle>Age: 25</CardSubtitle>
                                    <CardImg style={memberImage} className="memberPic" src={mainPic3} />
                                    <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>
                                </CardBody>
                            </Card>


                            <Card className="memberCard">

                                <CardBody>
                                    <CardTitle>name: Kian</CardTitle>
                                    <CardSubtitle>Age: 30</CardSubtitle>
                                    <CardImg style={memberImage} className="memberPic" src={mainPic4} />
                                    <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>
                                </CardBody>
                            </Card>
                            <Card className="memberCard">

                                <CardBody>
                                    <CardTitle>Name: Nick</CardTitle>
                                    <CardSubtitle>Age: 19</CardSubtitle>
                                    <CardImg style={memberImage} className="memberPic" src={mainPic5} />
                                    <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                    <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>


                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>

            </Container>
            </div>
        )
    }

}

export default MembersPage;
