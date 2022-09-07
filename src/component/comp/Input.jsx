import { useField } from "formik";
import React, { Fragment } from "react";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <div className="inputgroup">
        <label htmlFor={props.id}>{label}</label>
        <input
          className={meta.touched && meta.error && "error"}
          {...field}
          {...props}
        />
        {meta.touched && meta.error && (
          <small className={"error"}>{meta.error}</small>
        )}
      </div>
    </Fragment>
  );
};

export default Input;
