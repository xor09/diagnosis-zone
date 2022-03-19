import React from "react";
import "./Header-css.css";

function Header() {
  return (
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">
          <div>
            <b>Diagnosis Zone </b>
          </div>
        </a>
        {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul> */}
        <form>
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Header;
