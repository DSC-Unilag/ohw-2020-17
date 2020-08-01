import React, { useRef, useEffect } from "react";
import "./TextField.css";
export function TextField(props) {
  const {
    valid,
    touched,
    label,
    placeholder,
    type,
    name,
    onChange,
    full,
    value,
    defaultValue,
    icon,
  } = props;
  let inputClass = "input-control";
  if (touched && !valid) {
    inputClass = "input-control input-error";
  }
  const InputRef = useRef();
  const groupRef = useRef();
  useEffect(() => {
    let usedicon = icon ? true : false;
    InputRef.current.classList.toggle("light", !usedicon);
    groupRef.current.classList.toggle("light", usedicon);
  }, [icon]);
  return (
    <>
      <div
        className="form-group"
        style={{
          flexBasis: full && "100%",
          display: icon ? "flex" : "initial",
        }}
        ref={groupRef}
      >
        {label && (
          <label htmlFor={name}>
            <strong>{label}</strong>
          </label>
        )}
        {icon && <i className={icon}></i>}
        <input
          className={inputClass}
          ref={InputRef}
          {...{ name, type, placeholder, onChange, value, defaultValue }}
          style={{ borderRadius: icon ? "0 0.5rem 0.5rem 0" : "0.5rem" }}
        />
      </div>
      <label
        style={{ color: "red", textAlign: "left", alignSelf: "flex-start" }}
      >
        {touched && !valid && "something is wrong"}
      </label>
    </>
  );
}
