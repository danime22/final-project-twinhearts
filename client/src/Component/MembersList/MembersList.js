import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardImg, CardSubtitle } from 'reactstrap';
import session from "../../utils/Session";
import API from "../../utils/API";
import "../MembersList/MemberList.css";
import utils from "../../utils/utils";

// const moment = require("moment");


class MembersList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleFavoriteClick = event => {
        event.preventDefault();
        console.log(event.target);
        let favId = event.target.dataset.id;
        let user = session.get("user");

        if (user.favorites.includes(favId)) {

            API.removeFavorite(user._id, favId)
                .then(res => {
                    user.favorites.splice(user.favorites.indexOf(favId), 1);
                    session.save("user", user);
                    console.log(res);
                    this.forceUpdate();
                })
                .catch(err => {
                    console.log(err);
                })

        } else {
            API.addFavorite(user._id, favId)
                .then(res => {
                    user.favorites.push(favId);
                    session.save("user", user);
                    console.log(res);
                    this.forceUpdate();
                })
                .catch(err => {
                    console.log(err);
                })

        }
  

    }


    getFavIcon(memberId) {
        if (session.get("user").favorites.includes(memberId)) {
            return "https://img.icons8.com/color/48/000000/filled-like.png";
            
        }
        else {
            return "https://img.icons8.com/color/48/000000/like.png";
            
        }
    }

    getProfilePath(userId) {
        return "/profile/" + userId;
    }



    render() {
        return (

            <div className="members-online">

                <Container className="cardContainer">
                    {this.props.list.map((member, i) => {
                        return (
                            <Card key={member._id} className="cardMember">
                                <CardBody className="memberStyle">
                                    <CardTitle><p className="fontName">Name: {member.name}</p></CardTitle>
                                    <CardSubtitle><p className="fontText">Gender: {member.gender}</p></CardSubtitle>
                                    <CardSubtitle><p className="fontText">State: {member.state}</p></CardSubtitle>
                                    <CardSubtitle><p className="fontText">Age: {utils.getAge(member.birthday)}</p></CardSubtitle>
                                    <Link to={this.getProfilePath(member._id)} className={window.location.pathname === this.getProfilePath(member._id) ? "nav-link active" : "nav-link"}><CardImg  className="profileImg" src={utils.getImage((member.profile ? member.profile.profilePic : "default")) } /> </Link>
                                    <div className="divIcon" >
                                        <div className="icon"><Link to={utils.getMessagePath(member._id)} className={window.location.pathname === utils.getMessagePath(member._id) ? "nav-link active" : "nav-link"}><img src="https://img.icons8.com/color/48/000000/speech-bubble.png" className="imgIcon" alt="icon"/></Link></div>
                                        <div className="icon-fav"><img  className="imgIcon" data-id={member._id} onClick={this.handleFavoriteClick} src={this.getFavIcon(member._id)} alt="fav"></img></div>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })}
                </Container>
            </div>
        )
    }
}

export default MembersList;