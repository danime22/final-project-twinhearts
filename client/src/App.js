import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./Component/Wrapper/Wrapper";
import RegistrationPage from "./Component/RegistrationPage/RegistrationPage";
import MembersOnlinePage from "./Component/MembersOnlinePage/MembersOnlinePage";
import ProfilePage from "./Component/ProfilePage/ProfilePage";
import Inbox from "./Component/Inbox/Inbox";
import Search from "./Component/Search/Search";

class App extends Component {




  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Wrapper} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/onlineMembers" component={MembersOnlinePage} />
          <Route exact path="/Inbox" component={Inbox} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/profile/:id" component={ProfilePage} />
        </div>

      </Router>

    )

  }

}

export default App;

