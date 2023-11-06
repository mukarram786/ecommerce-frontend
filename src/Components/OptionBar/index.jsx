import React from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import { Link } from "react-router-dom";
import "./OptionBar.css";

function OptionBar() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link navbar-link">
            Home
          </Link>
        </li>
        <CategoriesDropdown />
        <li className="nav-item">
          <Link to="/" className="nav-link navbar-link">
            Products
          </Link>
        </li>
      </ul>
      <hr></hr>
    </>
  );
}

export default OptionBar;
