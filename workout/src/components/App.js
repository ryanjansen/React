import React from "react";
import Tracker from "./Tracker";
import Login from "./authentication/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/tracker" component={Tracker} />
        </Switch>
      </Router>
    );
  }
}

export default App;
