import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody, CardTitle, CardImg, CardSubtitle } from 'reactstrap';
import session from "../../utils/Session";
import API from "../../utils/API";
import "../MembersList/MemberList.css";
import exampleImage from "../../Photos/example.jpg";


var moment = require("moment");



const memberStyle = {
    boxShadow: "0  15px 25px rgba(0,0,0,5)",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px"
}

const fontName = {
    fontSize: "22px",
    fontFamily: "Times, New Roman, Times, serif",
    color: "#99FFFF"

}

const fontText = {
    color: "#F8F8F8",
    fontFamily: "Times, New Roman, Times, serif",
    lineHeight: "80%",
    fontSize: "18px"


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
    // width: "300px",


}



const buttonDiv = {
    padding: "5px",
    margin: "5px 15px"
}



const memberContainer = {
    // background: "rgba(0,204,153, 0.5)",
}


const imgIcon = {
    width: "35px",
    height: "35px",

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

    getMessagePath(userId) {
        return "/messages/" + userId;
    }

    getAge(birthdate) {

        let now = moment();
        let bday = moment(birthdate, "YYYYMMDD");

        console.log(now + "/" + bday);

    
        return now.diff(bday, "years", false);
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
                                    <CardSubtitle><p style={fontText}>Age: {this.getAge(member.birthday)}</p></CardSubtitle>
                                    <Link to={this.getProfilePath(member._id)} className={window.location.pathname === this.getProfilePath(member._id) ? "nav-link active" : "nav-link"}><CardImg  className="profileImg" src={exampleImage} /> </Link>
                                    <div className="divIcon" style={buttonDiv}>
                                    
                                        <div className="icon"><Link to={this.getMessagePath(member._id)} className={window.location.pathname === this.getMessagePath(member._id) ? "nav-link active" : "nav-link"}><img src="https://img.icons8.com/color/48/000000/speech-bubble.png" style={imgIcon}alt="icon"/></Link></div>
                                        <div className="icon-fav"><img  style={imgIcon} data-id={member._id} onClick={this.handleFavoriteClick} src={this.getFavIcon(member._id)} alt="fav"></img></div>
                      
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