import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import MembersList from "../MembersList/MembersList";
import API from "../../utils/API";
import session from "../../utils/Session";



class FavoritePage extends Component {

    constructor(props){
        super(props);

        this.state = {favorites: []};
    }

    componentDidMount() {
        let user = session.get("user");
        API.favoriteUsers(user._id).then(res => {
            console.log(JSON.stringify(res));

            this.setState({favorites: res.data});

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
            <MembersList list={this.state.favorites}/>
            </div>
        );
    };
}


export default FavoritePage;