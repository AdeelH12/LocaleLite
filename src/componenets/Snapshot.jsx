import React from "react";

function Snapshot(props) {
  return (
    <>
      {props.country && props.country.name && props.countryCode && (
        <h1 className="country-heading">
          <span className="code">{props.countryCode}</span>
          {props.country.name.common}
        </h1>
      )}

      {props.holiday ? (
        <h2 className="holiday">Today's Holiday: {props.holiday}</h2>
      ) : (
        <h2 className="holiday none">No holiday today</h2>
      )}
    </>
  );
}

export default Snapshot;
