import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import MembersList from "../MembersList/MembersList";
import API from "../../utils/API";
import session from "../../utils/Session";

class MembersOnlinePage extends Component {
    constructor(props) {
        super(props);

        //TODO: Call the API to get the online members
        // Set the state to the result.

        this.state = { members: [] };
        //DEBUGGING-----
        session.save("_id", "5c55e22ee5fc4c07fd47954a");
        //--------------
    }

    componentDidMount() {
        let user = session.get("_id");
        API.onlineUsers(user)
            .then(res => {
                this.setState({ members: res.data });
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
                <MembersList list={this.state.members} />
            </div>
        )
    }


}

export default MembersOnlinePage;
