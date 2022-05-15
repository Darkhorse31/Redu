import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <NavLink to="/">
            <h3>Movie Logo</h3>
          </NavLink>
          <ul className="header_list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movie/:imdbID">MovieDeatail</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
