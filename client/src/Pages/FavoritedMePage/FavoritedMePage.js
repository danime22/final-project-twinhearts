import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import MembersList from "../../Component/MembersList/MembersList";
import {Container} from "reactstrap";
import API from "../../utils/API";
import session from "../../utils/Session";
import "./favorited.css";



class FavoritedMePage extends Component {
    constructor(props){
        super(props);

        this.state = { favoritedMe: [] };
        
    }

    componentDidMount() {
        let user = session.get("user");
        API.favoritedUser(user._id).then(res => {
            this.setState({favoritedMe: res.data});
        })
        .catch(err => {
            console.log(JSON.stringify(err));
        });
    }

    render() {
        return (

            <div>
                <Navbar />
                <Container className="favorited-container">
                <h1 className="fav-me">Favorited Me</h1>
                <div className="favMe-container">

                    <MembersList list={this.state.favoritedMe} />
                </div>
                </Container>

            </div>
        )
    }

}

export default FavoritedMePage