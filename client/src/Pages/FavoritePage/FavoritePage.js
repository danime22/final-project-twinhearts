import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import MembersList from "../../Component/MembersList/MembersList";
import {Container} from "reactstrap";
import "./Favorite.css";
import API from "../../utils/API";
import session from "../../utils/Session";



class FavoritePage extends Component {

    constructor(props) {
        super(props);

        this.state = { favorites: [] };
    }

    componentDidMount() {
        let user = session.get("user");
        API.favoriteUsers(user._id).then(res => {
            this.setState({ favorites: res.data });

        })
            .catch(err => {
                console.log(JSON.stringify(err));
            });

    }

    render() {
        return (

            <div className="fav-Profile">
                <Navbar />
                <Container>
                <h1 className="fav-title">Favorites</h1>
                <div className="fav-container">

                    <MembersList list={this.state.favorites} />
                </div>
                </Container>

            </div>
        );
    };
}


export default FavoritePage;