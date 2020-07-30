import React from "react";
import "./mainHeader.css";
import { Link } from "react-router-dom";
import { useUserState } from "../../../contexts";
export function MainHeader() {
  const {
    user: { username },
  } = useUserState();
  return (
    <header className="header header_white">
      <div className="header_logo">
        <Link to="/">
          <img src="/images/logos/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="header_nav">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/listing">Listings</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="rightMenu">
          <Link to="/listing" className="btnPrimary">
            <i className="fa fa-plus"></i> List your Gym
          </Link>
          {username ? (
            <h3
              style={{
                display: "inline",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {username}
            </h3>
          ) : (
            <Link to="/login" className="login-btn">
              <i className="fa fa-user"></i>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
