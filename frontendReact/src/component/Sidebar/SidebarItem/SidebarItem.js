import React from "react";
import { Link } from "react-router-dom";
import "./SidebarItem.css";
function SidebarItem({ item, location }) {
  const { label, link, icon, subitems } = item;
  let linkClass = "normal";
  if (location) {
    const { pathname } = location.location;
    var isLinkActive =
      link && (pathname === link || pathname.indexOf(link) !== -1);
    linkClass = isLinkActive ? "active" : "normal";
  }
  return (
    <>
      <Link to={link} className="link">
        <li>
          <div>
            <span className={`sidebar-item-text ${linkClass}`}>
              {icon && <i className={icon}></i>}
              {label}
            </span>
          </div>
        </li>
      </Link>
      {Array.isArray(subitems) ? (
        <ul className="navitem subitem">
          {subitems.map((item, index) => (
            <React.Fragment key={`${SidebarItem.name}${index}`}>
              {item === "divider" ? (
                <span className="divider"></span>
              ) : (
                <SidebarItem item={item} />
              )}
            </React.Fragment>
          ))}
        </ul>
      ) : null}
    </>
  );
}
export default SidebarItem;
