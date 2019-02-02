import React, { Component } from "react";
import { Button, FormGroup, Label, Input } from 'reactstrap';
// import {Link} from 'react-router-dom';
import Axios from "axios";

class SearchForm extends Component {

    state = {
        zip: "",
        distance: "",
        city: "",
        state: "",
        matches: "",
        gender: ""
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // if(this.state.zip && this.state.distance) {
        //     Axios.search(this.state.zip, this.state.distance).then(response => {})
        // }

        // for (var property in object) {
        //     if (object.hasOwnProperty(property)) {
        //         // do stuff
        //     }
        // }
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

componentDidUpdate(){
    if(this.state.matches){

    }
}


    render() {
        return (
           
            <div>
            <p>TODO: put the search form here, then track user input and call the parent when the user searches. See pattern in RegistrationPage</p>

            <div className="container-group">

                <div className="form-group">
                    Gender: <FormGroup >
                        <Input type="select" name="gender" onChange={this.handleInputChange} value={this.state.gender}>
                            <option>    </option>
                            <option>Male</option>
                            <option>Female</option>

                        </Input>

                    </FormGroup>
                </div>

                <div className="form-group">
                    Miles: <FormGroup >
                        <Input type="select" name="distance" onChange={this.handleInputChange} value={this.state.distance} >
                            <option>       </option>
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

                    <FormGroup>
                        <Label for="exampleZip">Zip</Label>
                        <Input type="text" name="zip" id="exampleZip" />
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