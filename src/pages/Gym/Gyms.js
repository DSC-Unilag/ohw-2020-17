import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeLayout } from "../../component/Layout";
import {Details} from "./Details";
import {Listing} from "./Listing";
import "./index.css";
export function Gyms({match}) {
  return (
    <HomeLayout> 
       <Switch>
           <Route path="/listing" exact component={Listing} />
           <Route path={`${match.path}/:id`} component={Details} />
        </Switch> 
    </HomeLayout>
  );
}


