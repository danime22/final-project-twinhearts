import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./Component/Wrapper/Wrapper";
import RegistrationPage from "./Component/RegistrationPage/RegistrationPage";
import MembersOnlinePage from "./Component/MembersOnlinePage/MembersOnlinePage";
import ProfilePage from "./Component/ProfilePage/ProfilePage";
import MessagesPage from "./Component/MessagesPage/MessagesPage";
import SearchPage from "./Component/SearchPage/SearchPage";
import FavoritePage from "./Component/FavoritePage/FavoritePage";
import EditProfile from "./Component/EditProfile/EditProfile";

class App extends Component {



  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Wrapper} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/onlineMembers" component={MembersOnlinePage} />
          <Route exact path="/messages" component={MessagesPage} />
          <Route exact path="/messages/:id" component={MessagesPage} />
          <Route exact path="/search" component={SearchPage} />
          
          <Route exact path="/favorites" component={FavoritePage}  />
          <Route exact path="/profile/editprofile" component={EditProfile} />
          <Route exact path="/profile/:id" component={ProfilePage} />
        </Switch>
        </div>

      </Router>

    )

  }

}

export default App;

