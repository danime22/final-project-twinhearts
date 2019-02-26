import React, { Component } from "react";
import API from "../../utils/API";
import Profile from "../../Component/Profile/Profile";
import Navbar from "../../Component/Navbar/Navbar";


class ViewProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {user: ""};

    }

    componentDidMount() {
        API.getUser(this.props.match.params.userId)
        .then((res) => {
            this.setState({user: res.data});
        })
    }

   w

    render() {
        return(
            <div>
            <Navbar />
            <Profile user={this.state.user}/>
            </div>
        )
    }
}

export default ViewProfilePage;