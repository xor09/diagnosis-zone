import React, { useMemo, useState } from "react";
import "./Header-css.css";

function Header() {
  const openForm = () => {
    document.getElementById("AdminRegistration").style.height = "100%";
    document.getElementById("AdminRegistration").style.width = "100%";
    document.getElementById("home").style.display = "none";
  };

  const submitInput = (input) => {};
  return (
    <>
      <nav className="NavBar">
        <div class="nav blue darken-1 navbar">
          <div>
            <a href="#">Diagnosis Zone</a>
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
      <nav>
        <div class="nav-wrapper blue">
          <form>
            <div class="input-field">
              <input
                onSubmit={(e) => submitInput(e.target.value)}
                id="search"
                type="search"
                required
              />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
