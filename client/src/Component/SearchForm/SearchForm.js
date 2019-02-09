import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import options from "../../utils/options"
import session from "../../utils/Session";

class SearchForm extends Component {
    constructor(props) {
        super(props);

    // CHANGE: removed results - now in search page
    // CHANGE: defaulted zip to user zip
    // CHANGE: added current user to exclude from search
    let user = session.get("user");

    this.state = {
        gender: "",
        distance: "",
        zip: user.zip,
        minAge: "",
        maxAge: "",
        height: "",
        smoke: "",
        drink: "",
        excludeId: user._id
    }
}

    // CHANGE: Call parent method
    handleFormSubmit = event => {
        event.preventDefault();
        

        //TODO: Validate state fields before passing

        this.props.onSearch(this.state);
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidUpdate() {
        if (this.state.matches) {

        }
    }

    // CHANGE: populated drop down with options.js so all options same everywhere
    render() {
        return (
            <div>
              
                <div className="container-group">

                    <div className="form-group">
                        Gender: <FormGroup >
                            <Input type="select" name="gender" onChange={this.handleInputChange} value={this.state.gender}>
                                <option key={99} value=""></option>
                                {options.gender.map((gender, i) => {
                                    return (
                                        <option key={i} value={gender}>{gender}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                    </div>

                    <div className="form-group">
                        Miles: <FormGroup >
                            <Input type="select" name="distance" onChange={this.handleInputChange} value={this.state.distance} >
                                {options.range.map((range, i) => {
                                    return (
                                        <option key={i} value={range}>{range}</option>
                                    )
                                })}
                               

                            </Input>
                        </FormGroup>
                    </div>


                    <div className="form-group">
                        <FormGroup>
                            <Label for="exampleZip">Zip:</Label>
                            <Input type="text" name="zip" id="exampleZip" onChange={this.handleInputChange} value={this.state.zip}>
                            </Input>
                        </FormGroup>
                    </div>

                    <div className="form-age">
                        Min-Age:<FormGroup className="form-been">
                            <Input type="select" name="minAge" onChange={this.handleInputChange} value={this.state.minAge}>
                                <option>  </option>
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
                        Max-Age:<FormGroup className="form-been">
                            <Input type="select" name="maxAge" onChange={this.handleInputChange} value={this.state.maxAge}>
                                <option>  </option>
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
                        Height: <FormGroup >
                            <Input type="select" name="height" onChange={this.handleInputChange} value={this.state.height}>
                                <option>    </option>
                                {options.height.map((height, i) => {
                                    return (
                                        <option key={1} value={height}>{height}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                    </div>

                    <div className="form-age">
                        Smoke:<FormGroup className="form-been">
                            <Input type="select" name="smoke" onChange={this.handleInputChange} value={this.state.smoke}>
                                <option>  </option>
                                {options.smokingHabits.map((smoke, i) => {
                                    return (
                                        <option key={i} value={smoke}>{smoke}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup >
                    </div>

                    <div className="form-age">
                        Drink:<FormGroup className="form-been">
                            <Input type="select" name="drink" onChange={this.handleInputChange} value={this.state.drink}>
                                <option>  </option>
                                {options.drinkingHabits.map((drink, i) => {
                                    return (
                                        <option key={i} value={drink}>{drink}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup >
                    </div>


                    <div className="form-group">
                        <h3>
                            <Button onClick={this.handleFormSubmit} >
                                {"Search"}
                            </Button>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchForm;
