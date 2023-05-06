import React from "react";
import { useField } from "formik";
import "./form.css";


export const CommonInput1 = ({ label, fieldRequired, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-1 ">
        <label htmlFor={props.id || props.name}>
          {label}
          <span className="error">{fieldRequired}</span>
        </label>
      </div>
      <input className="CommonInput-1" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className=" error-1">{meta.error}</div>
      ) : null}
    </>
  );
};
