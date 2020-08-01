import React from "react";

function PageTitle({ title, button }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontWeight: 700 }}>{title}</h1>
      <button className="btn btn-general">{button}</button>
    </div>
  );
}
export default PageTitle;
