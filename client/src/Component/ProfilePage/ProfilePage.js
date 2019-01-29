import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";

class ProfilePage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Profile id={this.props.match.params.id} />
            </div>
        )
    }
}

export default ProfilePage;