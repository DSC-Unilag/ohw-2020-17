import React, { useContext } from "react";
import { GymContext } from "../../../contexts/gymContext";
import { Redirect } from "react-router-dom";

function Details(props) {
  const { Gyms } = useContext(GymContext);
  const GymId = props.match.params.id;
  const gym = Gyms ? Gyms.find((gym) => gym._id === GymId) : {};
  console.log(Gyms);
  if (!GymId) {
    return <Redirect to="/" />;
  } else if (gym) {
    return (
      <div className="title">
        <div className="banner"></div>
        <h2>{gym.name}</h2>
      </div>
    );
  } else {
    return (
      <div className="title">
        <h2>"404 gym not found</h2>
      </div>
    );
  }
}

export default Details;
