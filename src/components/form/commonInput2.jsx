import React from "react";
import { useField } from "formik";
import './form.css'

export const CommonInput2 = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className="mb-1">
                <label htmlFor={props.id || props.name}>
                    {label}
                    <span className="error">{fieldRequired}</span>
                </label>
            </div>
            <input className="commonInput-2" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className=" error">{meta.error}</div>
            ) : null}
        </>
    );
};
