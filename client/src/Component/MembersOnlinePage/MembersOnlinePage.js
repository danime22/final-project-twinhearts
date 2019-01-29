import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import MembersList from "../MembersList/MembersList";
import "./MembersOnlinePage.css";




class MembersOnlinePage extends Component {
    constructor(props) {
        super(props);

        //TODO: Call the API to get the online members
        // Set the state to the result.

        this.state = {};
        
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
