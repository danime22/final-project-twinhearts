import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import MembersList from "../MembersList/MembersList";

class Search extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            search: {},
            searchResults: []
        }; //should be init search and members

    }

    render() {
        return (
            <div>
                <Navbar />
                <SearchForm initSearch={this.state.search} />
                <MembersList list={[]} />            
            </div>
        )
    }
}

export default Search;