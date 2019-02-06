import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardImg, CardSubtitle } from 'reactstrap';
import session from "../../utils/Session";
import API from "../../utils/API";


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

const button = {
    width: "40px",
    height: "30px"
}

const memberContainer = {
    background: "rgba(0,204,153, 0.5)",
}


const imgIcon = {
    width: "35px",
    height: "35px",
    color: "red"
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

    getProfilePath(userId) {
        return "/profile/" + userId;
    }

    getMessagePath(userId) {
        return "/messages/" + userId;
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
                                    <Link to={this.getProfilePath(member._id)} className={window.location.pathname === this.getProfilePath(member._id) ? "nav-link active" : "nav-link"}><CardImg src="http://via.placeholder.com/640x770" /> </Link>
                                    <div style={buttonDiv}>
                                    <i class="material-icons">
                                    account_box
                                    </i>
                                        <Link to={this.getMessagePath(member._id)} className={window.location.pathname === this.getMessagePath(member._id) ? "nav-link active" : "nav-link"}><img src="https://img.icons8.com/color/48/000000/communication.png" style={imgIcon}alt="icon"/></Link>
                                        <button data-id={member._id} onClick={this.handleFavoriteClick} >{this.getFavText(member._id)}<i class="material-icons">
                                        account_box
                                        </i></button>
                                        {/* <button data-id={member._id} onClick={(event) => { event.preventDefault(); this.handleFavoriteSelection(member._id) }}>fav<span className="iconify" data-icon="twemoji:growing-heart" data-inline="false"></span></button>*/}
                                        <button><img src="https://img.icons8.com/color/26/000000/wink.png" style={imgIcon} alt="wink"/></button>

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