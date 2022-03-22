import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./firebase";
import "firebase/compat/auth";
import React, { useState, useMemo } from "react";

const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  useMemo(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else googleSignUp();
    });
  }, []);
  function googleSignUp() {
    auth
      .signInWithPopup(googleAuth)
      .then((data) => {
        setUser(data.user.email);
        localStorage.setItem("userName", data.user.email);
      })
      .catch();
  }
  return (
    <>
      {!user ? (
        // <div className="authentication_from">
        //   <button onClick={() => googleSignUp()}>Google Auth</button>
        // </div>
        ""
      ) : (
        <div class="bodyy">
          <Header />
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
