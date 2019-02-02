import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import MembersList from "../MembersList/MembersList";
import "./MembersOnlinePage.css";
import API from "../../utils/API";




class MembersOnlinePage extends Component {
    constructor(props) {
        super(props);

        //TODO: Call the API to get the online members
        // Set the state to the result.

        this.state = {};
        
    }

    componentDidMount() {
        API.getUsers().then(res => {
            console.log(JSON.stringify(res));

            // if successful, redirect to the Members online search.
            
        })
        .catch(err => {
            console.log(JSON.stringify(err));

            // this.setState({ errorMessage: "User already exists." });
        });

    }


    render() {
        return (
            <div>
                <Navbar />
                <MembersList list={this.state}/>
            </div>
        )
    }
    

}

export default MembersOnlinePage;
