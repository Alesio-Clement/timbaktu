import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context";
import logo from "../../assets/img/logo.png";

import "./navbar.css";

const Navbar = () => {
  const {
    openSidebar,
    isSidebar,
    closeSidebar,
  } = useGlobalContext();

  return (
    <header className="header py-2">
      <div
        className={`header-backdrop ${isSidebar ? "active" : null}`}
        onClick={closeSidebar}
      ></div>
      <nav className="navbar p-0">
        <div className="container d-flex justify-content-between ">
          <div className="navbar-brand">
            <Link to="/" className=" text-uppercase fs-3 fw-bold">
              <img className="logo" src={logo} alt="banner img" />
            </Link>
          </div>
          <button
            onClick={openSidebar}
            type="button"
            className="navbar-togglre d-lg-none fs-1"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div
            className={`navbar-nav-container py-3 py-lg-0 ${
              isSidebar ? "active" : null
            } `}
          >
            <button
              className="header-close-btn d-lg-none theme-bg fs-3 rounded-1 mx-3 mx-lg-0 mb-3 mb-lg-0 "
              onClick={closeSidebar}
              type="button"
            >
              <i className="fa fa-times"></i>
            </button>
            <ul className="navbar-nav d-flex flex-lg-row flex-column align-lg-items-center fs-6 fw-bold">
              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link  px-3 px-lg-0"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link px-3 px-lg-0"
                  to="/courses"
                >
                  Our Courses
                </Link>
              </li>

              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link px-3 px-lg-0"
                  to="/about"
                >
                 About us
                </Link>
              </li>

          

              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link px-3 px-lg-0"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>

              <li className="nav-item theme-btn  ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link px-1 py-1 my-0 px-lg-0"
                  to="/SignUp"
                >
                  Join Now
                </Link>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
