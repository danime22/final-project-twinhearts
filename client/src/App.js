import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./Component/Wrapper/Wrapper";
import RegistrationPage from "./Component/RegistrationPage/RegistrationPage";
import MembersOnlinePage from "./Component/MembersOnlinePage/MembersOnlinePage";
import ProfilePage from "./Component/ProfilePage/ProfilePage";
import MessagesPage from "./Component/MessagesPage/MessagesPage";
import SearchPage from "./Component/SearchPage/SearchPage";
import EditProfile from "./Component/EditProfile/EditProfile";

class App extends Component {



  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Wrapper} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/onlineMembers" component={MembersOnlinePage} />
          <Route exact path="/messages" component={MessagesPage} />
          <Route exact path="/messages/:id" component={MessagesPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/profile/:id" component={ProfilePage} />
          <Route exact path="/EditProfile" component={EditProfile} />
        </div>

      </Router>

    )

  }

}

export default App;

