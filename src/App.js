import React from "react";
import {  HashRouter, Route, Redirect,Switch } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import { DashboardLayout } from "./component/Layout";
import Home from "./pages/Home";
import { useUserState } from "./contexts/";

import Gyms from "./pages/Gym";
function App() {
  const { isAuthenticated } = useUserState();
  return (
   
    <>
    <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        exact
        path="/app"
        render={() => <Redirect to="/app/dashboard" />}
      />
       <ProtectedRoute path="/app" component={DashboardLayout} />
       <PublicRoute path="/login" exact component={Login} />
       <Route path="/listing" component={Gyms} />
       </Switch>
    </HashRouter>
</>
  
  );
  function ProtectedRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            React.createElement(Component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }
  function PublicRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/app",
                state: {
                  from: props.location,
                },
              }}
            />
          ) : (
            React.createElement(Component, props)
          )
        }
      />
    );
  }
}

export default App;
