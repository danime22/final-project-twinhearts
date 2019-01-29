import React, { Component } from "react";
import {Link} from "react-router-dom";
import { FormGroup, Input, } from 'reactstrap';

class Search extends Component {

    constructor(props) {
        super(props);
            this.props = props;
        
    }

    render() {
        return(
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

            <h3> <Link to="Members" className={window.location.pathname === "Members"}>
            Search
      </Link></h3>
            </div>
        </div>
        )
    }
}

export default Search;