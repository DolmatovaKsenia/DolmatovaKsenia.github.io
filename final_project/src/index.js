import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../public/index.html'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Session } from 'inspector';

let express = require("express");
let app = express();

let cookieParser = require("cookie-parser");
let session = require("express-session");
let bodyParser = require("body-parser");
let path = require("path");

app.use(bodyParser.json);

let users = [
  {user: "admin", password: "123456"},
  {user: "guest", password: "654321"},
  {user: "user", password: "20212021"}
];

let sessionHandler = require("session_handler");
let store = sessionHandler.createStore();

app.use(cookieParser());

app.use(session({
  store: store,
  resave: false,
  saveUninitialised: true,
  secret: 'topsecret'
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})

app.post("/login", function(req, res) {
  let foundUser;

  for (let i = 0; i < users.length; i++) {
    let u = users[i];

    if (u.user == req.body.user && u.password == req.body.password) {
      foundUser = u.user;
      break;
    }
  }
  if (foundUser !== undefined) {
    req.session.user = foundUser; 
    console.log("Login succeeded: ", req.session.user);
    res.send("Login successful: " + "session ID" + req.session.id + "username:" + req.session.user);
  } else {
    console.log("Login failed: ", req.body.user);
    res.status(401).send("Login-error");

  }
});

app.get("/check", function(req, res) {
  if (res.session.user) {
    res.set("Content-Type", "text/html");
    res.send("User" + req.session.user + "is logged in!");

  } else {
      res.send("not logged in");
  }
})

reportWebVitals();