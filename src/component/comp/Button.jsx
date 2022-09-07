import React, { Fragment } from "react";

const Button = (props) => {
  return (
    <Fragment>
      <div className="inputgroup mr-t-2">
        <button type="submit" className={`btn ${props.class}`}>
          {!props.Reload ? <>Sign Up</> : props.Loading}
        </button>
      </div>
    </Fragment>
  );
};

export default Button;
