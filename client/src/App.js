import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./Pages/Wrapper/Wrapper";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import MembersOnlinePage from "./Pages/MembersOnlinePage/MembersOnlinePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ViewProfilePage from "./Pages/ViewProfilePage/ViewProfilePage";
import MessagesPage from "./Pages/MessagesPage/MessagesPage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import FavoritePage from "./Pages/FavoritePage/FavoritePage";




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
          <Route exact path="/messages/:userId" component={MessagesPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/viewProfile" component={ViewProfilePage} />
          <Route exact path="/favorites" component={FavoritePage}  />
          <Route exact path="/editprofile" component={ProfilePage} />
          <Route exact path="/profile/:userId" component={ViewProfilePage} />
        </Switch>
        </div>

      </Router>

    )

  }

}

export default App;

