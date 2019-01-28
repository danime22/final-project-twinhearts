import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import mainLogo from "../../Photos/clipart361312.png";
import { Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Nav, NavLink, NavItem, Row, Col } from 'reactstrap';

class Registration extends Component {

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
                                    <span class="iconify" data-icon="whh:skypeonline" data-inline="false"></span>
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

                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleUsername">Username</Label>
                                    <Input type="text" name="name" id="exampleName" placeholder="with a placeholder" />

                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />

                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Which describes your highest level of education</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Doctorate</option>
                                        <option>Masters</option>
                                        <option>Bachelors</option>
                                        <option>Associates</option>
                                        <option>High School</option>
                                        <option>Some College</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Religion</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Christian</option>
                                        <option>Jewish</option>
                                        <option>Muslim</option>
                                        <option>Buddhist</option>
                                        <option>Hindu</option>
                                        <option>Neither Religous Nor Spirtiual</option>
                                    </Input>

                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSelect">What's your personal Income</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option> less than $20,000</option>
                                        <option>$20,000 - $40, 000</option>
                                        <option>$40, 000 - $60, 000</option>
                                        <option>$60, 000 - $150, 000</option>
                                        <option>$125, 000 - $250, 000</option>
                                        <option>$250, 000 +</option>
                                    </Input>

                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSelect">How often do you smoke</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option> NEVER</option>
                                        <option>Socially</option>
                                        <option>Once a week</option>
                                        <option>Few times a week</option>
                                        <option>Daily</option>

                                    </Input>

                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSelect">How often do you drink</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option> NEVER</option>
                                        <option>On special occasions</option>
                                        <option>Once a week</option>
                                        <option>Few times a week</option>
                                        <option>Daily</option>

                                    </Input>

                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleText">What are you passionate about?</Label>
                                    <Input type="textarea" name="text" id="exampleText" placeholder="Think of something that energizes and excites you" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleText">What tow or three things do you enjoy doing with your leisure time?</Label>
                                    <Input type="textarea" name="text" id="exampleText" placeholder="Think of something that energizes and excites you" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSelect">I am looing for someone between the ages of...</Label>
                                    <Input type="select" name="select" id="exampleSelect">
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
                                        <option>38</option>
                                        <option>39</option>
                                        <option>40</option>
                                        <option>41</option>
                                        <option>42</option>
                                        <option>43</option>
                                        <option>44</option>
                                        <option>45</option>
                                        <option>46</option>
                                        <option>47</option>
                                        <option>48</option>
                                        <option>49</option>
                                        <option>50</option>
                                        <option>51</option>
                                        <option>52</option>
                                        <option>53</option>
                                        <option>54</option>
                                        <option>55</option>
                                        <option>56</option>
                                        <option>57</option>
                                        <option>58</option>
                                        <option>59</option>
                                        <option>60</option>
                                        <option>61</option>
                                        <option>62</option>
                                        <option>63</option>
                                        <option>64</option>
                                        <option>65</option>
                                        <option>66</option>
                                        <option>67</option>
                                        <option>68</option>

                                    </Input>

                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        Upload your photo
        </FormText>
                                </FormGroup>



                                <h3> <Link to="Members" className={window.location.pathname === "Members"}>
                                    Submmit
                              </Link></h3>

                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>

        )

    }
}



export default Registration;