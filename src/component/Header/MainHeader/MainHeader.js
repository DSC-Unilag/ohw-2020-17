import React  from "react";
import "./mainHeader.css";
import { Link } from "react-router-dom";
import { useUserState } from "../../../contexts";
export function MainHeader() {
 
  const openNav=()=>{
    document.querySelector(".nav-mobile").classList.add('active')
  }
  const closeNav=()=>{
    document.querySelector(".nav-mobile").classList.remove('active')
  }

 
  const {
    user: { username },
  } = useUserState();
  return (
    <>
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
             <Link to="/app" >{username}</Link>
            </h3>
          ) : (
            <Link to="/login" className="login-btn">
              <i className="fa fa-user"></i>
            </Link>
          )}
           <span className="menu-open" onClick={openNav} ><i className="fa fa-bars"></i></span>
        </div>
      </div>
    </header>
     <div className="nav-mobile-container">
     <nav className="nav-mobile">
         <div className="menu-close">
             <span onClick={closeNav}><i className="fa fa-times"></i></span>
         </div>
         <div className="logo-nav">
             <img src="/images/logos/logowhite.jpg" alt="logo" />
         </div>
         <ul>
             <li><a href="/">Home</a></li>
             <li><a href="/about">About</a></li>
             <li><a href="/listing">Listings</a></li>
             <li><a href="/contact">Contact</a></li>
         </ul>
     </nav>
 </div>
 </>
  );
}
