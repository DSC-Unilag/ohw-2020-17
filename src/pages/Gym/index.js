import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeLayout } from "../../component/Layout";
import Details from "./Details/Details";
import Listings from "./Listing";
import "./index.css";
function Gyms(props) {
  return (
    <HomeLayout>
      <Router>
        <Switch>
          <Route path="/gyms/:id" component={Details} />
          <Listings />
        </Switch>
      </Router>
    </HomeLayout>
  );
}

export default Gyms;
