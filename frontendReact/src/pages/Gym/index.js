import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeLayout } from "../../component/Layout";
import Details from "./Details/Details";
import Listings from "./Listing";
import "./index.css";
function Gyms({match}) {
  console.log(match.path)
  return (
    <HomeLayout> 
       <Switch>
           <Route path="/listing" exact component={Listings} />
           <Route path={`${match.path}/:id`} component={Details} />
        </Switch> 
    </HomeLayout>
  );
}

export default Gyms;
