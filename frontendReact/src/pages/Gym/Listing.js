import React, { useContext, useState, useEffect } from "react";
import { GymContext } from "../../contexts/gymContext";
import FilterBar from "./component/FilterBar";
import GymList from "../../component/GymList";
import { Spinner } from "../../component/Spinner/";
function Listing({match}) {
  const { Gyms, loading, error } = useContext(GymContext);
  const [filters, setFilter] = useState(Gyms);
  useEffect(() => {
    setFilter(Gyms);
    //eslint-disable-next-line
  }, [Gyms]);

  const DisplayElement = () => {
    console.log(error);
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return (
        <div className="not_found">
          <h2>
            <i className="fa fa-wifi"></i>
          </h2>
          <p>{error}</p>
        </div>
      );
    }
    if (filters && filters.length === 0) {
      return (
        <div className="not_found">
          <h2>
            <i className="fa fa-exclamation-triangle"></i>
          </h2>
          <p> No Gym was found</p>
        </div>
      );
    }
    return <GymList gyms={filters} match={match} />;
  };
  return (
    <>
      <div className="listing-wrapper">
        <FilterBar setFilter={setFilter} gyms={Gyms} />
        <div className="result">
          <div className="sort-item">
            <p>{filters ? filters.length : 0} items</p>
            <p>
              <i className="fa fa-sort"></i>
            </p>
          </div>
          <div className="breadcrump">
            <p>
              Shomolu <i className="fa fa-times"></i>
            </p>
            <p>
              Martial <i className="fa fa-times"></i>
            </p>
            <p>
              PortHacourt <i className="fa fa-times"></i>
            </p>
            <p>
              Lara <i className="fa fa-times"></i>
            </p>
          </div>
          <div className="gym-panel">{DisplayElement()}</div>
        </div>
      </div>
    </>
  );
}

export default Listing;
