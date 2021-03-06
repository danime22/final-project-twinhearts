import React, { Component } from "react";
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import options from "../../utils/options"
import session from "../../utils/Session";
import "./Search.css";

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
            eating: "",
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
            <div className="search-divPage">


                <div className="search-form">
                    Gender: <FormGroup className="form-g">
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



                <div className="search-form">
                    Height: <FormGroup className="form-g">
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


                <div className="search-form">
                    Smoke:<FormGroup className="form-g">
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


                <div className="search-form">
                    Drink:<FormGroup className="form-g">
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

                <div className="search-form">
                    Eating Habits:<FormGroup className="form-g">
                        <Input type="select" name="eating" onChange={this.handleInputChange} value={this.state.eating}>
                            <option>  </option>
                            {options.eatingHabits.map((eating, i) => {
                                return (
                                    <option key={i} value={eating}>{eating}</option>
                                )
                            })}
                        </Input>
                    </FormGroup >
                </div>


                <div className="search-form">
                    Miles: <FormGroup className="form-g">
                        <Input type="select" name="distance" onChange={this.handleInputChange} value={this.state.distance} >
                            {options.range.map((range, i) => {
                                return (
                                    <option key={i} value={range}>{range}</option>
                                )
                            })}


                        </Input>
                    </FormGroup>
                </div>

                <div className="search-form">
                    Zip:<FormGroup className="form-g">

                        <Input type="text" name="zip" id="exampleZip" onChange={this.handleInputChange} value={this.state.zip}>
                        </Input>
                    </FormGroup>
                </div>

                <div className="age-form">
                    Min-Age:<FormGroup className="age-g">
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


                <div className="age-form">
                    Max-Age:<FormGroup className="age-g">
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



                <div className="search-button">
                <h3>
                    <Button className="buton-back" onClick={this.handleFormSubmit} >
                        {"Search"}
                    </Button>
                </h3>
            </div>


            </div>
        )
    }

}

export default SearchForm;
