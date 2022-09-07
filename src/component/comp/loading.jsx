import React, { Fragment } from "react";

const loading = (props) => {
  return (
    <Fragment>
      <div className="loading">
        <div
          className="load"
          style={{
            width: `${props.width ? props.width : ""}rem`,
            height: `${props.width ? props.width : ""}rem`,
            borderWidth: `${props.borderWidth ? props.borderWidth : ""}rem`,
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default loading;
