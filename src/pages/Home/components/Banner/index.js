import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <section className="banner">
      <div className="banner_info">
        <div className="banner_text title">
          <h2>
            Find And Book Gymns In Nigeria{" "}
            <img
              style={{ width: "auto", height: "100%" }}
              src="/images/naija.jpg"
              alt="nigeria flag"
            />
          </h2>
          <p>
            search through thousands of gymns and fitness centres in nigeria{" "}
          </p>
        </div>
      </div>

      <div className="banner_form">
        <form className="form">
          <input type="text" placeholder="search for gyms" />
          <div className="select_control">
            <select>
              <option>select fitness option</option>
            </select>
          </div>
          <div className="select_control">
            <select>
              <option>choose location</option>
            </select>
          </div>
          <div className="btnControl">
            <button type="submit">Explore</button>
          </div>
        </form>
      </div>
      <div className="bannerGymCategories">
        <ul className="categoriesContainer">
          <li>
            <Link to="#">
              <img src="/images/categories/weightSmall.png" alt="gyms" />
              Gyms
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="/images/categories/martial.png" alt="martial" />
              martial
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="/images/categories/dietSmall.png" alt="diet" />
              diet
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="/images/categories/yogaSmall.png" alt="yoga" />
              yoga
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
