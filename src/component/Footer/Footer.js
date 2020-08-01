import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <h1>Gyms.ng</h1>
          <p>We bring your gym centres close to you</p>
          <img src="/images/logos/logowhite.jpg" alt="logo" />
        </div>
        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/gyms">
              <li>Listings</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/Blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="footer-items">
          <h3>Categories</h3>
          <div className="border1"></div>
          <ul>
            <Link to="/gyms/?category=gym">
              <li>Gymn</li>
            </Link>
            <Link to="/gyms/?category=yoga">
              <li>Yoga</li>
            </Link>
            <Link to="/gyms/?category=martial">
              <li>Martial</li>
            </Link>
            <Link to="/gyms/?category=dance">
              <li>Dance</li>
            </Link>
          </ul>
        </div>

        <div className="footer-items">
          <h3>Contact us</h3>
          <div className="border1"></div>
          <ul>
            <li>
              <i className="fa fa-map-marker-alt" aria-hidden="true"></i>N0 12
              esanogbogun street
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>+23407014239218
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              Samson@gmail.com
            </li>
          </ul>

          <div className="social-media">
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-google-plus-square"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">Copyright &copy; Gyms.ng 2020.</div>
    </section>
  );
}

export default Footer;
