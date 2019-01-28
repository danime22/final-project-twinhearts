import React, { Component } from "react";
import {Container, Row, Col};

class Search extends Component {

    constructor(props) {
        super(props);
            this.props = props;
        
    }

    render() {
        return(
            <Container>
            <Row>
            <Col>
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
            </Col>
            
            </Row>
            
            </Container>
        )
    }
}

export default Search;