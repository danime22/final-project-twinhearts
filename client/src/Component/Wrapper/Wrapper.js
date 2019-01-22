import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col } from 'reactstrap';
import "./Wrapper.css";


class WrapPage extends Component {

    render() {
        return (
            <div>
                <Navbar  />
                <Container>
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
                <footer>
                <p>&copy; 2019 | All rights reserved Fembots</p>
            </footer>
            </div>
        );
    }

}

export default WrapPage;