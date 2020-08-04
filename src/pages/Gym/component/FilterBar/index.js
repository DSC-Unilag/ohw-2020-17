import React, { useState, useEffect } from "react";
import "./FilterBar.css";
function FilterBar({ setFilter, gyms }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [categories] = useState([]);
  const handleEntries = () => {
    
    setFilter((initialData) => {
      const result = gyms.filter((gym) => {
        if (
          gym.location.toLowerCase().includes(query.toLowerCase()) ||
          gym.name.toLowerCase().includes(query.toLowerCase()) 
         
        ) {
          return true;
        }
        return false;
      });

      return result;
    });
  };
  useEffect(() => {
    handleEntries();
    //eslint-disable-next-line
  }, [query, location, categories]);
  return (
    <aside className="filter_bar">
      <div className="filter">
        <div className="filter-title">
          <h4>
            <i className="fas fa-filter"></i> Filter
          </h4>
        </div>
        <div className="filter-search">
          <i className="fa fa-search"></i>
          <input
            name="search"
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search by categories, name"
          />
        </div>
        <div className="filter-location">
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
        </div>
        <div className="fitness-option">
          <h5>Fitness Option</h5>
          <div className="checkbox-control">
            <input type="checkbox" id="gyms_check" />
            <label htmlFor="gyms_check">Gym</label>
          </div>
          <div className="checkbox-control">
            <input type="checkbox" id="yoga_check" />
            <label htmlFor="yoga_check">Yoga</label>
          </div>
          <div className="checkbox-control">
            <input type="checkbox" id="martial_check" />
            <label htmlFor="martial_check">Martial</label>
          </div>
          <div className="checkbox-control">
            <input type="checkbox" id="diet_check" />
            <label htmlFor="diet_check">Diet</label>
          </div>
        </div>
        <div className="select_control">
          <select>
            <option>choose location</option>
          </select>
        </div>
      </div>
    </aside>
  );
}

export default FilterBar;
