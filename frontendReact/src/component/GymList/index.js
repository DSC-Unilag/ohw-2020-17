import React from "react";
import GymItem from "./GymItem/GymItem";
import "./index.css";

function Gym({ gyms, match }) {
  return (
    <>
      <div className="gymsWrapper">
        <div className="container-div">
          {gyms &&
            gyms.map((gym, index) => (
              <GymItem key={`${gym.name}@_${gym._id}`} {...gym} match={match}/>
            ))}
        </div>
      </div>
    </>
  );
}
export default Gym;
