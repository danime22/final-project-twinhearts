import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import ProfileEditForm from "../../Component/ProfileEditForm/ProfileEditForm";
import API from "../../utils/API";
import session from "../../utils/Session";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    handleSaveProfile = profile => {
        let user = session.get("user");
        API.saveProfile({
            id: session.get("user")._id,
            profile: profile})
            .then((res) => {
                user.profile = profile;
                session.save("user", user);
                this.props.history.push("/onlineMembers");
            })
            // .catch(err => {
            //     console.log(JSON.stringify(err));

            //     // this.setState({ errorMessage: "User already exists." });
            // });
    }



    render() {
        return (
            <div>
                <Navbar />
                <ProfileEditForm onSaveProfile={this.handleSaveProfile} profile={session.get("user").profile} />
            </div>
        )
    }
}

export default ProfilePage;