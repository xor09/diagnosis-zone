import React, { useMemo, useState } from "react";
import "./Header-css.css";
import searchBar from "../images/search (1).png";

const Header = ({ subList, getContainer }) => {
  const openForm = () => {
    document.getElementById("AdminRegistration").style.height = "100%";
    document.getElementById("AdminRegistration").style.width = "100%";
    document.getElementById("AdminRegistration").style.display = "flex";
    document.getElementById("home").style.display = "none";
  };
  const [searchBarInput, setSearchBarInput] = useState(null);
  const [option, setOption] = useState(null);
  // useMemo(() => {
  //   console.log(option);
  // }, [option]);
  return (
    <>
      <nav className="NavBar">
        <div class="nav blue darken-1 navbar">
          <div>
            <a href="#">Care Touch</a>
          </div>

          <div>
            <ul id="nav-mobile" class="right">
              <li onClick={() => openForm()}>
                <strong>Register hospital</strong>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="searchBarContainer">
        <input
          onChange={(e) => setSearchBarInput(e.target.value)}
          type="text"
          placeholder="search hospital, city, etc."
        ></input>
        <img
          onClick={(e) => {
            if (!searchBarInput || searchBarInput === "")
              alert("please enter the valid input");
            else getContainer(searchBarInput, 2, option);
          }}
          src={searchBar}
          alt="searchBarImg"
        ></img>
        <select
          onChange={(e) => setOption(e.target.value)}
          className="wardType"
          name="ingredients[]"
          id="wardTypefilter"
        >
          <option value="">--Sort by price--</option>
          <option value="covidBedPrice">covid beds</option>
          <option value="ICU_Beds">ICU beds</option>
          <option value="generalBeds">general beds</option>
        </select>
      </div>
    </>
  );
};

export default Header;
