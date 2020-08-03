import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import { useLayoutState } from "../../contexts/";
function SideBar(location) {
  function onClick(e, item) {}
  const [navigations] = useState([
    { name: "home", label: "Home", link: "/app/dashboard", icon: "fa fa-home" },

    {
      name: "profile",
      label: "profile",
      link: "/app/profile",
      icon: "fa fa-user",
    },

    {
      name: "bookings",
      label: "bookings",
      link: "/app/bookings",
      icon: "fa fa-table",
    },

    {
      name: "Loan Requests",
      label: "Loan Requests",
      icon: "fa fa-money-bill-wave",
      link: "/app/loanrequest",
      subitems: [
        { name: "Today", label: "Today", link: "/birthdays/today", onClick },
        "divider",
        {
          name: "ThisWeek",
          label: "This Week",
          link: "/dashboard/birthdays/thisweek",
          onclick,
        },
        "divider",
        {
          name: "Thismonth",
          label: "This Month",
          link: "/dashboard/birthdays/thismonth",
          onClick,
        },
        "divider",
        {
          name: "sendGreetings",
          label: "SendGreetings",
          link: "/dashboard/birthdays/SendGreetings",
          onClick,
        },
      ],
    },
    {
      name: "Notification",
      label: "Notification",
      link: "/app/notification",
      icon: "fa fa-bell",
    },
    {
      name: "Settings",
      label: "Settings",
      link: "/app/Settings",
      icon: "fa fa-cogs",
    },
    {
      name: "gyms",
      label: "gyms",
      link: "/app/gyms",
      icon: "fa fa-cogs",
    },
  ]);

  // global
  var { isMobileSidebarNotOpened, isPermanent } = useLayoutState();
  const isMobile = !isPermanent;
  // local
  // isMobile is used to check if device is in mobile state or desktop state
  // true for desktop and false for mobile
  // if the device is not in desktop(it is in mobile) the sidebaris set to close
  // toggle button should open the sidebar when it is needed
  return (
      
    <div
      className={`${styles.sidebar} ${
        isMobile && isMobileSidebarNotOpened ? styles.close : styles.open
      }`}
    >
      <div className={`${styles.title}`}>
        <img className="logo" src="/images/logos/logowhite.jpg" alt="logo" />
        <h2>Gyms.ng</h2>
      </div>
      <nav>
        <ul className="navItem">
          {navigations.map((item, index) => (
            <React.Fragment key={`${SidebarItem.name}${index}`}>
              {item === "divider" ? (
                <span className="divider"></span>
              ) : (
                <SidebarItem item={item} location={location} />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default withRouter(SideBar);
