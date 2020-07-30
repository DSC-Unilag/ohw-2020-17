import React from "react";
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
  useUserDispatch,
  signOut,
} from "../../../contexts/";
import style from "./style.module.css";
import { withRouter } from "react-router-dom";

function Header(props) {
  var { isPermanent } = useLayoutState();
  var userDispatch = useUserDispatch();
  var layoutDispatch = useLayoutDispatch();

  return (
    <header className={`${style.dashboardHeader} shadow`}>
      <div className={`${style.container} container`}>
        <div>
          <h3>LoanReq</h3>
        </div>
        <div>
          {!isPermanent && (
            <button
              className={`${style.toggle_btn} btn `}
              onClick={() => toggleSidebar(layoutDispatch)}
            >
              <i className="fa fa-bars"></i>
            </button>
          )}
          <button
            className="btn"
            onClick={() => signOut(userDispatch, props.history)}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </header>
  );
}
export const DashboardHeader = withRouter(Header);
