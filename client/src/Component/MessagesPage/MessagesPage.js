import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import './MessagesPage.css';
import { Table } from 'reactstrap';
import mainLogo from "../../Photos/clipart361312.png";
import { NavLink, Nav, NavItem,} from 'reactstrap';


class MessagesPage extends Component {
    render() {
        return (
            <div>
           
                <Navbar />
    

              <Table bordered>
                <thead>
                  <tr>
                    <th >Sender</th>
                    <th>Conversation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">who u</th>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                  </tr>
                  <tr>
                  <th scope="row">who me</th>
                  <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                </tr>
                  
                </tbody>
              </Table>
     

            </div>
        )

    }
}

export default MessagesPage;