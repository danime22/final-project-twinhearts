import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardImg, CardSubtitle, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';

class MembersList extends Component {

render() {
    return (

            <div>
            <Container>
                <Row>

                    <Col>
                        <div className="members-container">
                            <Card className="member-card">

                                <CardBody>
                                    <Link to="/profile/123456" className={window.location.pathname === "/profile/123456" ? "nav-link active" : "nav-link"}><CardTitle><p>Name: Harry</p></CardTitle></Link>
                                    <CardSubtitle>Age: 28</CardSubtitle>
                                    <CardImg src="http://via.placeholder.com/640x770" />
                                    <div className="button-div">
                                        <button><span class="iconify" data-icon="twemoji:envelope" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>
                                        <button><span class="iconify" data-icon="twemoji:winking-face" data-inline="false"></span></button>

                                    </div>



                                </CardBody>
                            </Card>



                            <Card className="member-card">

                                <CardBody>
                                <Link to="/profile/111111" className={window.location.pathname === "/profile/111111" ? "nav-link active" : "nav-link"}><CardTitle>Name: Coleman</CardTitle></Link>
                                    <CardSubtitle>Age: 27</CardSubtitle>
                                    <CardImg src="http://via.placeholder.com/640x770" />
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
                                    <CardImg src="http://via.placeholder.com/640x770" />
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
                                    <CardImg src="http://via.placeholder.com/640x770" />
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

export default MembersList;