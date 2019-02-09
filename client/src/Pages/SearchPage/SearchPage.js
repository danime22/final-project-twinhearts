import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import SearchForm from "../../Component/SearchForm/SearchForm";
import MembersList from "../../Component/MembersList/MembersList";
import API from "../../utils/API";

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
                <SearchForm initSearch={this.state.search} onSearch={this.handleSearch}/>
                <MembersList list={this.state.searchResults} />

                
                         
            </div>
        )
    }
}

export default Search;