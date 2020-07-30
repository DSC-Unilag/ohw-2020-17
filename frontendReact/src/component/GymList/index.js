import React from "react";
import GymItem from "./GymItem/GymItem";
import "./index.css";

function Gym({ gyms }) {
  return (
    <>
      <div className="gymsWrapper">
        <div className="container-div">
          {gyms &&
            gyms.map((gym, index) => (
              <GymItem key={`${gym.name}@_${gym._id}`} {...gym} />
            ))}
        </div>
      </div>
    </>
  );
}
export default Gym;
