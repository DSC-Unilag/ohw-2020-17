import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Users from "../../pages/dashboard/Users";
import Profile from "../../pages/dashboard/Profile";
import { DashboardHeader } from "../Header";
import Sidebar from "../Sidebar/Sidebar";
import { content_wrapper } from  "../Sidebar/sidebar.module.css";
import { LayoutProvider } from "../../contexts";
function Layout() {
  return (
    <LayoutProvider>
      <div className="wrapper">
        <main className="main">
          <Sidebar />
          <div className={content_wrapper}>
            <DashboardHeader />
            <div className="container">
              <Switch>
                <Route path="/app/dashboard" component={Dashboard} />
                <Route path="/app/bookings" component={Users} />
                <Route path="/app/profile" component={Profile} />
                {/* <Route component={Dashboard} /> */}
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </LayoutProvider>
  );
}
export default withRouter(Layout);
