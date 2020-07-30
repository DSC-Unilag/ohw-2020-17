import React from "react";
import { Link } from "react-router-dom";
import "./GymItem.css";
export default function GymItem({ name, location, _id }) {
  return (
    <div className="item">
      <Link to={`/gyms/${_id}`}>
        <div className="item-image">
          <div className="item-rank">Top picked</div>
        </div>
      </Link>
      <div className="item-info">
        <Link to={`/gyms/${_id}`}>
          <div className="item-name">
            <h3>{name}</h3>
          </div>
        </Link>
        <div className="item-rating">
          <span className="star-ratings">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-alt"></i>
          </span>
          <h5 className="item-price">$50 - $70</h5>
        </div>
        <div className="item-contact">
          <span className="location">
            <i className="fa fa-map-marker-alt"></i>
            {location}
          </span>
          <span className="telephone">
            <i className="fa fa-phone-alt"></i>
            +2347042272413
          </span>
        </div>
      </div>
      <div className="item-flag">
        <div className="logofooter">
          <img src="/images/logos/logored.jpg" alt="logo" />
        </div>
        <div className="sitename">
          <h3>GYMS.NG</h3>
        </div>
      </div>
    </div>
  );
}
