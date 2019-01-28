import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import mainLogo from "../../Photos/clipart361312.png";
import { Nav, NavLink, NavItem, FormGroup, Input, } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

import "./Members.css";


const iconOnline = {
    color: "blue"
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

                                <Link to="Inbox" className={window.location.pathname === "Inbox" ? "nav-link active" : "nav-link"}>
                                    <span class="iconify" data-icon="flat-ui:mail" data-inline="false"></span>
                                </Link>
                            </li>

                            <li className="nav-item">

                                <Link to="Inbox" className={window.location.pathname === "Inbox" ? "nav-link active" : "nav-link"}>
                                    <span class="iconify" data-icon="emojione:red-heart" data-inline="false"></span>
                                </Link>
                            </li>

                            <li className="nav-item">

                                <Link to="Members" className={window.location.pathname === "Members" ? "nav-link active" : "nav-link"}>
                                    <span style={iconOnline} class="iconify" data-icon="whh:skypeonline" data-inline="false"></span>
                                </Link>
                            </li>

                            <li className="nav-item">

                                <Link to="Members" className={window.location.pathname === "Members" ? "nav-link active" : "nav-link"}>
                                    <span class="iconify" data-icon="whh:skypeoffline" data-inline="false"></span>
                                </Link>
                            </li>

                            <li className="nav-item">

                                <Link to="Registration" className={window.location.pathname === "Registration" ? "nav-link active" : "nav-link"}>
                                    Edit Profile
                    </Link>
                            </li>

                            <li className="nav-item">
                                <h3> <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                    Log Out
  </Link></h3>
                            </li>
                        </ul>
                    </div>


                    <NavItem>

                    </NavItem>
                </Nav>

                <div className="container-group">
                    <div className="form-group">
                        Miles: <FormGroup >
                            <Input type="select" name="select" >
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
                    <div className="form-group">


                        Gender: <FormGroup >
                            <Input type="select" name="select">
                                <option>Male</option>
                                <option>Female</option>

                            </Input>

                        </FormGroup>
                    </div>

                    <div className="form-group">

                        City: <FormGroup className="form-group">
                            <Input type="select" name="select">
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

                    <div className="form-age">
                        <FormGroup className="form-been">


                            <Input type="select" name="select">
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

                        </FormGroup >
                    </div>

                    <div className="form-age">
                        <FormGroup className="form-been">

                            <Input type="select" name="select">
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
                    <div className="form-group">

                        <button>Find</button>
                    </div>
                </div>

                <Container>
                    <Row>

                        <Col>
                            <div className="members-container">
                                <Card className="member-card">

                                    <CardBody>
                                        <CardTitle><p>Name: Harry</p></CardTitle>
                                        <CardSubtitle>Age: 28</CardSubtitle>
                                        <CardImg src="http://via.placeholder.com/640x770"/>
                                        <div className="button-div">
                                        <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>
                                        </div>
                                        


                                    </CardBody>
                                </Card>



                                <Card className="member-card">

                                    <CardBody>
                                        <CardTitle>Name: Coleman</CardTitle>
                                        <CardSubtitle>Age: 27</CardSubtitle>
                                        <CardImg src="http://via.placeholder.com/640x770"/>
                                        <div className="button-div">
                                        <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>
                                        </div>
                                    </CardBody>
                                </Card>

                                <Card className="member-card">

                                    <CardBody>
                                        <CardTitle>Name: Steven</CardTitle>
                                        <CardSubtitle>Age: 30</CardSubtitle>
                                        <CardImg src="http://via.placeholder.com/640x770"/>
                                        <div className="button-div">
                                        <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>
                                        </div>
                                    </CardBody>
                                </Card>


                                <Card className="member-card">

                                    <CardBody>
                                        <CardTitle>Name: Aaron</CardTitle>
                                        <CardSubtitle>Age: 29</CardSubtitle>
                                        <CardImg src="http://via.placeholder.com/640x770"/>
                                        <div className="button-div">
                                        <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>
                                        </div>
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
