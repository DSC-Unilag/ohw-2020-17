import React from "react";
import { HomeLayout } from "../Layout";
import "./index.css";
export const NotFound = () => (
  <HomeLayout>
<div className="notf">
<p className="oop">OOPS!</p>
  <h1>404</h1>
  <p>Page not found</p>
  <div className="buttons-con">
    <div className="action-link-wrap">
      <a href ='/' onclick="history.back(-1)" className=" link-back-button btn">Go Back</a>
      <a href="/" className=" btn">Go to Home Page</a>
    </div>
  </div>
</div>

  </HomeLayout>
);
