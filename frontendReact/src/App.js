import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import { DashboardLayout } from "./component/Layout";
import Home from "./pages/Home";
import { useUserState } from "./contexts/";

import Gyms from "./pages/Gym";
function App() {
  const { isAuthenticated } = useUserState();
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route
        exact
        path="/app"
        render={() => <Redirect to="/app/dashboard" />}
      />

      <Route path="/listing" component={Gyms} />
      <ProtectedRoute path="/app" component={DashboardLayout} />
      <PublicRoute path="/login" exact component={Login} />
      {/* <Route
        render={() => (
          <div className="title">
            <h1>Oops 404 not found</h1>
          </div>
        )}
      /> */}
    </Router>
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
