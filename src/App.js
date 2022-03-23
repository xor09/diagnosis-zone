import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "./firebase";
import "firebase/compat/auth";
import React, { useState, useMemo } from "react";
import "firebase/compat/database";

const database = firebase.database();
const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);
  const [totalList, setTotalList] = useState(null);
  const [container, setContainer] = useState(false);
  const [subList, setsubList] = useState(null);

  useMemo(() => {
    database.ref("Hospitals").on("value", (data) => {
      setTotalList(Object.entries(data.val()));
    });
  }, []);

  useMemo(() => {
    console.log(totalList);
  }, [totalList]);

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
  const getContainer = (type, opt, filter) => {
    console.log(type, opt);
    if (type !== "" && opt == 1) {
      setsubList(
        totalList.filter(
          (data) => data[1].type.toLowerCase() === type.toLowerCase()
        )
      );
      setContainer(!container);
    }
    if (type !== "" && opt == 2) {
      const newList = totalList.filter(
        (data) =>
          data[1].type.toLowerCase() === type.toLowerCase() ||
          data[1].Name.toLowerCase() === type.toLowerCase() ||
          data[1].address.toLowerCase() === type.toLowerCase() ||
          data[1].city.toLowerCase() === type.toLowerCase() ||
          data[1].district.toLowerCase() === type.toLowerCase() ||
          data[1].pincode.toLowerCase() === type.toLowerCase() ||
          data[1].state.toLowerCase() === type.toLowerCase()
      );
      // if(filter === "covidBedPrice"){
      newList.sort((data1, data2) => {
        if (filter === "covidBedPrice")
          return (
            Number(data1[1].covidBedPrice) - Number(data2[1].covidBedPrice)
          );
        if (filter === "generalBedPrice")
          return (
            Number(data1[1].generalBedPrice) - Number(data2[1].generalBedPrice)
          );
        if (filter === "covidBedPrice")
          return (
            Number(data1[1].generalBedPrice) - Number(data2[1].generalBedPrice)
          );
        return false;
      });
      //}
      // if(filter === "generalBedPrice"){
      //   newList.sort((data1, data2) => {
      //     return Number(data1[1].filter) - Number(data2[1].covidBedPrice);
      //   });
      // }

      setsubList(newList);
      if (!container) setContainer(!container);
    }
    if (opt == 0) setContainer(!container);
  };

  const bookNowFunc = (hosName) => {
    document.getElementById("bookForm").style.height = "100%";
    document.getElementById("bookForm").style.width = "100%";
    document.getElementById("bookForm").style.display = "flex";
    localStorage.setItem("hospitalName", hosName);
    document.getElementById("hostipleContainer").style.display = "none";
  };
  return (
    <>
      {!user ? (
        // <div className="authentication_from">
        //   <button onClick={() => googleSignUp()}>Google Auth</button>
        // </div>
        ""
      ) : (
        <div class="bodyy">
          <Header totalList={totalList} getContainer={getContainer} />
          <Home
            container={container}
            getContainer={getContainer}
            subList={subList}
            bookNowFunc={bookNowFunc}
          />
        </div>
      )}
    </>
  );
}

export default App;
