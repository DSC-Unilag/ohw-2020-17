import React from "react";
function Select({ options, name, onChange, valid, value }) {
  return (
    <select
      className=""
      style={{ color: "green" }}
      name={name}
      onChange={onChange}
      value={value}
    >
      {options
        ? options.map(({ value, display }, index) => (
            <option value={value} key={`${value}${index}`}>
              {display}
            </option>
          ))
        : null}
    </select>
  );
}

export default Select;
