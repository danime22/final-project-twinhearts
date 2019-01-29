import React, {Component} from "react";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    
    render() {
        return (
            <div>
                <h1>"TODO: Create SubComponents for the profile view and put here</h1>
                <p>This should have viewed user profile: {this.props.id}</p>
            </div>
        )
    }
}

export default Profile;