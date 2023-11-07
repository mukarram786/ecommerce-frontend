import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSearchParam } from "../../slices/filterSlice";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import SignedInUserBar from "./SignedInUserBar";
import CategoriesDropdown from "../Navbar/CategoriesDropdown";
import "./OptionBar.css";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const [showLoginModal, setLoginModal] = useState(false);
  const [showSignUpModal, setSignUpModal] = useState(false);
  const cartProducts = useSelector((state) => state.cart.products);
  const loggedUser = useSelector((state) => state.user);

  const handleModal = (val, type) =>
    type == "signUp" ? setSignUpModal(val) : setLoginModal(val);

  const handleSearchInput = (e) => {
    dispatch(updateSearchParam(e.target.value));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-grey mr-5 bg-dark navbar-container">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            ECOMMERCE APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="text-white home-nav">
            <ul className="nav justify-content-center option-bar">
              <li className="nav-item">
                <Link to="/" className="nav-link navbar-link text-white">
                  Home
                </Link>
              </li>
              {loggedUser?.user ? (
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link navbar-link text-white"
                  >
                    Orders
                  </Link>
                </li>
              ) : null}

              <CategoriesDropdown loggedUser={loggedUser}/>
              <li className="mt-3">
                <div className="form-inline my-2 my-lg-0 mt-4">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    onChange={(e) => handleSearchInput(e)}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="" id="navbarSupportedContent d-flex align-right mr-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!loggedUser?.user ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      href="#"
                      onClick={() => handleModal(true, "login")}
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      href="#"
                      onClick={() => handleModal(true, "signUp")}
                    >
                      Register
                    </a>
                  </li>
                </>
              ) : null}

              <li className="nav-item">
                <Link to="/user-cart" className="nav-link navbar-link">
                  <i className="fa fa-shopping-cart cart text-white" />{" "}
                  <span className="text-white cart-length">
                    ({cartProducts.length})
                  </span>
                </Link>
              </li>
              <SignedInUserBar loggedUser={loggedUser} />
            </ul>
          </div>
        </div>
      </nav>
      <LoginModal show={showLoginModal} handleModal={handleModal} />
      <SignUpModal show={showSignUpModal} handleModal={handleModal} />
    </>
  );
}

export default Navbar;
