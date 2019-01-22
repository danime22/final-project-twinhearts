import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./Component/Wrapper/Wrapper";
import Registration from "./Component/Registration/Registration";
import Members from "./Component/Members/Members";
import SignIn from "./Component/SignIn/SignIn";
import Inbox from "./Component/Inbox/Inbox";
import Notification from "./Component/Notification/Notification";




function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Wrapper} />
        <Route exact path="/Registration" component={Registration} />
       <Route exact path="/Members" component={Members} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Inbox" component={Inbox} />
        <Route exact path="/Notification" component={Notification} />
      </div>
  
    </Router>
    
  )

}

export default App;

