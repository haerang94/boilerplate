import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null, true)}></Route>
        <Route path="/login" component={Auth(LoginPage, false)}></Route>
        <Route path="/register" component={Auth(RegisterPage, false)}></Route>
      </Switch>
    </Router>
  );
}

export default App;
