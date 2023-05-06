import React from "react";
import "./bookingForm.css"

import { useField } from "formik";

export const CommonInput = ({ label, fieldRequired, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-1">
        <label htmlFor={props.id || props.name}>
          {label}
          <span className="error">{fieldRequired}</span>
        </label>
      </div>
      <input className="w-100 booking-form" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className=" error">{meta.error}</div>
      ) : null}
    </>
  );
};
