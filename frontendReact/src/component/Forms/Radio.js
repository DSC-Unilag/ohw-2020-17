import React from "react";
function RadioGroup({ options, name, onChange, valid }) {
  return options
    ? options.map(({ value, display }, index) => (
        <div className="" key={`value${index}`} style={{ color: "green" }}>
          <input
            type="radio"
            name={name}
            value={value}
            onChange={(event) => onChange(event)}
          />
          <label>{display}</label>
        </div>
      ))
    : null;
}

export default RadioGroup;
