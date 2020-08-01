import React from "react";
export default function Gravater({ src }) {
  return (
    <div
      style={{
        maxWidth: 150,
        minWidth: "50%",
        maxHeight: "70%",
        borderRadius: "100%",
        background: "orange",
        display: "flex",
      }}
    >
      <img src={src} style={{}} alt="user-gravater" />
    </div>
  );
}
