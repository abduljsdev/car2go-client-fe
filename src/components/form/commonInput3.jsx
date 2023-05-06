import React from "react";
import { useField } from "formik";
import "./form.css";


export const CommonInput3 = ({ label, fieldRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input className="CommonInput-3" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className=" error-1">{meta.error}</div>
            ) : null}
        </>
    );
};