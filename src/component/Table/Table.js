import React from "react";
import "./Table.css";
function Table({ data, columns, type, striped, responsive }) {
  return (
    <div className="table table-responsive">
      <table className="table">
        <thead>
          <tr>
            {columns &&
              columns.map(({ title }, index) => (
                <th key={`${title}${index}`}>{title}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr key={`table${index}`}>
                {columns.map(({ field }) =>
                  user[field] ? (
                    <td key={`${user[field]} data`}>{user[field]}</td>
                  ) : null
                )}
              </tr>
            ))}
          <tr>
            {columns &&
              columns.map(({ title }, index) => (
                <th key={`${title}${index}`}>{title}</th>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
