import React from "react";

export function FormRow({ children }) {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-5px",
    marginRleft: "-5px",
  };
  return <div style={styles}>{children}</div>;
}
