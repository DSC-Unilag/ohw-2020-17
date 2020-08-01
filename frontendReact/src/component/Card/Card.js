import React from "react";
const colorSchema = {
  warning: "red",
  info: "blue",
  success: "green",
  general: "#f15e74c9",
  white: "#fff",
  black: "#000",
};
export default function Card({ children, shadow }) {
  const style = {
    boxShadow: shadow && "0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)",
  };
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}

export const CardHead = ({ title, tcolor }) => {
  let color = colorSchema["general"];
  if (colorSchema[tcolor]) {
    color = colorSchema[tcolor];
  }
  let cardHeadStyle = {
    padding: ".75rem .5rem",
    marginBottom: "0",
    backgroundColor: "#f8f9fc",
    borderBottom: "1px solid #e3e6f0",
    color,
  };
  return (
    <div className="card-head" style={cardHeadStyle}>
      <h1 style={{ fontWeight: 700 }}>{title}</h1>
    </div>
  );
};

CardHead.defaultProps = {
  title: "Default Header",
};
