import React from "react";
import styles from "./Grid.module.css";

function Grid({ children, align, direction }) {
  if (typeof direction !== "string") {
    direction = "row";
  }
  const Gridstyle = {
    alignItems: align ? align : "stretch",
    alignContent: align || "stretch",
    flexDirection: direction,
  };
  return (
    <div className={styles.grid} style={Gridstyle}>
      {children}
    </div>
  );
}
function GridItem(props) {
  const {
    children,
    shadow,
    border,
    borderRadius,
    bcolor,
    auto,
    fitContent,
  } = props;
  const colorSchema = {
    warning: "red",
    info: "blue",
    success: "green",
  };
  const gridItemStyle = {
    boxShadow: shadow && "0 .15rem 1.75rem 0 rgba(58,59,69,.15)",
    borderLeft: border && "3px solid",
    borderRadius: borderRadius ? borderRadius : "none",
    borderColor: colorSchema[bcolor] || colorSchema.info,
    flex: auto && "auto",
    maxWidth: fitContent ? "fit-content" : "initial",
  };

  return (
    <div style={gridItemStyle} className={styles.grid_item}>
      {children}
    </div>
  );
}
export { Grid, GridItem };
