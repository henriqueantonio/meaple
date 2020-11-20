import React from "react";
import "./App.css";
import "./Query.css";
import "./Modal.scss";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Evento from "./Evento";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" exact component={Evento} />
          <Route exact path="/signup" component={SignUp} />
      </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
