import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardImg, CardSubtitle } from 'reactstrap';
import session from "../../utils/Session";
import API from "../../utils/API";
import { callbackify } from "util";

const memberStyle = {
    boxShadow: "0  15px 25px rgba(0,0,0,5)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px"
}

const fontName = {
    fontSize: "25px",
    fontFamily: "Times, New Roman, Times, serif",
    color: "#99FFFF"

}

const fontText = {
    color: "#F8F8F8",
    fontFamily: "Times, New Roman, Times, serif",
    lineHeight: "80%"


}

const cardContainer = {

    margin: "25vh auto 0",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"

}

const cardMember = {
    background: "#007bff",
    margin: "0.5em",
    width: "300px",

}

const buttonDiv = {
    padding: "5px",
    margin: "5px 15px"
}

const memberContainer = {
    background: "rgba(0,204,153, 0.5)",
}

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


    getFavText(memberId) {
        if (session.get("user").favorites.includes(memberId)) {
            return "unfav";
        }
        else {
            return "fav";
        }
    }



    handleFavoriteSelection(favId) {
        let user = session.get("user");

    }




    render() {
        return (

            <div style={memberContainer}>

                <Container style={cardContainer}>
                    {this.props.list.map((member, i) => {
                        return (
                            <Card key={member._id} style={cardMember}>
                                <CardBody style={memberStyle}>
                                    <CardTitle><p style={fontName}>{member.name}</p></CardTitle>
                                    <CardSubtitle><p style={fontText}>{member.gender}</p></CardSubtitle>
                                    <CardSubtitle><p style={fontText}>{member.state}</p></CardSubtitle>
                                    <Link to="/profile/123456" className={window.location.pathname === "/profile/123456" ? "nav-link active" : "nav-link"}><CardImg src="http://via.placeholder.com/640x770" /> </Link>
                                    <div style={buttonDiv}>

                                        <button >Mail</button>
                                        <button data-id={member._id} onClick={this.handleFavoriteClick} >{this.getFavText(member._id)}</button>
                                        {/* <button data-id={member._id} onClick={(event) => { event.preventDefault(); this.handleFavoriteSelection(member._id) }}>fav<span className="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>*/}
                                        <button>Wink</button>

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