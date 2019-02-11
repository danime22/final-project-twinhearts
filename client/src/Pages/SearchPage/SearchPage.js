import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import SearchForm from "../../Component/SearchForm/SearchForm";
import MembersList from "../../Component/MembersList/MembersList";
import API from "../../utils/API";
import {Container, Row, Col} from "reactstrap";

class Search extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            search: {},
            searchResults: []
        }; //should be init search and members

    }

    // CHANGE: added handle search callback
    handleSearch = (searchParams) => {
        //console.log(searchParams)
        API.search(searchParams).then(res => {
            console.log(JSON.stringify(res.data));
            this.setState({ searchResults: res.data });
        }).catch(err => {
            console.log(err);
        })
    }

    // CHAMGE: moved memberlist to this component

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Col md="4" className="search-div">
                            <SearchForm initSearch={this.state.search} onSearch={this.handleSearch} />
                        </Col>

                        <Col md="8" className="search-div">
                            <MembersList list={this.state.searchResults} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Search;