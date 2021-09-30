import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
/* import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin"; */

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
/* import Navbar from "./components/Navbar"; */

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.push('/login')
  }, [])

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
      <Router history={history}>
        <Switch>
            <Route exact path={["/chat-app/", "/chat-app/home"]} component={Home} />
            <Route exact path="/chat-app/login" component={Login} />
            <Route exact path="/chat-app/register" component={Register} />
            <Route exact path="/chat-app/profile" component={Profile} />
            <Route path="/chat-app/chat" component={BoardUser} />
          </Switch>
        <AuthVerify logOut={logOut}/>
    </Router>
  );
};

export default App;
